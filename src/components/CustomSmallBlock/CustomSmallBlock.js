import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

class CustomSmallBlock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        options: [0, 1, 2, 3, 4, 5, 9, 10, 12, 13, 14, 15, 17],
        selected: "",
        items: [],
        options2: ['HIGH', 'LOW'],
        selected2: "",
        isDropdownVisible: false,
        optionSelected: 1
      };
    }
  
    toggleDropdown = (val) => {
      if (val !== undefined) {
        this.setState({ optionSelected: val });
      }
      this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
    };
  
    renderDropdown = (optionSelected) => {
      let option = {};
      let setSelect = null;
      if (optionSelected === 1) {
        option = this.state.options;
        setSelect = this.state.selected;
      }
      if (optionSelected === 2) {
        option = this.state.options2;
        setSelect = this.state.selected2;
      }
      if (this.state.isDropdownVisible) {
        return (
          <Modal transparent visible={this.state.isDropdownVisible} onRequestClose={this.toggleDropdown}>
            <View style={styles.dropdownContainer}>
              <SelectList
                maxHeight={300}
                setSelected={(val) => {
                    if (optionSelected === 1){
                        this.state.selected=val;
                    }
                    if (optionSelected ===2){
                        this.state.selected2=val;
                    }
                  this.toggleDropdown();
                }}
                search={false}
                data={option}
                save="value"
                placeholder={option[0]}
                boxStyles={styles.dropdownBox}
                inputStyles={styles.dropdownInput}
              />
            </View>
          </Modal>
        );
      }
      return null;
    };
  
    render() {
      const { id } = this.props;
      const { options, selected, items, options2, selected2, optionSelected } = this.state;
  
      switch (id) {
        case "stateOfPin":
          return (
            <View style={{ width: 200 }}>
              <View style={{ flexDirection: 'row', padding: 0, zIndex: 1 }}>
                <TriangleLeft />
                <View style={{ flexDirection: 'row', height: 40, backgroundColor: "red", justifyContent: 'center' }}>
                  <Text style={{ zIndex: 1, paddingTop: 10 }}>state of pin</Text>
                </View>
                <TouchableOpacity style={[styles.dropdownToggle, { backgroundColor: "red", width: 50 }]} onPress={() => this.toggleDropdown(1)}>
                  <Text>{selected || options[0]}</Text>
                </TouchableOpacity>
                {this.renderDropdown(optionSelected)}
                <TriangleRight />
              </View>
            </View>
          );
        case "setPin":
          return (
            <View style={styles.smallBlock}>
              <View style={{ height: 40 }}>
                <Text style={{ zIndex: 1, paddingTop: 10 }}>set pin </Text>
              </View>
              <TouchableOpacity style={styles.dropdownToggle} onPress={() => this.toggleDropdown(1)}>
                <Text>{selected || options[0]}</Text>
              </TouchableOpacity>
              {this.renderDropdown(optionSelected)}
              <View style={{ height: 40, backgroundColor: "red" }}>
                <Text style={{ zIndex: 1, paddingTop: 10 }}> to </Text>
              </View>
              <TouchableOpacity style={styles.dropdownToggle} onPress={() => this.toggleDropdown(2)}>
                <Text>{selected2 || options2[0]}</Text>
              </TouchableOpacity>
            </View>
          );
        case "readAnalogPin":
          return (
            <View style={[styles.smallBlock, { width: 200 }]}>
              <View style={{ height: 40 }}>
                <Text style={{ zIndex: 1, paddingTop: 10 }}>read analogue pin </Text>
              </View>
              <TouchableOpacity style={styles.dropdownToggle} onPress={() => this.toggleDropdown(1)}>
                <Text>{selected || options[0]}</Text>
              </TouchableOpacity>
              {this.renderDropdown(optionSelected)}
            </View>
          );
        default:
          return (
            <View style={styles.triangle}>
            </View>
          );
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
    smallBlock:{
        borderRadius:5,
        flexDirection:"row",
        justifyContent:"flex-start",
        width:250,
        backgroundColor:"red"
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
export default CustomSmallBlock;