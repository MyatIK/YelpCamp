import Logo from '../Assets/Logo.svg';
import {Link} from 'react-router-dom';
import { useUser } from './UserContext.js';
import HamburgerMenu from '../Assets/Hamburger Menu.svg';

function Header1(){
    const {logIn,signOut}=useUser();
    
   
    return(
        <>
            <div className="relative flex mt-5 mr-5 ml-5">
                <Link to="/"><span><img src={Logo} alt="YelpCamp Logo"/></span></Link>
                
                <Link to="/"><p className="ml-10 mr-20 hidden lg:block">Home</p></Link>
                <button className='absolute right-0 rounded bg-stone-100 block lg:hidden'><img src={HamburgerMenu} alt="Hamburger Menu"/></button>

                {
                        logIn ? (
                            <div className="flex absolute right-0 hidden lg:block ">
                                <p className="p-2">johndoe</p>
                                <p onClick={signOut} className='p-2'>Logout</p>

                            </div>

                        ) : (
                            <div className="flex absolute right-0 hidden lg:block">
                                <Link to="/Login"><p className=" p-2">Login</p></Link>
                                <Link to="/signup"><button className="bg-black text-white rounded p-2">Create an account</button></Link>

                            </div>
                        )
                }
                    
                
                

                
            </div>

        </>
    )
}

export default Header1;

