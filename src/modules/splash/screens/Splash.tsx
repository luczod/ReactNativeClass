import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { MethodEnum } from '../../../enums/methods.enum';
import { URL_AUTH, URL_USER } from '../../../shared/constants/urls';

import { useRequest } from '../../../shared/hooks/useRequest';
import { ContainerSplash, ImagelogoSplash } from '../styles/splash.style';
import { MenuUrl } from '../../../shared/enums/MuneUrl.enum';
import { useUserReducer } from '../../../store/reducers/useReducer/useUserReducer';

const Splash = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { setUser } = useUserReducer();

  useEffect(() => {
    const verifyLogin = async () => {
      const returnUser = await request({
        url: URL_USER,
        method: MethodEnum.GET,
        saveGlobal: setUser,
      });

      if (returnUser) {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.LOGIN }],
        });
      }
    };

    verifyLogin();
  }, []);

  return (
    <ContainerSplash>
      <ImagelogoSplash
        resizeMode="contain"
        source={require('../../../../assets/images/logo.png')}
      />
    </ContainerSplash>
  );
};

export default Splash;
