import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Item(props) {
    return (
        <View style={styles.listUser}> 
            <Text onPress={() => props.onDelete(props.title)}>
                {
                    props.title
                }
            </Text>
</View>
    )
}
const styles=StyleSheet.create({
    listUser:{
        backgroundColor:"#ccc",
        borderColor:"black",
        margin:10,
        borderWidth:1,
        padding:10
    }
})