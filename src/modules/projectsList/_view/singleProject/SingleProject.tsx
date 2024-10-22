import { IProject } from "@/app/api/types/project/Project"
import Chart from "./Chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button";

export const projectDetails: IProject = {
    "id": 101,
    "title": "Website Redesign",
    "description": "Redesign the company website for better user experience and accessibility.",
    "startDate": "2024-10-01",
    "deadline": "2024-12-01",
    "progress": 50,
    "status": "In Progress",
    "tasks": [
        {
            "id": 1,
            "name": "Create wireframes",
            "status": "Completed",
            "dueDate": "2024-10-10",
            "priority": "High",
            "asignee": "John Doe"
        },
        {
            "id": 2,
            "name": "Develop landing page",
            "status": "In Progress",
            "dueDate": "2024-11-01",
            "priority": "Medium",
            "asignee": "Jane Smith"
        },
        {
            "id": 3,
            "name": "Test user interface",
            "status": "To Do",
            "dueDate": "2024-11-15",
            "priority": "Low",
            "asignee": "David Johnson"
        }
    ],
    "teamMembers": [
        {
            "id": 1,
            "name": "John Doe",
            "role": "Project Manager"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "role": "Frontend Developer"
        }
    ]
}
export default function SingleProject() {
    return (
        <section>
            <div className="p-5 text-2xl flex items-center justify-between flex-wrap">
                <h2 className="text-blue-500 font-medium">{projectDetails.title}</h2>
                <div>
                    <Chart projectName={projectDetails.title} progress={projectDetails.progress} />
                </div>
            </div>
            <div className="flex justify-between flex-wrap font-medium">
                <div className="w-full p-5">
                    <div className="p-5 shadow-lg">
                        <h3 className="font-medium text-blue-500">tasks :</h3>
                        <Table className="overflow-x-scroll hide-scroll">
                            <TableHeader>
                                <TableRow>
                                    {["task name", "status", "asignee", "priority", "dueDate"].map((head, index) =>
                                        <TableHead key={index}>{head}</TableHead>
                                    )}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projectDetails.tasks.map((task) =>
                                    <TableRow key={task.id}>
                                        <TableCell><div className="px-3 py-2">{task.name}</div></TableCell>
                                        <TableCell><div className="px-3 py-2">{task.status}</div></TableCell>
                                        <TableCell><div className="px-3 py-2">{task.asignee}</div></TableCell>
                                        <TableCell><div className="px-3 py-2">{task.priority}</div></TableCell>
                                        <TableCell><div className="px-3 py-2">{task.dueDate}</div></TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="w-full p-5">
                    <div className="shadow-lg p-5">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-blue-500">team members :</h3>
                            <Button variant="outline"> invite Member</Button>
                        </div>
                        <div>
                            {projectDetails.teamMembers.map((member) =>
                                <div className="p-3" key={member.id}>
                                    <div className="flex items-center justify-between border-b pb-3 p-2 hover:bg-gray-100">
                                        <h2 className="text-blue-500">Name : <span className="text-black">{member.name}</span></h2>
                                        <h2 className="text-blue-500">Role : <span className="text-black">{member.role}</span></h2>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
