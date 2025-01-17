import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../../assets/theme/ThemeProvider";
import { color } from "react-native-reanimated";

const ResultModal = ({
  isModalVisible,
  correctCount,
  totalCount,
  incorrectCount,
  handleOnClose,
  handleRetry,
  attemptsLeftCount,
  handleHome,
}) => {
  const { colors, isDark } = useTheme();
  console.log(totalCount);
  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      hardwareAccelerated={true}
      visible={isModalVisible}
      onRequestClose={handleOnClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.black + "90",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.elevated,
            width: "90%",
            borderRadius: 10,
            padding: 40,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: colors.text,
              fontFamily: "SFProDisplay-Bold",
              justifyContent: "center",
            }}
          >
            Assesment Results
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignItems: "center", padding: 20 }}>
              <Text
                style={{
                  color: Colors.success,
                  fontSize: 30,
                  fontFamily: "SFProDisplay-Bold",
                }}
              >
                {correctCount}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "SFProDisplay-Bold",
                  color: colors.heading5,
                }}
              >
                Correct
              </Text>
            </View>
            <View style={{ alignItems: "center", padding: 20 }}>
              <Text
                style={{
                  color: Colors.error,
                  fontSize: 30,
                  fontFamily: "SFProDisplay-Bold",
                }}
              >
                {incorrectCount}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "SFProDisplay-Bold",
                  color: colors.heading5,
                }}
              >
                Incorrect
              </Text>
              <Text
                style={{
                  color: Colors.success,
                  fontSize: 30,
                  fontFamily: "SFProDisplay-Bold",
                }}
              >
                {(correctCount / totalCount) * 100 + "%"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "SFProDisplay-Bold",
                  color: colors.heading5,
                }}
              >
                Percentage
              </Text>
            </View>
          </View>
          <Text
            style={{
              opacity: 0.8,
              fontFamily: "SFProDisplay-Medium",
              color: colors.heading5,
            }}
          >
            {attemptsLeftCount} Attempts Left
          </Text>

          {/* Try agian */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              width: "100%",
              backgroundColor: Colors.primary,
              marginTop: 20,
              borderRadius: 50,
            }}
            onPress={handleRetry}
          >
            <MaterialIcons name="replay" style={{ color: Colors.white }} />
            <Text
              style={{
                textAlign: "center",
                color: Colors.white,
                marginLeft: 10,
                fontFamily: "SFProDisplay-Medium",
              }}
            >
              Try Again
            </Text>
          </TouchableOpacity>
          {/* Go Home */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              width: "100%",
              backgroundColor: Colors.primary + "20",
              marginTop: 20,
              borderRadius: 50,
            }}
            onPress={handleHome}
          >
            <MaterialIcons name="home" style={{ color: Colors.primary }} />
            <Text
              style={{
                textAlign: "center",
                color: Colors.primary,
                marginLeft: 10,
                fontFamily: "SFProDisplay-Medium",
              }}
            >
              Go Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ResultModal;
