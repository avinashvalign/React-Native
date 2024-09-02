import React from 'react'
import { View, Image } from 'react-native'
import tw from "twrnc";
import HeaderUserInput from './HeaderUserInput';

const CollectingInfo = () => {
    return (
        <>
            <View style={tw`flex justify-center items-center px-2 bg-white py-2 rounded-2xl w-full max-w-[355px] box-border`}>
                <View style={tw`flex flex-col max-w-full`}>
                    <HeaderUserInput /> 
                    <Image
                        source={require('../../assets/images/loadingboat.gif')}
                        style={tw`self-center w-[225px] h-[225px]`}
                    />
                    <View style={tw`text-base font-medium leading-2 text-center text-neutral-400 max-md:max-w-full`}>
                        Collecting informations...
                    </View>
                </View>
            </View>
        </>
    )
}

export default CollectingInfo
