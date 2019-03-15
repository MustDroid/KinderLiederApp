import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity, Button } from 'react-native';
//import CircleButton from 'react-native-circle-button';
//import Button from ' react-native-button ';
import { Fonts } from '../Utils/Font';

export default class SongDetailScreen extends Component {

    constructor(props) {
        super(props);

        var song = this.props.navigation.getParam('song');

        this.state = {
            song: song
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: '100%' }}>
                    <Image
                        source={ this.state.song.imageUrl }
                        style={{ width: '100%', height: 280, backgroundColor:'#F2B6DE',borderWidth:2,borderColor:'#D65AAE'}}>
                    </Image>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={{ backgroundColor: '#EEA1CD', width: 200, height: 200, borderRadius: 1000, margin: 20, padding: 20 , borderColor: '#D65AAE',borderWidth:1}} onPress={() => { Linking.openURL(this.state.song.youtubeLink) }}>
                            <Text style={{ color: '#006987' ,textAlign: 'center',fontFamily:Fonts.LobsterTwo, fontSize:40}}>Go to Youtube Video</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#95DCDC',
        height: '100%'
    },

});