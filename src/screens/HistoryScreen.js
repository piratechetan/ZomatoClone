import React from 'react'
import{View,Text} from 'react-native'
const HistoryScreen = () => {
    return (
        <View style={{flexDirection:'row',flex:1,backgroundColor:'#fff'}}>
        <Text style={{fontSize:22,margin:10,color:'#cb202d'}}>Favourite</Text>
        <Text style={{fontSize:22,margin:10,color:'grey'}}>History</Text>
        </View>
    )
}

export default HistoryScreen
