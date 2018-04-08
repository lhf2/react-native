import React, { Component } from 'react';
import styles from '../Styles/Main.js';
import MovieList from './MovieList';
import {
    Text,
    View,
    Navigator,
    TouchableOpacity
    } from 'react-native';
export default class Featured extends Component{
    render(){
        return(
            <Navigator
                       initialRoute={{id:'movielist',title:'推荐电影', name:'MovieList',component:MovieList}}
                       renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}/>
        }}
                       navigationBar={
          <Navigator.NavigationBar
            style={styles.navbar}
            routeMapper={NavigationBarRouteMapper}/>}
            />
        )
    }
}
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (route.id === 'movielist') {
            return null;
        }
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text>返回</Text>
            </TouchableOpacity>
        );
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        /*return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>

            </TouchableOpacity>
        );*/
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View style={styles.navbar}>
                <Text style={styles.navBarText}>
                    {route.title}
                </Text>
            </View>
        );
    }
};