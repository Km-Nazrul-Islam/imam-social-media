import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaEnvelope, FaBell } from 'react-icons/fa';
import profileImage from '../../../assets/suggetion_image/student-2.png'

const Navbar = () => {
    return (
        <section>
            <div className="topSection flex items-center sticky top-0 h-12 w-full bg-blue-600">
                <div className="navbarLeft flex-1 w-14">
                    <span className='text-2xl ml-5 font-bold text-white cursor-pointer'>ImamMedia</span>
                </div>
                <div className="navbarCenter flex-1 w-64">
                    <div className="searchArea flex items-center w-full bg-white rounded-full">
                        <FaSearch className='text-xl ml-1'></FaSearch>
                        <input className='w-96 text-center outline-none' placeholder='Search Friend Photos Videos' />
                    </div>
                </div>
                <div className="navbarRight flex flex-1 items-center justify-between w-32">
                    <div className="topRightAarea flex flex-1 items-center justify-between">
                        <div className="topRightLink space-x-4 text-white ml-4 cursor-pointer">
                            <Link to="/"><span>Media</span></Link>
                            <Link to="/"><span>Message</span></Link>
                            <Link to="/"><span>About</span></Link>
                        </div>
                        <div className="topbarIcons flex text-white space-x-3  relative">
                            <div className="topbarIconItem mr-4 cursor-pointer">
                                <FaUser className='text-2xl'/>
                                <span className='w-3 h-3 bg-red-600 rounded-full text-white text-xs -top-2.5 right-20 items-center justify-center flex absolute'>1</span>
                            </div>
                            <div className="topbarIconItem flex cursor-pointer">
                                <FaEnvelope className='text-2xl text-yellow-500'/>
                                <span className='w-3 h-3 bg-red-600 rounded-full text-white text-xs -top-2.5 right-8 items-center justify-center flex absolute'>3</span>
                            </div>
                            <div className="topbarIconItem flex items-center cursor-pointer">
                                <FaBell className='text-2xl text-gray-800'/>
                                <span className='w-3 h-3 bg-red-600 rounded-full text-white text-xs -top-2.5 -right-1 items-center justify-center flex absolute'>5</span>
                            </div>
                        </div>
                        <div className='topProfilePic'>
                            <img className='w-8 h-8 rounded-full mr-8 cursor-pointer' src={profileImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;