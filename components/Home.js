import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput,StyleSheet, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper'

const {swidth,sheight} = Dimensions.get('window')

export default class Service extends Component {
    constructor(){
        super();
        this.state = {
            data:[
                {title:'居家维修保养',img:require('../pic4.jpg')},
                {title:'住宿优惠',img:require('../pic5.jpg')},
                {title:'出行接送',img:require('../pic6.jpg')},
                {title:'E族活动',img:require('../pic7.jpg')}
            ],
        }
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#f4f4f4'}}>
                <View style={styles1.head}>
                    <TextInput placeholder=" 请输入您要搜索的关键字" style={styles1.search}/>
                    <Icon style={{position:'absolute',right:45,top:12,color:'#fff'}} size={25} name="search"/>
                </View>
                <Swiper
                    showsPagination={true}
                    activeDotColor='red'
                    loop={true}
                    autoplay={true}
                    horizontal={true}
                    style={{height:200}}
                >
                    <View style={{flex:1}}>
                        <Image style={{width:swidth,height:200}} resizeMode='cover' source={require('../pic3.jpg')}/>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={{width:swidth,height:200}} resizeMode='cover' source={require('../pic3.jpg')}/>
                    </View>
                </Swiper>
                <View>
                    {
                        this.state.data.map((item)=>(
                            <View style={{width:swidth,height:60,backgroundColor:'white',marginTop:10,marginBottom:10,marginLeft:5,justifyContent:'flex-start',flexDirection:'row'}}>
                                <Image style={{width:60,height:60}} resizeMode="cover" source={item.img}/>
                                <Text style={{marginLeft:25,marginTop:15,fontSize:18}}>{item.title}</Text>
                            </View>
                        ))
                    }
                </View>
                
            </ScrollView>
        )
    }
}
const styles1 = StyleSheet.create({
    head:{
        height:50,
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'#f23030'
    },
    search:{
        width:'85%',
        height:40,
        marginTop:5,
        backgroundColor:'#eeeeee',
        borderRadius:10,
    },
});