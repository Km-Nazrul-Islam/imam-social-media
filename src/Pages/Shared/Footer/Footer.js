import React from 'react';

const Footer = () => {
    return (
        <section>
            <div className='my-16'>
                    <div className='flex justify-center space-x-4 mb-4 text-gray-600'>
                        <div>
                            <span>Privacy Policy</span>
                        </div>

                        <div>
                            Terms & Conditions
                        </div>
                    </div>
                
                <div className='text-gray-600'>
                    <p>Copyright @ Imam Media 2022 All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;