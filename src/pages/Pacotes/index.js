import React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import env from '../../../env.json'

export default function Pacotes(){

    const [pacotes, setPacotes] = useState([])

    useEffect(() => {var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`${env.baseUrl}/api/Pacotesviagem`, requestOptions)
        .then(response => response.json())
        .then(data => setPacotes(data))
        .catch(error => console.log('error', error));
    },[])

    return(
        <View>
            <View style={styles.txtView}>
                <Text style={styles.txtDestinos}>PACOTES</Text>
            </View>
            <FlatList
                style={styles.listPacote}
                showsVerticalScrollIndicator={false}
                data={pacotes}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.cardPacote}>
                            <View>
                                <Text style={styles.txtNomePacote}>{item.nome.toUpperCase()}</Text>
                                <Text style={styles.txtSubTitulo}>{item.destino.cidade}</Text>
                            </View>
                            <View style={styles.inclusosView}>
                                {item.hospedagem
                                    ? <Icon name={"hotel"} style={styles.pacoteIcons} color={"#852E7C"}/>
                                    : <Icon name={"hotel"} style={styles.pacoteIcons} color={"#444"}/>
                                }
                                {item.alimentacao 
                                    ? <Icon name={"cutlery"} style={styles.pacoteIcons} color={"#852E7C"}/>
                                    : <Icon name={"cutlery"} style={styles.pacoteIcons} color={"#444"}/>
                                }
                                {item.ingressos
                                    ? <Icon name={"ticket"} style={styles.pacoteIcons} color={"#852E7C"}/>
                                    : <Icon name={"ticket"} style={styles.pacoteIcons} color={"#444"}/>
                                }
                            </View>
                            <View>
                                <Text style={styles.txtSubTitulo}>Descrição</Text>
                                <Text style={styles.txtDescricao}>{item.descricao}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}