import {DefaultTheme} from '@react-navigation/native';
import {colors} from '../../theme/colors';

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
      background: colors.bg.navigation
  }
};
