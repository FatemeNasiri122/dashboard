import ActiveProjectsTable from "../components/home/ActiveProjectsTable";
import CreateProject from "../components/home/CreateProject";
import ProjectInfoCart from "../components/home/ProjectInfoCart";
import TasksPerformance from "../components/home/TasksPerformance";
import Teams from "../components/home/Teams";
import { ProjectsProvider } from "../context/ProjectsContext";

const Home: React.FC = () => {
    return (
        <ProjectsProvider>
           <div className="home">
                <CreateProject />
                <ProjectInfoCart />
                <ActiveProjectsTable />
                <div className="performance-teams-container">
                    <div className="tasks">
                        <TasksPerformance />
                    </div>
                    <div className="teams">
                        <Teams />
                    </div>
                </div>
                
            </div> 
        </ProjectsProvider>
        )
}

export default Home;