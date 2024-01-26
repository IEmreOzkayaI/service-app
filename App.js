import {StyleSheet, Text, View} from 'react-native';
import Navigation from "./components/Navigation";
import {addDataToDatabase} from "./add_error_codes";
import {useEffect} from "react";
import db from "./db_config";

export default function App() {

    useEffect(() => {
        const tableName = 'errors'; // Silmek istediğiniz tablo adı
        const deleteTableQuery = `DROP TABLE IF EXISTS ${tableName}`;

// Veritabanı işlemi yapmadan önce işlemi başlatın
        db.transaction((tx) => {
            tx.executeSql(
                deleteTableQuery,
                [],
                () => {
                    console.log(`${tableName} tablosu başarıyla silindi.`);
                },
                (_, error) => {
                    console.error('Tablo silme hatası:', error);
                }
            );
        });
        addDataToDatabase();
    }, []);

    return (
        <View style={styles.app}>
            <Navigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        marginTop: 0,
        padding: 0,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "flex-start",
        height: 1000,
    },
});
