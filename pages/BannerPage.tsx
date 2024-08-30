import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";
import Button from "../components/Button";
import BannerImage from "../assets/images/botwithhuman.svg";

const BannerPage = () => {
  return (
    <>
      <View style={tw`bg-[#B6ED3E] w-[390px] p-4`}>
        <View style={tw`bg-white border rounded-2xl p-3 w-[280px]`}>
          <Text style={tw`text-[#032F35] text-[18px] font-bold`}>
            Ready to Experience the Power of AI Voice Application?
          </Text>
          <Text style={tw`text-[#032F35] text-[14px] font-semibold mt-1`}>
            Discover how Jago Talk can revolutionise your workflow with the help
            of AI voice assistance. Start your free trial today and experience
            the power of hands-free Application management.
          </Text>
          <View style={tw`flex-row mt-4 gap-1`}>
            <Button
              title="Start free Trial"
              style={tw` bg-[#F1F2EE] `}
              borderColor="#032F35"
            />
            <Button
              title="See Pricing"
              style={tw`bg-[#B6ED3E]`}
              borderColor="#032F35"
            />
          </View>
        </View>
        <View style={tw`flex mt-4 w-[280px]`}>
          <Image
            source={BannerImage}
            style={tw`w-full h-[200px] rounded-lg`}
            resizeMode="cover"
          />
        </View>
      </View>
    </>
  );
};

export default BannerPage;
