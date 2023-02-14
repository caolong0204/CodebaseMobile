import { scale } from 'common/scale';
import { StyleSheet } from 'react-native';
import theme from 'themes/theme.style';
import { FontDefault } from 'themes/typography';

export const textPresets = StyleSheet.create({
  default: {
    fontFamily: FontDefault.secondary,
    color: theme.TEXT_NORMAL,
    fontSize: scale(14),
  },
  boldTxt: {
    fontFamily: FontDefault.secondary,
    color: theme.TEXT_NORMAL,
    fontSize: scale(14),
    fontWeight: '700',
  },
  errorTxt: {
    fontFamily: FontDefault.secondary,
    color: theme.ERROR,
    fontSize: scale(14),
  },
  headerTxt: {
    fontFamily: FontDefault.secondary,
    color: theme.TEXT_NORMAL,
    fontSize: scale(16),
    fontWeight: '700',
    textAlign: 'center',
  },
  boldHeaderTxt: {
    fontFamily: FontDefault.secondary,
    color: theme.TEXT_BOLD,
    fontSize: scale(16),
    fontWeight: '700',
    textAlign: 'center',
  },
  errorHeaderTxt: {
    fontFamily: FontDefault.secondary,
    color: theme.ERROR,
    fontSize: scale(16),
    fontWeight: '700',
    textAlign: 'center',
  },

  buttonTxt: {
    fontFamily: FontDefault.secondary,
    color: theme.TEXT_BUTTON,
    fontWeight: '700',
    fontSize: scale(16),
    textAlign: 'center',
  },
  italicTxt: {
    fontFamily: FontDefault.secondaryItalic,
    color: theme.TEXT_NORMAL,
    fontSize: scale(14),
  },
  mediumBoldTxt: {
    fontFamily: FontDefault.secondary,
    color: theme.PRIMARY_COLOR,
    fontSize: scale(16),
    fontWeight: 'bold',
  },
});

export type TextPresetNames = keyof typeof textPresets;
