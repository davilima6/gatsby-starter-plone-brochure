// replace inline css/scss with links
// https://github.com/gatsbyjs/gatsby/issues/1526
export const onPreRenderHTML = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV === 'production') {
    getHeadComponents().forEach(el => {
      if (el.type === 'style') {
        el.type = 'link';
        el.props['href'] = el.props['data-href'];
        el.props['rel'] = 'stylesheet';
        el.props['type'] = 'text/css';
        delete el.props['data-href'];
        delete el.props['dangerouslySetInnerHTML'];
      }
    });
  }
};
