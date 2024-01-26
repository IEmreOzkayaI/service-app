import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import BackgroundImage from "../assets/icon.png";
import Icon from 'react-native-vector-icons/AntDesign';

function Directions({ route, navigation }) {
    const { image, data } = route.params;
    const [cardHeight, setCardHeight] = React.useState(400);
    const [stretchCard, setStretchCard] = React.useState(false);
    const [dataList, setDataList] = React.useState([]); // Initialize dataList state
    const handleCardHeight = () => {
        if (cardHeight === 400) {
            const screenHeight = Dimensions.get('window').height - 150;
            setCardHeight(screenHeight);
        } else {
            setCardHeight(400);
        }
    }

    useEffect(() => {
        if (data?.description) {
            const processedDataList = data.description.replace(/[\[\]]/g, '').split(',').map(item => item.replace(/['"]+/g, '').trim());
            setDataList(processedDataList); // Update the dataList state
        }
    }, [data]);

    return (
        <ScrollView>
            <View style={[styles.directions__page,]}>
                <View style={[styles.directions__page__main__navbar]}>
                    <Text style={[styles.directions__page__main__navbar__text]}>Hata Kodu: {data?.error_code}</Text>
                    <Icon style={styles.directions__page__main__navbar__icon} name="close" size={20} color="#000" onPress={() => navigation.navigate('Home')} />
                </View>
                <View style={[styles.directions__page__navbar]}>
                    <Text style={[styles.directions__page__header, stretchCard ? { display: "none" } : null]}>{data?.name}</Text>
                </View>
                <View style={[styles.directions__page__image, stretchCard ? { display: "none" } : null]}>
                    {!image && <Image source={BackgroundImage} style={styles.directions__page__image__index} />}
                    {image && <Image resizeMode={"contain"} source={{ uri: image }} style={styles.directions__page__image__index} />}
                </View>
                <View style={[styles.directions__page__content, { height: cardHeight } , stretchCard ? null:{ marginTop:35}]}>
                    <View style={styles.directions__page_content__header}>
                        <Text style={[styles.directions__page_content__header__text ]}>{data?.short_description}</Text>
                    </View>
                    <ScrollView   style={[styles.directions__page__content_body]}>
                        {dataList.map((item, index) => (
                            <Text key={index} style={styles.directions__page__content_body__item}>{index+1}- {item}</Text>
                        ))}
                    </ScrollView>
                    <TouchableOpacity style={styles.directions__page__content__button} onPress={() => {
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
        overflow: 'scroll',
        paddingTop: 50,
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
        textAlign:'justify'
    },
    directions__page__content_body__item: {
        fontSize: 15,
        marginBottom: 10,

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
        zIndex: 999,
        marginBottom: 20,
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
