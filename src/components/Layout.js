import { createElement } from 'react';
import { Helmet } from './Helmet';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return createElement(
    'div',
    {},
    [createElement(Helmet, {}, []), createElement(Header)].concat(children)
  );
};
