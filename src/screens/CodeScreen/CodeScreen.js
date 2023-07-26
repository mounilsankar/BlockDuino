import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DragAndDrop from "../../lib/DragAndDrop";
import { AuthProvider } from '../../navigation/AuthProvider';
import CustomSmallBlock from "../../components/CustomSmallBlock/CustomSmallBlock";
import CustomBigBlock from "../../components/CustomBigBlock/CustomBigBlock";
export default function CodeScreen() {
  const [items, setItems] = React.useState([
    { id: 1, type:"small",text: "setPin" },
    { id: 3, type:"small", text: "stateOfPin" },
    { id: 3, type:"small", text: "readAnalogPin" },
    { id: 4, type:"small", text: "readAnalogPin" },
  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      text: "on start", type:"big",
      contains: [
     { id: 9, type:"small", text: "readAnalogPin" },
    { id: 10, type:"small", text: "readAnalogPin" },

    ],
    },
    {
      id: 2,
      text: "forever", type:"big",
      contains: [
     { id: 9, type:"small", text: "readAnalogPin" },
    { id: 10, type:"small", text: "readAnalogPin" },

    ],
    },
  ]);

  return (
    /*<View>
    <CustomBigBlock/>
    </View>*/
    <DragAndDrop
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      itemKeyExtractor={(item) => item.id}
      zoneKeyExtractor={(zone) => zone.id}
      zones={zones}
      items={items}
      itemsContainerStyle={styles.itemsContainerStyle}
      zonesContainerStyle={styles.zonesContainerStyle}
      onMaj={(zones, items) => {
        setItems(items);
        setZones(zones);
      }}
      itemsInZoneStyle={styles.itemsInZoneStyle}
      renderItem={(item) => {
        if (item.type==="big"){
            return(<CustomBigBlock id={item.text}/>);
        }
          return(<CustomSmallBlock id={item.text}/>);
      }}
      renderZone={(zone, children, hover) => {
        return (
          /*<View
            style={{
              ...styles.dragZoneStyle,
              backgroundColor: hover ? "#E2E2E2" : "#FFF",
            }}
          >
            <Text stylae={styles.dragZoneTextStyle}>{zone.text}</Text>
            {children}
          </View>*/
          <View style={styles.bigBlock}>
          <View style={{flexDirection:"row",padding:5}}>
              <Text>   {zone.text} </Text>
          </View>
          <View style={{flexDirection:"row",padding:5,justifyContent:"flex-end",alignContent:"center"}}>
              <Text style={{width:30}}>  </Text>
              <View style={[{flexDirection:"column",flex:1,backgroundColor: hover ? "#E2E2E2" : "#FFF",minHeight:130,minWidth:200}]}>{children}</View>
          </View>
          </View>
          /*<CustomBigBlock  style={{
            ...styles.dragZoneStyle,backgroundColor: hover ? "#E2E2E2" : "#FFF",
          }} children={children} cid={zone.text}/>*/
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  bigBlock:{
    borderRadius:5,
    flexDirection:"column",
    justifyContent:"flex-start",
    minWidth:250,
    minHeight:100,
    backgroundColor:"blue"
},
  container: {
    flex: 1,
  },
  itemsInZoneStyle: {
    width: "100%",
  },
  contentContainerStyle: {
    padding: 20,
    paddingTop: 40,
  },
  itemsContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  zonesContainerStyle: {
    flexDirection: "column",
    flexWrap: "wrap",
    borderColor:"black",
    borderWidth:2,
    justifyContent: "space-between",
  },
  dragItemStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "47%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  dragItemTextStyle: {
    color: "#011F3B",
    fontWeight: "700",
    textAlign: "center",
  },
  dragZoneStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "47%",
    //padding: 15,
    minHeight: 130,
    //marginVertical: 15,
  },
  dragZoneTextStyle: {
    position: "absolute",
    opacity: 0.2,
    zIndex: 0,
    alignSelf: "center",
    top: "50%",
  },
});
