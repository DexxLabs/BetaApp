import React from "react";
import{
    View,
    StyleSheet,
    Text,
    useColorScheme
} from 'react-native';

function appnew():JSX.Element{
    const mode = useColorScheme() === 'dark'
    return(
        <View style={styles.boxx}>
<Text style={mode?styles.whitetxt:styles.darktxt}>Ranbeer Singh</Text>
</View>

    ) 
}
const styles = StyleSheet.create({
    boxx: {
        flex : 1,
        alignItems :'center',
        justifyContent: 'center',
        backgroundColor: '#141414'
        
    },

    whitetxt: {
        color : '#ffffff'
    },

    darktxt: {
        color : '#000000'
    }
}
)

export default appnew