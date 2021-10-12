import {NativeModules, Platform} from 'react-native';

export const getLocalization = (): string => {
  if (Platform.OS === 'ios') {
    return (
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    );
  } else {
    return NativeModules.I18nManager.localeIdentifier;
  }
};
