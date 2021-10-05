import React, {useState, useRef, useEffect} from 'react';
import {Animated, Keyboard, KeyboardEvent} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthStates} from '../../Constants';
import {
  SignInWrapper,
  SignInScreenLabelUnderscore,
  SignInScreenLabel,
  SignInFormWrapper,
  SignInLabel,
  RestorePasswordButton,
  AuthFailedMessage,
  SignInButtonsWrapper,
  AnimatedSignInButtonContainer,
  SignInButton,
  AdditionalLoginMethodsMessage,
  SignInButtonsSubWrapper,
  Spacer,
} from './styling';

interface SignInViewProps {
  onSignIn: (email: string, password: string) => void;
  authState: string;
}

export const SignInView: React.FC<SignInViewProps> = ({
  onSignIn,
  authState,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signInButtonTranslate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', (e: KeyboardEvent) => {
      Animated.timing(signInButtonTranslate, {
        toValue: -100,
        useNativeDriver: true,
      }).start();
    });
    Keyboard.addListener('keyboardDidHide', (e: KeyboardEvent) =>
      Animated.timing(signInButtonTranslate, {
        toValue: 0,
        useNativeDriver: true,
      }).start(),
    );
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <SignInWrapper>
      <SignInScreenLabelUnderscore>
        <SignInScreenLabel>Login</SignInScreenLabel>
      </SignInScreenLabelUnderscore>
      <SignInFormWrapper>
        <Input
          label={<SignInLabel>Email</SignInLabel>}
          placeholder="Your email address"
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          label={<SignInLabel>Password</SignInLabel>}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <RestorePasswordButton title="FORGOT PASSWORD" />
        {authState === AuthStates.AuthFail && (
          <AuthFailedMessage>Authentication failed</AuthFailedMessage>
        )}
      </SignInFormWrapper>
      <SignInButtonsWrapper>
        <AnimatedSignInButtonContainer
          style={{transform: [{translateY: signInButtonTranslate}]}}>
          <SignInButton
            loading={authState === AuthStates.Logging}
            title="LOGIN"
            onPress={() => onSignIn(email, password)}
          />
        </AnimatedSignInButtonContainer>
        <AdditionalLoginMethodsMessage>
          Lets test 2 ways to log in
        </AdditionalLoginMethodsMessage>
        <SignInButtonsSubWrapper>
          <SignInButton
            icon={<Icon name="finger-print-outline" size={20} />}
            title="Touch ID"
            disabled
          />
          <Spacer />
          <SignInButton
            icon={<Icon name="person-circle-outline" size={20} />}
            title="Face ID"
            disabled
          />
        </SignInButtonsSubWrapper>
      </SignInButtonsWrapper>
    </SignInWrapper>
  );
};
