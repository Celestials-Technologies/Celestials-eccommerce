import { useState } from 'react';
import '../../assets/styles/header.css';
import MenuBars from '../../assets/images/menu-bars.png';
import Search from '../../assets/images/search.png';
import NotificationBell from '../../assets/images/notification-bell.png';
import Acitivity from '../../assets/images/activity.png';
import Profile from '../../assets/images/profile.png';
import Backdrop from '../Backdrop';
import Sidebar from '../Sidebar';

const Header = ({setSidebarOpen}) => {
    const [backdropEnabled, setBackdropEnabled] = useState(false);

    const sidebarClickHandler = (mode) => {
        console.log('Yellow');
        setBackdropEnabled(true);
        setSidebarOpen(mode);
    }

    const removeBackdropHandler = () => {
        setBackdropEnabled(false);
        console.log('Blue vs Green');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('You clicked form submit');
    }
    return (
        <>
            <div class="flex w-full">
                <div class="body-content-right">
                    <header class="bg-white border-b md:px-8 px-4 h-14">
                        <div class="flex justify-between items-center w-full">
                            <div class="sm:hidden mr-4">
                                <button class="w-6 h-6" onClick={sidebarClickHandler}>
                                    <img src={MenuBars} alt="Menu Bars" />
                                </button>
                            </div>
                            <form class="w-10/12 py-2.5 sm:block flex items-center" onSubmit={handleSubmit}>
                                <div class="flex items-center  relative">
                                    <img class="absolute left-0" src={Search} alt="search" />
                                    <input class="text-sm font-normal leading-3 py-2.5 px-3 ml-6 w-full text-757575" type="text" name="search" placeholder="Search" />
                                </div>
                            </form>
                            <div class="flex items-center py-4 border-l">
                                <button class="w-6 h-6 ml-5" type='button'>
                                    <img src={NotificationBell} alt="notification bell" />
                                </button>
                                <button class="w-6 h-6 sm:ml-9 ml-5" type='button'>
                                    <img src={Acitivity} alt='activity' />
                                </button>
                                <button class="w-6 h-6 sm:ml-9 ml-5" type='button'>
                                    <img src={Profile} alt='profile' />
                                </button>
                            </div>
                        </div>
                    </header>
                    {backdropEnabled && <Backdrop />}
                </div>
            </div>
        </>
    )
}

export default Header;