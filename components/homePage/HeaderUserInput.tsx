import React, { useState } from 'react'
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import tw from "twrnc";
import { Avatar } from 'react-native-paper';

import { CiEdit, CiCircleCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";


const HeaderUserInput = () => {

    const [edit, setEdit] = useState(false)
    let initialText = 'What were my top products last month?'
    const [textVal, setTextVal] = useState(initialText);

    return (
        <View style={tw`flex flex-row gap-2 items-center w-full`}>
            {/* <View style={tw`flex items-center justify-center px-1.5 my-auto w-6 h-6 whitespace-nowrap bg-teal-800 rounded-[75px]`}>
                <Text style={tw`text-white`}>JD</Text>
            </View> */}
            <Avatar.Text size={24} label="JD" />
            <View style={tw`flex-row flex-1 p-2 gap-1 items-center text-base font-medium leading-6 rounded-lg border text-neutral-600 relative`}>
                <View style={tw`flex-1 items-start text-base font-medium leading-6`}>
                    <TextInput
                        style={tw`w-full`}
                        value={textVal}
                        readOnly={!edit}
                        multiline={true}
                        onChangeText={(text)=>setTextVal(text)}
                    />
                </View>

                {edit ? (
                    <TouchableOpacity style={tw`flex flex-row justify-end items-center gap-1`}>
                        <CiCircleCheck 
                        fontSize={24}
                        onClick={() => setEdit(false)} />
                        <RxCrossCircled 
                        fontSize={24}
                        onClick={() => setEdit(false)} />
                    </TouchableOpacity>)
                    : (
                        <TouchableOpacity onPress={() => setEdit(true)}>
                            <CiEdit fontSize={24} />
                        </TouchableOpacity>
                    )}
            </View>
        </View>
    )
}

export default HeaderUserInput