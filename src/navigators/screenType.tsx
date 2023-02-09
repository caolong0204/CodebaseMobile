import { NativeStackScreenProps as RNStackScreenProps } from '@react-navigation/native-stack';
export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  SPLASH = 'SPLASH',
  LOGIN_SCREEN = 'LOGIN',

  AUTHORIZE = 'AUTHORIZE',
  MAIN_TAB = 'MAIN_TAB',
  HOME_SCREEN = 'HOME_SCREEN',
  ACCOUNT_SCREEN = 'ACCOUNT_SCREEN',
  SETTING_SCREEN = 'SETTING_SCREEN',
}
export type UnAuthorizeParamsList = {
  [APP_SCREEN.SPLASH]: undefined;
  [APP_SCREEN.LOGIN_SCREEN]: undefined;
};
export type AuthorizeParamsList = {
  [APP_SCREEN.MAIN_TAB]: undefined;
  [APP_SCREEN.HOME_SCREEN]: undefined;
  [APP_SCREEN.SETTING_SCREEN]: undefined;
  [APP_SCREEN.ACCOUNT_SCREEN]: undefined;
};
export type RootNativeStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
} & UnAuthorizeParamsList &
  AuthorizeParamsList;

export type StackScreenProps<T extends keyof RootNativeStackParamList> =
  RNStackScreenProps<RootNativeStackParamList, T>;
