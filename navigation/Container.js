import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Screens
import Homepage from './screens/Homepage';
import MyRecipes from './screens/MyRecipes';
import Kitchen from './screens/Kitchen';
import Groceries from './screens/Groceries';
import Browse from './screens/Browse';

const Tab = createBottomTabNavigator();

function Container() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Recipes') {
              iconName = focused
                ? 'egg-fried'
                : 'egg-fried';
            } else if (route.name === 'Kitchen') {
              iconName = focused
                ? 'fridge-outline'
                : 'fridge-outline';
            } else if (route.name === 'Groceries') {
              iconName = focused
                ? 'cart'
                : 'cart';
            } else if (route.name === 'Browse') {
              iconName = focused
                ? 'magnify'
                : 'magnify'
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Recipes" component={MyRecipes} />
        <Tab.Screen name="Kitchen" component={Kitchen} />
        <Tab.Screen name="Groceries" component={Groceries} />
        <Tab.Screen name="Browse" component={Browse} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Container;