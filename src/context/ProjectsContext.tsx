import {createContext, useReducer} from "react";
import ProjectsReducer from "./ProjectsReducer";
import { InitialState, addProject, ProjectsContextType  } from "../types/types";
import { allprojects, } from "../data/projects";
import { allteams } from "../data/teams";

const ProjectsContext = createContext<ProjectsContextType | null>(null);

interface Props {
    children: JSX.Element
}

export const ProjectsProvider: React.FC<Props> = ({ children }) => {
    
    const initialState : InitialState = {
    project: {
        projectName: {
        name: "",
        img: "",
    },
        hours: 0,
        priority: "",
        members: [],
        progress: 0,
        id: 1
    },
    projects: allprojects,
    teams: allteams,
}

    const [state,dispatch] = useReducer(ProjectsReducer,initialState);
    const addProject: addProject = (project) => {
        dispatch({
            type: 'ADD_PROJECT',
            payload: {
                project: project,
            }
        });
    }

    const { project, projects, teams } = state;

    return(
        <ProjectsContext.Provider value={{project , projects , addProject, teams }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContext