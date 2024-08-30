import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  DrawerLayoutAndroid,
  Button,
  StyleSheet,
} from "react-native";
import tw from "twrnc";

import { MdMenu } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const Navbar = () => {
 

  return (
    <>
      <View
        style={tw`flex flex-row gap-[130px] w-[390px] h-[80px] border border-gray-300 mt-0 p-5 bg-[#F1F2EE] items-center`}
      >
        <View style={tw`flex flex-row items-center gap-2`}>
          <MdMenu size={24} color="#000" />
          <Text style={tw`text-green-700 text-2xl font-bold`}>JT</Text>
        </View>

        <TouchableOpacity
          style={[
            tw`bg-[#B6ED3E] px-3 py-2 flex-row items-center`,
            { borderRadius: 25, borderWidth: 2, borderColor: "#032F35" }, // Custom border radius
          ]}
        >
          <LuUser2 size={24} color="#032F35" />
          <Text style={tw`text-[#032F35] text-lg ml-1 font-bold`}>Login</Text>
        </TouchableOpacity>
      </View>

    
    </>
  );
};



export default Navbar;
