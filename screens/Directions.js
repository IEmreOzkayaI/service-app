import React from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import BackgroundImage from "../assets/icon.png";
import Icon from 'react-native-vector-icons/AntDesign';

function Directions({route,navigation}) {
    const { image, text } = route.params;
    const [cardHeight, setCardHeight] = React.useState(400);
    const [stretchCard, setStretchCard] = React.useState(false);
    const handleCardHeight = () => {
        if (cardHeight === 400) {
            const screenHeight = Dimensions.get('window').height - 80;
            setCardHeight(screenHeight);
        } else {
            setCardHeight(400);
        }
    }
    console.log("route.params", route.params)

    return (

        <ScrollView>

            <View style={[styles.directions__page, stretchCard ? null : {paddingTop: 100}]}>
                <Text style={[styles.directions__page__header, stretchCard ? {display: "none"} : null]}>{text}</Text>
                <View style={[styles.directions__page__image, stretchCard ? {display: "none"} : null]}>
                    {!image && <Image source={BackgroundImage} style={styles.directions__page__image__index}/>}
                    {image &&   <Image resizeMode={"contain"} source={{uri: image}} style={styles.directions__page__image__index}/>}
                </View>
                <View style={[styles.directions__page__content, {height: cardHeight}]}>
                    <View style={styles.directions__page_content__header}>
                        <Text style={styles.directions__page_content__header__text}>{text}</Text>
                        <Icon name="close" size={20} color="#000" onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                    <View style={[styles.directions__page__content_body, stretchCard ? {
                        height: 650
                    } : {
                        height: 280,
                    }]}>
                        <Text style={styles.directions__page__content_body__item}>1. Servis</Text>
                        <Text style={styles.directions__page__content_body__item}>2. Servis</Text>
                        <Text style={styles.directions__page__content_body__item}>3. Servis</Text>
                    </View>
                    <TouchableOpacity style={styles.directions__page__content__button}
                                      onPress={() => {
                                          setStretchCard(!stretchCard);
                                          handleCardHeight()
                                      }}>

                        {stretchCard ? (
                            <Text style={styles.directions__page__content__button__text}>Detayları Gizle</Text>
                        ) : (
                            <Text style={styles.directions__page__content__button__text}>Detayları Göster</Text>
                        )}
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    directions__page: {
        flex: 1,
        alignItems: 'center',
        overflow: 'scroll'
    },
    directions__page__header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 0,
    },
    directions__page__image: {
        width: 300,
        height: 200,
    },
    directions__page__image__index: {
        width: 300,
        height: 200,
        borderWidth: 1, // Kenarlık kalınlığı
        borderColor: '#000', // Kenarlık rengi
        borderRadius: 10, // Kenarlık yarıçapı
    },
    directions__page__content: {
        marginTop: 50,
        paddingBottom: 100,
        width: 350,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        borderWidth: 1, // Kenarlık kalınlığı
        borderColor: '#000', // Kenarlık rengi
        borderRadius: 10, // Kenarlık yarıçapı
    },
    directions__page_content__header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: 300,
    },
    directions__page_content__header__text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 20,
    },
    directions__page__content_body: {
        width: 300,
        fontSize: 40,
    },
    directions__page__content_body__item: {
        fontSize: 15,
        marginBottom: 5,
    },
    directions__page__content__button: {
        width: 300,
        height: 40,
        borderColor: '#27374D',
        borderWidth: 1, // Kenarlık kalınlığı
        borderRadius: 10, // Kenarlık yardarm
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
    },
    directions__page__content__button__text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        color: '#27374D',
    }
});

export default Directions;
