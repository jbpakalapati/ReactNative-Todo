import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}){

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style = {styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        padding: 16,
        marginTop: 20,
        borderColor:'#bbb',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10,
        fontWeight: 'bold',
        
    },
    itemText:{
        marginLeft: 10,
    }
});