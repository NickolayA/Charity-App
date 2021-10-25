export type Colors = {
  icons: {
    [key: string]: string;
  };
  bg: {
    [key: string]: string;
  };
  border: {
    [key: string]: string;
  };
  text: {
    [key: string]: string;
  };
};

export const colors: Colors = {
	icons: {
		active: '#d6306a',
		primary: '#ffffff',
	},
	bg: {
		primary: '#d6306a',
		secondary: '#ffffff',
		transparent: 'transparent',
		black: '#000000',
		gray: '#f2f2f2',
		navigation: '#F6F7FA',
	},
	border: {
		primary: '#aeaeae',
	},
	text: {
		primary: '#ffffff',
		secondary: '#5b5b5b',
		error: '#d6306a',
		special: '#27bc64',
	},
}
