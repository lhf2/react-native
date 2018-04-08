import React, { Component } from 'react';
import styles from '../Styles/Main.js';
import {
    Text,
    View,
    Navigator
    } from 'react-native';
export default class MovieDetail extends Component{
    constructor(props){
        super(props);
        const RequestUrl=`https://api.douban.com/v2/movie/subject/${this.props.movie.id}`;
        this.state={
            movieDetail:'',
            loaded:false
        };
        this.fetchData(RequestUrl);
    }
    fetchData(RequestUrl){
        fetch(RequestUrl)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movieDetail:responseData,
                    loaded:true
                });
            }).done();
    }
    render(){
        if(!this.state.loaded){
            return(
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <Text>加载中。。。</Text>
                    </View>
                </View>
            )
        }
        let movie=this.state.movieDetail;
        let summary=movie.summary.split(/\n/).map((p,i)=>{
            return(
                <View key={i} style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
                    <Text style={styles.itemText}>{p}</Text>
                </View>
            )
        });
        return(
            <View style={[styles.container,{paddingTop:70}]}>
                <View style={[styles.item,{flexDirection:'column'}]}>
                    {summary}
                </View>
            </View>
        )
    }
}