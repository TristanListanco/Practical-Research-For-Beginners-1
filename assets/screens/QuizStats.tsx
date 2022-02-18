import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  Dimensions,
} from "react-native";

import { useTheme } from "../theme/ThemeProvider";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

interface Props {
  route: any;
  navigation: any;
}

const QuizStats: React.FC<Props> = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const { StatusBarManager } = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.background }}
      >
        <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"} />
        {/* Header */}
        <View
          style={{
            marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
            marginRight: 100,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity>
              <Feather name="arrow-left" size={24} style={{ color: colors.text }} onPress={() => navigation.goBack()} />
            </TouchableOpacity>
          </View>

          <View style={styles.textGreetingWrapper}>
            <Text
              style={{
                fontFamily: "SFProDisplay-Bold",
                color: colors.text,
                fontSize: 30,
              }}
            >
              Tristan Listanco's
            </Text>
            <Text style={styles.textTopicIndex}>Quiz Statistics & Trends</Text>
          </View>
          <View style={{ width: "100%" }}>
            <LineChart
              data={{
                labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={screenWidth} // from react-native
              height={220}
              yAxisLabel=""
              yAxisSuffix="%"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",

                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizStats;

const styles = StyleSheet.create({
  textGreetingWrapper: {
    paddingTop: Platform.OS === "ios" ? 20 : 15,
  },
  textTopicIndex: {
    fontFamily: "SFProDisplay-Medium",
    color: Colors.textLight,
    fontSize: 18,
  },
  topicImage: {
    alignSelf: "center",
  },

  title: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: 26,
    marginBottom: 16,
  },

  bottomSheetContainer: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  modalmenu: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: Colors.lightGreen,
    borderRadius: 11,
    marginVertical: 8,
    alignSelf: "stretch",
  },
});
