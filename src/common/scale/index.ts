import { Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT
    ? [SCREEN_WIDTH, SCREEN_HEIGHT]
    : [SCREEN_HEIGHT, SCREEN_WIDTH];

// base ratio design screen
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/** Scale from width screen
 * @param size: number of pixels to scale
 */
const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

/** Scale from height screen
 * @param size: number of pixels to scale
 */
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const paddingIOS = Platform.OS === 'ios' ? 'padding' : '';

export {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  paddingIOS,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
