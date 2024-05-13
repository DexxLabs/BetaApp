import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function app2(){
return(
    <View style={styles.container}>
        <Text>Hello There</Text>
    </View>
)
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default app2