import React from 'react';
import postImage from '../../../assets/profile_image/post_image.png'
import { FaPhotoVideo, FaLocationArrow, FaTags, FaGrin } from 'react-icons/fa';

const PostArea = () => {
    return (
        <section className='px-10'>
            <div className="top-section my-16 border-2 border-gray-300 rounded-lg p-8">
                <div className='flex fles-1 space-x-2 items-center'>
                    <img className='w-16 h-16 rounded-full border-2 border-gray-300' src={postImage} alt="" />
                    <textarea className="textarea border-0 text-2xl text-center w-full" placeholder="Whats on Your mind ??"></textarea>
                </div>
                <br /> <br />
                <input type="file" placeholder="Add Photo+" className="input input-bordered border-1 w-full text-center py-2" />
                <br />
                <br />
                <div className='flex flex-1 items-center justify-start space-x-4'>
                    <div className='flex flex-1 justify-start items-center space-x-2 cursor-pointer'>
                        <FaPhotoVideo className='text-sm text-blue-500'></FaPhotoVideo>
                        <span>Photo/Videos</span>
                    </div>
                    <div className='flex flex-1 justify-start items-center space-x-2 cursor-pointer'>
                        <FaLocationArrow className='text-sm text-green-500'></FaLocationArrow>
                        <span>Location</span>
                    </div>
                    <div className='flex flex-1 justify-start items-center space-x-2 cursor-pointer'>
                        <FaTags className='text-sm text-pink-500'></FaTags>
                        <span>Tags</span>
                    </div>
                    <div className='flex flex-1 justify-start items-center space-x-2 cursor-pointer'>
                        <FaGrin className='text-sm text-orange-500'></FaGrin>
                        <span>Feelings</span>
                    </div>
                    <button className="btn bg-green-600 btn-xs">Share</button>
                </div>
            </div>
            <div className='bottom-section'>

            </div>
        </section>
    );
};

export default PostArea;