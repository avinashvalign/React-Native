import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
import Logo from "../assets/images/jago-talk-logo.svg";
import facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import twitter from "../assets/images/X.svg";
import LinkedIn from "../assets/images/Instagram.svg";
import Youtube from "../assets/images/Youtube.svg";

const Footer = () => {
  return (
    <View style={tw`bg-teal-950 flex w-[390px] p-3 flex-col items-start gap-3`}>
      <View style={tw`mt-4`}>
        <Image source={Logo} />
      </View>
      <View style={tw`mt-4  w-[290px]`}>
        <Text style={tw`text-[16px] font-medium text-stone-100`}>Address:</Text>
        <Text style={tw`mt-1 text-[14px] leading-5 text-neutral-400`}>
          64, 4th Floor, Parimala Towers, MES Road, Yeshwanthpur Industrial
          Area, Phase 1, Yeswanthpur, Bengaluru, Karnataka 560022
        </Text>
        <Text style={tw`mt-6 text-base font-medium text-stone-100`}>
          Contact:
        </Text>
        <Text style={tw`mt-1 text-base leading-5 text-neutral-400`}>
          +91 9880566044 / 080-41659605
          {"\n"}
          transformsales@v-align.in
        </Text>
      </View>
      <View style={tw`flex-row gap-2 mt-6 p-1`}>
        <Image source={facebook} style={tw`w-6 h-6`} />
        <Image source={Instagram} style={tw`w-6 h-6`} />
        <Image source={twitter} style={tw`w-6 h-6`} />
        <Image source={LinkedIn} style={tw`w-6 h-6`} />
        <Image source={Youtube} style={tw`w-6 h-6`} />
      </View>
      <View style={tw`flex-row gap-[100px]`}>
        <View style={tw` flex-col gap-4`}>
          <Text style={tw`text-[#FFFFFF] text-[18px] font-bold`}>Pages</Text>
          <Text style={tw`text-[#D2D2D2]`}>About Us</Text>
          <Text style={tw`text-[#D2D2D2]`}>Features</Text>
          <Text style={tw`text-[#D2D2D2]`}>Product</Text>
          <Text style={tw`text-[#D2D2D2]`}>Pricing</Text>
        </View>
        <View style={tw` flex-col gap-4`}>
          <Text style={tw`text-[#FFFFFF] text-[18px] font-bold`}>Company</Text>
          <Text style={tw`text-[#D2D2D2]`}>Careers</Text>
          <Text style={tw`text-[#D2D2D2]`}>Guide</Text>
          <Text style={tw`text-[#D2D2D2]`}>Startup Program</Text>
        </View>
      </View>

      <View style={tw`flex-row gap-[50px]`}>
        <View style={tw` flex-col gap-4`}>
          <Text style={tw`text-[#FFFFFF] text-[18px] font-bold`}>Support</Text>
          <Text style={tw`text-[#D2D2D2]`}>Help Center</Text>
          <Text style={tw`text-[#D2D2D2]`}>Customer Support</Text>
          <Text style={tw`text-[#D2D2D2]`}>API Docs</Text>
          <Text style={tw`text-[#D2D2D2]`}>System Status</Text>
        </View>
        <View style={tw` flex-col gap-4`}>
          <Text style={tw`text-[#FFFFFF] text-[18px] font-bold`}>
            Resources
          </Text>
          <Text style={tw`text-[#D2D2D2]`}>FAQ</Text>
          <Text style={tw`text-[#D2D2D2]`}>Blog</Text>
          <Text style={tw`text-[#D2D2D2]`}>Privacy Policy</Text>
          <Text style={tw`text-[#D2D2D2]`}>Terms of Service</Text>
        </View>
      </View>
      <View style={tw`border-t border-gray-500 w-[290px] mt-10`}></View>
      <View style={tw`flex-row gap-3`}>
        <Text style={tw`font-roboto text-[12px] text-[#075E69] not-italic font-normal leading-[150%] underline `}>Privacy Policy</Text>
        <Text style={tw`font-roboto text-[12px] text-[#075E69] not-italic font-normal leading-[150%] underline `}>Terms of Service</Text>
        <Text style={tw`font-roboto text-[12px] text-[#075E69] not-italic font-normal leading-[150%] underline `}>Cookies Settings</Text>
      </View>
      <View>
        <Text style={tw`font-roboto text-[12px] text-[#075E69] not-italic font-normal leading-[150%] p-2 `}>© 2024 V-Align Technologies. All rights reserved.</Text>
      </View>
    </View>
  );
};

export default Footer;
