import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    color: "#333",
  },
  container: {
    justifyContent: "center",
    padding: 24,
    flexDirection: "column",
    alignItems: "center",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 19,
    borderRadius: 6,
    width: 300,
    marginVertical: 10,
    color: "black",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});

export const images = {
  ratings: {
    1: require("../assets/images/rating-1.png"),
    2: require("../assets/images/rating-2.png"),
    3: require("../assets/images/rating-3.png"),
    4: require("../assets/images/rating-4.png"),
    5: require("../assets/images/rating-5.png"),
  },
  anime: {
    Naruto: require("../assets/images/naruto.jpg"),
    "Fairy Tail": require("../assets/images/fairy_tail.jpg"),
    "One Piece": require("../assets/images/one_piece.jpg"),
  },
};
