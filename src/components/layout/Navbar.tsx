import Bell from "../../components/ui/icons/Bell.tsx";
import person from "../../assets/images/profile.png";
import { useState } from "react";
import User from "../ui/icons/User.tsx";
import Activity from "../ui/icons/Activity.tsx";
import Settings from "../ui/icons/Settings.tsx";
import LogOut from "../ui/icons/LogOut.tsx";
import Star from "../ui/icons/Star.tsx";

const Navbar: React.FC = () => {
    const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);

    return (<nav className="navbar">
        <input type="search" className="input input-search" placeholder="Search" />
        <div className="profile-container">
            <span className="notif-container">
                <span className="badge">4</span>
                <Bell />
            </span>
            <button onClick={() => setOpenProfileMenu(prev => !prev)} className="profile">
                <img src={person} alt="person" />
            </button>
        </div>
        {openProfileMenu && <div className="profile-menu">
            <span className="name">John E. Grainger</span>
            <span className="view">View my profile</span>
            <span className="line"></span>
            <span className="info"><User /><span>Edit Profile</span></span>
            <span className="info"><Activity /><span>Activity Log</span></span>
            <span className="info pro"><Star /><span>Go Pro</span> </span>
            <span className="line"></span>
            <span className="info"><Settings /><span>Account Setting</span></span>
            <span className="info"><LogOut /><span>Sign out</span></span>
        </div>}
    </nav>)
}

export default Navbar;