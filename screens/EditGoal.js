import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, TextInput, View, Alert } from 'react-native';
import { useGoals } from '../store/GoalContext';

export default function EditGoal({ route, navigation }) {
  const { goalId } = route.params;
  const { viewGoalDetails, updateGoal, goalDetails } = useGoals();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    viewGoalDetails(goalId);
  }, [goalId]);

  useEffect(() => {
    if (goalDetails) {
      setTitle(goalDetails.title);
      setDescription(goalDetails.description);
    }
  }, [goalDetails]);

  const handleUpdate = () => {
    if (title.trim().length === 0) {
      Alert.alert('Title Required', 'Please enter a goal title.', [{ text: 'Okay' }]);
      return;
    }

    updateGoal(goalId, { title, description });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Title"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Description"
        onChangeText={setDescription}
        value={description}
      />
      <View style={styles.buttonContainer}>
        <Button title="Update Goal" onPress={handleUpdate} color="#5e0acc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    padding: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
