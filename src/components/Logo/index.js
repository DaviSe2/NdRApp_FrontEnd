import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './styles'

export default function Destinos() {

    return (
        <View style={styles.logoView}>
            <ImageBackground source={require("../../img/fundo.jpg")} resizeMode="cover" style={styles.backGroundImg}>
                <Image
                    style={styles.imgLogo}
                    source={require("../../img/NdRLogo.png")}
                />
            </ImageBackground>
        </View>
    )
}