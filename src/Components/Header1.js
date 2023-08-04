import Logo from '../Assets/Logo.svg';
import {Link} from 'react-router-dom';

function Header1(){
    return(
        <>
            <div className="flex mt-5 ml-10 mr-10">
                <Link to="/"><span><img src={Logo} className="p-2" alt="YelpCamp Logo"/></span></Link>
                <Link to="/"><p className="ml-10 mr-20 p-2">Home</p></Link>
                <div className="flex absolute right-10">
                    <Link to="/Login"><p className="mr-20 p-2">Login</p></Link>
                    <button className="bg-black text-white rounded p-2 col-end-4">Create an account</button>

                </div>
            </div>

        </>
    )
}

export default Header1;