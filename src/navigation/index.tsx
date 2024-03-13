import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen, SettingsScreen} from '../screens';

const Tab = createMaterialTopTabNavigator();

const DefaultNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default DefaultNavigator;
