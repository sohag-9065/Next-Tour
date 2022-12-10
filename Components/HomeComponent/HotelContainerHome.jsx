import React from 'react';
import HotelCard from './HotelCardHome';
import example from '../../public/assets/example.jpg';

const HotelContainer = () => {
    return (
        <div className="grid h-screen place-items-center">
            <div className="max-w-[1140px] mx-auto grid grid-cols-1 gap-5 md:grid-cols-3">
                <HotelCard
                    image={example}
                    title="Lorem ipsum emet sit"
                    price={500}
                    rating={4}
                />
                <HotelCard
                    image={example}
                    title="Lorem ipsum emet sit"
                    price={500}
                    rating={4}
                />
                <HotelCard
                    image={example}
                    title="Lorem ipsum emet sit"
                    price={500}
                    rating={4}
                />
            </div>
        </div>
    );
};

export default HotelContainer;
