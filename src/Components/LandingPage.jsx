import HeroDesktop from '../Assets/Hero Image.jpg';
import Logo from '../Assets/Logo.svg';
import Check from '../Assets/Checkmark.svg';
import Airbnb from '../Assets/Airbnb.svg';
import Booking from '../Assets/Booking.svg';
import PulmGuide from '../Assets/Plum Guide.svg';
import {Link} from 'react-router-dom';
import HeroTablet from '../Assets/Hero Image (Tablet and Mobile).jpg';

//main page 
function LandingPage(){
    return(
        <>
            <div>
                <Link to="/"><img className="mt-10 mb-8 ml-5 lg:ml-20 mr-20" src={Logo} alt="YelpCamp logo"/></Link>
            </div>
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="ml-5 mr-5 lg:ml-20 mr-20">
                    <p className="mt-10 mb-3 font-bold text-3xl md:text-5xl">Explore the best camps on Earth.</p>
                    <p>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbaised reviews.</p>
                    
                    <div className="mt-3">
                        <div className="flex mb-2"> 
                            <span><img src={Check} alt="check mark"/></span>
                            <p>Add your own camp suggestions.</p>
                        </div>
                        <div className="flex mb-2"> 
                            <span><img src={Check} alt="check mark"/></span>
                            <p>Leave reviews and experiences.</p>
                        </div>
                        <div className="flex mb-2"> 
                            <span><img src={Check} alt="check mark"/></span>
                            <p>See locations for all camps.</p>
                        </div>

                    </div>
                    
                    <Link to='/search'><button className="h-17 rounded-sm bg-black text-white p-3 mt-5">View Campgrounds</button></Link>
                   

                    <div className="mt-5">
                        <p>Partnered With:</p>
                        <div className="flex">
                            <span><img src={Airbnb} alt="Airbnb Logo"/></span>
                            <span><img src={Booking} alt="Booking.com Logo"/></span>
                            <span><img src={PulmGuide} alt='Pulm Guide Logo'/></span>

                        </div>

                    </div>
                    

                    
                </div>
                <div>
                    <img className="mx-auto hidden lg:block " src={HeroDesktop} alt="campground with tents"/>
                    <img className="mx-auto block lg:hidden" src={HeroTablet} alt="campground with tents"/>
                </div>
                
                
                




            </div>
        </>
    )
}

export default LandingPage;