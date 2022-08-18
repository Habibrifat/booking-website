import Featured from './../../components/featured/Featured';
import FeaturedProperty from './../../components/featuredProperty/featuredProperty';
import Footer from './../../components/footer/Footer';
import Header from './../../components/header/Header';
import MailList from './../../components/mailList/MailList';
import Navbar from './../../components/navbar/Navbar';
import PropertyList from './../../components/propertyList/PropertyList';
import Service from './../../components/service/Service';
import './home.css';

const Home = () => {
    return ( 
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/>
            <div className="title">
                <FeaturedProperty />
            </div>
            <div className="title">
                <PropertyList />
            </div>
            <MailList />
            <Service />
            <Footer />
        </div>
    </div>
    );
}
 
export default Home;