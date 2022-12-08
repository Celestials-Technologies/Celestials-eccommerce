import '../../assets/styles/sidebar.css';
import Logo from '../../assets/images/ryzeo-favicon.png';
import Input from '../../assets/svg-images/input-search.svg';
import XS from '../../assets/svg-images/xs.svg';
import Box from '../../assets/svg-images/box.svg';
import BoxWhite from '../../assets/svg-images/box-white.svg';
import XD from '../../assets/svg-images/xd.svg';
import Union from '../../assets/svg-images/union.svg';
import UnionWhite from '../../assets/svg-images/union-white.svg';
import Hierarchy from '../../assets/svg-images/hierarchy.svg';
import HierarchyWhite from '../../assets/svg-images/hierarchy-white.svg';
import Mail from '../../assets/svg-images/mail.svg';
import MailWhite from '../../assets/sidebar-images/mail-white.png';
import Cloud from '../../assets/svg-images/cloud.svg';
import CloudWhite from '../../assets/svg-images/cloud-white.svg';
import Target from '../../assets/svg-images/target.svg';
import TargetWhite from '../../assets/svg-images/target-white.svg';
import User from '../../assets/svg-images/user.svg';
import UserWhite from '../../assets/svg-images/user-white.svg';
import Notification from '../../assets/svg-images/notification.svg';
import NotificationWhite from '../../assets/svg-images/notification-white.svg';
import Network from '../../assets/svg-images/network.svg';
import NetworkWhite from '../../assets/svg-images/network-white.svg';
import Setting from '../../assets/svg-images/setting.svg';
import SettingWhite from '../../assets/svg-images/setting-white.svg';
import Help from '../../assets/svg-images/help.svg';
import HelpWhite from '../../assets/svg-images/help-white.svg';


