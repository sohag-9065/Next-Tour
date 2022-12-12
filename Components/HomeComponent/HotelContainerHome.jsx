import React from 'react';
import HotelCard from './HotelCardHome';
import example from '../../public/assets/example.jpg';

const HotelContainer = () => {
    return (
        <div className="grid h-[70vh] place-items-center max-w-[1140px] mx-auto">
            <div>
                <h1 className="mb-5 text-3xl font-bold text-left text-blue-500">
                    Hotels
                </h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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
        </div>
    );
};

export default HotelContainer;
