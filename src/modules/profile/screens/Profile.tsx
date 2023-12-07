import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import Button from '../../../shared/components/button/Button';
import { logout } from '../../../shared/functions/connection/auth';

function Profile() {
  const navigate = useNavigation<NavigationProp<ParamListBase>>();
  return <Button title="sair" onPress={() => logout(navigate)} />;
}

export default Profile;
