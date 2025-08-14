import Logo from '../Assets/Logo.svg';
import {Link} from 'react-router-dom';
import { useUser } from './UserContext.jsx';
import HamburgerMenu from '../Assets/Hamburger Menu.svg';
import { useState } from 'react';

function Header1(){
    const {logIn,signOut}=useUser();
    const[menu,setMenu]=useState(true);
    
    
    
    return(
        <>
            <div className="relative flex mt-5 mr-5 ml-5 mb-10">
                <Link to="/"><span><img src={Logo} alt="YelpCamp Logo"/></span></Link>
                <Link to="/"><p className="ml-10 mr-20 hidden lg:inline">Home</p></Link>
                <Link to="/menu"><button onClick={()=>{setMenu(!menu)}} className='absolute right-0 rounded-sm bg-stone-100 block lg:hidden'><img src={HamburgerMenu} alt="Hamburger Menu"/></button></Link>
                {/* <Link to="/Login"><p className="hidden lg:block p-2">Login</p></Link>
                <Link to="/signup"><button className="hidden lg:block bg-black text-white rounded-sm p-2">Create an account</button></Link> */}
               
                {
                        logIn ? (
                            <div className='absolute right-0'>
                                <p className="hidden lg:inline p-2">johndoe</p>
                                <p onClick={signOut} className='hidden lg:inline p-2'>Logout</p>
                            </div>

                        ) : (
                            <div className='absolute right-0'>
                                <Link to="/Login"><p className="hidden lg:inline p-2">Login</p></Link>
                                <Link to="/signup"><button className="hidden lg:inline bg-black text-white rounded-sm p-2">Create an account</button></Link>

                            </div>
                        )
                }

                
            </div>

        </>
    )
}

export default Header1;

