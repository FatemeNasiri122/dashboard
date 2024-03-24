export interface Project {
    projectName: {
        name: string
        img: string
    }
    hours: number
    priority: string
    members: string[]
    progress: number
    id: number
}

export interface Team {
    memberName: {
        name: string,
        img: string,
        email:  string,
    },
    role: string,
    lastActivity: string,
    id: number
}

export type addProject = (project: Project) => void;
export type columnString = (item: object) => string;

export interface InitialState {
    project: Project,
    projects: Project[],
    teams: Team[],
}

export interface ProjectsContextType {
    project: Project,
    projects: Project[],
    teams: Team[],
    addProject: addProject
} 