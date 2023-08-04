import Logo from '../Assets/Logo.svg';
import Testimonial from '../Assets/User Testimonial.svg';
import {Link} from 'react-router-dom';

function SignIn(){
    return(
        <>
            <div className="grid grid-cols-5">
                <div className="col-span-3 m-10 p-10">
                    <div className="relative flex">
                        <span><Link to="/"><img src={Logo} alt="Yelp Camp Logo"/></Link></span>
                        <Link to="/search"><p className="absolute right-0 text-slate-500">← Back to campgrounds</p></Link>
                    </div>
                    
                    <div className="mt-20">
                        <p className="text-3xl font-bold ">Start exploring camps from all around the world.</p>
                        <p className="mt-3 mb-3">Username</p>
                        <input className="bg-stone-100 rounded p-3 w-full" type="text" placeholder='johndoe_91'/>
                        <p className="mt-3 mb-3">Password</p>
                        <input type="password" placeholder="Enter Your Password" className="bg-stone-100 rounded p-3 w-full"/>
                    </div>
                    <button className="rounded bg-black text-white p-3 w-full mt-3">Login</button>
                    <div className="flex mt-3">
                        <p>Not a user yet?</p>
                        <Link to="/signup"><p className="underline text-blue-600">Create an account.</p></Link>
                    </div>
                </div>


                <div className="bg-stone-100 p-10 col-span-2 relative">
                    <div className="absolute top-40 p-5">
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

export default SignIn;