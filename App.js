/*import React from 'react';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import SetPasswordScreen from './src/screens/SetPasswordScreen';
import Navigation from './src/navigation';
import { AuthProvider } from './src/navigation/AuthProvider';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  return (
    <AuthProvider>
    <SafeAreaView style={styles.root}>
       <Navigation />
    </SafeAreaView>
    </ AuthProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default App;*/





import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DragAndDrop from "./src/lib/DragAndDrop";
import { AuthProvider } from './src/navigation/AuthProvider';
import CustomSmallBlock from "./src/components/CustomSmallBlock/CustomSmallBlock";
import CustomBigBlock from "./src/components/CustomBigBlock/CustomBigBlock";
export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, text: "setPin" },
    { id: 2, text: "stateOfPin" },
    { id: 3, text: "readAnalogPin" },
    { id: 4, text: "readAnalogPin" },
  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      text: "Test zone 1",
      items: [{ id: 5, text: "setPin" }],
    },
  ]);

  return (
    <View>
    <CustomBigBlock/>
    </View>
    /*<DragAndDrop
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
        return (
          <CustomSmallBlock id={item.text}/>
        );
      }}
      renderZone={(zone, children, hover) => {
        return (
          <View
            style={{
              ...styles.dragZoneStyle,
              backgroundColor: hover ? "#E2E2E2" : "#FFF",
            }}
          >
            <Text stylae={styles.dragZoneTextStyle}>{zone.text}</Text>
            {children}
          </View>
        );
      }}
    />*/
  );
}

const styles = StyleSheet.create({
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
    flexDirection: "row",
    flexWrap: "wrap",
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
    padding: 15,
    minHeight: 130,
    marginVertical: 15,
  },
  dragZoneTextStyle: {
    position: "absolute",
    opacity: 0.2,
    zIndex: 0,
    alignSelf: "center",
    top: "50%",
  },
});




