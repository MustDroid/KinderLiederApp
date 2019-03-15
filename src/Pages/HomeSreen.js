import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, ScrollView} from 'react-native';
import {Fonts} from '../Utils/Font';


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [{
                name: "Alle meine Entchen",
                youtubeLink: "https://www.youtube.com/watch?v=NN8_R44Ig0g",
                imageUrl: require('../../assets/Images/duck.png'),
                
            }, {
                name : "Summ,summ,summ",
                youtubeLink : "https://www.youtube.com/watch?v=KeRM98Bp8Io",
                imageUrl : require('../../assets/Images/bee.png'),
                
            },
            {
                name : "Der KuckKuck und der Esel",
                youtubeLink : "https://www.youtube.com/watch?v=xuF0AGaUhb8",
                imageUrl : require('../../assets/Images/esel.png'),
    
            },
            {
                name : "Grün,grün,grün sind alle meine Kleider",
                youtubeLink :"https://www.youtube.com/watch?v=AGrsasgsFuQ",
                imageUrl : require('../../assets/Images/green.png'),
               
            }, 
            {
                name : "Backe, backe Kuchen",
                youtubeLink :"https://www.youtube.com/watch?v=5UM3ecX69Jo",
                imageUrl : require('../../assets/Images/cupcake.png'),
            },
            {
                name : "Alle Vögel sind schon da",
                youtubeLink : "https://www.youtube.com/watch?v=VnrtKbZhiqw",
                imageUrl : require('../../assets/Images/bird.png'),
            }
            ]
        }
    }

    componentDidMount() {
        //this.loadDogData();
    }

    render() {
        return (
            <View style = {styles.container}>
                <ScrollView style={{ width: '100%' }}>
                {
                    this.state.songs.map((song, index) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                //Linking.openURL(dog.description);
                               this.props.navigation.navigate('SongDetailPage', {
                                    song: song
                                }) 
                            }}>
                                <View>
                                    <Text style = {{fontSize:40, color:'#E68BBE',textAlign:'center', fontFamily: Fonts.LobsterTwo, marginTop: 40, marginBottom: 20}}>{ song.name }</Text>
                                    <Image 
                                    source = {song.imageUrl}
                                    style = {styles.stretch}></Image>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
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
    stretch : {
        width: '100%',
        height: 280,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor : '#D65AAE',
        backgroundColor : '#F2B6DE'

    },
  });
