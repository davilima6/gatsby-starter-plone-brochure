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
  height: 400px;
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

const Huge = styled.div`
  font-family: ${headerFontFamily.join(', ')};
  ${scale(2)};
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
        imgStyle={{ height: 400 }}
        fixed={node.image.childImageSharp.fixed}
      />
      <FixedContainerBackdrop />
      <FixedContainerText>
        <div className="d-flex flex-column align-items-center text-center w-100">
          <Huge>{node.title}</Huge>
          <Big>{node.description}</Big>
        </div>
      </FixedContainerText>
    </FixedContainer>
  );
};

// For inline-images, see: https://collective.github.io/gatsby-source-plone/tutorial/6_richtext_component/
const Document = ({ node }) => {
  return (
    <div className="d-flex flex-column text-center my-4">
      <Huge>{node.title}</Huge>
      {node.description ? (
        <Large className="mt-4">{node.description}</Large>
      ) : null}
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

const Card = ({ node }) => {
  return (
    <div className="d-flex flex-column flex-even my-4 px-4">
      <Large className="text-center text-md-left font-weight-bold">
        {node.title}
      </Large>
      {node.description ? (
        <div className="mt-4 text-center text-md-left">{node.description}</div>
      ) : null}
      {node.text && node.text.react ? (
        <div className="mt-4 text-center text-md-left">
          {deserialize(node.text.react, {
            components: {
              Link: () => null,
              Img: () => null,
            },
          })}
        </div>
      ) : null}
    </div>
  );
};

const MaybeFooter = styled.div`
  &:last-child {
    color: ${styles.gray200};
    background: ${styles.gray800};
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const Folder = ({ node }) => {
  return (
    <MaybeFooter className="d-flex flex-column flex-md-row">
      {(node.nodes || []).map(node => {
        switch (node._type) {
          case 'Document':
            return <Card node={node} />;
          default:
            return null;
        }
      })}
    </MaybeFooter>
  );
};

const Row = ({ node }) => {
  switch (node._type) {
    case 'Image':
      return <Image node={node} />;
    case 'Document':
      return <Document node={node} />;
    case 'Folder':
      return <Folder node={node} />;
    default:
      return null;
  }
};

const IndexPage = ({ data }) => (
  <Layout>
    {data.ploneSite.nodes.map(node => (
      <Row node={node} />
    ))}
  </Layout>
);

export default IndexPage;

// See: https://graphql.org/learn/queries/#inline-fragments

export const query = graphql`
  fragment Document on PloneDocument {
    _type
    title
    description
    text {
      react
    }
  }
  fragment Image on PloneImage {
    _type
    title
    description
    image {
      childImageSharp {
        fixed(width: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  query IndexPageQuery {
    ploneSite {
      nodes {
        ... on PloneFolder {
          _type
          title
          description
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
