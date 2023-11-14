import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
import { useLogin } from '../hooks/useLogin';

export default function Login({ navigation }) {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="contain" source={require('../../../../assets/images/logo.png')} />
        <Input
          value={email}
          errorMessage={errorMessage}
          margin="0px 0px 8px 0px"
          placeholder="Digite seu email"
          title="Email:"
          onChange={handleOnChangeEmail}
        />
        <Input
          errorMessage={errorMessage}
          value={password}
          secureTextEntry
          placeholder="Digite sua senha"
          title="Senha:"
          onChange={handleOnChangePassword}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="ENTRAR"
          onPress={() => navigation.navigate('Home')}
        />
      </ContainerLogin>
    </View>
  );
}
