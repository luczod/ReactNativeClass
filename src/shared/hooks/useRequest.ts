import { useState } from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';
import { useUserReducer } from '../../store/reducers/useReducer/useUserReducer';
import { MenuUrl } from '../enums/MuneUrl.enum';

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    reset({
      index: 0,
      routes: [{ name: MenuUrl.HOME }],
    });
    await connectionAPIPost<ReturnLogin>('http://192.168.18.152:8080/auth', body)
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuário ou senha inválidos',
        });
      });
    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