const Sidebar = ({sidebarOpen}) => {
    return (
        <div id="sidebar-mob" className={`${sidebarOpen ? "yellow" : "hello"}`}>
            <div className="px-5 py-2 border-b lg:block sm:hidden">
                <div className="w-40 pl-0.5">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <div className="flex flex-col justify-between h-full px-2.5 pt-4 pb-6 bg-fafafa">
                <div>
                    <div className='border-b pb-2'>
                        <form>
                            <div className="lg:border sm:border-0 border rounded lg:bg-white sm:bg-transparent bg-white flex justify-between items-center pl-3 pr-3.5 py-2 relative">
                                <img className="absolute left-3 w-3 h-3" src={Input} alt="Search" />
                                <input className="fs-13 font-normal leading-3 lg:block sm:hidden text-757575 ml-5 h-5 w-3/4 p-2" type="text" name="search" placeholder="Jump to" />
                                <span className="w-6 h-4 justify-center items-center lg:flex sm:hidden rounded-sm bg-e0e0e0">
                                    <img className="mx-auto" src={XS} alt="X-S" />
                                </span>
                            </div>
                        </form>
                        <div>
                            <a className="flex justify-between items-center rounded py-2.5 px-3.5 mt-6 group hover:bg-[#3575d5]">
                                <div className="flex items-center">
                                    <span>
                                        <img className="w-4 h-4 group-hover:hidden" src={Box} alt="Box" />
                                        <img className="w-4 h-4 group-hover:block hidden" src={BoxWhite} alt="Box" />
                                    </span>
                                    <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Dashboard</span>
                                </div>
                                <span className="w-6 h-4 justify-center items-center lg:flex sm:hidden rounded-sm bg-e0e0e0">
                                    <img className="mx-auto" src={XD} alt="X-D" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='border-b pb-2'>
                        <a className="flex justify-between items-center rounded sidebar-dropdown py-2.5 px-3.5 mt-2.5 group hover:bg-[#3575d5]">
                            <div className="flex items-center">
                                <span>
                                    <img className="w-4 h-4 group-hover:hidden" src={Union} alt="Union" />
                                    <img className="w-4 h-4 group-hover:block hidden" src={UnionWhite} alt="union" />
                                </span>
                                <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Campaigns</span>
                            </div>
                            <span className="w-6 h-4 justify-center items-center lg:flex sm:hidden rounded-sm bg-e0e0e0">
                                <img className="mx-auto" src={XD} />
                            </span>
                        </a>
                        <div>
                            <a className="flex justify-between items-center rounded py-3 px-3.5 mt-3 group hover:bg-[#3575d5]">
                                <div className="flex items-center">
                                    <span>
                                        <img className="group-hover:hidden w-4 h-4" src={Hierarchy} alt="Share" />
                                        <img className="w-4 h-4 group-hover:block hidden" src={HierarchyWhite} alt="Share" />
                                    </span>
                                    <span className="fs-13 font-medium leading-3 text-616161 lg:block sm:hidden pl-3 sidebar-links group-hover:text-white">WorkFlows</span>
                                </div>
                                <span className="w-6 h-4 justify-center items-center lg:flex sm:hidden rounded-sm bg-e0e0e0">
                                    <img className="mx-auto" src={XD} alt="X-D" />
                                </span>
                            </a>
                        </div>
                    </div>    
                    <div className="border-b pb-2">
                        <div>
                            <a className="flex justify-between items-center rounded py-2.5 px-3.5 mt-3 group hover:bg-[#3575d5]">
                                <div className="flex items-center">
                                    <span>
                                        <img className="group-hover:hidden w-4 h-4" src={Mail} alt="Mail" />
                                        <img className="w-4 h-4 group-hover:block hidden" src={MailWhite} alt="Mail white" />
                                    </span>
                                    <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">E-mail Templates</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="flex justify-between items-center rounded py-2.5 px-3.5 mt-3 sidebar-items group hover:bg-[#3575d5]">
                                <div className="flex items-center">
                                    <span>
                                        <img className="w-4 h-4 group-hover:hidden" src={Cloud} alt="Cloud" />
                                        <img className="w-4 h-4 group-hover:block hidden"  src={CloudWhite} alt="Cloud" />
                                    </span>
                                    <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Integrations</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='border-b pb-2'>
                        <div>
                            <a className="flex justify-between items-center rounded py-2.5 px-3.5 mt-3 group hover:bg-[#3575d5]">
                                <div className="flex items-center">
                                    <span>
                                        <img className="group-hover:hidden w-4 h-4" src={Target} alt="Target" />
                                        <img className="w-4 h-4 group-hover:block hidden" src={TargetWhite} alt="Target" />
                                    </span>
                                    <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">List & Segments</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="flex justify-between items-center rounded py-2.5 px-3.5 group hover:bg-[#3575d5]">
                                <div className="flex items-center">
                                    <span>
                                        <img className="w-4 h-4 group-hover:hidden" src={User} alt="User" />
                                        <img className="w-4 h-4 group-hover:block hidden"  src={UserWhite} alt="User" />
                                    </span>
                                    <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Profiles</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='border-b pb-2'>
                        <div>
                            <a className="flex justify-between items-center rounded py-2.5 px-3.5 group hover:bg-[#3575d5]">
                                <div className="flex items-center">
                                    <span>
                                        <img className="group-hover:hidden w-4 h-4" src={Notification} alt="Notification" />
                                        <img className="w-4 h-4 group-hover:block hidden" src={NotificationWhite} alt="Notification" />
                                    </span>
                                    <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Pop-Ups</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="flex justify-between items-center rounded py-2.5 px-3.5 group hover:bg-[#3575d5]">
                                <div className="flex items-center">
                                    <span>
                                        <img className="w-4 h-4 group-hover:hidden" src={Network} alt="Network" />
                                        <img className="w-4 h-4 group-hover:block hidden"  src={NetworkWhite} alt="Network" />
                                    </span>
                                    <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Data Feeds</span>
                                </div>
                            </a>
                        </div>
                    </div>    
                </div>
                
                <div>
                    <div>
                        <a className="flex justify-between items-center rounded py-2.5 px-3.5 mt-3 group hover:bg-[#3575d5]">
                            <div className="flex items-center">
                                <span>
                                    <img className="w-4 h-4 group-hover:hidden" src={Setting} alt="Setting" />
                                    <img className="w-4 h-4 group-hover:block hidden" src={SettingWhite} alt="Setting" />
                                </span>
                                <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Settings</span>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a className="flex justify-between items-center rounded py-2.5 px-3.5 group hover:bg-[#3575d5]">
                            <div className="flex items-center">
                                <span>
                                    <img className="w-4 h-4 group-hover:hidden" src={Help} alt="Info" />
                                    <img className="w-4 h-4 group-hover:block hidden" src={HelpWhite} alt="Info" />
                                </span>
                                <span className="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Get Help</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;