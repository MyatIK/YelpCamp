import Header from './Header';
import Header1 from './Header1';
import {Link,useNavigate} from 'react-router-dom';
import {useUser} from './UserContext';


function HamburgerMenu(){
    const {logIn,signOut}=useUser();
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1);
    }

    return(
        
        <div >
            <Header/>
            <Header1/>

            <button className="container items-center" onClick={goBack}>← Back</button>
            {
                logIn? (
                <div className='mt-10 text-center lg:hidden'>
                    <Link to="/"><p className='mt-10'>Home</p> </Link>
                    <p className='mt-10'>johndoe</p>
                    <p onClick={signOut} className='mt-10'>Logout</p>
                 </div>)
                :
                (
                <div className='mt-10 text-center lg:hidden'>
                    <p className='mt-10'>Home</p>
                    <Link to="/Login"><p className="mt-10 p-2">Login</p></Link>
                    <Link to="/signup"><button className="mt-10 bg-black text-white rounded-sm p-2">Create an account</button></Link>
                </div>)
            }
            
            

        </div>
    )
}

export default HamburgerMenu;