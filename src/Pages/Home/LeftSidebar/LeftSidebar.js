import React from 'react';
import './LeftSidebar.css'
import { FaRss, FaDashcube, FaVideo, FaLayerGroup, FaBookmark, FaQuestion, FaSchool, FaChild, FaAddressBook  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import socialActivity1 from '../../../assets/social_activity/social_activity1.png';
import socialActivity2 from '../../../assets/social_activity/social_activity2.png';
import socialActivity3 from '../../../assets/social_activity/social_activity3.png';
import socialActivity4 from '../../../assets/social_activity/social_activity4.png';
import socialActivity5 from '../../../assets/social_activity/social_activity5.png';

const LeftSidebar = () => {
    return (
        <section className='w-3/12'>
            <div className='left-sidebar bg-slate-200 h-screen my-16 overflow-scroll sticky top-16'>
                <div className='sidebarWrapper'>
                    <ul className='sidebarList'>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaRss className='text-yellow-600'></FaRss>
                                <span className='hover:text-pink-500'>News Feed</span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaDashcube className='text-green-600'></FaDashcube>
                                <span className='hover:text-pink-500'>Chats</span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 text-justify flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaVideo className='text-red-600'></FaVideo>
                                <span className='hover:text-pink-500'>Video</span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 text-justify flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaLayerGroup className='text-blue-600'></FaLayerGroup>
                                <span className='hover:text-pink-500'>Groups</span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 text-justify flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaBookmark className='text-pink-600'></FaBookmark>
                                <span className='hover:text-pink-500'>Bookmark</span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 text-justify flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaQuestion className='text-red-800'></FaQuestion>
                                <span className='hover:text-pink-500'>Questions</span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 text-justify flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaSchool className='text-orange-600'></FaSchool>
                                <span className='hover:text-pink-500'>School</span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 text-justify flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaChild className='text-pink-900'></FaChild>
                                <span className='hover:text-pink-500'>Child</span>
                            </li>
                        </Link>
                        <Link to="/">
                            <li className='sidebarListItem justify-start ml-8 flex flex-1 space-x-4 items-center text-xl my-6'>
                                <FaAddressBook className='text-gray-900'></FaAddressBook>
                                <span className='hover:text-pink-500'>Address Book</span>
                            </li>
                        </Link>
                    </ul>
                    <button className='btn btn-outline hover:text-white-500'>Show More</button>
                    <hr className='my-8 mx-0' />
                    <div className='text-gray-600 font-semibold my-4'>
                        <span>Human Rights Facilites</span>
                    </div>
                    <ul className='h-screen bg-slate-200'>
                        <Link>
                            <li className='flex items-center space-x-2'>
                                <img className='img-fluid rounded-full w-10 h-10 ml-6' src={socialActivity1} alt="" />
                                <span>Fresh Water</span>
                            </li>
                        </Link>
                        <Link>
                            <li className='flex items-center space-x-2 my-8'>
                                <img className='img-fluid rounded-full w-10 h-10 ml-6' src={socialActivity2} alt="" />
                                <span>Safe The Child</span>
                            </li>
                        </Link>
                        <Link>
                            <li className='flex items-center space-x-2 my-8'>
                                <img className='img-fluid rounded-full w-10 h-10 ml-6' src={socialActivity3} alt="" />
                                <span>Safe Food</span>
                            </li>
                        </Link>
                        <Link>
                            <li className='flex items-center space-x-2 my-8'>
                                <img className='img-fluid rounded-full w-10 h-10 ml-6' src={socialActivity4} alt="" />
                                <span>Stop Child Labour</span>
                            </li>
                        </Link>
                        <Link>
                            <li className='flex items-center space-x-2 my-8'>
                                <img className='img-fluid rounded-full w-10 h-10 ml-6' src={socialActivity5} alt="" />
                                <span>Save The Women</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LeftSidebar;