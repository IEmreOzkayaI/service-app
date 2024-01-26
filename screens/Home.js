import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from "../assets/arcelik_intro.png";
import * as ImagePicker from "expo-image-picker";
import callGoogleVisionAsync from "../helperFunctions";
import LoadingScreen from "./Loading";

function Home({navigation}) {
    const [image, setImage] = React.useState("");
    const [text, setText] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    // const pickImage = async () => {
    //     // const {granted} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
    //     const granted = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //     if (granted) {
    //         console.log('access granted')
    //         let data = await ImagePicker.launchImageLibraryAsync({
    //             mediaTypes: ImagePicker.MediaTypeOptions.All,
    //             base64: true,
    //         })
    //         console.log(data)
    //
    //         if (!data.cancelled) {
    //             console.log('data uri', data.assets[0])
    //             const responseData = await callGoogleVisionAsync(data.assets[0].base64);
    //             const text = responseData.text;
    //             const image = data.assets[0].uri;
    //             setText(text);
    //             setImage(image);
    //             if (responseData) {
    //                 navigation.navigate('Directions' , {image:image, text:text})
    //             }
    //         }
    //
    //     } else {
    //         Alert.alert('Permissions required to access camera roll.')
    //     }
    // }

    const openCamera = async () => {
        const granted = await ImagePicker.requestCameraPermissionsAsync();
        if (granted) {
            setIsLoading(true)
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                base64: true,
            });
            console.log(data)
            if(data.canceled){
                console.log("cancelled")
                setIsLoading(false)
            }
            if (!data.canceled) {
                console.log('data uri', data.assets[0])
                const responseData = await callGoogleVisionAsync(data.assets[0].base64);
                const text = responseData.text;
                const image = data.assets[0].uri;
                setText(text);
                setImage(image);
                if (responseData){
                    navigation.navigate('Directions' , {image:image, text:text})
                    setIsLoading(false)
                }
            }
        } else {
            Alert.alert('Permissions required to access camera roll.')
        }
    };


    // useEffect(() => {
    //     recognizeText();
    // }, [image]); // Ensure 'image' is the only dependency
    if (isLoading) {
        return <LoadingScreen />;
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
                {/*<Button title="Pick an image from camera roll" onPress={pickImage}/>*/}
                {/*<Button title="Open Camera" onPress={openCamera}/>*/}
                {/*<Button onPress={recognizeText} title="Recognize Text"/>*/}
                {/*<Image source={{uri: image}} style={{width: 200, height: 200, backgroundColor: 'black'}}/>*/}
                {/*<Text>{text}</Text>*/}
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
