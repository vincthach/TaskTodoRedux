/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { FilterValue } from "./TaskActions";
type Props = {};
export default class TaskTodoComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentText: null
    };
  }
  _onAddClick = () => {
    const { currentText } = this.state;
    if (currentText && currentText.length > 0) {
      this.props.addTask(currentText);
      this.setState({ currentText: null });
    }
  };
  render() {
    const { tasks } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={this.state.currentText}
            onChangeText={text => this.setState({ currentText: text })}
            placeholder="Enter your new task"
            style={{ height: 40, borderColor: "gray", borderWidth: 1, flex: 1 }}
          />
          <Button title="ADD" onPress={this._onAddClick} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="ALL"
            onPress={null}
            color={tasks.currentFilter === FilterValue.ALL ? "red" : "blue"}
          />
          <Button
            title="TODO"
            onPress={this._onAddClick}
            color={tasks.currentFilter === FilterValue.TODO ? "red" : "blue"}
          />
          <Button
            title="INPROGRESS"
            onPress={null}
            color={
              tasks.currentFilter === FilterValue.INPROGRESS ? "red" : "blue"
            }
          />
          <Button
            title="COMPLETED"
            onPress={null}
            color={
              tasks.currentFilter === FilterValue.COMPLETED ? "red" : "blue"
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
