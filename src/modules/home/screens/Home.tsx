import { View } from 'react-native';
import Text from '../../../shared/components/text/Text';
import Button from '../../../shared/components/button/Button';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { logout } from '../../../shared/functions/connection/auth';

export default function Home({ navigation }) {
  const navigationVar = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View>
      <Text>HOME</Text>
      <Button title="SAIR" onPress={() => logout(navigationVar)} />
    </View>
  );
}

// Static options are also supported!
