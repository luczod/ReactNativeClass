import { useState } from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import ConnectionAPI, {
  MethodType,
  connectionAPIPost,
} from '../functions/connection/connectionAPI';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';
import { useUserReducer } from '../../store/reducers/useReducer/useUserReducer';
import { MenuUrl } from '../enums/MuneUrl.enum';
import { setAuthorizatinToken } from '../functions/connection/auth';
import { URL_AUTH } from '../constants/urls';

interface requestProps<T> {
  url: string;
  method: MethodType;
  saveGlobal?: (object: T) => void;
  body?: unknown;
  message?: string;
}

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const request = async <T>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: requestProps<T>): Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await ConnectionAPI.call<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setModal({
            visible: true,
            title: 'Sucesso!',
            text: message,
          });
        }
        return result;
      })
      .catch((error: Error) => {
        setModal({
          visible: true,
          title: 'Erro',
          text: error.message,
        });
        return undefined;
      });

    setLoading(false);
    return returnObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);

    await connectionAPIPost<ReturnLogin>(URL_AUTH, body)
      .then((result) => {
        setAuthorizatinToken(result.accessToken);
        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      })
      .catch((err) => {
        console.log(err);
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
    request,
    authRequest,
    setErrorMessage,
  };
};
