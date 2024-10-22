export interface IProject {
    id: number;
    title: string;
    description: string;
    startDate: string;
    deadline: string;
    progress: number;
    status: string;
    tasks: ITask[];
    teamMembers: ITeamMember[];
}

export interface ITask {
    id: number;
    name: string;
    status: string;
    dueDate: string;
    priority: string;
    asignee: string;
}

export interface ITeamMember {
    id: number;
    name: string;
    role: string;
}
