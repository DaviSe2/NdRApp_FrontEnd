import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import Logo from './src/components/Logo'
import Destinos from './src/pages/Destinos';
import Pacotes from './src/pages/Pacotes';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Destinos':
            iconName = 'map';
            break;
          case 'Pacotes':
            iconName = 'plane-ticket';
            break;
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#852E7C',
      tabBarInactiveTintColor: '#777',
    })}
    >
      <Tab.Screen name="Destinos" component={Destinos} options={{ headerShown: false }} />
      <Tab.Screen name="Pacotes" component={Pacotes} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
      />
      <Logo />
      <Stack.Navigator>
        <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
