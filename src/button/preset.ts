import { scale } from 'common/scale';
import { StyleSheet } from 'react-native';
import theme from 'themes/theme.style';

export const ButtonPresets = StyleSheet.create({
  default: {
    backgroundColor: theme.SECONDARY_COLOR,
    minWidth: scale(250),
    minHeight: scale(45),
    paddingHorizontal: scale(10),
  },
  smallButton: {
    backgroundColor: theme.SECONDARY_COLOR,
    minWidth: scale(170),
    minHeight: scale(45),
    paddingHorizontal: scale(10),
  },
  mediumButton: {
    backgroundColor: theme.SECONDARY_COLOR,
    minWidth: scale(175),
    minHeight: scale(50),
    paddingHorizontal: scale(10),
  },
  mediumThinButton: {
    backgroundColor: theme.SECONDARY_COLOR,
    minWidth: scale(175),
    minHeight: scale(45),
    paddingHorizontal: scale(10),
  },
  longButton: {
    backgroundColor: theme.SECONDARY_COLOR,
    minWidth: scale(280),
    minHeight: scale(45),
    paddingHorizontal: scale(10),
  },
  longThinButton: {
    backgroundColor: theme.SECONDARY_COLOR,
    minWidth: scale(220),
    minHeight: scale(45),
    paddingHorizontal: scale(10),
  },
  minimizeButton: {
    backgroundColor: theme.SECONDARY_COLOR,
    minWidth: scale(94),
    minHeight: scale(32),
    paddingHorizontal: scale(10),
  },
});

export type ButtonPresetsName = keyof typeof ButtonPresets;
