import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{color: '#210644'}}
      onPress={() => props.onDeleteItem(props.id)}
      style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'purple',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'red',
    padding: 8,
  },
});
