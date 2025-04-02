/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';
import {NavigationContainer} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const STYLES = ['default', 'dark-content', 'light-content'] as const;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [courseGoals, setCourseGoals] = useState([]);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[2],
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {}, []);

  function addGoalHandler(enterGoalText: string) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enterGoalText, id: Math.random().toString()},
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(prev => prev.filter(goal => goal.id !== id));
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'default'} backgroundColor={'transparent'} />
          <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
              <Text>vs 1</Text>
              <FlatList
                data={courseGoals}
                renderItem={itemData => {
                  return (
                    <GoalItem
                      text={itemData.item.text}
                      id={itemData.item.id}
                      onDeleteItem={deleteGoalHandler}
                    />
                  );
                }}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
                alwaysBounceVertical={false}
              />
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
