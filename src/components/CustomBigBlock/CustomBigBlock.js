import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
//import DragZOne from '../../lib/DragZone';

class CustomBigBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        const {id,children,style} = this.props;
        switch(id){
          case "onStart":
            return(
              <View style={[styles.bigBlock,{flexDirection:"column"}]}>
                <View style={{flexDirection:"row",padding:5}}>
                    <Text>   on start</Text>
                </View>
                <View style={{flexDirection:"row",padding:5,justifyContent:"flex-end",alignContent:"center"}}>
                    <Text style={{width:30}}>  </Text>
                    <View style={[{flexDirection:"column",backgroundColor:"gray",minHeight:130,minWidth:200},style]}>{children}</View>
                </View>
            </View>
            );
          case "if":
            return (
              <View style={[styles.bigBlock,{flexDirection:"column"}]}>
                  <View style={{flexDirection:"row",padding:5}}>
                      <Text>   if</Text>
                      <TriangleLeft/>
                      <View style={{backgroundColor:"gray",width:50,height:40}}/>
                      <TriangleRight/>
                  </View>
                  <View style={{flexDirection:"row",padding:5,justifyContent:"flex-end",alignContent:"center"}}>
                      <Text style={{width:30}}>do</Text>
                      <View style={[{flexDirection:"column",backgroundColor:"gray",minHeight:130,minWidth:200},style]}>{children}</View>
                  </View>
              </View>
          );
          default:
            <View style={[styles.bigBlock,{flexDirection:"column"}]}>
                <View style={{flexDirection:"row",padding:5}}>
                    <Text>   on start</Text>
                </View>
                <View style={{flexDirection:"row",padding:5,justifyContent:"flex-end",alignContent:"center"}}>
                    <Text style={{width:30}}>  </Text>
                    <View style={[{flexDirection:"column",backgroundColor:"gray",minHeight:130,minWidth:200},style]}>{children}</View>
                </View>
            </View>

        }
        
    }

}
const Triangle = (props) => {
    return <View style={[styles.triangle, props.style]} />;
};
const TriangleLeft = () => {
    return <Triangle style={styles.triangleLeft} />;
  };
const TriangleRight = () => {
    return <Triangle style={styles.triangleRight} />;
};
const styles = StyleSheet.create ({
    bigBlock:{
        borderRadius:5,
        flexDirection:"row",
        justifyContent:"flex-start",
        minWidth:250,
        minHeight:100,
        backgroundColor:"blue"
    },
    numberBlock:{
        borderRadius:20,
        flexDirection:"row",
        justifyContent:"flex-start",
        width:250,
        backgroundColor:"red"
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 40,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
      },
      triangleLeft: {
        transform: [{ rotate: "-90deg" }],
      },
      triangleRight: {
        transform: [{ rotate: "90deg" }],
      },
  container: {
    backgroundColor: '#12DAAA',
    width: '70%',
    height: 40,
    padding: 5,
    marginLeft: 65,
    alignItems: 'center',
    margin: 40
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',

  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
textItem: {
    flex: 1,
    color: "black",
    fontSize: 16,
},
shadow: {
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
},
dropdownContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownOverlay: {
    flex: 1,
    width: '100%',
  },
  dropdownBox: {
    padding: 0,
    height: 40,
  },
  dropdownInput: {
    fontSize: 13,
  },
  dropdownToggle: {
    borderColor:'#444',
    borderWidth:2,
    borderRadius:10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default CustomBigBlock;
