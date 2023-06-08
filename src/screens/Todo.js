import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, KeyboardAvoidingView, FlatList, Keyboard, TextInput, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, deleleTask, updateTask } from '../redux/Actions';
import ItemView from '../components/ItemView';
import CustomModalView from '../components/CustomModal';


export default function ToDo(props) {
    const [task, setTask] = useState();
    const [editTask, setEditTask] = useState("");
    const [beingEdit, setBeingEdit] = useState(false);
    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const [currentTask, setCurrentTask] = useState("");
    const [seletedItem, setSelectedItem] = useState("");
    const dispatch = useDispatch();
    const dataFromStore = useSelector((state) => state.reducer2); //Syntax for this hook => useSelector(state => state.myReducer);

    const addTask = async () => {
        Keyboard.dismiss();
        console.log(`Todo.js => ${task}`)
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
        dispatch(deleleTask(index));
    }

    const startUpdate = (id, task) => {
        dispatch(updateTask(currentId, currentTask))
        setShow(false)
    };

    const handleUpdateTask = (item) => {
        setCurrentId(item.id)
        setCurrentTask(item.task);
        setShow(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Today's Tasks
            </Text>
            <CustomModalView
                visible={show}
                value = {currentTask}
                currentId={currentId}
                onPress={() => startUpdate()}
                onCancel={() => setShow(false)}
                onChangeText={(text) => setCurrentTask(text)}
            />
            <ScrollView>
                <View style={styles.item}>
                    {dataFromStore.map((item, index) =>
                        <ItemView
                            text={item.task}
                            key={item.id}
                            onLongPress={() => handleDeleteTask(index)}
                            onPress={() => handleUpdateTask(item)}
                        />)}
                </View>
            </ScrollView>
            {/* Write a New Task Section */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTastWrapper} >
                <TextInput
                    placeholder="Write your task"
                    onChangeText={(text) => setTask(text)}
                    value={task}
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
        </View >
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
