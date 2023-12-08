import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { AUTHORIZATIN_KEY } from '../../constants/authorizationConst';
import { MenuUrl } from '../../enums/MenuUrl.enum';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATIN_KEY);

export const setAuthorizatinToken = async (token: string) =>
  setItemStorage(AUTHORIZATIN_KEY, token);

export const getAuthorizationToken = async () => getItemStorage(AUTHORIZATIN_KEY);

export const logout = (navigate: NavigationProp<ParamListBase>) => {
  unsetAuthorizationToken();
  navigate.reset({
    index: 0,
    routes: [{ name: MenuUrl.LOGIN }],
  });
};
