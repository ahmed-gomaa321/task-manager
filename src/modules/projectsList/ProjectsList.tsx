import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import AllProject from "@/shared/allProjects/AllProjects";
import { useState } from "react";

export const projects = [
    {
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
    },
    {
        "id": 102,
        "title": "Mobile App Development",
        "description": "Develop a cross-platform mobile app for e-commerce.",
        "startDate": "2024-09-15",
        "deadline": "2024-12-15",
        "progress": 30,
        "status": "In Progress",
        "tasks": [
            {
                "id": 1,
                "name": "Design app screens",
                "status": "Completed",
                "dueDate": "2024-09-30",
                "priority": "High",
                "asignee": "Sara Lee"
            },
            {
                "id": 2,
                "name": "Implement authentication",
                "status": "In Progress",
                "dueDate": "2024-11-05",
                "priority": "High",
                "asignee": "Chris Johnson"
            }
        ],
        "teamMembers": [
            {
                "id": 3,
                "name": "Sara Lee",
                "role": "UI Designer"
            },
            {
                "id": 4,
                "name": "Chris Johnson",
                "role": "Backend Developer"
            }
        ]
    },
    {
        "id": 103,
        "title": "Marketing Campaign",
        "description": "Plan and execute a digital marketing campaign for product launch.",
        "startDate": "2024-11-01",
        "deadline": "2025-01-31",
        "progress": 10,
        "status": "Not Started",
        "tasks": [
            {
                "id": 1,
                "name": "Create marketing strategy",
                "status": "To Do",
                "dueDate": "2024-11-15",
                "priority": "High",
                "asignee": "Emily Watson"
            }
        ],
        "teamMembers": [
            {
                "id": 5,
                "name": "Emily Watson",
                "role": "Marketing Manager"
            },
            {
                "id": 6,
                "name": "David Kim",
                "role": "Content Creator"
            }
        ]
    }
]

export default function ProjectsList() {
    const [projectsData, setProjectsData] = useState(projects);
    const [isOpen, setIsOpen] = useState(false)

    const form = useForm({
        defaultValues: {
            title: "",
            description: "",
            progress: "",
            status: "",
        }
    })
    const addNewProject = (data: any) => {
        console.log(data);
        setProjectsData([...projectsData, data])
        form.reset();
        setIsOpen(false)
    }
    return (
        <section className="p-5">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-3xl text-blue-500">Project List</h1>
                <div>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setIsOpen(true)} variant="outline">Add New Project</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add New Project</DialogTitle>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(addNewProject)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>title: </FormLabel>
                                                <FormControl>
                                                    <Input  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>description: </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="progress"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>progress: </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>status: </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">add</Button>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <AllProject projects={projects} />
        </section>
    )
}