/*import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import CustomSmallBlock from './src/components/CustomSmallBlock/CustomSmallBlock';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  Platform,
  Easing,
  View,
  Dimensions,
} from 'react-native';
import SortableList from 'react-native-sortable-list';

const window = Dimensions.get('window');

const data = {
  0: {
    image: 'https://placekitten.com/200/240',
    text: 'setPin',
  },
  1: {
    image: 'https://placekitten.com/200/201',
    text: 'stateOfPin',
  },
  2: {
    image: 'https://placekitten.com/200/202',
    text: 'readAnalogPin',
  },
  
};

function Row(props) {
  const {active, data} = props;

  const activeAnim = useRef(new Animated.Value(0));
  const style = useMemo(
    () => ({
      ...Platform.select({
        ios: {
          transform: [
            {
              scale: activeAnim.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          shadowRadius: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
        },

        android: {
          transform: [
            {
              scale: activeAnim.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          elevation: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
      }),
    }),
    [],
  );
  useEffect(() => {
    Animated.timing(activeAnim.current, {
      duration: 300,
      easing: Easing.bounce,
      toValue: Number(active),
      useNativeDriver: true,
    }).start();
  }, [active]);

  return (
    <Animated.View >
      <CustomSmallBlock id={data.text}/>
    </Animated.View>
  );
}

const App = () => {
  const renderRow = useCallback(({data, active}) => {
    return <Row data={data} active={active} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Sortable List</Text>
      <SortableList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderRow={renderRow}
      />
      <SortableList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderRow={renderRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#999999',
  },
  list: {
    flex: 1,
    borderColor:"black",
    borderWidth:2
  },
  contentContainer: {
    width: window.width,
    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
      },
      android: {
        paddingHorizontal: 0,
      },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },
      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    }),
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 25,
  },
  text: {
    fontSize: 24,
    color: '#222222',
  },
});

export default App;





/*import React, { useState } from 'react';
import {
  Image,
  Platform,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Animated, {
  cancelAnimation,
  runOnJS,
  scrollTo,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';


function clamp(value, lowerBound, upperBound) {
  'worklet';
  return Math.max(lowerBound, Math.min(value, upperBound));
}

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function objectMove(object, from, to) {
  'worklet';
  const newObject = Object.assign({}, object);

  for (const id in object) {
    if (object[id] === from) {
      newObject[id] = to;
    }

    if (object[id] === to) {
      newObject[id] = from;
    }
  }

  return newObject;
}

function listToObject(list) {
  const values = Object.values(list);
  const object = {};

  for (let i = 0; i < values.length; i++) {
    object[values[i].id] = i;
  }

  return object;
}

const ALBUM_COVERS = {
  DISCOVERY:
    'https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg',
  HUMAN_AFTER_ALL:
    'https://upload.wikimedia.org/wikipedia/en/0/0d/Humanafterall.jpg',
  HOMEWORK:
    'https://upload.wikimedia.org/wikipedia/en/9/9c/Daftpunk-homework.jpg',
  RANDOM_ACCESS_MEMORIES:
    'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg',
};

const DAFT_PUNK = 'Daft Punk';

const SONGS = shuffle([
  {
    id: 'one-more-time',
    title: 'One More Time',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.DISCOVERY,
  },
  {
    id: 'digital-love',
    title: 'Digital Love',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.DISCOVERY,
  },
  {
    id: 'nightvision',
    title: 'Nightvision',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.DISCOVERY,
  },
  {
    id: 'something-about-us',
    title: 'Something About Us',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.DISCOVERY,
  },
  {
    id: 'veridis-quo',
    title: 'Veridis Quo',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.DISCOVERY,
  },
  {
    id: 'make-love',
    title: 'Make Love',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
  },
  {
    id: 'television-rules-the-nation',
    title: 'Television Rules the Nation',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.HUMAN_AFTER_ALL,
  },
  {
    id: 'phoenix',
    title: 'Phoenix',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.HOMEWORK,
  },
  {
    id: 'revolution-909',
    title: 'Revolution 909',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.HOMEWORK,
  },
  {
    id: 'around-the-world',
    title: 'Around the World',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.HOMEWORK,
  },
  {
    id: 'within',
    title: 'Within',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.RANDOM_ACCESS_MEMORIES,
  },
  {
    id: 'touch',
    title: 'Touch (feat. Paul Williams)',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.RANDOM_ACCESS_MEMORIES,
  },
  {
    id: 'beyond',
    title: 'Beyond',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.RANDOM_ACCESS_MEMORIES,
  },
  {
    id: 'motherboard',
    title: 'Motherboard',
    artist: DAFT_PUNK,
    cover: ALBUM_COVERS.RANDOM_ACCESS_MEMORIES,
  },
]);

const SONG_HEIGHT = 70;
const SCROLL_HEIGHT_THRESHOLD = SONG_HEIGHT;

function Song({ artist, cover, title }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: SONG_HEIGHT,
        padding: 10,
      }}
    >
      <Image
        source={{ uri: cover }}
        style={{ height: 50, width: 50, borderRadius: 4 }}
      />

      <View
        style={{
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 4,
          }}
        >
          {title}
        </Text>

        <Text style={{ fontSize: 12, color: 'gray' }}>{artist}</Text>
      </View>
    </View>
  );
}

function MovableSong({
  id,
  artist,
  cover,
  title,
  positions,
  scrollY,
  songsCount,
}) {
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [moving, setMoving] = useState(false);
  const top = useSharedValue(positions.value[id] * SONG_HEIGHT);

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition) {
        if (!moving) {
          top.value = withSpring(currentPosition * SONG_HEIGHT);
        }
      }
    },
    [moving]
  );

  const gestureHandler = useAnimatedGestureHandler({
    onStart() {
      runOnJS(setMoving)(true);

      if (Platform.OS === 'ios') {
        runOnJS(Haptics.impactAsync)(
          Haptics.ImpactFeedbackStyle.Medium
        );
      }
    },
    onActive(event) {
      const positionY = event.absoluteY + scrollY.value;

      if (positionY <= scrollY.value + SCROLL_HEIGHT_THRESHOLD) {
        // Scroll up
        scrollY.value = withTiming(0, { duration: 1500 });
      } else if (
        positionY >=
        scrollY.value + dimensions.height - SCROLL_HEIGHT_THRESHOLD
      ) {
        // Scroll down
        const contentHeight = songsCount * SONG_HEIGHT;
        const containerHeight =
          dimensions.height - insets.top - insets.bottom;
        const maxScroll = contentHeight - containerHeight;
        scrollY.value = withTiming(maxScroll, { duration: 1500 });
      } else {
        cancelAnimation(scrollY);
      }

      top.value = withTiming(positionY - SONG_HEIGHT, {
        duration: 16,
      });

      const newPosition = clamp(
        Math.floor(positionY / SONG_HEIGHT),
        0,
        songsCount - 1
      );

      if (newPosition !== positions.value[id]) {
        positions.value = objectMove(
          positions.value,
          positions.value[id],
          newPosition
        );

        if (Platform.OS === 'ios') {
          runOnJS(Haptics.impactAsync)(
            Haptics.ImpactFeedbackStyle.Light
          );
        }
      }
    },
    onFinish() {
      top.value = positions.value[id] * SONG_HEIGHT;
      runOnJS(setMoving)(false);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      top: top.value,
      zIndex: moving ? 1 : 0,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: withSpring(moving ? 0.2 : 0),
      shadowRadius: 10,
    };
  }, [moving]);

  return (
    <Animated.View style={animatedStyle}>
      <BlurView intensity={moving ? 100 : 0} tint="light">
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={{ maxWidth: '80%' }}>
            <Song artist={artist} cover={cover} title={title} />
          </Animated.View>
        </PanGestureHandler>
      </BlurView>
    </Animated.View>
  );
}

export default function App() {
  const positions = useSharedValue(listToObject(SONGS));
  const scrollY = useSharedValue(0);
  const scrollViewRef = useAnimatedRef();

  useAnimatedReaction(
    () => scrollY.value,
    (scrolling) => scrollTo(scrollViewRef, 0, scrolling, false)
  );

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Animated.ScrollView
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            style={{
              flex: 1,
              position: 'relative',
              backgroundColor: 'white',
            }}
            contentContainerStyle={{
              height: SONGS.length * SONG_HEIGHT,
            }}
          >
            {SONGS.map((song) => (
              <MovableSong
                key={song.id}
                id={song.id}
                artist={song.artist}
                cover={song.cover}
                title={song.title}
                positions={positions}
                scrollY={scrollY}
                songsCount={SONGS.length}
              />
            ))}
          </Animated.ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
            }*/
