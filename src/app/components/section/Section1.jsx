import React from 'react';
import Marquee from 'react-fast-marquee';

const Section1 = () => {
    let moment = require('moment'); // require
    moment().format();
    return (
        <div>
            <Marquee speed={100}>
                I can be a React component, multiple React components, or just some text.
                This is social media
            </Marquee>
            <h3 className='text-xl font-semibold text-center'><span className='text-red-500'>Today</span> : {moment().format('LLLL')}</h3>
        </div>
    );
};

export default Section1;