import React from 'react';
import suggestionImage1 from '../../../assets/suggetion_image/student-2.png';
import suggestionImage2 from '../../../assets/suggetion_image/student-3.png';
import suggestionImage3 from '../../../assets/suggetion_image/student-4.png';
import suggestionImage4 from '../../../assets/suggetion_image/student-1.png';
import suggestionImage5 from '../../../assets/suggetion_image/student-5.png';
import suggestionImage6 from '../../../assets/suggetion_image/student-6.png';

const RightSidebar = () => {
    return (
        <section className='my-16'>
            <div className='wrapper sticky top-16'>
                <div className='itemBox-1 px-8'>
                    <div className='text-start px-4 text-gray-500 font-semibold mt-4'>
                        <span className=''>According to your friends ?</span>
                    </div>

                    <div className='mainItemBox px-2'>
                        <div className='userBox flex justify-between space-x-4 items-center my-4'>
                            <div className='userInfoBox flex items-center cursor-pointer'>
                                <img className='w-10 h-10 rounded-full' src={suggestionImage1} alt="" />
                                <span className=''>Lubna Khanom</span>
                            </div>
                            <div className='flex space-x-4'>
                                <button className='bg-green-500 hover:bg-green-800 px-4 rounded-sm text-white'>Follow</button>
                                <button className='bg-pink-500 hover:bg-pink-800 px-4 rounded-sm text-white'>Delete</button>
                            </div>
                        </div>

                        <div className='userBox flex justify-between items-center space-x-4 my-4'>
                            <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                                <img className='w-10 h-10 rounded-full' src={suggestionImage2} alt="" />
                                <span className=''>Iqbal Hossain</span>
                            </div>
                            <div className='flex space-x-4'>
                                <button className='bg-green-500 hover:bg-green-800 px-4 rounded-sm text-white'>Follow</button>
                                <button className='bg-pink-500 hover:bg-pink-800 px-4 rounded-sm text-white'>Delete</button>
                            </div>
                        </div>

                        <div className='userBox flex justify-between items-center space-x-4 my-4'>
                            <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                                <img className='w-10 h-10 rounded-full' src={suggestionImage3} alt="" />
                                <span className=''>Lucy Pattel</span>
                            </div>
                            <div className='flex space-x-4'>
                                <button className='bg-green-500 hover:bg-green-800 px-4 rounded-sm text-white'>Follow</button>
                                <button className='bg-pink-500 hover:bg-pink-800 px-4 rounded-sm text-white'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='itemBox-2 px-8'>
                    <div className='text-start px-4 text-gray-500 font-semibold mt-12'>
                        <span className=''>Latest Activities</span>
                    </div>

                    <div className='userBox flex justify-between items-center space-x-2 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage4} alt="" />
                            <span className=''>Rashed Khan</span>
                        </div>
                        <div className='space-x-2'>
                            <p>Update 9 min ago</p>
                        </div>
                    </div>
                    <div className='userBox flex justify-between items-center space-x-2 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage5} alt="" />
                            <span className=''>Nazmul Haque</span>
                        </div>
                        <div className='space-x-2'>
                            <p>Update 6 min ago</p>
                        </div>
                    </div>
                    <div className='userBox flex justify-between items-center space-x-2 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage6} alt="" />
                            <span className=''>Anamika Anam</span>
                        </div>
                        <div className='space-x-2'>
                            <p>Update 3 min ago</p>
                        </div>
                    </div>
                </div>

                <div className='itemBox-3 px-8'>
                    <div className='text-start px-4 text-gray-500 font-semibold'>
                        <span className=''>Active People</span>
                    </div>

                    <div className='userBox flex justify-start items-center space-x-4 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage4} alt="" />
                            <span className=''>Rashed Khan</span>
                        </div>
                        <div className='w-3 h-3 rounded-full bg-green-600'>

                        </div>
                    </div>
                    <div className='userBox flex justify-start items-center space-x-4 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage4} alt="" />
                            <span className=''>Rashed Khan</span>
                        </div>
                        <div className='w-3 h-3 rounded-full bg-green-600'>

                        </div>
                    </div>
                    <div className='userBox flex justify-start items-center space-x-4 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage4} alt="" />
                            <span className=''>Rashed Khan</span>
                        </div>
                        <div className='w-3 h-3 rounded-full bg-green-600'>

                        </div>
                    </div>
                    <div className='userBox flex justify-start items-center space-x-4 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage4} alt="" />
                            <span className=''>Rashed Khan</span>
                        </div>
                        <div className='w-3 h-3 rounded-full bg-green-600'>

                        </div>
                    </div>
                    <div className='userBox flex justify-start items-center space-x-4 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage4} alt="" />
                            <span className=''>Rashed Khan</span>
                        </div>
                        <div className='w-3 h-3 rounded-full bg-green-600'>

                        </div>
                    </div>
                    <div className='userBox flex justify-start items-center space-x-4 my-4'>
                        <div className='userInfoBox flex items-center space-x-2 cursor-pointer'>
                            <img className='w-10 h-10 rounded-full' src={suggestionImage4} alt="" />
                            <span className=''>Rashed Khan</span>
                        </div>
                        <div className='w-3 h-3 rounded-full bg-green-600'>

                        </div>
                    </div>

                </div>

                </div>
        </section>
    );
};

export default RightSidebar;