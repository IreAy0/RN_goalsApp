import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useGoals } from '../store/GoalContext'
import { useIsFocused } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';

export default function GoalDetails({route, navigation}) {

  const {viewGoalDetails,  goalDetails, deleteGoal} = useGoals()
  const goalId = route.params.goalId
  const isFocused = useIsFocused();

  const handleDelete = () => {
    deleteGoal(goalId);
    navigation.goBack();
  };

  const handleEdit = () => {
    navigation.navigate('Edit Goal', { goalId });
  };

  useEffect(() => {
    if (isFocused) {
      viewGoalDetails(goalId);
    }
  }, [isFocused, goalId]);

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Goal Title: {goalDetails?.title}</Text>
    <Text style={styles.description}>{goalDetails?.description}</Text>
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
      <PrimaryButton onPress={handleDelete} buttonStyle={{backgroundColor: '#f31282'}}>Delete</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
      <PrimaryButton  onPress={handleEdit} buttonStyle={{backgroundColor: '#5e0acc'}}>Edit</PrimaryButton>
      </View>
  
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonContainer:{
    flex: 1
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#888',
  },
})