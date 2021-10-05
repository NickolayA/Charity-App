export type Colors = {
  icons: {
    [key: string]: string;
  },
  bg: {
      [key: string]: string;
  },
  border: {
    [key: string]: string
  },
  text: {
      [key: string]: string;
  }
};

export const colors: Colors = {
  icons: {
    active: '#d6306a',
    primary: '#ffffff',
  },
  bg: {
      primary: '#d6306a',
      secondary: '#ffffff',
      transparent: 'transparent'
  },
  border: {
    primary: '#aeaeae'
  },
  text: {
      primary: '#ffffff',
      secondary: '#5b5b5b',
      error: '#d6306a'
  }
};
