import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { FaStar } from "react-icons/fa";

import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import Card from "../components/Card";

const Reviews = () => {
  return (
    <>
      <View style={tw`p-4 w-[320px]  bg-[#FFF]`}>
        <View>
          <Text style={tw`text-center text-[25px] font-bold text-[#032F35]`}>
            Trusted by over 10K+ Business
          </Text>
          <Text style={tw`text-center text-[#032F35] mt-1`}>
            Here real client success stories and see how you can achieve similar
            results
          </Text>
        </View>
        <Card />
      </View>
    </>
  );
};

export default Reviews;
