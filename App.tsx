import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <View>
      <Navbar/>
      <LandingPage/>
    </View>
  );
}
