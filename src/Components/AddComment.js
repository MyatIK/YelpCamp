import Header from './Header';
import Header1 from './Header1';
import {Link} from 'react-router-dom';

function AddComment(){
    return(
        <>
            <Header/>
            <Header1/>
            <div className='grid grid-cols-3'>
                <div className='col-start-2 col-end-3'>
                    <p className="font-bold text-xl">Add New Comment</p>
                    <p className='mt-8 mb-4'>Description</p>
                    <textarea className="rounded bg-stone-100 w-full h-full" type="text" placeholder="This was probably the best camp I've visited this past year, definitely recommend visiting any time soon."></textarea>
                    <Link to="/IndividualCamp"><button className='bg-black text-white w-full p-3 rounded mt-4'>Post Comment</button></Link>
                </div>
                


            </div>
            

        </>
    )
}

export default AddComment;