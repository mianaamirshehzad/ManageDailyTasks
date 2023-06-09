import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TaskView = (props) => {
    return (
        <TouchableOpacity style={styles.btn}
            onLongPress={props.onLongPress}
            onPress={props.onPress}
             >
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        elevation: 5,
        shadowRadius: 5,
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: {
        color: 'black',
        fontSize: 15,
        padding: 5,
    },
    img: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    }
});

export default TaskView;