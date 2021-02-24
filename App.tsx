import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

// react navigation library
import { NavigationContainer } from '@react-navigation/native';
// drawer navigation library
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// stack navigation library
import { createStackNavigator } from '@react-navigation/stack';
// web view library
import { WebView } from 'react-native-webview';
// icons
import { Ionicons, MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

// example/default app
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

// Default style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerLeftContainerStyle: {marginLeft: 8}, headerLeft: () => (
            <Ionicons.Button
              name="menu-sharp"
              size={26}
              onPress={() => navigation.openDrawer()}
              backgroundColor="#808080"
              iconStyle={{ marginLeft:2, marginRight: 2}}
            />
          ), }} />
    </Stack.Navigator>
  );
}

function Livestreams({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Livestreams Screen</Text>
    </View>
  );
}

function LivestreamsScreen({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Livestreams" component={Livestreams} options={{ title: 'Livestreams', headerLeftContainerStyle: {marginLeft: 8}, headerLeft: () => (
          <Ionicons.Button
            name="menu-sharp"
            size={26}
            onPress={() => navigation.openDrawer()}
            backgroundColor="#808080"
            iconStyle={{ marginLeft:2, marginRight: 2}}
          />
          ), }} />
    </Stack.Navigator>
  );
}

function Announcements({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Announcements Screen</Text>
    </View>
  );
}

function AnnouncementsScreen({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Announcements" component={Announcements} options={{ title: 'Announcements', headerLeftContainerStyle: {marginLeft: 8}, headerLeft: () => (
          <Ionicons.Button
            name="menu-sharp"
            size={26}
            onPress={() => navigation.openDrawer()}
            backgroundColor="#808080"
            iconStyle={{ marginLeft:2, marginRight: 2}}
          />
          ), }} />
    </Stack.Navigator>
  );
}

function Events({ navigation }) {
  return (
    <WebView source={{ uri: 'https://www.newlifechurchfremont.org/events' }} />
  );
}

function EventsScreen({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Events" component={Events} options={{ title: 'Events', headerLeftContainerStyle: {marginLeft: 8}, headerLeft: () => (
          <Ionicons.Button
            name="menu-sharp"
            size={26}
            onPress={() => navigation.openDrawer()}
            backgroundColor="#808080"
            iconStyle={{ marginLeft:2, marginRight: 2}}
          />
          ), }} />
    </Stack.Navigator>
  );
}

function Scripture({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Scripture Screen</Text>
    </View>
  );
}

function ScriptureScreen({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Scripture" component={Scripture} options={{ title: 'Scripture', headerLeftContainerStyle: {marginLeft: 8}, headerLeft: () => (
          <Ionicons.Button
            name="menu-sharp"
            size={26}
            onPress={() => navigation.openDrawer()}
            backgroundColor="#808080"
            iconStyle={{ marginLeft:2, marginRight: 2}}
          />
          ), }} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

// Image styling for header
const imageDrawerStyle = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingLeft: 10,
    backgroundColor: "#F0F0F0",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

// To create custom header for drawer
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={imageDrawerStyle.container}>
        <Image
          style={imageDrawerStyle.tinyLogo}
          source={{ uri: 'https://images.squarespace-cdn.com/content/5c3e4abaf8370af72b75dcdb/1548477106961-SJ8LS95A4OBLBKOC450M/Logo+2.png?content-type=image%2Fpng' }}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props}/> } >
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="Livestreams" component={LivestreamsScreen} options={{
          title: 'Livestreams',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="tv-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="Announcements" component={AnnouncementsScreen} options={{
          title: 'Announcements',
          drawerIcon: ({focused, size}) => (
            <AntDesign
              name="notification"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="Events" component={EventsScreen} options={{
          title: 'Events',
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
              name="event"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="Scripture" component={ScriptureScreen} options={{
          title: 'Scripture',
          drawerIcon: ({focused, size}) => (
            <FontAwesome5
              name="bible"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}