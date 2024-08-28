import React from 'react'
import { View, Text, Image } from 'react-native';
import tw from "twrnc";
import Button from '../components/Button';
import Bot from '../assets/images/bot-image.png'

const Hero = () => {
  return (
    <View style={tw`w-[320px] bg-[#F1F2EE] h-[280px]`}>
       <View style={tw`justify-center items-center p-4 m-2 mt-[-10px]`}>
        <Text style={tw`text-center text-[32px] font-bold text-[#032F35]`}>Jago Talk -</Text>
        <Text style={tw`text-center text-[25px] font-bold text-[#032F35]`}>The AI Assistant That</Text>
        <Text style={tw`text-center text-[25px] font-bold text-[#032F35]`}> Powers Your Business</Text>
        
      </View>
      <View style={tw`justify-center items-center p-4 mt-[-30px]`}>
        <Text style={tw`text-center`} > <span style={tw`font-bold`}>Jago Talk</span> is a cutting edge voice bot platform that delivers un-paralled conversational AI experience</Text>
      </View>
      <View style={tw`flex-row justify-between px-5 py-3`}>
        <Button title="Learn More" style={tw`flex-1 mx-2 bg-[#F1F2EE] `}  borderColor="#032F35" />
        <Button title="Get Started" style={tw`flex-1 mx-2 bg-[#B6ED3E]`}  borderColor="#032F35" />
      </View>
      <View>
      <Image
        source={Bot}
      />
     
      </View>
     
  </View>
  )
}

export default Hero;