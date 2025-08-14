import Header from './Header.jsx';
import Header1 from './Header1.jsx';
import Map from '../Assets/Map.png';
import MountUlap from '../Assets/Camp Images/Compressed Images/Mount Ulap.jpg';
import ChatBubble from '../Assets/Chat Bubble.svg';
import {Link} from 'react-router-dom';

function IndividualCamp(){
    return(
        <div>
            <Header/>
            <Header1/>
            <div className="grid grid-cols-1 ml-3 mr-3 lg:grid-cols-3 ml-10 mr-10 grid-row-2 gap-4 mt-6">
                <div className="container col-span-1">
                    <img src={Map} alt="Map of Mount Ulap" className="border rounded-sm lg:p-10"/>

                </div>

                <div className="container border rounded-sm col-span-2 ">
                    <img src={MountUlap} alt="Mount Ulap" className="p-10"/>
                    <div className="flex relative ml-10 mr-10">
                        <p className="font-bold mb-3">Mount Ulap</p>
                        <p className="absolute right-0">$ 104.99/night</p>
                    </div>
                    <p className='ml-10 mr-10'>Mount Ulap is a 7.7 kilometer moderatley trafficked point-to-point trail located near Ruba,Benguet,Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.</p>
                    <p className='mt-5 ml-10 pb-10'>Submitted by Andrew Mike</p>
                
                </div>
                <div className='border rounded-sm col-start-2 col-end-4 divide-y p-10'>
                        <div>
                            <div className='flex mb-3'>
                                <p className='font-bold'>Adam Jones</p>
                                <p>13h ago</p>
                            </div>
                            
                            <p className="mb-3">Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!</p>
                        </div>
                        
                        <div>
                            <div className='flex mt-3 mb-3'>
                                <p className='font-bold'>Issac Dylan</p>
                                <p>1 day ago</p>
                            </div>
                            
                            <p className='mb-3'>Travelling changes you as a person, you gain more perspective, this is the perfect spot to do that.</p>
                        </div>
                        <div>
                            <div className='flex mt-3 mb-3'>
                                <p className='font-bold'>Hudson Luca</p>
                                <p>3 days ago</p>
                            </div>
                            
                            <p className='mb-3'>Definitelly recommend going there, not too far and not a lot of people to ruin the experience.</p>
                        </div>
                        <div>
                            <Link to='/newcomment'>
                                <button className='bg-black text-white p-3 rounded-sm mt-4 inline-flex items-center'>
                                    <img src={ChatBubble} alt="chat button"/>
                                    <span>Leave a Review</span>
                                </button>
                            </Link>
                        </div>
                        


                    </div>

            </div>


        </div>
    )

}

export default IndividualCamp;