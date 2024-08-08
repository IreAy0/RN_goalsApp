import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function GoalItem({ id, text }) {
  const navigation = useNavigation()

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => navigation.navigate('Goal Details', { goalId: id })}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 10
   
  },
  goalText:{
    color: 'white',
    padding: 8
  },
  pressedItem:{
    opacity: 0.5
  }
})
export default GoalItem
