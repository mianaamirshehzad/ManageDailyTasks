import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, KeyboardAvoidingView, FlatList, Keyboard, TextInput, TouchableOpacity } from "react-native";
import { addTask, deleteTask, updateTask } from '../redux/TaskSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TaskView from '../components/TaskView';
import CustomModalView from '../components/CustomModal';
import { addNewTask } from '../redux/Actions';


export default function ToDo(props) {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [show, setShow] = useState(false);
    const [updateTask, setUpdateTask] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector(state => state.counter)

    const addTask = async () => {
        Keyboard.dismiss();
        console.log(task)
        if (task) {
            setTaskList([...taskList, task]); //ES6
        } else {
            alert("Please enter a task");
        }
        setTask(null); //This will empty the textbox
        console.log(taskList);
        dispatch(addNewTask(taskList));
    };


    // const addTaskHandler = () => {
    //     if (task) {
    //         Keyboard.dismiss();
    //         if (taskList !== null) {
    //             taskList.push(task)
    //         } else {
    //             setTaskList(task);
    //         }
    //     } else {
    //         alert("Empty field")
    //     }
    //     setTask(null); //This will empty the textbox
    //     console.log(taskList);
    // };
    // const deleteHandler = (index) => {
    //     dispatch(deleteTask(index));
    // };
    // const updateHandler = (index) => {
    //     dispatch(updateTask(index));
    // }

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
                    {/* Here our task list will appear */}

                    <ScrollView
                        keyboardDismissMode="on-drag"
                        alwaysBounceVertical={true}
                    >
                        {todos.map((item, index) => (
                            <TaskView text={item} key={item}
                                onLongPress={() => deleteHandler(index)}
                                onPress={() => updateHandler(index)} />
                        ))}
                    </ScrollView>


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
                    onPress={() => addTask(task)} >
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
