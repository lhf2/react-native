import React, { Component } from 'react';
import styles from '../Styles/Main.js';
import SearchResult from './SearchResult.js';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    Navigator,
    TextInput
    } from 'react-native';
export default class SearchFrom extends Component{
    constructor(props){
        super(props);
        this.state={
            query:''
        }
    }
    fetchData(){
        const RequestUrl=`https://api.douban.com/v2/movie/search?q=${this.state.query}`
        fetch(RequestUrl)
            .then((response) => response.json())
            .then((responseData) => {
                this.props.navigator.push({
                    title:responseData.title,
                    component:SearchResult,
                    passProps:{results:responseData.subjects},
                    params:{results:responseData.subjects}
                })
            }).done();
    }
    render() {
        return(
            <View style={[styles.container,{paddingTop:60}]}>
                <View style={{
                    paddingTop:7,
                    paddingLeft:7,
                    paddingRight:7,
                    borderColor:'rgba(100,53,201,0.1)',
                    borderBottomWidth:1
                }}>
                    <TextInput style={{height:50}}
                               placeholder='搜索'
                               onChangeText={(query)=>{
                                    this.setState({
                                        query
                                    })
                               }}
                               onSubmitEditing={this.fetchData.bind(this)}
                    />
                </View>
            </View>
        );
    }
};
