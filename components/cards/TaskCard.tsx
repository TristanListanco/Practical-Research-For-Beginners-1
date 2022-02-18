import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../assets/theme/ThemeProvider";
import * as Haptics from "expo-haptics";
import colors from "../../constants/colors";

interface Props {
  item: any;
}

const TaskCard: React.FC<Props> = ({ item }) => {
  return (
    <View
      style={{
        padding: 20,
        borderRadius: 5,
        marginVertical: 5,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.elevated,
        elevation: 2,
      }}
    >
      <View style={{ flex: 1, paddingRight: 10 }}>
        <Text
          style={{
            fontSize: 18,
            color: colors.text,
            fontFamily: "SFProDisplay-Bold",
          }}
        >
          TITLE
        </Text>
        {quiz.description != "" ? (
          <Text
            style={{
              opacity: 0.8,
              marginTop: 5,
              fontFamily: "SFProDisplay-Medium",
              color: colors.heading5,
            }}
          >
            DESCRIPTION
          </Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 50,
          backgroundColor: colors.primarygreen + "20",
        }}
        onPress={() => {
          {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
        }}
      >
        <Text
          style={{
            color: colors.primarygreen,
            fontFamily: "SFProDisplay-Black",
          }}
        >
          Play
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: "gray",
    fontSize: 18,
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
});

export default TaskCard;
