import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GoalInput from '../components/GoalInput';
import GoalsList from '../components/GoalsList';

export default function Home() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler() {
    setModalIsVisible(false);
  }
  return (
    <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput onCancel={endAddGoalHandler} visible={modalIsVisible} onAddGoal={addGoalHandler} />
        <GoalsList />
      </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
})