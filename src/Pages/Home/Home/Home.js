import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import PostArea from '../PostArea/PostArea';
import RightSidebar from '../RightSidebar/RightSidebar';
import TopPost from '../TopPost/TopPost';
import {Posts} from '../../../dummyData'

const Home = () => {
    return (
        <section>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-3/12'>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className='w-full lg:w-5/12'>
                    <PostArea></PostArea>
                    {Posts.map((post) => (
                        <TopPost key={post.id} post={post}></TopPost>
                    ))}
                </div>
                <div className='w-full lg:w-4/12'>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </section>
    );
};

export default Home;