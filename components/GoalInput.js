import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
  Alert,
} from "react-native";
import { useGoals } from "../store/GoalContext";

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
    <Modal visible={props.visible} animationType="slide">
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
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
export default GoalInput;
