import { createElement } from 'react';
import { default as ReactHelmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export const Helmet = () => {
  const { site } = useStaticQuery(graphql`
    query HelmetQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return createElement(
    ReactHelmet,
    {
      title: site.siteMetadata.title,
    },
    []
  );
};
