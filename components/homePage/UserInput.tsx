import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import tw from "twrnc";

import { Divider } from 'react-native-paper';

type UserInputProps = {
  micImage: string,
  setMicImage: (micImage: string) => void
}

const UserInput = ({micImage, setMicImage}: UserInputProps) => {
  // const [micImage, setMicImage] = useState('writting');
  const [inputText, setInputText] = useState("");
  const [outputType, setOutputType] = useState("default");

  const toggleMicImage = () => {
    if (micImage == 'writting') {
      setMicImage('listening');
    } else {
      setMicImage('writting');
    }
  };

  const handleInputChange = (text: string) => {
    if (text.length <= 1000) {
      setInputText(text);
    }
  };
  return (
    <>

      {/* user input view start */}
      <View style={tw`bg-white rounded-3xl border border-solid border-teal-950 w-full flex flex-col items-center justify-center px-3`}>
        {/* mic image start */}
        <TouchableOpacity style={tw`flex justify-center items-center w-12 h-12 ${micImage == 'writting' || micImage == 'collecting' ? 'bg-lime-400' : 'bg-[#FF7D7D]'} border border-solid border-teal-950 rounded-[33px] relative bottom-6`} onPress={toggleMicImage}>
          <Image
            source={micImage == 'writting' || micImage == 'collecting' ? require('../../assets/images/microphone.svg') : require('../../assets/images/bot-input-recording.svg')}
          />
        </TouchableOpacity>
        {/* mic image end */}

        <View style={tw`w-full flex gap-2 pb-3`}>
          {/* user input with bot and send button start */}
          <View style={tw`flex flex-row gap-2 items-center w-full mt-0`}>
            <Image
              source={require('../../assets/images/cosmologo.svg')}
            />
            <TextInput
              style={tw`border-0 p-2 w-full rounded text-black bg-stone-100`}
              placeholder="Ask Cosmos more"
              multiline={true}
              value={inputText}
              onChangeText={handleInputChange}
              maxLength={1000}
              readOnly={micImage != 'writting'}
            />
            <TouchableOpacity onPress={() => setMicImage('collecting')}>
              <Image
                source={require('../../assets/images/navigation-arrow.svg')}
              />
            </TouchableOpacity>
          </View>
          {/* user input with bot and send button end */}

          {/* horizontal line start */}
          {/* <View style={tw`h-[2px] w-full bg-stone-100 `} className='font-semibold' ></View> */}
          <Divider />
          {/* horizontal line end */}

          {/* output type and character count start */}
          <View style={tw`w-full flex flex-row justify-between items-center `}>
            <View style={tw`flex flex-row gap-1 items-center `}>
              <TouchableOpacity style={tw`gap-2.5 self-stretch px-2 py-1 my-auto whitespace-nowrap rounded-2xl border border-solid ${outputType === 'default' ? 'border-teal-950' : 'border-stone-300'} `} onPress={() => setOutputType('default')}>
                <Text style={tw`${outputType === 'default' ? 'text-teal-950' : 'text-[#9BA3A3]'}`}>Default</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`gap-2.5 self-stretch px-2 py-1 my-auto rounded-2xl border border-solid ${outputType === 'pivot' ? 'border-teal-950' : 'border-stone-300'}`} onPress={() => setOutputType('pivot')}>
                <Text style={tw`${outputType === 'pivot' ? 'text-teal-950' : 'text-[#9BA3A3]'}`}>Pivot Table</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`gap-2.5 self-stretch px-2 py-1 my-auto whitespace-nowrap rounded-2xl border border-solid ${outputType === 'templates' ? 'border-teal-950' : 'border-stone-300'}`} onPress={() => setOutputType('templates')}>
                <Text style={tw`${outputType === 'templates' ? 'text-teal-950' : 'text-[#9BA3A3]'}`}>Templates</Text>
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
      {/* user input view end */}
    </>
  )
}

export default UserInput
