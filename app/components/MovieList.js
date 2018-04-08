/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import styles from '../Styles/Main.js';
import MovieDetail from './MovieDetail.js'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    Navigator
    } from 'react-native';
export default class MovieList extends Component{
    constructor(props){
        super(props);
        let movies=[
            {title:'小甜的养成记'},
            {title:'小瓜的养成记'},
            {title:'小甜和小瓜的cp记'}
        ];
        const RequestUrl='https://api.douban.com/v2/movie/top250';
        let dataSource=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            movies:dataSource.cloneWithRows(movies),
            loaded:false
        }
        this.fetchData(RequestUrl);
    }
    fetchData(RequestUrl){
        fetch(RequestUrl)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies:this.state.movies.cloneWithRows(responseData.subjects),
                    loaded:true
                });
            }).done();
    }
    showMovieDetail(movie){
        this.props.navigator.push({
            title:movie.title,
            component:MovieDetail,
            passProps:{movie:movie},
            params:{movie:movie}
        })
    }
    renderMovieList(movie){
        return(
            <TouchableHighlight underlayColor='rgba(34,26,38,0.1)' onPress={()=>this.showMovieDetail(movie)}>
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image source={{uri:movie.images.large}} style={styles.image}/>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>{movie.title}</Text>
                        <Text style={styles.itemMeta}>{movie.original_title} ({movie.year})</Text>
                        <Text style={styles.redText}>{movie.rating.average}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    render() {
        if(!this.state.loaded){
            return(
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <Text>加载中。。。</Text>
                    </View>
                </View>
            )
        }
        return(
            <View style={styles.maincontainer}>
                <ListView dataSource={this.state.movies} renderRow={this.renderMovieList.bind(this)}/>
            </View>
        );
    }
};
