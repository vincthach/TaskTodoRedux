/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import TaskListComponent from "./TaskListComponent";
import TaskTodoComponent from "./TaskTodoComponent";
import * as TaskActions from "./TaskActions";

type Props = {};
class TaskContainer extends Component<Props> {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <TaskTodoComponent
          addTask={this.props.addTask}
          tasks={this.props.tasks}
        />
        <TaskListComponent tasks={this.props.tasks.tasks} />
      </View>
    );
  }
}
export default connect(
  state => ({ tasks: state.tasks }),
  dispatch => ({
    addTask: taskName => dispatch(TaskActions.addTask(taskName))
    // decrement: () => dispatch(doDecrement())
  })
)(TaskContainer);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
