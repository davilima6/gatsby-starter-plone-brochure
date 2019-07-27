import { createElement } from 'react';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const BrandLinkWrapper = styled.span`
  line-height: 0;
  a {
    box-shadow: none;
  }
`;

export const Header = ({ className = '', children }) => {
  const { site, file } = useStaticQuery(graphql`
    query logoQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "logo.png" }) {
        publicURL
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);
  return createElement(
    'header',
    {
      className: [
        'd-flex flex-column flex-md-row align-items-center',
        'p-3 px-md-4',
        'bg-white',
        'border-bottom',
        className,
      ].join(' '),
    },
    [
      createElement(
        'span',
        {
          className: [
            'd-flex flex-row align-items-center',
            'font-weight-normal',
            'my-0 mr-md-auto',
          ].join(' '),
        },
        [
          createElement(BrandLinkWrapper, {}, [
            createElement(
              Link,
              {
                title: site.siteMetadata.title,
                to: '/',
              },
              [
                createElement(Img, {
                  fixed: file.childImageSharp.fixed,
                  loading: 'eager',
                }),
              ]
            ),
          ]),
        ]
      ),
      createElement(
        'nav',
        {
          className: ['d-none d-md-block', 'my-2 my-md-0 mr-md-3'].join(' '),
        },
        children
      ),
    ]
  );
};
