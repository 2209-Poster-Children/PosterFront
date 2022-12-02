import './profile.css';
import { Link } from 'react-router-dom';

import { AiFillStar } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { FaShoppingCart, FaReceipt, FaAddressCard } from 'react-icons/fa';


const ProfileNavbar = ({ activePage }) => {
    console.log(activePage);

    return (
        <div className='profile-navbar-container'>
        
            <nav className="profile-navbar">
                <Link to="../profile">
                    <BiArrowBack className='profile-navbar-icon' />
                </Link> 

                {
                    activePage === 'orders' ? null : 
                    <Link to="../profile/orders">
                        <FaReceipt className='profile-navbar-icon' />
                    </Link>
                }

                {
                    activePage === 'reviews' ? null : 
                    <Link to="../profile/reviews">
                        <AiFillStar className='profile-navbar-icon' />
                    </Link>
                }
                

                {
                    activePage === 'addresses' ? null : 
                    <Link to="../profile/addresses">
                        <FaAddressCard className='profile-navbar-icon' />
                    </Link>
                }
            </nav>
        </div>
    )
}

export default ProfileNavbar;