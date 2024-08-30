import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { FaDropbox } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa";
import { GrSquare } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { PiNetwork } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import Button from "../components/Button";

const Trust = () => {
  return (
    <>
      <View style={tw`p-4 w-[320px]  bg-[#FFFFFF]`}>
        <Text style={tw`text-center text-[25px] font-bold text-[#032F35]`}>
          Trusted by Many <br /> Established Companies
        </Text>
        <Text style={tw`mt-2 text-center text-[14px] text-black`}>
          20+ Businesses and Companies uses{" "}
          <span style={tw`text-[#032f35] font-bold`}>Jago Talk</span> for their
          Application
        </Text>
      </View>
      {/* Multiple boxes */}
      <View style={tw`bg-[#FFFFFF] w-[350px] text-[25px] p-4`}>
        {/* First Row */}
        <View style={tw`flex-row justify-between mb-4`}>
          <View style={tw`flex-1 items-center`}>
            <Text style={tw`text-[20px] font-bold text-[#17393e]`}>
              Coinbase
            </Text>
          </View>
          <View
            style={tw`flex-1 gap-1 flex-row justify-center items-center space-x-2`}
          >
            <FaDropbox />
            <Text style={tw`text-[20px] font-bold text-[#17393e]`}>
              Dropbox
            </Text>
          </View>
          <View style={tw`flex-1 items-center`}>
            <Text style={tw`text-[20px] font-bold text-[#032F35] `}>
              Google
            </Text>
          </View>
        </View>

        {/* Second Row */}
        <View style={tw`flex-row justify-between`}>
          <View
            style={tw`flex-1  gap-1 flex-row justify-center items-center space-x-2`}
          >
            <FaSlack />
            <Text style={tw`text-[20px] font-bold text-[#032F35] `}>Slack</Text>
          </View>
          <View
            style={tw`flex-1  gap-1 flex-row justify-center items-center space-x-2`}
          >
            <GrSquare />
            <Text style={tw`text-[20px] font-bold text-[#032F35] `}>
              Square
            </Text>
          </View>
          <View style={tw`flex-1 items-center`}>
            <Text style={tw`text-[20px] font-bold text-[#032F35] `}>Zoom</Text>
          </View>
        </View>
      </View>
      <View style={tw`w-[320px] bg-[#F1F2EE] p-4`}>
        <View style={tw`mt-5`}>
          <Text style={tw`text-center text-[25px] font-bold text-[#032F35]`}>
            Why Choose Us?
          </Text>
          <Text style={tw`text-center`}>
            Get real-time sales data with voice commands. Jago Talk automates
            routine tasks, freeing up your time for strategic work
          </Text>
        </View>

        <View style={tw`mt-5  p-1`}>
          <View
            style={tw`flex-row w-[290px] gap-3 border border-gray-500 p-2 rounded-full`}
          >
            <View
              style={tw`bg-[#A3E635] align-middle h-[50px] w-[50px] rounded-full`}
            >
              <FaMicrophone style={tw`m-4`} />
            </View>
            <View>
              <Text style={tw`font-bold text-[#032F35]`}>Speak & Conquer</Text>
              <Text style={tw`text-[13px]`}>
                Manage your Application hands-free <br /> with intuitive voice
                commands
              </Text>
            </View>
          </View>
          <View
            style={tw`flex-row w-[290px] gap-3 mt-3 border border-gray-500 p-2 rounded-full`}
          >
            <View
              style={tw`bg-[#A3E635] align-middle h-[50px] w-[50px] rounded-full`}
            >
              <GiNetworkBars style={tw`m-4`} />
            </View>
            <View>
              <Text style={tw`font-bold text-[#032F35]`}>
                Reduce Manual Errors
              </Text>
              <Text style={tw`text-[13px]`}>
                Focus on closing deals, not fixing <br /> typos. Improve
                accuracy.
              </Text>
            </View>
          </View>
          <View
            style={tw`flex-row w-[290px] gap-3 mt-3 border border-gray-500 p-2 rounded-full`}
          >
            <View
              style={tw`bg-[#A3E635] align-middle h-[50px] w-[50px] rounded-full`}
            >
              <PiNetwork style={tw`m-4`} />
            </View>
            <View>
              <Text style={tw`font-bold text-[#032F35]`}>
                Get Real-Time Insights
              </Text>
              <Text style={tw`text-[13px]`}>
                Need a quick update on your sales <br /> pipeline? Ask your
                Application!
              </Text>
            </View>
          </View>
          <View
            style={tw`flex-row w-[290px] gap-3 mt-3 border border-gray-500 p-2 rounded-full`}
          >
            <View
              style={tw`bg-[#A3E635] align-middle h-[50px] w-[50px] rounded-full`}
            >
              <FaGraduationCap style={tw`m-4`} />
            </View>
            <View>
              <Text style={tw`font-bold text-[#032F35]`}>
                Work Smarter, Not Harder
              </Text>
              <Text style={tw`text-[13px]`}>
                Integrates with your existing <br />
                Application and other business tool.
              </Text>
            </View>
          </View>

          <View
            style={tw`flex-row w-[290px] gap-3 mt-3 border border-gray-500 p-2 rounded-full`}
          >
            <View
              style={tw`bg-[#A3E635] align-middle h-[50px] w-[50px] rounded-full`}
            >
              <FaRegLightbulb style={tw`m-4`} />
            </View>
            <View>
              <Text style={tw`font-bold text-[#032F35]`}>
                Innovation You Can Trust
              </Text>
              <Text style={tw`text-[13px]`}>
                Experience the power of voice and <br /> stay ahead of the curve
              </Text>
            </View>
          </View>
          <View style={tw`mt-5`}>
            <Button
              title="View all Benefits"
              style={tw`flex-1 mx-2 bg-[#B6ED3E] w-full`}
              borderColor="#032F35"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Trust;
