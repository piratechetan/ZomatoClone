import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from '../screens/HistoryScreen';
import  Entypo from 'react-native-vector-icons/Entypo';
import {Image} from 'react-native'
const Stack = createStackNavigator();
const HistoryStack = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={HistoryScreen} options={{
        headerTitle:"Durga Colony,Rewari...",
        headerLeft:()=>{
          return(
          <Entypo name="location-pin" size={25}/>
          )
        },
        headerRight:()=>{
          return(
          <Image source={{uri:'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'}} style={{width:30,height:30,marginRight:10,borderRadius:20}}/>
          )
        }

      }}/>
      
    </Stack.Navigator>
    )
}

export default HistoryStack;