import Header from './Header.js';
import Logo from '../Assets//Logo.svg';
import {Link} from 'react-router-dom';
import MountUlap from '../Assets/Camp Images/Compressed Images/Mount Ulap.jpg';
import CalaguasIslands from '../Assets/Camp Images/Compressed Images/Calaguas Island.jpg';
import OnayBeach from '../Assets/Camp Images/Compressed Images/Onay Beach.jpg';
import SevenSister from '../Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg';
import LatikRiverside from '../Assets/Camp Images/Compressed Images/Latik Riverside.jpg';
import BuloySprings from '../Assets/Camp Images/Compressed Images/Buloy Springs.jpg';

function SearchPage(){
    return(
        <>
            <Header></Header>

            <div className="flex mt-5 ml-10 mr-10">
                <Link to="/"><span><img src={Logo} className="p-2" alt="YelpCamp Logo"/></span></Link>
                <Link to="/LandingPage"><p className="ml-10 mr-20 p-2">Home</p></Link>
                <div className="flex absolute right-10">
                    <Link to="/Login"><p className="mr-20 p-2">Login</p></Link>
                    <button className="bg-black text-white rounded p-2 col-end-4">Create an account</button>

                </div>
                
            </div>
            <div className="mt-5 bg-yellow-100 mb-20 ml-10 mr-10 p-10">
                <p className="text-3xl">Welcome to YelpCamp!</p>
                <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
                <input type="text" className="rounded border-2 mr-5 p-2" placeholder="Search for camps" />
                <button className="bg-black text-white mt-3 rounded p-2">Search</button>
                <p className="mt-3 underline">Or add your own campground</p>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 ml-10 mr-10 gap-5">
                <div className="border-2 overflow-hidden rounded">
                    <img className="w-full px-3 pt-3" src={MountUlap} alt="Mount Ulap"/>
                    <div>
                        <p className="font-bold text-l ml-3">Mount Ulap</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded">
                    <img className="w-full px-3 pt-3" src={CalaguasIslands} alt="Calaguas Islands"/>
                    <div>
                        <p className="font-bold text-l ml-3">Calaguas Islands</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded">
                    <img className="w-full px-3 pt-3" src={OnayBeach} alt="Onay Beach"/>
                    <div>
                        <p className="font-bold text-l ml-3">Onay Beach</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded">
                    <img className="w-full px-3 pt-3" src={SevenSister} alt="Seven Sisters Waterfall"/>
                    <div>
                        <p className="font-bold text-l ml-3">Seven Sisters Waterfall</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded">
                    <img className="w-full px-3 pt-3" src={LatikRiverside} alt="Latik Riverside"/>
                    <div>
                        <p className="font-bold text-l ml-3">Latik Riverside</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded">
                    <img className="w-full px-3 pt-3" src={BuloySprings} alt="Buloy Springs"/>
                    <div>
                        <p className="font-bold text-l ml-3">Buloy Springs</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded font-bold text-center">View Campground</button>

                    </div>
                    

                </div>


            </div>

            <img className="m-10" src={Logo} alt="YelpCamp Logo"></img>




        </>
    )

}

export default SearchPage;