import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import tw from "twrnc";

import Listening from '../components/homePage/Listening';
import CollectingInfo from '../components/homePage/CollectingInfo';
import UserInput from '../components/homePage/UserInput';
import FirstView from '../components/homePage/FirstView';
import HomeHeader from '../components/homePage/HomeHeader';
import Responses from '../components/homePage/Responses';

const HomePage = () => {
    const [micImage, setMicImage] = useState('writting')

    return (
        <View style={tw`flex-1 w-full min-w-[375px]`}>
            {/* navigation bar start */}
            <HomeHeader />
            {/* navigation bar end */}
            {/* home page content start */}
            <View style={tw`flex-1 gap-8 bg-[#D8D8D8] flex flex-col justify-between w-full px-3 py-3`}>
                {/* Main Content */}
                <ScrollView style={tw`flex-1`} contentContainerStyle={tw`flex-1 justify-start`}>
                    {/* {micImage == 'writting' ? (
                        <FirstView />
                    ) : micImage == 'listening' ? (
                        // bot and listening gif start 
                        <View>
                            <Listening />
                        </View>
                        // bot and listening gif end 
                    ) : (
                        // bot and collecting gif start 
                        <View style={tw`w-full`}>
                            <CollectingInfo />
                        </View>
                        // bot and collecting gif end 
                    )} */}
                    {/* <View style={tw`mb-2.5`}>  */}
                    <Responses />
                    {/* </View> */}
                </ScrollView>

                <UserInput micImage={micImage} setMicImage={setMicImage} />
            </View>
            {/* home page content end */}
        </View>
        // </DrawerLayoutAndroid>
    )
}

export default HomePage;
