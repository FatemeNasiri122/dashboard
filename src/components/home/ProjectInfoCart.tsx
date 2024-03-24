import ListTask from "../ui/icons/ListTask";
import Poeple from "../ui/icons/Poeple";
import Targer from "../ui/icons/Targer";
import Briefcase from "../ui/icons/Briefcase";

const ProjectInfoCart: React.FC = () => {


    return (<div className="cart-container">
        <div className="cart">
            <div className="projects-container">
                <span className="title">Projects</span>
                <span className="box box-1">
                    <Briefcase/>
                </span>
            </div>
            <p className="number">18</p>
            <div><span className="number-complete">2</span><span className="complete">Completed</span></div>
        </div>
        <div className="cart">
            <div className="projects-container">
                <span className="title">Active Task</span>
                <span className="box box-2">
                    <ListTask />
                </span>
            </div>
            <p className="number">132</p>
            <div><span className="number-complete">28</span><span className="complete">Completed</span></div>
        </div>
        <div className="cart">
            <div className="projects-container">
                <span className="title">Teams</span>
                <span className="box box-3">
                    <Poeple />
                </span>
            </div>
            <p className="number">12</p>
            <div><span className="number-complete">2</span><span className="complete">Completed</span></div>
        </div>
        <div className="cart">
            <div className="projects-container">
                <span className="title">Productivity</span>
                <span className="box box-4">
                    <Targer/>
                </span>
            </div>
            <p className="number">76%</p>
            <div><span className="number-complete productivity">5%</span><span className="complete">Completed</span></div>
        </div>
     
    </div>)
}

export default ProjectInfoCart;