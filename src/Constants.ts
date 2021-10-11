export enum RouteNames {
  Home = 'Home',
  Accounts = 'Accounts',
  Giving = 'Giving',
  Payments = 'Payments',
  Cards = 'Cards',
  Checking = 'Checking',
  Savings = 'Savings',
  SignIn = 'SignIn',
}

export enum FontFamilyVariants {
  Light = 'SFRounded-Light',
  Regular = 'SFRounded-Regular',
  Bold = 'SFRounded-Bold',
}

export enum AuthStates {
  AuthFail = 'authFail',
  Logging = 'logging',
  NoAuth = '',
}

export enum CardSourceTypes {
  Image,
  Video,
}

export enum CardTypes {
  AccountsOverviewCard,
  GoodnessCard,
}
