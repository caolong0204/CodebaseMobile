import { createRef } from 'react';

import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { RootNativeStackParamList } from './screenType';

export const navigationRef =
  createRef<NavigationContainerRef<RootNativeStackParamList>>();

export function navigate<RouteName extends keyof RootNativeStackParamList>(
  ...arg: undefined extends RootNativeStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootNativeStackParamList[RouteName]]
    : [screen: RouteName, params: RootNativeStackParamList[RouteName]]
) {
  navigationRef.current?.navigate(
    arg[0] as any,
    arg.length > 1 ? arg[1] : undefined,
  );
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack);
}

export function navigateAndSimpleReset(
  name: string,
  index = 0,
  params: any = {},
) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{ name, params }],
    }),
  );
}
/**
 * navigation with action replace
 * @param arg
 */
export function replaceNavigation<
  RouteName extends keyof RootNativeStackParamList,
>(
  ...arg: undefined extends RootNativeStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootNativeStackParamList[RouteName]]
    : [screen: RouteName, params: RootNativeStackParamList[RouteName]]
) {
  navigationRef.current?.dispatch(
    StackActions.replace(arg[0] as any, arg.length > 1 ? arg[1] : undefined),
  );
}
/**
 * navigation with action push
 * @param arg
 */
export function pushNavigation<
  RouteName extends keyof RootNativeStackParamList,
>(
  ...arg: undefined extends RootNativeStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootNativeStackParamList[RouteName]]
    : [screen: RouteName, params: RootNativeStackParamList[RouteName]]
) {
  navigationRef.current?.dispatch(
    StackActions.push(arg[0] as any, arg.length > 1 ? arg[1] : undefined),
  );
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute()?.name;
}
