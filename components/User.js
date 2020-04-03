import React, { Component } from 'react'
import {View, Text, Image,ScrollView,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageCropPicker from 'react-native-image-crop-picker';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


export default class User extends Component {

    takephoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
          }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
          });
    }
    render() {
        return (
            <View>
               
            <ScrollView>                
            <View>
            
                <View style={{
                    height:280,
                    backgroundColor:'#f23030'
                }}>
                    <Button 
                        onPress={()=>{this.takephoto()}}
                    >
                        <Image style={{
                            height:85,
                            width:85,
                            marginLeft:200,
                            marginTop:80,
                            borderRadius:55
                        }} 
                        />
                    </Button>
                    <Text style={{
                        color:'#fff',
                        marginLeft:220,
                        marginTop:30
                    }}
                    >用户名</Text>
                </View>
                <View>
                    <View>
                            <Text style={{
                                fontSize:20,
                                marginLeft:10,
                                marginTop:5,
                                color:'#4f4e4e'
                            }}
                            >
                                <Icon style={{
                                    color:'#4f4e4e',                                
                                    }} size={30} name="user" / >
                                 我的个人中心</Text>
                    </View>
                    <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                            marginTop:20,
                            marginLeft:30
                        }}>
                        <View style={{
                            height:100,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="book"/>
                                <Button style={{
                                    fontSize:20,
                                    marginLeft:-40,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}
                                onPress={()=>Actions.pages()}
                                >帐户管理</Button>
                        </View>
                        <View style={{
                            height:100,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="book"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>帐户管理</Text>
                        </View>
                        <View style={{
                            height:100,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="book"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>帐户管理</Text>
                        </View>
                    </View>
                    <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                            marginTop:10,
                            marginLeft:30
                        }}>
                        <View style={{
                            height:100,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="book"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>帐户管理</Text>
                        </View>
                        <View style={{
                            height:100,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="book"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>帐户管理</Text>
                        </View>
                        <View style={{
                            height:100,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="book"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>帐户管理</Text>
                        </View>
                    </View>
                    <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                            marginTop:10,
                            marginLeft:30
                        }}>
                        <View style={{
                            height:100,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="book"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>我的收藏</Text>
                        </View>                        
                    </View>
                </View>
                <View>
                <View>
                            <Text style={{
                                fontSize:20,
                                marginLeft:10,
                                marginTop:10,
                                color:'#4f4e4e'
                            }}
                            >
                                <Icon style={{
                                    color:'#4f4e4e',                                
                                    }} size={30} name="tag" / >
                                 E族活动</Text>
                </View>
                <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                            marginTop:20,
                            marginLeft:30
                        }}>
                        <View style={{
                            height:130,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="star"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>我的活动</Text>
                        </View>
                        <View style={{
                            height:130,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="star"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>我的活动</Text>
                        </View>
                        <View style={{
                            height:130,
                            width:150
                        }}>
                            <Icon style={{
                                color:'#4f4e4e',
                                paddingLeft:40,
                            }} size={25}
                                name="star"/>
                                <Text style={{
                                    fontSize:20,
                                    marginLeft:10,
                                    marginTop:10,
                                    color:'#4f4e4e'
                                }}>我的活动</Text>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
            </View>
        )
    }
}
