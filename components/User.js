import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { FontAvesome5 } from "@expo/vector-icons";

const response = [
  {
    id: "1",
    name: "Umut",
    age: 32,
  },
  {
    id: "2",
    name: "Aslı",
    age: 33,
  },
  {
    id: "3",
    name: "Ozan",
    age: 24,
  },
  {
    id: "4",
    name: "Ali",
    age: 28,
  },
  {
    id: "5",
    name: "Tolga",
    age: 28,
  },
  {
    id: "6",
    name: "Ahmet",
    age: 21,
  },
];

const User = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={response}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <View style={styles.itemLeft}>
                  <View style={styles.square}></View>
                  <ListItem>
                    <Text>
                      {item.name},{item.age}
                    </Text>
                  </ListItem>
                </View>
                <TouchableOpacity
                  style={styles.circular}
                  onPress={() =>
                    navigation.navigate("User Detail Page", {
                      _id: item.id,
                    })
                  }
                ></TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default User;
