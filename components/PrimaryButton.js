import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PrimaryButton = ({ children, onPress, buttonStyle }) => {

  function pressHandler() {
    onPress()
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed
          ? [styles.buttonInnerContainer, styles.pressed, buttonStyle]
          : [styles.buttonInnerContainer, buttonStyle]}
        onPress={pressHandler}
        android_ripple={{ color: '#ab77ee' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#9c60eb',
    paddingVertical: 14,
    paddingHorizontal: 16,
    elevation: 2,

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
})