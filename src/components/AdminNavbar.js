import { useLocation } from 'react-router-dom';
import { Button, Icon, IconButton, NavbarInput, Avatar , Dropdown, DropdownItem, Menu, MenuItem } from '@material-tailwind/react';
// import Icon from '@material-tailwind/react/Icon';
// import NavbarInput from '@material-tailwind/react/NavbarInput';
// import Image from '@material-tailwind/react/Image';
// import Dropdown from '@material-tailwind/react/Dropdown';
// import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;

    return (
        <nav className="bg-light-blue-500 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <IconButton
                        color="white"
                        // buttonType="link"
                        size="lg"
                        // iconOnly
                        // rounded
                        ripple={true}
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <i className="menu" />
                        
                    </IconButton>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <IconButton
                            color="white"
                            // buttonType="link"
                            size="lg"
                            // iconOnly
                            // rounded
                            ripple={true}
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <i className="close" />
                        </IconButton>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>

                    <div className="flex">
                        {/* <NavbarInput placeholder="Search" /> */}

                        <div className="-mr-4 ml-6">
                            <Menu
                                color="white"
                                buttonText={
                                    <div className="w-12">
                                        <Avatar src={ProfilePicture} rounded />
                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 0,
                                    color: 'white',
                                }}
                            >
                                <MenuItem color="lightBlue">
                                    Action
                                </MenuItem>
                                <MenuItem color="lightBlue">
                                    Another Action
                                </MenuItem>
                                <MenuItem color="lightBlue">
                                    Something Else
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
