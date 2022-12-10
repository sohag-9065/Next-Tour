import React from 'react';
import HotelCard from './HotelCardHome';

const HotelContainer = () => {
    return (
        <div className="grid h-screen place-items-center">
            <div className="max-w-[1140px] mx-auto grid grid-cols-1 gap-5 md:grid-cols-3">
                <HotelCard
                    image={`https://picsum.photos/seed/picsum/250/150`}
                    title="Lorem ipsum emet sit"
                    price={500}
                    rating={4}
                />
                <HotelCard
                    image={`https://picsum.photos/seed/picsum/250/150`}
                    title="Lorem ipsum emet sit"
                    price={500}
                    rating={4}
                />
                <HotelCard
                    image={`https://picsum.photos/seed/picsum/250/150`}
                    title="Lorem ipsum emet sit"
                    price={500}
                    rating={4}
                />
            </div>
        </div>
    );
};

export default HotelContainer;
