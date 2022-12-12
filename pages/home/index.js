import Header from '../../Components/Header';
import CarrosulHome from '../../Components/HomeComponent/CarrosulHome';
import CategoryHome from '../../Components/HomeComponent/CategoryHome';
import ContactForm from '../../Components/HomeComponent/ContactForm';
import HotelContainer from '../../Components/HomeComponent/HotelContainerHome';

const index = () => {
    return (
        <div className="text-gray-700">
            <CarrosulHome />
            <CategoryHome />
            <HotelContainer />
            <ContactForm />
        </div>
    );
};

export default index;
