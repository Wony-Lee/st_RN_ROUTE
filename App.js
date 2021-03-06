/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import {Text, TouchableOpacity, View} from "react-native";
import HeaderLessScreen from "./screens/HeaderLessScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"} >
        <Stack.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            title:'홈',
            //header 블록에 대한 스타일
            headerStyle: {
              backgroundColor:'#29b6f6',
            },
            // header 의 텍스트, 버튼들 색상
            headerTintColor:'#ffffff',
            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            }
          }}
        />
        <Stack.Screen
          name={"Detail"}
          component={DetailScreen}
          options={{
            headerBackVisible:false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>
                  {children}
                </Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            )
          }}
        />
        <Stack.Screen
          name={"HeaderLess"}
          component={HeaderLessScreen}
          options={{
            headerShown:false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
