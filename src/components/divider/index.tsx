import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import theme from 'themes/theme.style';

import { DividerProps } from './type';

export const Divider = ({
  height = 1,
  color = theme.BORDER_NORMAL,
}: DividerProps) => {
  // style
  const divider = useMemo<ViewStyle>(
    () => ({
      backgroundColor: color,
      height,
      width: '100%',
    }),
    [color, height],
  );

  // render
  return <View style={[divider]} />;
};
