import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainStack from '../Stack/MainStack';
import HistoryStack from '../Stack/HistoryStack';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createMaterialTopTabNavigator();


const BottomTab = () => {
    return (
       <Tab.Navigator 
       tabBarPosition="bottom"
       tabBarOptions={{
           activeTintColor: 'black',
        inactiveTintColor: 'gray',
          indicatorStyle:{backgroundColor:'#cb202d',top:0},
          showIcon:true,
          
          
       }}
       swipeEnabled={false}
       >
      <Tab.Screen name="Order" component={MainStack} options={{
          tabBarIcon: ({color}) => {
              return(
              <Feather name="shopping-bag" size={24} color={color}/>
          )}
      }}/>
      <Tab.Screen name="History" component={HistoryStack} options={{
          tabBarIcon: ({color}) => {
              return(
              <Feather name="file-text" size={24} color={color}/>
          )}
      }}/>
    </Tab.Navigator>
    )
}

export default BottomTab;
