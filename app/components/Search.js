import React, { Component } from 'react';
import styles from '../Styles/Main.js';
import SearchFrom from './searchForm.js'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    TouchableHighlight,
    Navigator
    } from 'react-native';
export default class Search extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Navigator
                initialRoute={{id:'search',title:'搜索', name:'SearchFrom',component:SearchFrom}}
                renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}/>
        }}
                navigationBar={
          <Navigator.NavigationBar
            style={styles.navbar}
            routeMapper={NavigationBarRouteMapper}/>}
                />
        );
    }
};
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (route.id === 'search') {
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
        // ...
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <Text style={styles.navBarText}>
                {route.title}
            </Text>
        );
    }
};
