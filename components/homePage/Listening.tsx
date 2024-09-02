import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import tw from "twrnc";

const Listening = () => {
    return (
        <>
            <View style={tw` flex justify-center items-center px-10 bg-white py-8 rounded-2xl w-full max-w-[355px] box-border`}>
                <View style={tw` flex flex-col max-w-full gap-4`}>
                    <Image
                        source={require('../../assets/images/cosmo-home-logo.svg')}
                        style={tw`w-[120px] h-[120px] object-contain`}
                    />
                    <Image
                        source={require('../../assets/images/voice_loader.gif')}
                        style={tw`w-[120px] h-[120px] object-contain`}
                    />
                </View>
            </View>
        </>
    )
}

export default Listening
