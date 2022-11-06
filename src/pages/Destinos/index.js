import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';
import styles from './styles'
import env from '../../../env.json'

export default function Destinos() {

    const [destinos, setDestinos] = useState([])

    useEffect(() => {var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`${env.baseUrl}/api/Destinos`, requestOptions)
        .then(response => response.json())
        .then(data => setDestinos(data))
        .catch(error => console.log('error', error));
    },[])

    return (
        <View>
            <View style={styles.txtView}>
                <Text style={styles.txtDestinos}>DESTINOS</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}

                style={styles.destinosList}
                data={destinos}
                renderItem={({ item }) => {
                    return <Text style={styles.itemDestino}>{item.cidade}</Text>
                }}
            />
        </View>
    )
}