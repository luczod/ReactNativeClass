import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native/types';

import { MethodEnum } from '../../../enums/methods.enum';
import { URL_USER } from '../../../shared/constants/urls';

import { useRequest } from '../../../shared/hooks/useRequest';
import { CreateUserType } from '../../../shared/types/createUserType';
import { MenuUrl } from '../../../shared/enums/MuneUrl.enum';
import { isValuesEmpty } from '../../../shared/functions/utils';
import { insertMaskInCpf, insertMaskInPhone } from '../../../shared/functions/utils/masks';

export function useCreateUser() {
  const [disable, setDisable] = useState<boolean>(true);
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request, loading } = useRequest();
  const [createUser, setCreateUser] = useState<CreateUserType>({
    confirmPassword: '',
    cpf: '',
    email: '',
    name: '',
    password: '',
    phone: '',
  });

  useEffect(() => {
    if (isValuesEmpty(createUser)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [createUser]);

  const handleCreateUser = async () => {
    const resultCreateUser = await request({
      url: URL_USER,
      method: MethodEnum.POST,
      body: createUser,
      message: 'Usuário cadastrado com sucesso!',
    });

    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: MenuUrl.LOGIN }],
      });
    }
  };

  const handleOnChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    setCreateUser((currentCreateUser) => ({
      ...currentCreateUser,
      [name]: event.nativeEvent.text,
    }));
  };

  return {
    createUser,
    loading,
    disable,
    handleOnChangeInput,
    handleCreateUser,
  };
}
