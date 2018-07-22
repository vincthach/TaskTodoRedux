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
  Button,
  TouchableOpacity,
  FlatList
} from "react-native";
import { FilterValue } from "./TaskActions";
type Props = {};

class MyTaskItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.task.id);
  };

  _renderTaskStatus = () => {
    const { task } = this.props;
    if (task.status === FilterValue.TODO) {
      return "[TODO]";
    }
    if (task.status === FilterValue.INPROGRESS) {
      return "[INPROGRESS]";
    }
    if (task.status === FilterValue.COMPLETED) {
      return "[COMPLETED]";
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "black" }}>{this._renderTaskStatus()}</Text>
          <Text style={{ color: "black" }}>{this.props.task.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class TaskListComponent extends Component<Props> {
  _keyExtractor = (item, index) => `${index}`;

  _onPressItem = (id: string) => {};

  _renderItem = ({ item }) => (
    <MyTaskItem onPressItem={this._onPressItem} task={item} />
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tasks}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
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
