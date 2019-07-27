import Typography from 'typography';
import Parnassus from 'typography-theme-parnassus';

Parnassus.overrideThemeStyles = () => {
  return {
    a: {},
  };
};

const typography = new Typography(Parnassus);

export const { headerFontFamily } = Parnassus;
export const { scale } = typography;
export default typography;
