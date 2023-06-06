import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, KeyboardAvoidingView, FlatList, Keyboard, TextInput, TouchableOpacity } from "react-native";
import { addTask, deleteTask, initialState, updateTask } from '../redux/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask } from '../redux/Actions';
import ItemView from '../components/ItemView';


export default function ToDo(props) {
    const [task, setTask] = useState([]);
    const dispatch = useDispatch();
    //Syntax for this hook => useSelector(state => state.myReducer);
    const dataFromStore = useSelector((state) => state.reducer2);

    const addTask = async () => {
        Keyboard.dismiss();
        console.log(task)
        if (task) {
            let date = new Date();
            let time = date.getTime();
            let obj = {
                id: time,
                task: task,
                isDone: false
            }
            dispatch(addNewTask(obj));
        } else {
            alert("Please enter a task");
        }
        setTask(null); //This will empty the textbox
    };

    const handleDeleteTask = (index) => {
        console.log(index)
        dispatch(deleteTask(index));
    }


    // const markTaskAsComplete = (index) => {
    //     let itemsCopy = [...taskList];
    //     itemsCopy.splice(index, 1);
    //     setTaskList(itemsCopy);
    //     console.log('Task marked as done')
    // };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Today's Tasks
            </Text>
            <ScrollView>
                <View style={styles.item}>
                    {dataFromStore.map((item, index) => <ItemView text = {item.task}
                    onLongPress = {() => handleDeleteTask(index)} /> )}

                </View>
            </ScrollView>

            {/* Write a New Task Section */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTastWrapper} >
                <TextInput
                    placeholder="Write your task"
                    onChangeText={(text) => setTask(text)}
                    style={styles.input} />
                <TouchableOpacity
                    onPress={() => addTask()} >
                    <View style={styles.addWrapper} >
                        <Text style={styles.addText} >
                            +
                        </Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    taskWrapper: {
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 40,
        marginLeft: 20,
        color: 'green',
    },
    item: {
        marginTop: 30,
        width: '95%',
        alignSelf: 'center'
    },
    writeTastWrapper: {
        position: 'absolute',
        bottom: 30,
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,

    },
    addWrapper: {
        height: 60,
        width: 60,
        backgroundColor: '#008000',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 5,
    },
    addText: {
        color: 'white',
        fontSize: 30,
    }
});
