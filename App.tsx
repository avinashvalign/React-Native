import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import HomePage from './pages/HomePage';
import HomePage2 from './pages/HomePage2';

export default function App() {
  return (
    <View>
      {/* <Navbar/>
      <LandingPage/> */}
      {/* <HomePage/> */}
      <HomePage2/>
    </View>
  );
}
