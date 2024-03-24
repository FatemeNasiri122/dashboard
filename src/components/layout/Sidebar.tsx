import { useState } from "react";
import Home from "../../components/ui/icons/Home";
import ChevronDown from "../ui/icons/ChevronDown";
import Layout from "../ui/icons/Layout";
import Layers from "../ui/icons/Layers";
import Lock from "../ui/icons/Lock";
import Table from "../ui/icons/Table";

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState<number>(1);

    return (<div className="sidebar">
        <h1 className="dash-title">
            Dash UI
        </h1>
        <p className="side-title">Layouts & Pages</p>
        <div className="dropdown-btn" onClick={() => setOpen(prev => prev === 1 ? 0 : 1 )}>
            <span>
                <Home />
                <span className="dropdown-title active">Dashboard</span>
            </span>
            <ChevronDown />
        </div>
        {open === 1 && <ul className={`dropdown ${open === 1 ? "dropdown-open" : "dropdown-close"} `}>
            <li>Projects</li>
        </ul>}
        <p className="side-title">Layouts & Pages</p>
        <div className="dropdown-btn" onClick={() => setOpen(prev => prev === 2 ? 0 : 2 )}>
            <span>
                <Layers />
                <span className="dropdown-title">Pages</span>
            </span>
            <ChevronDown />
        </div>
        {open === 2 && <ul className={`dropdown ${open === 2 ? "dropdown-open" : "dropdown-close"} `}>
            <li>Profile</li>
            <li>Accounts</li>
            <li>Invoice</li>
        </ul>}
        <div className="dropdown-btn">
            <span>
                <Lock />
                <span className="dropdown-title">Authentication</span>
            </span>
            <ChevronDown />
        </div>
        <div className="dropdown-btn">
            <span>
                <Layout />
                <span className="dropdown-title">Layouts</span>
            </span>
            <ChevronDown />
        </div>
        <p className="side-title">UI Components</p>
        <div className="dropdown-btn">
            <span>
                <Layers />
                <span className="dropdown-title">Cards</span>
            </span>
        </div>
        <div className="dropdown-btn">
            <span>
                <Table />
                <span className="dropdown-title">Tables</span>
            </span>
        </div>
        <div className="dropdown-btn">
            <span>
                <Layers />
                <span className="dropdown-title">Components</span>
            </span>
            <ChevronDown />
        </div>
        <div className="dropdown-btn">
            <span>
                <Layers />
                <span className="dropdown-title">Tables</span>
            </span>
            <ChevronDown />
        </div>
        <div className="dropdown-btn">
            <span>
                <Layers />
                <span className="dropdown-title">Utilities</span>
            </span>
            <ChevronDown />
        </div>
        <div className="dropdown-btn">
            <span>
                <Layers />
                <span className="dropdown-title">Components</span>
            </span>
            <ChevronDown />
        </div>
        <div className="dropdown-btn">
            <span >
                <Home />
                <span className="dropdown-title">Documentation</span>
                <span className="new">new</span>
            </span>
            <ChevronDown />
        </div>
    </div>)
}

export default Sidebar;