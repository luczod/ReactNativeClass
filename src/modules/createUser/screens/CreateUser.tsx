import { useEffect, useState } from 'react';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { ImageLogo } from '../../login/styles/login.style';
import { useCreateUser } from '../hooks/useCreateUser';
import { CreateUserContainer } from '../styles/createUser.style';

export function CreateUser() {
  const { createUser, disable, loading, handleOnChangeInput, handleCreateUser } = useCreateUser();
  return (
    <CreateUserContainer>
      <ImageLogo resizeMode="contain" source={require('../../../../assets/images/logo.png')} />
      <Input
        value={createUser.name}
        onChange={(event) => handleOnChangeInput(event, 'name')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Nome completo:"
      />
      <Input
        value={createUser.phone}
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Telefone:"
      />
      <Input
        value={createUser.email}
        onChange={(event) => handleOnChangeInput(event, 'email')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Email:"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="CPF:"
      />
      <Input
        value={createUser.password}
        onChange={(event) => handleOnChangeInput(event, 'password')}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        secureTextEntry
        title="Senha:"
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        margin="0px 0px 16px 0px"
        secureTextEntry
        placeholder="Digite"
        title="Confirmar senha:"
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
