import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGoals } from '../store/GoalContext'
import GoalItem from './GoalItem';
import Icon from 'react-native-vector-icons/Ionicons';

export default function GoalsList() {
  const { goals, deleteGoal, viewGoalDetails} = useGoals();

  function deleteGoalHandler(id) {
    deleteGoal(id)
  }
  return (
    <View style={styles.goalsContainer}>
      {goals.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="list-outline" size={50} color="#ccc" />
          <Text style={styles.emptyText}>No goals added. Start adding some!</Text>
        </View>
      ) : (
        <View style={styles.listContainer} >
          <Text style={styles.subtitle}>All Goals</Text>
          <FlatList
            data={goals}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.title}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>

      )}

    </View>
  )
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: '#ccc',
  },
  subtitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    marginTop: 20
  }
})