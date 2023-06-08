import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Modal, TouchableOpacity, Image } from 'react-native';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';

const CustomModalView = (props) => {
    const [update, setUpdate] = useState("")
    console.log("model: "+ props.value)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}>
            <View style={styles.modalView} >
                <TouchableOpacity onPress = {props.onCancel} style = {{right:0}} >
                    <Image
                        source={require("../assets/images/cancel.png")}
                        style={styles.img}
                    />
                </TouchableOpacity>
                <Text style={styles.title} >
                    Update task
                </Text>
                <CustomTextInput
                    placeholder='Update your task...'
                    onChangeText={props.onChangeText}
                    value = {props.value} />
                <CustomButton text="Submit"
                    onPress={props.onPress} />
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalView: {
        backgroundColor: 'lightblue',
        margin: 70,
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: '50%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 20,
        color: 'black'
    },
    img: {
        width: 40,
        height: 40,
    }
});

export default CustomModalView;