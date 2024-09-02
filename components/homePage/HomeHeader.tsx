import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import tw from "twrnc";
import { MdMenu } from "react-icons/md";

const HomeHeader = () => {
    return (
        <>
            {/* navigation bar start */}
            <View style={tw`min-w-[375px] w-full px-[20px] py-[8px] bg-white`}>
                <View style={tw`flex flex-row items-center gap-3`}>
                    <TouchableOpacity>
                        <MdMenu size={32} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/jt-logo.svg')}
                            style={tw`w-[40px] h-[24px] object-contain`}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* navigation bar end */}
        </>
    )
}

export default HomeHeader
