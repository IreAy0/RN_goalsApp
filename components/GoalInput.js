import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useGoals } from "../store/GoalContext";
import PrimaryButton from "./PrimaryButton";
import { StatusBar } from "expo-status-bar";

function GoalInput(props) {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoDescription, setTodoDescription] = useState("")
  const { addGoal } = useGoals();

  function titleInputHandler(input) {
    setTodoTitle(input)
  }

  function descriptionInputHandler(input) {
    setTodoDescription(input)
  }

  const addGoalHandler = () => {
    if (todoTitle.trim().length === 0) {
      Alert.alert('Title Required', 'Please enter a todo title.', [{ text: 'Okay' }]);
      return;
    }
    addGoal(todoTitle, todoDescription)
    props.onAddGoal(todoTitle);
    setTodoTitle("")
    setTodoDescription("")
  };

  return (
    <>
     <StatusBar style="light" />
     <Modal visible={props.visible} animationType="slide">
      <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')} />
          <View style={styles.inputInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Title"
              onChangeText={titleInputHandler}
              value={todoTitle}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Description"
              onChangeText={descriptionInputHandler}
              value={todoDescription}
            />
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <PrimaryButton
                onPress={addGoalHandler}
              >Add Goal</PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton
                onPress={props.onCancel}
                buttonStyle={{ backgroundColor: '#f31282' }}
              >Cancel</PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>

    </Modal>
    </>
   

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },

  inputInnerContainer: {
    gap: 10,
    width: '100%'
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
export default GoalInput;
