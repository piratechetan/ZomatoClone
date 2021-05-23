import React from 'react'
import{View,Text,Image,ScrollView,TextInput, StyleSheet,FlatList, InteractionManager} from 'react-native'
import { interpolateNode } from 'react-native-reanimated'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
 {/*List Of Open Restaurants*/ }
const Restaudata = [
    {
        id:1,
        imageuri:'https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb',
        name:'Hotel Vaishno Mahal',
        cuisine:'North Indian,Chinese',
        rating:'3.9',
        Price:'100'
    },
    {
         id:2,
        imageuri:'https://www.gannett-cdn.com/presto/2020/02/17/USAT/80fa5afd-dd88-407d-aad1-9e25f8ad3b47-04_HOUSTON_Coronavirus_restaurants_021.JPG',
        name:'HR-36 Restaurants',
        cuisine:'Pizza,Italian,Fast Food',
        rating:'4.1',
        Price:'120'
    },
    {
         id:3,
        imageuri:'https://images.jdmagicbox.com/comp/patiala/g8/9999px175.x175.110224204720.c8g8/catalogue/gopal-sweets-and-namkeen-patiala-ho-patiala-bakery-product-manufacturers-80u55wr.jpg',
        name:'Aashirwaad Sweets',
        cuisine:'Bakery,Mithai,North Indian',
        rating:'3.0',
        Price:'90'
    },
    {
         id:4,
        imageuri:'https://media.timeout.com/images/105361155/630/472/image.jpg',
        name:'Pizza Singh',
        cuisine:'Pizza,Coke,North Indian',
        rating:'4.7',
        Price:'40'
    },
    {
         id:5,
        imageuri:'https://i.ndtvimg.com/i/2015-12/restaurants-625_625x350_41451041452.jpg',
        name:'Cafe Chokolede',
        cuisine:'Cafe,Mithai,Italian-North Indian',
        rating:'4.7',
        Price:'75'
    },
    {
         id:6,
        imageuri:'https://thumbs.dreamstime.com/b/interior-exterior-indian-restaurant-johannesburg-south-africa-november-136365305.jpg',
        name:'Navratan Restaurant',
        cuisine:'Bar,Veg,North Indian',
        rating:'3.9',
        Price:'210'
    },
    {
         id:7,
        imageuri:'https://www.kailashsweets.com/blog/wp-content/uploads/2017/09/nanpurA.jpg',
        name:'Kailash Sweets',
        cuisine:'Sweets,Cake,North Indian',
        rating:'4.1',
        Price:'149'
    }

]
const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={{backgroundColor:'#fff'}}>
            <View style={styles.container}>
                <Feather name="search" style={styles.searchIcon} size={20} color="#000"/>
                <TextInput
        style={styles.input}
        placeholder="Restaurants Name,Cuisine,or a dish..."
        place
        placeholderTextColor="grey"
    />
            </View>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>
       
            <Image source={{uri:'https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAFLAT-5-CASHBPAYT4D535087D/0x1920/70/3.jpg'}} style={{width:150,height:200,borderRadius:12,marginRight:10}}/>
      
         
            <Image source={{uri:'https://i.pinimg.com/736x/5f/3b/75/5f3b758ab635b25e28d9f7aa7f33857c.jpg'}} style={{width:150,height:200,borderRadius:12,}}/>
        
        </View>
        <View style={{marginTop:20}}>
            <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>Eat What Makes You Happy</Text>
        </View>
        <View style={{marginTop:20,marginRight:5}}>
            <View style={{flexDirection:'row'}}>
                <View>
                <Image source={{uri:'https://deliciousaffood.com/wp-content/uploads/2018/06/Classic-Hummus-Salad-Bowl-Blog.png'}} style={{width:80,height:80,borderRadius:45,margin:5,borderColor:'grey',borderWidth:0.5}}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Healthy</Text>
            </View>
            <View>
                <Image source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/11/f0/91/1a/mutton-thali-with-jowari.jpg'}} style={{width:80,height:80,borderRadius:45,margin:5,borderColor:'grey',borderWidth:0.5}}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Home Style</Text>
            </View>
            <View>
                <Image source={{uri:'https://zaikazabardast.files.wordpress.com/2012/02/paratha-main-psd.jpg'}} style={{width:80,height:80,borderRadius:45,margin:5,borderColor:'grey',borderWidth:0.5}}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Paratha</Text>
            </View>
            <View>
                <Image source={{uri:'https://www.foodlion.com/content/dam/Recipes/VeggieSpringRolls/FinalVeggie-Spring-Rolls-2.jpg.adapt.full.high.jpg'}} style={{width:80,height:80,borderRadius:45,margin:5,borderColor:'grey',borderWidth:0.5}}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Rolls</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',marginTop:5}}>
                <View>
                <Image source={{uri:'https://b.zmtcdn.com/data/pictures/8/49318/e3c42169fb0642294471dcfa09058bde.jpg'}} style={{width:80,height:80,borderRadius:45,margin:5,borderColor:'grey',borderWidth:0.5}}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Sandwich</Text>
            </View>
            <View>
                <Image source={{uri:'https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800'}} style={{width:80,height:80,borderRadius:45,margin:5,borderColor:'grey',borderWidth:0.5}}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Dosa</Text>
            </View>
            <View>
                <Image source={{uri:'https://lh3.googleusercontent.com/fy0Ha9pxC83ibeMgGn21V-wUTCd0F3rksGgLXntsEbcRKiBMfn4pj5igqVgtQVKgySKM3TYkTWWC8mztQxWWISxycNk=w800?s=300'}} style={{width:80,height:80,borderRadius:45,margin:5,borderColor:'grey',borderWidth:0.5}}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Chole Bhature</Text>
            </View>
            <View>
                <Image source={{uri:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/caponata-pasta-a0027c4.jpg?quality=90&resize=504,458'}} style={{width:80,height:80,borderRadius:45,margin:5,borderColor:'grey',borderWidth:0.5}}/>
                <Text style={{alignSelf:'center',marginTop:5}}>Pasta</Text>
            </View>
            </View>
            
            <View style={{marginTop:20}}>
            <Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>7 restaurants around you</Text>
        </View>
        </View>
  {/*open restaurant around you from Data*/ }
        <FlatList
                  data={Restaudata}
                  renderItem={({item})=>{
                  return(
                      <View style={{marginTop:20,alignItems:'center',}}>
                      <View style={{backgroundColor:'#fff',width:'90%',height:230,marginBottom:10,borderRadius:12,elevation:3,}}>
                  <Image source={{uri:item.imageuri}} style={{width:'100%',height:170,borderTopLeftRadius:12,borderTopRightRadius:12}}/>
                  <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
                      <View >
                          <Text style={{fontSize:20}}>{item.name}</Text>
                          <Text style={{color:'grey'}}>{item.cuisine}</Text>
                      </View>
                      <View>
                          <View style={{backgroundColor:'green',width:40,height:27,borderRadius:5,alignItems:'center',justifyContent:'center',alignSelf:'center',flexDirection:'row'}}>
                              <Text style={{marginRight:2,marginLeft:2,color:'#fff',fontWeight:'600'}}>{item.rating}</Text>
                              <AntDesign name="star" color={"#fff"}/>
                          </View>
                          <Text>{"\u20A8"} {item.Price} for one</Text>
                      </View>
                  </View>
              </View>
              </View>
                       
                       )
                  }}
                 keyExtractor={item => item.id}
                    />
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'grey',
    borderWidth:1,
    borderRadius:12,
    margin:10,
    
      
    },
    input:{
    flex: 1,
    color: '#424242',
    },
    searchIcon: {
    padding: 10,
},
})
export default HomeScreen
