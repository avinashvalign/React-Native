import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import tw from "twrnc";
import { DataTable } from 'react-native-paper';

import { MdOutlineFileUpload } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

import HeaderUserInput from './HeaderUserInput';

const Responses = () => {
    const [responseView, setResponseView] = useState('table');
    return (
        <>
            <View style={tw`flex justify-center items-center px-2 bg-white py-2 rounded-2xl w-full max-w-[420px] box-border`}>
                <ScrollView style={tw`max-h-[400px]`} contentContainerStyle={tw`flex-1`}>
                    <View style={tw`flex flex-col max-w-full`}>
                        {/* user input start */}
                        <HeaderUserInput />
                        {/* user input end */}

                        {/* response start */}
                        <View style={tw`flex flex-col p-3 rounded-xl bg-stone-100 max-w-[326px]`}>
                            <View style={tw`flex flex-row gap-10 justify-between items-center pb-3 w-full border-b border-zinc-300`}>
                                <View style={tw`flex flex-row gap-2 items-center self-stretch my-auto text-xs font-medium leading-none`}>
                                    <TouchableOpacity style={tw`gap-2 self-stretch p-2 my-auto ${responseView == 'general' ? ' text-zinc-500 border border-solid border-teal-800' : '  text-teal-800 bg-gray-200'} rounded-2xl `} onPress={() => setResponseView('general')}>
                                        <Text>General View</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={tw`gap-2 self-stretch p-2 my-auto  rounded-2xl  ${responseView == 'table' ? ' text-zinc-500 border border-solid border-teal-800' : ' text-teal-800 bg-gray-200'}`} onPress={() => setResponseView('table')}>
                                        <Text>Pivot Table View</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={tw`flex flex-row gap-2 items-center self-stretch p-1.5 my-auto w-8 h-8 bg-white rounded-3xl border border-solid border-teal-950`}>
                                    <MdOutlineFileUpload style={tw`object-contain self-stretch my-auto w-5 aspect-square`} />
                                </TouchableOpacity>
                            </View>
                            <View style={tw`flex flex-row gap-2 items-start mt-4 w-full`}>
                                <View style={tw`flex gap-2.5 items-start pt-2 w-6`}>
                                    <Image
                                        source={require('../../assets/images/cosmologo.svg')}
                                        style={tw`object-contain w-6 aspect-square shadow-[0px_3px_3px_rgba(33,25,21,0.24)]`}
                                    />
                                </View>
                                {/* response in table view start */}
                                <ScrollView horizontal={true} style={tw`flex-1 bg-white rounded p-2`}>
                                    <DataTable style={tw`bg-white w-full`}>
                                        {/* <DataTable> */}
                                        <DataTable.Header style={tw`bg-stone-100`}>
                                            <DataTable.Title style={tw`flex-1 justify-start`}>
                                                <Text style={tw`text-xs flex-wrap`}>First Name</Text>
                                            </DataTable.Title>
                                            <DataTable.Title style={tw`flex-1 justify-start`}>
                                                <Text style={tw`text-xs flex-wrap`}>Middle Name</Text>
                                            </DataTable.Title>
                                            <DataTable.Title style={tw`flex-1 justify-start`}>
                                                <Text style={tw`text-xs flex-wrap`}>Last Name</Text>
                                            </DataTable.Title>
                                            <DataTable.Title style={tw`flex-1 justify-start`}>
                                                <Text style={tw`text-xs flex-wrap`}>Favourite Food</Text>
                                            </DataTable.Title>
                                            <DataTable.Title style={tw`flex-1 justify-start`}>
                                                <Text style={tw`text-xs flex-wrap`}>Age</Text>
                                            </DataTable.Title>
                                        </DataTable.Header>
                                        <DataTable.Row>
                                            <DataTable.Cell>Radhikadddddddddddddddddddddddddddd</DataTable.Cell>
                                            <DataTable.Cell>K</DataTable.Cell>
                                            <DataTable.Cell>Saran</DataTable.Cell>
                                            <DataTable.Cell>Dosa</DataTable.Cell>
                                            <DataTable.Cell>23</DataTable.Cell>
                                        </DataTable.Row>

                                        <DataTable.Row>
                                            <DataTable.Cell>Krishna</DataTable.Cell>
                                            <DataTable.Cell>Gautham</DataTable.Cell>
                                            <DataTable.Cell>Kumar</DataTable.Cell>
                                            <DataTable.Cell>Uttapam</DataTable.Cell>
                                            <DataTable.Cell>26</DataTable.Cell>
                                        </DataTable.Row>
                                        <DataTable.Row>
                                            <DataTable.Cell>Vanshika</DataTable.Cell>
                                            <DataTable.Cell>Kumari</DataTable.Cell>
                                            <DataTable.Cell>Panayak</DataTable.Cell>
                                            <DataTable.Cell>Brownie</DataTable.Cell>
                                            <DataTable.Cell>20</DataTable.Cell>
                                        </DataTable.Row>
                                        <DataTable.Row>
                                            <DataTable.Cell>Teena</DataTable.Cell>
                                            <DataTable.Cell>Pathak</DataTable.Cell>
                                            <DataTable.Cell>Sharma</DataTable.Cell>
                                            <DataTable.Cell>Pizza</DataTable.Cell>
                                            <DataTable.Cell>24</DataTable.Cell>
                                        </DataTable.Row>
                                        <DataTable.Row>
                                            <DataTable.Cell>Teena</DataTable.Cell>
                                            <DataTable.Cell>Pathak</DataTable.Cell>
                                            <DataTable.Cell>Sharma</DataTable.Cell>
                                            <DataTable.Cell>Pizza</DataTable.Cell>
                                            <DataTable.Cell>24</DataTable.Cell>
                                        </DataTable.Row>
                                        <DataTable.Row>
                                            <DataTable.Cell>Teena</DataTable.Cell>
                                            <DataTable.Cell>Pathak</DataTable.Cell>
                                            <DataTable.Cell>Sharma</DataTable.Cell>
                                            <DataTable.Cell>Pizza</DataTable.Cell>
                                            <DataTable.Cell>24</DataTable.Cell>
                                        </DataTable.Row>
                                    </DataTable>
                                </ScrollView>
                                {/* response in table view start */}
                            </View>
                            <View style={tw`flex flex-row gap-10 justify-between items-center mt-4 w-full`}>
                                <View style={tw`flex flex-row gap-2 items-center self-stretch my-auto text-sm font-medium leading-none`}>
                                    <View style={tw`self-stretch my-auto text-zinc-500`}>
                                        <Text>Showing results</Text>
                                    </View>
                                    <View style={tw`self-stretch px-2 py-1.5 my-auto whitespace-nowrap rounded-lg border border-solid border-stone-300 text-teal-950`}>
                                        <Text>03</Text>
                                    </View>
                                </View>
                                <View style={tw`flex flex-row gap-2 items-start self-stretch my-auto`}>
                                    <View style={tw`flex overflow-hidden flex-col justify-center p-1.5 w-8 border border-solid border-stone-300 rounded-[51px]`}>
                                        <TouchableOpacity style={tw`flex gap-1.5 items-center w-5`}>
                                            <LuRefreshCcw style={tw`object-contain self-stretch my-auto w-5 aspect-square`} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={tw`flex flex-row overflow-hidden gap-2 items-start p-1.5 w-8 border border-solid border-stone-300 rounded-[51px]`}>
                                        <PiDotsThreeVerticalBold style={tw`object-contain w-5 aspect-square`} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* response end */}

                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Responses
