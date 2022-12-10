import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const HotelCard = ({ title, image, price, rating }) => {
    let ratings = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<FaStar key={i} />);
    }

    return (
        <div className="p-5 duration-200 ease-in bg-blue-500 shadow-lg shadow-blue-300 hover:scale-[102%] hover:shadow-xl hover:shadow-blue-200">
            <div className="mb-3">
                <Image
                    className="w-full"
                    src={image}
                    alt=""
                    width={300}
                    height={150}
                    loading="lazy"
                />
            </div>
            <div>
                {/* Title */}
                <h2 className="mb-3 text-2xl font-bold text-white">{title}</h2>
                {/* Description */}
                <p className="mb-3 text-gray-200">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat, in.
                </p>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                    {ratings}
                </div>
                {/* Price */}
                <p className="mb-5 text-3xl font-bold text-white">
                    Price: $<span>{price}</span>
                </p>
                <button className="w-full px-5 py-2 font-bold text-blue-500 bg-white">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default HotelCard;
