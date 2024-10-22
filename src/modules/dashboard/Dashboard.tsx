import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Analytics from "./_component/Analytics";
import RecentActivityFeed from "./_component/RecentActivityFeed";
import AllProject from "@/shared/allProjects/AllProjects";
import { projects } from "../projectsList/ProjectsList";


export default function Dashboard() {
    const form = useForm({
        defaultValues: {
            taskName: "",
            taskDescription: "",
            taskPriority: "",
        }
    })
    const addNewProject = (data: any) => {
        console.log(data);
        form.reset();
    }

    return (
        <section className="p-5">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-3xl text-blue-500">dashboard</h1>

                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Add New Project</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add New Project</DialogTitle>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(addNewProject)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="taskName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>task name: </FormLabel>
                                                <FormControl>
                                                    <Input  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="taskDescription"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>taskDescription: </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="taskPriority"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>taskPriority: </FormLabel>
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
            <div className="flex">
                <div className="w-full sm:w-2/3">
                    <div className="p-5">
                        <Analytics />
                    </div>
                </div>
                <div className="w-full sm:w-1/3">
                    <div className="p-5">
                        <RecentActivityFeed />
                    </div>
                </div>
            </div>
            <AllProject projects={projects} />
        </section>
    )
}
