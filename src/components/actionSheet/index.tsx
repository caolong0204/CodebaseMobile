import { scale } from 'common/scale';
import { Divider } from 'components/divider';
import TextApp from 'components/textApp';
import React, { useImperativeHandle, useRef } from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import theme from 'themes/theme.style';

type ActionSheetProps = {
  style?: ViewStyle;
  headerStyle?: ViewStyle;
  txtHeaderStyle?: ViewStyle;
  bodyStyle?: ViewStyle;
  contentComponent: React.ReactNode;
  title?: string;
  diviceColor?: string;
  hasDevicerHeader?: boolean;
  diviceHeight?: number;
  headerComponent?: React.ReactNode;
};
function ActionSheet(
  {
    style,
    headerStyle,
    txtHeaderStyle,
    bodyStyle,
    contentComponent,
    title,
    hasDevicerHeader = true,
    diviceColor = theme.BORDER_INPUT,
    diviceHeight = 1,
    headerComponent,
  }: ActionSheetProps,
  ref: any,
) {
  const modalizeRef = useRef<Modalize>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      modalizeRef.current?.open();
    },
    close: () => {
      modalizeRef.current?.close();
    },
  }));

  return (
    <Portal>
      <Modalize
        adjustToContentHeight={true}
        handlePosition={'inside'}
        withOverlay={true}
        // alwaysOpen={30}
        threshold={scale(45)}
        ref={modalizeRef}>
        <View style={[styles.container, style]}>
          {headerComponent
            ? headerComponent
            : title && (
                <View style={[styles.headerContainer, headerStyle]}>
                  <TextApp style={txtHeaderStyle} preset="boldHeaderTxt">
                    {title}
                  </TextApp>
                </View>
              )}
          {hasDevicerHeader && (
            <Divider color={diviceColor} height={diviceHeight} />
          )}
          <View style={[styles.contentView, bodyStyle]}>
            {contentComponent}
          </View>
        </View>
      </Modalize>
    </Portal>
  );
}

export default React.forwardRef(ActionSheet);
const styles = StyleSheet.create({
  container: { minHeight: Dimensions.get('screen').height / 2 - scale(30) },
  headerContainer: {
    paddingTop: scale(26),
    paddingBottom: scale(16),
    justifyContent: 'center',
  },
  contentView: {
    paddingHorizontal: theme.PADDING_HORIZONTAL_SCREEN,
  },
});
