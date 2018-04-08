import React, { Component } from 'react';
import {
    StyleSheet,
    } from 'react-native';
const styles = StyleSheet.create({
    maincontainer:{
        backgroundColor:'#eae7ff',
        flex:1,
        marginTop:40,
    },
    container:{
        backgroundColor:'#eae7ff',
        flex:1,
    },
    item:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'rgba(100,53,201,0.1)',
        paddingBottom:6,
        paddingTop:6,
    },
    itemContent:{
        flex:1,
        marginLeft:13,
        marginTop:6,
    },
    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetical Neue',
        //fontWeight:'300',
        color:'#6435c9',
        marginBottom:6,
    },
    itemText:{
        fontSize:16,
        fontFamily:'Helvetical Neue',
        //fontWeight:'300',
        color:'#333',
    },
    itemMeta:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        marginBottom:6,
    },
    redText:{
        color:'#db2828',
        fontSize:15,
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    itemImage:{
        width:99,
        height:136,
    },
    image:{
        width:99,
        height:136,
    },
    navbar:{
        width:'100%',
        height:40,
        backgroundColor:'#fff',
    },
    navBarText: {
        lineHeight:43,
        fontSize: 16,
        color: '#373E4D',
        marginLeft:60,
    },
    navBarLeftButton:{
        padding:7,
    },
});
export default styles;