import React from 'react';
import { TextProps } from 'react-native';
import { TextPresetNames } from './preset';

export type TextProperties = TextProps & {
  /**
   * Children of text
   * @default undefined
   */
  children: React.ReactNode;
  /**
   * Preset for text
   * @default default
   */
  preset?: TextPresetNames;
};
