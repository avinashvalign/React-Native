import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import tw from "twrnc";

import { MdMenu } from "react-icons/md";
import Listening from '../components/homePage/Listening';


const HomePage = () => {
  const [micImage, setMicImage] = useState(true);
  const [inputText, setInputText] = useState("");

  const toggleMicImage = () => {
    setMicImage(prevState => !prevState);
  };

  const handleInputChange = (text: string) => {
    if (text.length <= 1000) {
      setInputText(text);
    }
  };

  return (
    <View style={tw`w-full`}>
      {/* navigation bar start */}
      <View style={tw` min-w-[375px] w-full px-[20px] py-[8px] bg-white`}>
        <View style={tw`flex flex-row items-center gap-3`}>
          <TouchableOpacity>
            <MdMenu size={32} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/jt-logo.svg')}
              style={tw`w-[40px] h-[24px] object-contain`}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* navigation bar end */}

      {/* home page content start */}
      <View style={tw`bg-[#D8D8D8] h-full flex flex-col justify-center`}>

        {micImage ? (
          // username with bot image start
          <View style={tw`flex flex-col w-full items-center justify-center gap-3 my-4`}>
            <Image
              source={require('../assets/images/cosmo-home-logo.svg')}
              style={tw`w-[60px] h-[60px] object-contain`}
            />
            <View style={tw`flex flex-col w-full items-center justify-center`}>
              <Text style={tw`text-2xl leading-6 mb-0 font-bold text-black`} className='' >Hello John!</Text>
              <Text style={tw`text-2xl leading-6 mb-0 font-bold text-zinc-500`} >How may I assist you</Text>
              <Text style={tw`text-2xl leading-6 mb-0 font-bold text-zinc-500`} >today?</Text>
            </View>
          </View>
          // username with bot image end
        ) : (
          // bot and listening gif start 
          <Listening />
          // bot and listening gif end 
        )}

        {/* user input view start */}
        <View style={tw`flex-1 items-center justify-center w-full px-3 mt-20 `} className='mt'>
          <View style={tw`bg-white rounded-3xl border border-solid border-teal-950 w-full flex flex-col items-center justify-center px-3`}>
            {/* mic image start */}
            <TouchableOpacity style={tw`flex justify-center items-center w-12 h-12 ${micImage ? 'bg-lime-400' : 'bg-[#FF7D7D]'} border border-solid border-teal-950 rounded-[33px] relative bottom-6`} onPress={toggleMicImage}>
              <Image
                source={micImage ? require('../assets/images/microphone.svg') : require('../assets/images/bot-input-recording.svg')}
              />
            </TouchableOpacity >
            {/* mic image end */}

            <View style={tw`w-full flex gap-2 pb-3`}>
              {/* user input with bot and send button start */}
              <View style={tw`flex flex-row gap-2 items-center w-full mt-0`}>
                <Image
                  source={require('../assets/images/cosmologo.svg')}
                />
                <TextInput
                  style={tw`border-0 p-2 w-full rounded text-black bg-stone-100`}
                  placeholder="Ask Cosmos more"
                  multiline={true}

                  // numberOfLines={4}
                  value={inputText}
                  onChangeText={handleInputChange}
                  maxLength={1000}
                />
                <TouchableOpacity onPress={() => setMicImage(true)}>
                  <Image
                    source={require('../assets/images/navigation-arrow.svg')}
                  />
                </TouchableOpacity>
              </View>
              {/* user input with bot and send button end */}

              {/* horizontal line start */}
              <View style={tw`h-[2px] w-full bg-stone-100 `} className='' ></View>
              {/* horizontal line end */}

              {/* output type and character count start */}
              <View style={tw`w-full flex flex-row justify-between items-center `}>
                <View style={tw`flex flex-row gap-1 items-center `}>
                  <TouchableOpacity style={tw`gap-2.5 self-stretch px-2 py-1 my-auto whitespace-nowrap rounded-2xl border border-solid border-stone-300 text-teal-950`}>
                    <Text>Default</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={tw`gap-2.5 self-stretch px-2 py-1 my-auto rounded-2xl border border-solid border-stone-300`}>
                    <Text>Pivot Table</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={tw`gap-2.5 self-stretch px-2 py-1 my-auto whitespace-nowrap rounded-2xl border border-solid border-stone-300`}>
                    <Text>Templates</Text>
                  </TouchableOpacity>
                </View>

                {/* character count view  */}
                <View>
                  <View style={tw`self-stretch my-auto text-stone-300`}>
                    <Text>{inputText.length}/1000</Text>
                  </View>
                </View>
              </View>
              {/* output type and character count end */}
            </View>

          </View>
        </View>
        {/* user input view end */}

      </View>
      {/* home page content end */}
    </View>
  )
}

export default HomePage
