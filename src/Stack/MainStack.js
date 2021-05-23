import React from 'react'
import {Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import  Entypo from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();
const MainStack = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerTitle:"Durga Colony,Rewari...",
        headerTitleAlign:'left',
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

export default MainStack
