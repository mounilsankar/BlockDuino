import * as React from "react";
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

const CustomHeader= ({ control,
              text,
              }) => {
  return (
    <Header
      backgroundColor="#12DAAA"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "My Projects",
        style: { color: "#fff", fontFamily: 'Lato', fontSize: 25,}

      }}
      centerContainerStyle={{}}
      containerStyle={{ width: '100%' }}
      leftComponent={{ Icon: "menu", color: "#fff" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={{ Icon: "home", color: "#fff" }}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
}
export default CustomHeader;