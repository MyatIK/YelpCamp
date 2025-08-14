import Logo from '../Assets/Logo.svg';
import Testimonial from '../Assets/User Testimonial.svg';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function SignUp(){
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
   

    
    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="m-5 p-2 lg:col-span-3 lg:m-10 lg:p-10">
                    <div className="relative flex">
                        <span><Link to="/"><img src={Logo} alt="Yelp Camp Logo"/></Link></span>
                        <Link to="/search"><p className="absolute right-0 text-slate-500">← Back to campgrounds</p></Link>
                    </div>
                    
                    <form className="mt-20">
                        <p className="text-3xl font-bold ">Start exploring camps from all around the world.</p>
                        <label className="mt-3 mb-3" for="username">Username</label>
                        <input id="username" value={name} onChange={(e)=>setName(e.target.value)} className="bg-stone-100 rounded-sm p-3 w-full" type="text" placeholder='johndoe_91'/>
                        <label className="mt-3 mb-3" for="password">Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Choose Password" id="password" className="bg-stone-100 rounded-sm p-3 w-full"/>
                    </form>
                    <Link to="/Login"><button className="rounded bg-black text-white p-3 w-full mt-3">Create an account</button></Link>
                    <div className="flex mt-3">
                        <p>Already a user?</p>
                        <Link to="/login"><p className="underline text-blue-600">Sign in</p></Link>
                    </div>
                </div>


                <div className="bg-stone-100 p-10 relative lg:col-span-2">
                    <div className="absolute lg:top-40 p-5">
                        <p className="text-xl font-bold m-10">"YelpCamp has honestly saved me hours of research time, and the camps on here are definiely well picked and added." </p>
                        <div className="flex m-10">
                            <span><img src={Testimonial} alt="author of the testimonial" className="pr-5"/></span>
                            <div>
                                <p className="text-sm font-bold">May Andrews</p>
                                <p className="text-sm">Professional Hiker</p>

                            </div>
                            
                        </div>

                    </div>
        
                    
                    
                </div>

            </div>


        </>
    )
}

export default SignUp;