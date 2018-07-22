/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import TaskContainer from "./TaskContainer";
import { FilterValue } from "./TaskActions";
import { ADD_TASK, DO_FILTTER } from "./TaskActionTypes";

const firstState = {
  tasks: [],
  currentFilter: FilterValue.ALL
};

const taskReducer = (state = firstState, action) => {
  console.log("taskReducer", action, state);
  switch (action.type) {
    case ADD_TASK: {
      const newTask = { title: action.taskName, status: FilterValue.TODO };
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };
    }
    case DO_FILTTER: {
      return {
        ...state,
        filterValue: action.filterValue
      };
    }
  }
  return state;
};

const reducers = combineReducers({
  tasks: taskReducer
});
const store = createStore(reducers);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TaskContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 20,
    paddingHorizontal: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
