import React, {useEffect, useState} from 'react';
import {
    CompanyName,
    DropdownMenu,
    DropdownMenuItem,
    Logo,
    LogOutButton,
    NavbarAvatar,
    NavBarContainer,
    NavbarUser,
    UserButton,
    UserLogo
} from "./NavbarStyledElements";
import {FaUserCircle} from "react-icons/fa";
import AvatarPic from "../../assets/img/avatar.png";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";


const NavBar = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [isToggled, setIsToggled] = useState('none');
    const [user, setUser] = useState()

    const dropMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        } else if (isToggled) {
            setIsToggled('none');
            setShowMenu(true);
        } else {
            setShowMenu(true);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('username')) {
            setUser(localStorage.getItem('username'))
        }
    }, [props.user])

    let logo;
    if (user) {
        logo = <NavbarAvatar src={AvatarPic}/>;
    } else {
        logo = <FaUserCircle/>;
    }

    const history = useHistory();

    function redirect() {
        const timer = setTimeout(() => {
            history.push("/");
        }, 1500);
        return () => {
            clearTimeout(timer)
        };

    }

    function logout() {
        if (localStorage.getItem('username') && localStorage.getItem('token')) {
            Swal.fire({
                icon: "question",
                title: 'Do you want to log out?',
                showDenyButton: true,
                showConfirmButton: true,
                confirmButtonText: "Yes",
                denyButtonText: "No",
                footer: '<a href="/">Share & Drive!</a>'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Logged out!', '', 'success')
                        .then(() => {
                            localStorage.removeItem('username')
                            localStorage.removeItem('token')
                            setUser();
                            redirect();
                        })
                }
            })

        }
    }

    return (
        <NavBarContainer>
            <Logo data-testid="logo" to="/" title="Home"/>
            <CompanyName>Share&Drive</CompanyName>
            <div/>
            <NavbarUser>{
                user ? <UserButton to="/user" title="User">{user}</UserButton> :
                    <UserButton to="/register" title="UserControl">Login / Register</UserButton>}
            </NavbarUser>
            <UserLogo onClick={dropMenu}>
                {showMenu && user ? (
                    <DropdownMenu>
                        <DropdownMenuItem to="/user" title="User">Profile</DropdownMenuItem>
                        <DropdownMenuItem to="/add-car" title="User">Add a car</DropdownMenuItem>
                        <DropdownMenuItem to="/user" title="User">Calendar</DropdownMenuItem>
                        <LogOutButton onClick={() => logout()}>Logout</LogOutButton>
                    </DropdownMenu>
                ) : null}
                {logo}
            </UserLogo>
        </NavBarContainer>
    );
};

export default NavBar;
