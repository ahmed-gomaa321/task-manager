import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/app/constants/routes';

interface ITasks {
    id: number;
    name: string;
    asignee: string;
    status: string;
    priority: string;
    dueDate: string;
}[]
export default function TasksList() {
    const [tasks, setTasks] = useState<ITasks[]>([
        { id: 1, name: 'Design Homepage', asignee: 'Alice', status: 'In Progress', priority: 'High', dueDate: '2024-10-15' },
        { id: 2, name: 'Fix Login Bug', asignee: 'Bob', status: 'To Do', priority: 'Low', dueDate: '2024-10-18' },
        { id: 3, name: 'Update User Profile', asignee: 'Charlie', status: 'Completed', priority: 'Medium', dueDate: '2024-10-20' }
    ])
    const form = useForm({
        defaultValues: {
            name: "",
            project: "",
            asignee: "",
            status: "",
            priority: "",
            dueDate: "",
        }
    })
    const addNewTask = (data: any) => {
        console.log(data);
        setTasks([...tasks, data])
        form.reset();
        setIsOpen(false)
    }
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const uniqueStatus = Array.from(new Set(tasks.map(task => task.status)));
    const uniquePriority = Array.from(new Set(tasks.map(task => task.priority)));
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [priorityFilter, setPriorityFilter] = useState<string>('all');
    const [searchName, setSearchName] = useState<string>('');

    const filterTasks = () => {
        return tasks.filter((task: { name: string; status: string; priority: string; }) => {
            const searchMatch = searchName === '' || task?.name.toLowerCase().includes(searchName.toLowerCase());
            const statusMatch = statusFilter === 'all' || task.status === statusFilter;
            const priorityMatch = priorityFilter === 'all' || task.priority === priorityFilter;
            return statusMatch && priorityMatch && searchMatch;
        })
    }
    const filteredTasks = filterTasks();
    console.log(filteredTasks);

    return (
        <section>
            <div className='flex justify-between items-center flex-wrap'>
                <div className='p-5 w-full sm:w-1/2'>
                    <h2 className='font-medium text-blue-500 text-2xl'>Tasks List</h2>
                </div>
                <div className='p-5'>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setIsOpen(true)} variant="outline">Add New Task</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[60%] my-5 h-[80%] overflow-y-scroll hide-scroll gap-2">
                            <DialogHeader>
                                <DialogTitle>Add New Task</DialogTitle>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(addNewTask)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem >
                                                <FormLabel>name: </FormLabel>
                                                <FormControl>
                                                    <Input  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="project"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>project: </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="asignee"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>asignee: </FormLabel>
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
                                    <FormField
                                        control={form.control}
                                        name="priority"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>priority: </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="dueDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>dueDate: </FormLabel>
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
            <div className='p-5 w-full sm:w-1/2'>
                <div className='flex items-center flex-wrap'>
                    <div className='w-1/2'>
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-[9rem]">
                                <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>status</SelectLabel>
                                    <SelectItem className='cursor-pointer' value='all'>None</SelectItem>
                                    {uniqueStatus.map((task) => <SelectItem key={task} className='cursor-pointer' value={task}>{task}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='w-1/2'>
                        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                            <SelectTrigger className="w-[9rem]">
                                <SelectValue placeholder="Select a priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>priority</SelectLabel>
                                    <SelectItem className='cursor-pointer' value='all'>None</SelectItem>
                                    {uniquePriority.map((task) => <SelectItem key={task} className='cursor-pointer' value={task}>{task}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className='py-5 w-full'>
                    <Input onChange={(e) => setSearchName(e.target.value)} type='search' placeholder='Search By Neme' />
                </div>
            </div>

            <div className="p-5 overflow-x-scroll hide-scroll">
                {filteredTasks.length > 0 ?
                    <Table className='overflow-x-scroll hide-scroll font-medium'>
                        <TableHeader>
                            <TableRow>
                                <TableHead>name</TableHead>
                                <TableHead>project</TableHead>
                                <TableHead>asignee</TableHead>
                                <TableHead>status</TableHead>
                                <TableHead>priority</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredTasks.map((task) =>
                                <TableRow className='cursor-pointer' onClick={() => navigate(ROUTES.TASKS_DETAILS)} key={task?.id}>
                                    <TableCell>{task?.name}</TableCell>
                                    <TableCell>....</TableCell>
                                    <TableCell>{task?.asignee}</TableCell>
                                    <TableCell>{task?.status}</TableCell>
                                    <TableCell>{task?.priority}</TableCell>
                                    <TableCell>{task?.dueDate}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                    : <p className='text-2xl text-blue-500 font-medium text-center p-5'>No tasks match your filter.</p>
                }
            </div>
        </section>
    )
}
