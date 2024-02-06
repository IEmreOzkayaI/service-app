import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from "../assets/arcelik_intro.png";
import * as ImagePicker from "expo-image-picker";
import callGoogleVisionAsync from "../OCR";
import LoadingScreen from "./Loading";
import db from "../db_config";
import checkErrorCodeInText from "../predefined_errors";

function Home({navigation}) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const [text, setText] = React.useState(null);

    const openCamera = async () => {
        const granted = await ImagePicker.requestCameraPermissionsAsync();
        if (granted) {
            setIsLoading(true)
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                base64: true,
            });
            if (data.canceled) {
                console.log("cancelled")
                setIsLoading(false)
            }
            if (!data.canceled) {
                const responseData = await callGoogleVisionAsync(data.assets[0].base64);
                const text = responseData.text;
                const image = data.assets[0].uri;
                console.log("text", text)
                const response = checkErrorCodeInText(text);
                if (response) {
                    setText(response);
                    setImage(image);
                }else{
                    setIsLoading(false)
                    Alert.alert(`Hata Kodu ${text} Bulunamadı`)
                }

            }
        } else {
            Alert.alert('Permissions required to access camera roll.')
        }
    };

    useEffect(() => {
        if (isLoading && image && text) {
            console.log("image", image)
            console.log("text", text)
            const getData =  async () => {

                let data = await getErrorByName(text)
                console.log("data", JSON.stringify(data[0], null, 2))
                navigation.navigate('Directions', {image: image, data: data[0]})
                setIsLoading(false)
            }
            getData().then(r => console.log("r",r));
        }
    }, [image,text]); // Ensure 'image' is the only dependency

    const getErrorByName = (code) => {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM errors WHERE error_code = ?', [code],
                    (_, {rows}) => {
                        const data = rows._array;
                        resolve(data); // Veriyi resolve ediyoruz
                    },
                    (_, error) => {
                        reject(error); // Hata durumunda reject ediyoruz
                    }
                );
            });
        });
    }
    // useEffect(() => {
    //     recognizeText();
    // }, [image]); // Ensure 'image' is the only dependency
    if (isLoading) {
        return <LoadingScreen/>;
    }

    return (
        <ScrollView>
            <View style={styles.home__page}>
                <TouchableOpacity onPress={() => openCamera()}>
                    <View style={styles.home__page__header}
                    >
                        <Text>
                            Arçelik Servis Destek Uygulaması
                        </Text>
                        <Text>
                            Hata Tespiti İçin Tıkla
                        </Text>
                        <Icon style={styles.home__page_header_icon} name="document-scanner" size={50} color="#ccc"/>
                    </View>
                </TouchableOpacity>
                <Image source={BackgroundImage} style={styles.home__page__image__index}/>
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    home__page: {
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
        paddingTop: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    home__page__header: {
        margin: 40,
        width: 300,
        height: 600,
        display: "flex",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1, // Kenarlık kalınlığı
        borderColor: '#000', // Kenarlık rengi
        borderRadius: 10, // Kenarlık yarıçapı
    },

    home__page_header_icon: {
        paddingTop: 40,
    },

    home__page__image__index: {
        width: 300,
        height: 100,
    },
});

export default Home;


