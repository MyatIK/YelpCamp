import Header from './Header.jsx';
import Header1 from './Header1.jsx';
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
            <Header/>
            <Header1/>
            <div className="mt-5 bg-stone-100 mb-10 ml-5 mr-5 p-5 lg:p-10 ml-10 mr-10 mb-20">
                <p className="text-3xl">Welcome to YelpCamp!</p>
                <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
                <input type="text" className="rounded border-2 mr-5 p-2" placeholder="Search for camps" />
                <button className="bg-black text-white mt-3 rounded-sm p-2">Search</button>
                <Link to="/addcamp"><p className="mt-3 underline">Or add your own campground</p></Link>
            </div>

            <div className="grid grid-cols-1 ml-5 mr-5 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 ml-10 mr-10 gap-5">
                <div className="border-2 overflow-hidden rounded-sm">
                    <img className="w-full px-3 pt-3" src={MountUlap} alt="Mount Ulap"/>
                    <div>
                        <p className="font-bold text-l ml-3">Mount Ulap</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <Link to="/IndividualCamp"><button className="w-full  h-10 border-2 rounded-sm font-bold text-center">View Campground</button></Link>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded-sm">
                    <img className="w-full px-3 pt-3" src={CalaguasIslands} alt="Calaguas Islands"/>
                    <div>
                        <p className="font-bold text-l ml-3">Calaguas Islands</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded-sm font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded-sm">
                    <img className="w-full px-3 pt-3" src={OnayBeach} alt="Onay Beach"/>
                    <div>
                        <p className="font-bold text-l ml-3">Onay Beach</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded-sm font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded-sm">
                    <img className="w-full px-3 pt-3" src={SevenSister} alt="Seven Sisters Waterfall"/>
                    <div>
                        <p className="font-bold text-l ml-3">Seven Sisters Waterfall</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded-sm font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded-sm">
                    <img className="w-full px-3 pt-3" src={LatikRiverside} alt="Latik Riverside"/>
                    <div>
                        <p className="font-bold text-l ml-3">Latik Riverside</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded-sm font-bold text-center">View Campground</button>

                    </div>
                    

                </div>
                <div className="border-2 overflow-hidden rounded-sm">
                    <img className="w-full px-3 pt-3" src={BuloySprings} alt="Buloy Springs"/>
                    <div>
                        <p className="font-bold text-l ml-3">Buloy Springs</p>
                        <p className="text-gray-700 pb-3 ml-3">One of the most famous hikes in Benguet is Mt Ulap in Itogon.</p>
                        <button className="w-full  h-10 border-2 rounded-sm font-bold text-center">View Campground</button>

                    </div>
                    

                </div>


            </div>

            <img className="m-10" src={Logo} alt="YelpCamp Logo"></img>




        </>
    )

}

export default SearchPage;