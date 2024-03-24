import { InitialState, Project } from "../types/types";

interface ActionType {
    type: string
    payload: {
        project: Project
    }
}

const ProjectsReducer= (state: InitialState ,action: ActionType) =>{
    switch (action.type) {
        case 'ADD_PROJECT':
            return{
                ...state,
                project: action.payload.project,
                projects: [action.payload.project, ...state.projects],
            }
        default: return state;
    }
}

export default ProjectsReducer