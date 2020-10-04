const themes = {
  pink: {
    primary: '241, 201, 239',
    secondary: '114, 0, 107',
  },
  blue: {
    primary: '189, 225, 246',
    secondary: '0, 23, 42',
  },
  green: {
    primary: '229, 240, 217',
    secondary: '15, 41, 0',
  },
  whiteBlue: {
    primary: '246, 247, 248',
    secondary: '51, 101, 138',
  },
  whiteOrange: {
    primary: '246, 247, 248',
    secondary: '242, 100, 25',
  },
  whiteGreen: {
    primary: '246, 247, 248',
    secondary: '46, 196, 182',
  },
  whiteRed: {
    primary: '246, 247, 248',
    secondary: '255, 51, 102',
  },
  whiteBlack: {
    primary: '255, 255, 255',
    secondary: '0, 0, 0',
  },
  blackRed: {
    primary: '12, 15, 10',
    secondary: '255, 32, 110',
  },
  blackYellow: {
    primary: '12, 15, 10',
    secondary: '251, 255, 18',
  },
  blackMint: {
    primary: '12, 15, 10',
    secondary: '65, 234, 212',
  },
  blackWhite: {
    primary: '12, 15, 10',
    secondary: '255, 255, 255',
  },
};

export default Object.keys(themes).reduce((acc, theme) => {
  acc[theme] = {
    primary: `rgb(${themes[theme].primary})`,
    secondary: `rgb(${themes[theme].secondary})`,
    secondary15: `rgba(${themes[theme].secondary},0.15)`,
    secondary60: `rgba(${themes[theme].secondary},0.6)`,
  };
  return acc;
}, {});
