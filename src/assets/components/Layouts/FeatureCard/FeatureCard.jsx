import React from 'react';

const FeatureCard = ({ image, title, description }) => {
    return (
        <div className="w-[370px] h-[538px] bg-[#FA9F42] rounded-2xl p-5 box-border">
            <div className="text-center">
                <img src={image} alt={title} className="w-[289px] h-[242px] rounded-2xl mb-6" />
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-lg font-reguler text-black mt-2">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
