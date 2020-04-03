import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,  BackHandler, AsyncStorage, ToastAndroid } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import User from './components/User';
import Home from './components/Home';
import Test from './components/Test';
import Login from './components/Login';
import Shopping from './components/Shopping';
import Icon from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './components/SwiperPage';

const styles = StyleSheet.create({
	
});
const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
	return (
		<Router
			
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
			<Scene initial={true} key="login" component={Login} />
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="#9a9a9a"
								tabBarStyle={{backgroundColor:'#fff'}}
							>
								{/* 首页 */}
								<Scene key='home'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'#9a9a9a'} 
											size={25}
											name="home"
										/>
									}
								>
									<Scene key='home' hideNavBar={true} component={Home}/>
									
								</Scene>
								{/* 消息栏 */}
								<Scene key='test'
									title='商品分类'
									icon={
										({focused})=><Icon 
											color={focused?'red':'#9a9a9a'} 
											size={25}
											name="appstore-o"
										/>
									}									
								>
									<Scene key="test" hideNavBar={true} component={Test}/>
									
								</Scene>
								{/* 文档栏 */}
								<Scene 
									key='doc'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'#9a9a9a'} 
											size={25}
											name='shoppingcart'/>
										}
                  title="购物车"
                  hideNavBar={true}
									component={Shopping}
								/>
                <Scene 
									key='shop'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'#9a9a9a'} 
											size={25}
											name='user'/>
										}
									title="个人中心"
                  component={User}
                  hideNavBar={true}
								/>
								
							</Tabs>
						</Scene>
					</Drawer>
				</Lightbox>
				
			</Modal>
			</Overlay>
    </Router>
    // <Pages/>
	);
};

export default App;
