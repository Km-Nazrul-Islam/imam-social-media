import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import PostArea from '../PostArea/PostArea';
import RightSidebar from '../RightSidebar/RightSidebar';
import TopPost from '../TopPost/TopPost';

const Home = () => {
    return (
        <section>
            <div className='flex'>
                <LeftSidebar></LeftSidebar>
                <div>
                    <PostArea></PostArea>
                    <TopPost></TopPost>
                    <TopPost></TopPost>
                    <TopPost></TopPost>
                    <TopPost></TopPost>
                    <TopPost></TopPost>
                    <TopPost></TopPost>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </section>
    );
};

export default Home;