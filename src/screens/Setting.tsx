import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../utils/ContextAPI';

const SettingsScreen = ({ navigation }: any) => {
  const { deleteData, setIsAdmin, isAdmin } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin)
  }

  async function Logout() {
    await deleteData();
    navigation.replace('welcome');
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
        <Text style={styles.sectionTitle}>Toggle Admin</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isAdmin ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleAdmin}
          value={isAdmin}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={darkModeEnabled}
        />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={{ color: 'white', fontSize: 20 }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Name: Favour Oghechi</Text>
      <Text style={styles.text}>Email: FavourOghechi@gmail.com</Text>
      <TouchableOpacity style={styles.button} onPress={Logout}>
        <Text style={{ color: 'white', fontSize: 20 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#f0f0f0',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'black'
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginVertical: 4
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    color: 'white'
  },
});

export default SettingsScreen;