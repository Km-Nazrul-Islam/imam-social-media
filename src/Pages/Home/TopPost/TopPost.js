import React from 'react';
import heartIcon from '../../../assets/profile_image/heart.png';
import likeIcon from '../../../assets/profile_image/like.png';
import { FaEllipsisV } from 'react-icons/fa';
import { Users } from '../../../dummyData';

const TopPost = ({post}) => {
    const user = Users.filter(u => u.id===1)
    console.log(user[0].username)
    return (
        <section className='px-10'>
            <div>
                <div className='postTop flex justify-between items-center px-2 bg-white rounded-lg my-8'>
                    <div className='flex justify-start items-center space-x-2'>
                        <img className='w-10 h-10 rounded-full' src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className=''>{Users.filter(u => u.id===post.userId)[0].username}</span>
                        <span className=''>{post.date}</span>
                    </div>
                    <div className=''>
                        <FaEllipsisV className='cursor-pointer'></FaEllipsisV>
                    </div>
                </div>
                <div className='my-4'>
                    <span className=''>{post?.desc}</span>
                    <img className='rounded-lg mt-4' src={post.photo} alt="" />
                </div>
                <div className='flex justify-between items-center px-2 my-2'>
                    <div className='flex justify-start items-center space-x-1'>
                        <img className='w-6 h-6 cursor-pointer' src={heartIcon} alt="" />
                        <img className='w-6 h-6 cursor-pointer' src={likeIcon} alt="" />
                        <span className='text-sm'>{post.like} peaple like it</span>
                    </div>
                    <div className=''>
                        <span className='font-semibold text-gray-500 text-sm cursor-pointer'>{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopPost;