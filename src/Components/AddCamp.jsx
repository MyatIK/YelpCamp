import Header from './Header';
import Header1 from './Header1';

function AddCamp(){
    return(
        <>
        <Header/>
        <Header1/>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-sm">
            <div className='p-5 lg:col-start-2 lg:col-end-3'>
                <p className="font-bold text-3xl mb-5">Add New Campground</p>
                <p>Campground Name</p>
                <input type="text" placeholder='Seven Sisters Waterfall' className='rounded bg-stone-100 p-2 w-full mt-3'/>
                <p className='mt-3'>Price</p>
                <input type="number" placeholder='$149' className='bg-stone-100 w-full p-2 mt-3 rounded-sm'/>
                <p className='mt-3'>Image</p>
                <input type="text" placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy/dayhike.html" className='bg-stone-100 p-2 mt-3 w-full'/>
                <label className='mt-3' for="Description">Description</label>
                <textarea className='bg-stone-100 rounded-sm mt-3 w-full h-3/5 p-5' id="Description" type="text" placeholder='The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 meters. The water is located along the Geirangerfjoden in Stranda Municipality in More og Romsdal county, Norway.'></textarea>


            </div>

        </div>

        </>
    )
}

export default AddCamp;