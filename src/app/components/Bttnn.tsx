import React from 'react';

const Bttnn = ({children} : any) => {
    return (
        <div>
        <button className="btn rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:via-blue-400 hover:from-blue-400  mt-3">{children}</button>
    </div>
    );
};

export default Bttnn;