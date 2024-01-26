import db from "./db_config";
import {error_codes} from "./fridge_data";
export const addDataToDatabase = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS errors (id INTEGER PRIMARY KEY AUTOINCREMENT, error_code TEXT, name TEXT, short_description TEXT, description array)'
        );

        tx.executeSql(
            'SELECT name FROM sqlite_master WHERE type="table" AND name="errors"',
            [],
            (_, result) => {
                if (result.rows.length <= 1) {
                    // Verileri ekleyin
                    error_codes.forEach((item) => {
                        tx.executeSql(
                            'INSERT INTO errors (error_code, name, short_description, description) VALUES (?, ?, ?, ?)',
                            [item.error_code, item.name, item.short_description, JSON.stringify(item.description)]
                        );
                    });
                } else {
                    console.log("result.rows.length",result.rows.length)
                    console.log('"errors" tablosu zaten mevcut, verileri eklemeye gerek yok.');
                    return new Promise((resolve, reject) => {
                        db.transaction(tx => {
                            tx.executeSql(
                                'SELECT * FROM errors',null,
                                (_, { rows }) => {
                                    const data = rows._array;
                                    console.log("data", data)
                                    resolve(data); // Veriyi resolve ediyoruz
                                },
                                (_, error) => {
                                    reject(error); // Hata durumunda reject ediyoruz
                                }
                            );
                        });
                    });

                }
            },
            (_, error) => {
                console.error('Tablo varlığı kontrol hatası:', error);
            }
        );
    });
};
