import { AUTHORIZATIN_KEY } from '../../constants/authorizationConst';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATIN_KEY);

export const setAuthorizatinToken = async (token: string) =>
  setItemStorage(AUTHORIZATIN_KEY, token);

export const getAuthorizatinToken = async () => getItemStorage(AUTHORIZATIN_KEY);
