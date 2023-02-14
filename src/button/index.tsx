import { scale } from 'common/scale';
import TextApp from 'components/textApp';
import * as React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { ButtonPresets, ButtonPresetsName } from './preset';

type ButtonProps = TouchableOpacityProps & {
  style?: ViewStyle;
  styleTitle?: TextStyle;
  title: string;
  isLoading?: boolean;
  preset?: ButtonPresetsName;
  leftIcon?: React.ReactNode;
};

const Button = ({
  style,
  styleTitle,
  onPress,
  title = 'Title',
  isLoading = false,
  preset = 'default',
  leftIcon,
  ...rest
}: ButtonProps) => {
  const handlePress = (e: GestureResponderEvent) => {
    onPress && onPress(e);
  };

  let newStyle: any = {};
  if (Array.isArray(style)) {
    newStyle = [ButtonPresets[preset], ...style];
  } else {
    newStyle = [ButtonPresets[preset], style];
  }
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.viewBtn, newStyle]}
      onPress={handlePress}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.contentBtn}>
          {leftIcon}
          <TextApp style={styleTitle} preset="buttonTxt">
            {title}
          </TextApp>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  viewBtn: {
    minWidth: scale(200),
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  contentBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
