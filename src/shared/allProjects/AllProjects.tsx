import { IProject } from "@/app/api/types/project/Project";
import { ROUTES } from "@/app/constants/routes";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

export default function AllProject({ projects }: {projects : IProject[]}) {
    const navigate = useNavigate();    
    return (
        <>
            <div className="mx-8 my-5">
                <h2 className='font-bold text-blue-500 mb-3'>projects : <span className="text-black">{projects?.length} project</span></h2>
                <div className="max-h-[400px] overflow-y-scroll hide-scroll p-4 shadow-md rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {['Title', 'Description', 'Progress', 'Status'].map((head) =>
                                    <TableHead key={head}>{head}</TableHead>
                                )}
                            </TableRow>
                        </TableHeader>
                        <TableBody className="overflow-y-scroll hide-scroll">
                            {projects?.map((project) => (
                                <TableRow key={project.id} className="cursor-pointer" onClick={() => navigate(ROUTES.SINGLE_PROJECT)}>
                                    <TableCell className="font-medium">{project.title}</TableCell>
                                    <TableCell>{project.description}</TableCell>
                                    <TableCell>{project.progress} %</TableCell>
                                    <TableCell>{project.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}
