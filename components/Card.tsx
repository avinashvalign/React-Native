import React, { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { FaStar, FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import tw from 'twrnc';
import image1 from "../assets/images/image-1.svg";
import image2 from "../assets/images/image-2.svg";
import image3 from "../assets/images/image-3.svg";



const testimonials = [
  {
    id: 1,
    text: "The sales pipeline and automation tools have been a massive time-saver. We can now manage leads and deals more efficiently, which has had a direct impact on our bottom line.",
    name: "Marvin McKinney",
    position: "Team Leader",
    image: image1,
    rating: 5
  },
  {
    id: 2,
    text: "Voice commands have saved me hours each week. It's so much easier to update leads and manage deals on the go.",
    name: "Tyra Dhillon",
    position: "Software Tester",
    image: image2,
    rating: 4
  },
  {
    id: 3,
    text: "The sales pipeline and automation tools have been a massive time-saver. We can now manage leads and deals more efficiently, which has had a direct impact on our bottom line.",
    name: "Courtney Henry",
    position: "UI/UX Designer",
    image: image3,
    rating: 5
  }
];


const Card = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 300; // Width of each card
  const totalCards = 3; // Total number of cards

  const scrollLeft = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      scrollViewRef.current.scrollTo({ x: newIndex * cardWidth, animated: true });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (currentIndex < totalCards - 1) {
      const newIndex = currentIndex + 1;
      scrollViewRef.current.scrollTo({ x: newIndex * cardWidth, animated: true });
      setCurrentIndex(newIndex);
    }
  };


  return (
    <View style={tw`mt-3`}>
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      style={tw`flex-row`}
    >
      {testimonials.map((testimonial) => (
        <View
          key={testimonial.id}
          style={tw`p-4 w-[300px] rounded-lg border border-[#E4E4E4] bg-[#F4F5F5] mr-4`}
        >
          <View>
            <Text style={tw`text-[16px] text-[#03F35] flex-row`}>
              {Array(testimonial.rating)
                .fill(null)
                .map((_, index) => (
                  <FaStar key={index} />
                ))}
            </Text>
            <Text style={tw`text-[#032F35] font-normal text-[14px]`}>
              {testimonial.text}
            </Text>
          </View>
          <View style={tw`mt-3`}>
            <View style={tw`flex-row gap-2`}>
              <Image
                source={testimonial.image}
                height={40}
                width={40}
                style={tw`border border-gray-500 rounded-full h-[40px] w-[40px]`}
              />
              <View>
                <Text style={tw`text-4 font-bold text-[#032F35]`}>
                  {testimonial.name}
                </Text>
                <Text style={tw`text-[#4A5151] text-[14px]`}>
                  {testimonial.position}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  
    {/* Scroll Buttons */}
    <View style={tw`flex-row justify-center mt-4`}>
      <TouchableOpacity
        onPress={scrollLeft}
        style={tw`p-2 bg-[#03F35] rounded-lg flex-row items-center mr-2`}
        disabled={currentIndex === 0}
      >
        <FaCaretLeft size={20} color="#032F35" />
        <Text style={tw`text-white text-[16px] ml-2`}>Left</Text>
      </TouchableOpacity>
  
      <TouchableOpacity
        onPress={scrollRight}
        style={tw`p-2 bg-[#03F35] rounded-lg flex-row items-center`}
        disabled={currentIndex === testimonials.length - 1}
      >
        <Text style={tw`text-white text-[16px] mr-2`}>Right</Text>
        <FaCaretRight size={20} color="#032F35" />
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default Card;
