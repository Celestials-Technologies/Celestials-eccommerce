import '../../assets/styles/sidebar.css';
import Logo from '../../assets/images/ryzeo-favicon.png';

const Sidebar = () => {
    return (
        <div id="sidebar-mob" class="h-screen lg-w-220 sm:w-16 bg-fafafa mob-sidebar boxshadow-eeeeee font-inter fixed overflow-auto">
            <div class="px-5 py-2 border-b lg:block sm:hidden">
                <div class="w-40 pl-0.5">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <div class="flex flex-col justify-between h-full px-2.5 pt-4 pb-6 bg-fafafa">
                <div>
                    <form>
                        <div class="lg:border sm:border-0 border rounded lg:bg-white sm:bg-transparent bg-white flex justify-between items-center pl-3 pr-3.5 py-2 relative">
                            <img class="absolute left-3 w-3 h-3" src="svg-images/input-search.svg" alt="Search" />
                            <input class="fs-13 font-normal leading-3 lg:block sm:hidden text-757575 ml-5 h-5 w-3/4 p-2" type="text" name="search" placeholder="Jump to" />
                            <span class="w-6 h-4 justify-center items-center lg:flex sm:hidden rounded-sm bg-e0e0e0">
                                <img class="mx-auto" src="svg-images/xs.svg" alt="X-S" />
                            </span>
                        </div>
                    </form>
                    <div class="border-b pb-2">
                        <a href="dashboard-blast/index.html" class="flex justify-between items-center rounded py-2.5 px-3.5 mt-6 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="w-4 h-4 group-hover:hidden" src="svg-images/box.svg" alt="Box" />
                                    <img class="w-4 h-4 group-hover:block hidden" src="svg-images/box-white.svg" alt="Box" />
                                </span>
                                <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Dashboard</span>
                            </div>
                            <span class="w-6 h-4 justify-center items-center lg:flex sm:hidden rounded-sm bg-e0e0e0">
                                <img class="mx-auto" src="svg-images/xd.svg" alt="X-D" />
                            </span>
                        </a>
                    </div>
                    <a href="index.html" class="flex justify-between items-center rounded sidebar-dropdown py-2.5 px-3.5 mt-2.5 group hover:bg-[#3575d5]">
                        <div class="flex items-center">
                            <span>
                                <img class="w-4 h-4 group-hover:hidden" src="svg-images/union.svg" alt="Union" />
                                <img class="w-4 h-4 group-hover:block hidden" src="svg-images/union-white.svg" alt="union" />
                            </span>
                            <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Campaigns</span>
                        </div>
                        <span class="w-6 h-4 justify-center items-center lg:flex sm:hidden rounded-sm bg-e0e0e0">
                            <img class="mx-auto" src="svg-images/xd.svg" />
                        </span>
                    </a>
                    <div class="border-b pb-2">
                        <a href="workflow/index.html" class="flex justify-between items-center rounded py-3 px-3.5 mt-3 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="group-hover:hidden w-4 h-4" src="svg-images/hierarchy.svg" alt="Share" />
                                    <img class="w-4 h-4 group-hover:block hidden" src="svg-images/hierarchy-white.svg" alt="Share" />
                                </span>
                                <span class="fs-13 font-medium leading-3 text-616161 lg:block sm:hidden pl-3 sidebar-links group-hover:text-white">WorkFlows</span>
                            </div>
                            <span class="w-6 h-4 justify-center items-center lg:flex sm:hidden rounded-sm bg-e0e0e0">
                                <img class="mx-auto" src="svg-images/xd.svg" alt="X-D" />
                            </span>
                        </a>
                    </div>
                    <div class="">
                        <a href="create-blasts/create-send.html" class="flex justify-between items-center rounded py-2.5 px-3.5 mt-3 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="group-hover:hidden w-4 h-4" src="svg-images/mail.svg" alt="Mail" />
                                    <img class="w-4 h-4 group-hover:block hidden" src="sidebar-images/mail-white.png" />
                                </span>
                                    <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">E-mail Templates</span>
                            </div>
                        </a>
                    </div>
                    <div class="border-b pb-2">
                        <a href="integrations/index.html" class="flex justify-between items-center rounded py-2.5 px-3.5 mt-3 sidebar-items group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="w-4 h-4 group-hover:hidden" src="svg-images/cloud.svg" alt="Cloud" />
                                    <img class="w-4 h-4 group-hover:block hidden"  src="svg-images/cloud-white.svg" alt="Cloud" />
                                </span>
                                <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Integrations</span>
                            </div>
                        </a>
                    </div>
                    <div class="">
                        <a href="lists-segments/lists.html" class="flex justify-between items-center rounded py-2.5 px-3.5 mt-3 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="group-hover:hidden w-4 h-4" src="svg-images/target.svg" alt="Target" />
                                    <img class="w-4 h-4 group-hover:block hidden" src="svg-images/target-white.svg" alt="Target" />
                                </span>
                                <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">List & Segments</span>
                            </div>
                        </a>
                    </div>
                    <div class="border-b pb-2">
                        <a href="subscribers-profile/kamron-profile-form.html" class="flex justify-between items-center rounded py-2.5 px-3.5 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="w-4 h-4 group-hover:hidden" src="svg-images/user.svg" alt="User" />
                                    <img class="w-4 h-4 group-hover:block hidden"  src="svg-images/user-white.svg" alt="User" />
                                </span>
                                <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Profiles</span>
                            </div>
                        </a>
                    </div>
                    <div class="">
                        <a href="#" class="flex justify-between items-center rounded py-2.5 px-3.5 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="group-hover:hidden w-4 h-4" src="svg-images/notification.svg" alt="Notification" />
                                    <img class="w-4 h-4 group-hover:block hidden" src="svg-images/notification-white.svg" alt="Notification" />
                                </span>
                                <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Pop-Ups</span>
                            </div>
                        </a>
                    </div>
                    <div class="border-b pb-2">
                        <a href="#" class="flex justify-between items-center rounded py-2.5 px-3.5 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="w-4 h-4 group-hover:hidden" src="svg-images/network.svg" alt="Network" />
                                    <img class="w-4 h-4 group-hover:block hidden"  src="svg-images/network-white.svg" alt="Network" />
                                </span>
                                <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Data Feeds</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div>
                    <div class="">
                        <a href="account-setting/account-setting-profile-edit.html" class="flex justify-between items-center rounded py-2.5 px-3.5 mt-3 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="w-4 h-4 group-hover:hidden" src="svg-images/setting.svg" alt="Setting" />
                                    <img class="w-4 h-4 group-hover:block hidden"  src="svg-images/setting-white.svg" alt="Setting" />
                                </span>
                                <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Settings</span>
                            </div>
                        </a>
                    </div>
                    <div class="">
                        <a href="#" class="flex justify-between items-center rounded py-2.5 px-3.5 group hover:bg-[#3575d5]">
                            <div class="flex items-center">
                                <span>
                                    <img class="w-4 h-4 group-hover:hidden" src="svg-images/help.svg" alt="Info" />
                                    <img class="w-4 h-4 group-hover:block hidden"  src="svg-images/help-white.svg" alt="Info" />
                                </span>
                                <span class="fs-13 font-medium leading-3 lg:block sm:hidden text-616161 pl-3 sidebar-links group-hover:text-white">Get Help</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;