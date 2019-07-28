import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import Img from 'gatsby-image';
import { deserialize } from 'react-serialize';
import { headerFontFamily, scale } from '../typography';
import styled from 'styled-components';
import styles from '../styles/index.module.scss';

const FixedContainer = styled.div`
  position: relative;
  height: 80vh;
  overflow: hidden;
  color: ${styles.white};
  &:nth-last-child(2) {
    margin-bottom: 0 !important;
  }
`;

const FixedContainerBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.4;
`;

const FixedContainerText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  align-content: center;
`;

const HUGE = styled.div`
  font-family: ${headerFontFamily.join(', ')};
  ${scale(2)};
`;

const Huge = styled.div`
  font-family: ${headerFontFamily.join(', ')};
  ${scale(1.75)};
  font-weight: bold;
`;

const Large = styled.div`
  ${scale(1)}
`;

const Big = styled.div`
  ${scale(0.5)}
`;

const Image = ({ node }) => {
  return (
    <FixedContainer className="mb-6">
      <Img
        className={styles.fullwidth}
        imgStyle={{ height: '80vh' }}
        fixed={node.image.childImageSharp.hero}
      />
      <FixedContainerBackdrop />
      <FixedContainerText>
        <div className="d-flex flex-column align-items-center text-center w-100">
          <HUGE>{node.title}</HUGE>
          <Big>{node.description}</Big>
        </div>
      </FixedContainerText>
    </FixedContainer>
  );
};

const ResolveImage = images => data => {
  let byPath = images.reduce(
    (map, image) => map.set(image._path, image),
    new Map()
  );
  if (byPath.get(data.src)) {
    let byResolution = Object.keys(byPath.get(data.src).image.scales).reduce(
      (map, scale) =>
        map.set(byPath.get(data.src).image.scales[scale].download, scale),
      new Map()
    );
    return (
      <Img
        className={data.className}
        style={
          data.className !== 'image-inline'
            ? {}
            : {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }
        }
        fixed={
          byPath.get(data.src).image.childImageSharp[
            byResolution.get(data['data-download']) || 'mini'
          ]
        }
      />
    );
  } else {
    return <img src={data.src} alt={data.alt} title={data.title} />;
  }
};

// For inline-images, see: https://collective.github.io/gatsby-source-plone/tutorial/6_richtext_component/
const Document = ({ node }) => {
  return (
    <div className="d-flex flex-column text-center my-4 mx-2">
      <Huge>{node.title}</Huge>
      {node.text && node.text.react ? (
        <Large className="mt-4">
          {deserialize(node.text.react, {
            components: {
              Link: () => null,
              Img: () => null,
            },
          })}
        </Large>
      ) : null}
    </div>
  );
};

const Card = ({ node, images }) => {
  return (
    <div className="d-flex flex-column flex-even my-4 px-4">
      <Large className="font-weight-bold">{node.title}</Large>
      {node.text && node.text.react ? (
        <div className="mt-4">
          {deserialize(node.text.react, {
            components: {
              Link: () => null,
              Img: ResolveImage(images),
            },
          })}
        </div>
      ) : null}
    </div>
  );
};

const CardContainer = styled.div`
  &:last-child {
    color: ${styles.gray200};
    background: ${styles.gray800};
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const Folder = ({ node, images }) => {
  return (
    <CardContainer className="d-flex flex-column flex-md-row">
      {(node.nodes || []).map(node => {
        switch (node._type) {
          case 'Document':
            return <Card node={node} images={images} />;
          default:
            return null;
        }
      })}
    </CardContainer>
  );
};

const Row = ({ node, images }) => {
  switch (node._type) {
    case 'Image':
      return <Image node={node} />;
    case 'Document':
      return <Document node={node} />;
    case 'Folder':
      return <Folder node={node} images={images} />;
    default:
      return null;
  }
};

const IndexPage = ({ data }) => (
  <Layout>
    {data.ploneSite.nodes.map(node => (
      <Row
        node={node}
        images={data.allPloneImage.edges.map(({ node }) => node)}
      />
    ))}
  </Layout>
);

export default IndexPage;

// See: https://graphql.org/learn/queries/#inline-fragments

export const query = graphql`
  fragment Document on PloneDocument {
    _type
    title
    text {
      react
    }
  }
  fragment Image on PloneImage {
    _type
    _path
    title
    description
    image {
      childImageSharp {
        hero: fixed(height: 1600) {
          ...GatsbyImageSharpFixed
        }
        listing: fixed(width: 16) {
          ...GatsbyImageSharpFixed
        }
        icon: fixed(width: 32) {
          ...GatsbyImageSharpFixed
        }
        tile: fixed(width: 64) {
          ...GatsbyImageSharpFixed
        }
        thumb: fixed(width: 128) {
          ...GatsbyImageSharpFixed
        }
        mini: fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
        preview: fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
        large: fixed(width: 768) {
          ...GatsbyImageSharpFixed
        }
      }
      scales {
        listing {
          download
        }
        icon {
          download
        }
        tile {
          download
        }
        thumb {
          download
        }
        mini {
          download
        }
        preview {
          download
        }
        large {
          download
        }
      }
    }
  }
  query IndexPageQuery {
    allPloneImage {
      edges {
        node {
          ...Image
        }
      }
    }
    ploneSite {
      nodes {
        ... on PloneFolder {
          _type
          title
          nodes {
            ... on PloneDocument {
              ...Document
            }
          }
        }
        ... on PloneDocument {
          ...Document
        }
        ... on PloneImage {
          ...Image
        }
      }
    }
  }
`;
