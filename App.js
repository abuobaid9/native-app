import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Item from './components/Item'

export default function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const textHandler = (userValue) => {
    setNewUser(userValue);
  }
  const addNameHandler = () => {
    setUsers([...users, newUser]);
    setNewUser("")
  }
  const removeHandler = (userRemove) => {
    const newUser = users.filter((user) => user !== userRemove);
    setUsers(newUser);
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Add Your Name" onChangeText={textHandler} value={newUser} />
      <Button title='Add Name' onPress={addNameHandler} />
      <View>
        {/* {
          users.map((user,idx) => {
            return (
              <Text key={idx} onPress={removeHandler}>
                {user}
              </Text>
            )
          })
        } */}
        <FlatList
          data={users}
          renderItem={(itemData) => (
            <Item title={itemData.item} onDelete={removeHandler} />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
  }
});
