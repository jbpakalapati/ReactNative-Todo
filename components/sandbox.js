import React from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Sandbox() {

    return(
        <View style ={styles.container}>
            <Text style={styles.box1}>One</Text>
            <Text style={styles.box2}>Two</Text>
            <Text style={styles.box3}>Three</Text>
            <Text style={styles.box4}>Four</Text>
            
        </View>
        
    )
}

const styles = StyleSheet.create({

    container: {
        //flex:1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#add',
    },
    box1:{
        flex: 1,
        backgroundColor: 'gold',
        padding:10,
    },
    box2:{
        flex: 2,
        backgroundColor: 'coral',
        padding:15,
    },
    box3:{
        flex: 1,
        backgroundColor: '#ddd',
        padding:30,
    },box4:{
        flex: 3,
        backgroundColor: 'blue',
        padding:35,
    },box5:{
        flex: 1,
        backgroundColor: 'violet',
        padding:10,
    }
});