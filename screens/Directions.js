import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('directions.db');

const Directions = ({route, navigation}) => {
    const {image, data} = route.params;
    const [cardHeight, setCardHeight] = useState(400);
    const [stretchCard, setStretchCard] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardHeight = () => {
        if (cardHeight === 400) {
            const screenHeight = Dimensions.get('window').height - 150;
            setCardHeight(screenHeight);
        } else {
            setCardHeight(400);
        }
    };

    const handleApprove = () => {
        // Eğer "Onayla" butonuna basılırsa direkt olarak Home ekranına yönlendir
        Alert.alert("Arıza Başarı ile Giderilmiştir.")
        navigation.navigate('Home');
    };

    const handleReject = () => {
        if (currentIndex < dataList.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            Alert.alert("Sorun çözülmedi ise ürün depoya gönderilmelidir.")
            navigation.navigate('Home');
        }
    };

    useEffect(() => {
        if (data?.description) {
            const processedDataList = data.description.replace(/[\[\]]/g, '').split(',').map(item => item.replace(/['"]+/g, '').trim());
            setDataList(processedDataList);
        }
    }, [data]);

    return (
        <ScrollView>
            <View style={styles.directions__page}>
                <View style={styles.directions__page__main__navbar}>
                    <Text style={styles.directions__page__main__navbar__text}>Hata Kodu: {data?.error_code}</Text>
                    <Icon style={styles.directions__page__main__navbar__icon} name="close" size={20} color="#000"
                          onPress={() => navigation.navigate('Home')}/>
                </View>
                <View style={styles.directions__page__navbar}>
                    <Text
                        style={[styles.directions__page__header, stretchCard ? {display: 'none'} : null]}>{data?.name}</Text>
                </View>
                <View style={[styles.directions__page__image, stretchCard ? {display: 'none'} : null]}>
                    {!image && <Image source={BackgroundImage} style={styles.directions__page__image__index}/>}
                    {image && <Image resizeMode="contain" source={{uri: image}}
                                     style={styles.directions__page__image__index}/>}
                </View>
                <View
                    style={[styles.directions__page__content, {height: cardHeight}, stretchCard ? null : {marginTop: 35}]}>
                    <View style={styles.directions__page_content__header}>
                        <Text style={styles.directions__page_content__header__text}>{data?.short_description}</Text>
                    </View>
                    <ScrollView style={styles.directions__page__content_body}>
                        <Text style={styles.directions__page__content_body__item}>{dataList[currentIndex]}</Text>
                    </ScrollView>
                    <Text style={styles.directions__page__content__buttons}>
                        <TouchableOpacity style={[styles.directions__page__content__button, styles.redButton]}
                                          onPress={handleReject}>
                            <Text
                                style={[styles.directions__page__content__button__text, styles.redButton__text__color]}>Çözülmedi</Text>
                        </TouchableOpacity>
                        <View style={{width: 20}}></View>
                        <TouchableOpacity style={[styles.directions__page__content__button, styles.greenButton]}
                                          onPress={handleApprove}>
                            <Text
                                style={[styles.directions__page__content__button__text, styles.greenButton__text__color]}>Çözüldü</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    directions__page: {
        flex: 1,
        alignItems: 'center',
        overflow: 'scroll',
        paddingTop: 50,
    },


    directions__page__content__buttons: {},

    redButton: {
        backgroundColor: 'transparent',
        borderColor: 'black',
    },

    greenButton: {
        backgroundColor: 'black',
        borderColor: 'white',
    },

    redButton__text__color: {
        color: 'black',
    },

    greenButton__text__color: {
        color: 'white',
    },

    directions__page__main__navbar: {
        width: 350,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1, // Kenarlık kalınlığı
        borderColor: '#000', // Kenarlık rengi
        borderRadius: 10, // Kenarlık yarıçapı
        marginBottom: 35,
        backgroundColor: '#000',
        color: '#fff',
    },
    directions__page__main__navbar__text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    directions__page__main__navbar__icon: {
        color: '#fff',
    },
    directions__page__header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 0,
    },
    directions__page__navbar: {
        position: 'relative',
        width: 350,
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
        objectFit: 'cover',
    },
    directions__page__content: {
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
        marginBottom: 20,
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    directions__page_content__header__text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 20,
    },
    directions__page_content__header__sub__text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 20,
    },
    directions__page__content_body: {
        width: 300,
        textAlign: 'justify'
    },
    directions__page__content_body__item: {
        fontSize: 15,
        marginBottom: 10,

    },
    directions__page__content__button: {
        width: 150,
        height: 15,
        borderColor: '#27374D',
        borderWidth: 1, // Kenarlık kalınlığı
        borderRadius: 5, // Kenarlık yardarm
        userSelect: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        marginBottom: 20,
    },
    directions__page__content__button__text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
    }
});

export default Directions;