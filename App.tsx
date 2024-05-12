import React from 'react'
import {
View,
Text,
SafeAreaView,
Button,
Alert
} from 'react-native';
function App(){
return(
<SafeAreaView>

<Text>Hello World</Text>
<Text>Hello World</Text>
<Button title="Press Me" onPress={() => Alert.alert('Simple Button pressed')}/>
</SafeAreaView>
)
}
export default App;