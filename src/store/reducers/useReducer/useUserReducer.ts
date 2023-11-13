import { useDispatch } from 'react-redux';

import { UserType } from '../../../shared/types/userType';
import { setUserAction } from '.';
import { useAppSelector } from '../../hooks';

export const useUserReducer = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.userReducer);

  const setUser = (currentUser: UserType) => {
    dispatch(setUserAction(currentUser));
  };

  return {
    user,
    setUser,
  };
};
