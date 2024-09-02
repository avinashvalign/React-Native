import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from "twrnc";


const FirstView = () => {
    return (
        <>
            {/* username with bot image start */}
            <View style={tw`flex flex-col w-full items-center justify-center gap-3 my-4`}>
                <Image
                    source={require('../../assets/images/cosmo-home-logo.svg')}
                    style={tw`w-[60px] h-[60px] object-contain`}
                />
                <View style={tw`flex flex-col w-full items-center justify-center`}>
                    <Text style={tw`text-2xl leading-6 mb-0 font-bold text-black`} className='' >Hello John!</Text>
                    <Text style={tw`text-2xl leading-6 mb-0 font-bold text-zinc-500`} >How may I assist you</Text>
                    <Text style={tw`text-2xl leading-6 mb-0 font-bold text-zinc-500`} >today?</Text>
                </View>
            </View>
            {/* username with bot image end */}
        </>
    )
}

export default FirstView
