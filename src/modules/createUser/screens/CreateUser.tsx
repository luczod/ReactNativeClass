import { TextInput } from 'react-native';
import { useRef } from 'react';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { ImageLogo } from '../../login/styles/login.style';
import { useCreateUser } from '../hooks/useCreateUser';
import { CreateUserContainer } from '../styles/createUser.style';

export function CreateUser() {
  const { createUser, disable, loading, handleOnChangeInput, handleCreateUser } = useCreateUser();
  const phoneInput = useRef<TextInput>(null);
  const emailInput = useRef<TextInput>(null);
  const cpfInput = useRef<TextInput>(null);
  const passwordInput = useRef<TextInput>(null);
  const confPasswordInput = useRef<TextInput>(null);

  return (
    <CreateUserContainer>
      <ImageLogo resizeMode="contain" source={require('../../../../assets/images/logo.png')} />
      <Input
        value={createUser.name}
        onChange={(event) => handleOnChangeInput(event, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="Digite seu nome"
        title="Nome completo:"
        onSubmitEditing={() => phoneInput?.current?.focus()}
      />
      <Input
        value={createUser.phone}
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="Digite seu telefone"
        mask="cellphone"
        title="Telefone:"
        ref={phoneInput}
        onSubmitEditing={() => emailInput?.current?.focus()}
        keyboardType="number-pad"
      />
      <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="Digite seu email"
        title="Email:"
        ref={emailInput}
        onSubmitEditing={() => cpfInput?.current?.focus()}
        keyboardType="email-address"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="Digite seu cpf"
        mask="cpf"
        title="CPF:"
        ref={cpfInput}
        onSubmitEditing={() => passwordInput?.current?.focus()}
        keyboardType="number-pad"
      />
      <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="Digite sua senha"
        secureTextEntry
        title="Senha:"
        ref={passwordInput}
        onSubmitEditing={() => confPasswordInput?.current?.focus()}
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        secureTextEntry
        placeholder="confirme a senha"
        title="Confirmar senha:"
        ref={confPasswordInput}
        onSubmitEditing={handleCreateUser}
      />
      <Button
        disabled={disable}
        onPress={handleCreateUser}
        loading={loading}
        margin="0px 0px 32px 0px"
        title="Criar usuário"
      />
    </CreateUserContainer>
  );
}
