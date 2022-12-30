import React from 'react';
import topPostLeft from '../../../assets/profile_image/post_image.png';
import firstPost from '../../../assets/profile_image/first_post.jpg';
import heartIcon from '../../../assets/profile_image/heart.png';
import likeIcon from '../../../assets/profile_image/like.png';
import { FaEllipsisV } from 'react-icons/fa';

const TopPost = () => {
    return (
        <section className='my-16 w-10/12'>
            <div>
                <div className='postTop flex justify-between items-center px-2 bg-white rounded-lg'>
                    <div className='flex justify-start items-center space-x-2'>
                        <img className='w-10 h-10 rounded-full' src={topPostLeft} alt="" />
                        <span className=''>Nazrul Islam</span>
                        <span className=''>3 min ago</span>
                    </div>
                    <div className=''>
                        <FaEllipsisV className='cursor-pointer'></FaEllipsisV>
                    </div>
                </div>
                <div className=''>
                    <span className='my-4'>This is my first post</span>
                    <img className='rounded-lg' src={firstPost} alt="" />
                </div>
                <div className='flex justify-between items-center px-2 my-2'>
                    <div className='flex justify-start items-center space-x-1'>
                        <img className='w-6 h-6 cursor-pointer' src={heartIcon} alt="" />
                        <img className='w-6 h-6 cursor-pointer' src={likeIcon} alt="" />
                        <span className='text-sm'>49 peaple like it</span>
                    </div>
                    <div className=''>
                        <span className='font-semibold text-gray-500 text-sm cursor-pointer'>9 comments</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopPost;