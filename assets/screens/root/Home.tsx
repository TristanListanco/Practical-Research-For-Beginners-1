import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../../constants/colors";
import SearchBarInput from "../../components/inputs/SearchBarInput";
import HomeCard from "../../components/cards/HomeCard";
import QuarterlyLessons from "../../components/cards/QuarterlyLessons"
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {}

const Home: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  console.log("HomeView Initialized");
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
         <StatusBar style="auto" />
        {/* Header */}
        <View style={styles.contentWrapper}>
          <View>
            <Feather
              name="menu"
              size={24}
              color="black"
              onPress={() => navigation.openDrawer()}
            />
            <View style={styles.textGreetingWrapper}>
              <Text style={styles.textGreeting}>Good Morning</Text>
              <Text style={styles.textName}>Tristan Listanco</Text>
            </View>
            <View style={styles.searchBarWrapper}>
              <SearchBarInput />

              {/* Content */}
              <HomeCard />
              <Text style={styles.textQuarterlyLessons}>Quarterly Lessons</Text>
              <TouchableOpacity>
              <QuarterlyLessons/>
              </TouchableOpacity>
              
              <QuarterlyLessons/>
              <QuarterlyLessons/>
              <QuarterlyLessons/>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentWrapper: {
    marginTop: Platform.OS === "ios" ? 15 : 50,
    marginLeft: 25,
    marginRight: 25,
  },
  textGreetingWrapper: {
    paddingTop: Platform.OS === "ios" ? 20 : 15,
  },
  textGreeting: {
    fontFamily: "Proxima-Nova-Medium",
    color: Colors.textLight,
    fontSize: 24,
  },
  textName: {
    fontFamily: "Proxima-Nova-Bold",
    color: Colors.text,
    fontSize: 36,
  },
  searchBarWrapper: {
    paddingTop: 15,
  },

  textQuarterlyLessons: {
    fontFamily: "Proxima-Nova-Bold",
    fontSize: 18,
    marginTop: 15,
  },
});
