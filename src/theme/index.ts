import {colors, Colors} from './colors'
import {spaces} from './spaces'
import {sizes} from './sizes'

export type Theme = {
  colors: Colors;
  spaces: Array<string>;
  sizes: Array<string>;
};
export const theme: Theme = {colors, spaces, sizes}
