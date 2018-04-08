import React, { Component } from 'react';
import styles from '../Styles/Main.js';
import MovieDetail from './MovieDetail.js';
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
export default class SearchResult extends Component{
    constructor(props){
        super(props);
        let dataSource=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            movies:dataSource.cloneWithRows(this.props.results)
        }
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
        return(
            <View style={styles.maincontainer}>
                <ListView dataSource={this.state.movies} renderRow={this.renderMovieList.bind(this)}/>
            </View>
        );
    }
};
