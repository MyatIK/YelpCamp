import HeroDesktop from '../Assets/Hero Image.jpg';
import Logo from '../Assets/Logo.svg';
import Check from '../Assets/Checkmark.svg';
import Airbnb from '../Assets/Airbnb.svg';
import Booking from '../Assets/Booking.svg';
import PulmGuide from '../Assets/Plum Guide.svg';
import {Link} from 'react-router-dom';


function LandingPage(){
    return(
        <>
            <div className="grid grid-cols-2 gap-5">
                <div className="ml-20 mr-20 bg">
                    <Link to="/"><img className="mt-10 mb-8" src={Logo} alt="YelpCamp logo"/></Link>
                    <p className="text-5xl mt-10 mb-3">Explore the best camps on Earth.</p>
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
                    
                    <Link to='/search'><button className="h-17 rounded bg-black text-white p-3 mt-5">View Campgrounds</button></Link>
                   

                    <div className="mt-5">
                        <p>Partnered With:</p>
                        <div className="flex">
                            <span><img src={Airbnb} alt="Airbnb Logo"/></span>
                            <span><img src={Booking} alt="Booking.com Logo"/></span>
                            <span><img src={PulmGuide} alt='Pulm Guide Logo'/></span>

                        </div>

                    </div>
                    

                    
                </div>
                <img className="object-cover" src={HeroDesktop} alt="campground with tents"/>




            </div>
        </>
    )
}

export default LandingPage;