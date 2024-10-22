"use client"
import React, { useState } from "react"
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ITask } from "@/app/api/types/project/Project";


export default function TaskDetails() {
    const [isUpdate, setIsUpdate] = useState(false);
    const [data, setData] = useState({
        id: 10,
        name: "Task 1",
        asignee: "mohamed",
        status: "in progress",
        priority: "hight",
        dueDate: "2024-10-20"
    })
    const form = useForm({
        defaultValues: {
            id: data.id,
            name: data.name,
            asignee: data.asignee,
            status: data.status,
            priority: data.priority,
            dueDate: data.dueDate
        }
    })
    const updateTask = (data: ITask) => {
        console.log(data);
        setData({
            id: data.id,
            name: data.name,
            asignee: data.asignee,
            status: data.status,
            priority: data.priority,
            dueDate: data.dueDate
        })
    }

    // const { id } = useParams();
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <section>
            <div className="container mx-auto">
                <div className='p-5'>
                    <h1 className="text-2xl text-blue-500 dont font-medium">Task Details</h1>
                </div>
                <div className='px-20 py-8'>
                    <div className='p-3 sm:p-8 shadow-lg rounded-lg font-medium'>
                        <h2 className='text-lg sm:text-2xl'>Id: {data.id}</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(updateTask)}>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='select-none'>name</FormLabel>
                                            <FormControl>
                                                <Input disabled={!isUpdate} placeholder="" {...field} />
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
                                            <FormLabel className='select-none'>status</FormLabel>
                                            <FormControl>
                                                <Input disabled={!isUpdate} placeholder="" {...field} />
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
                                            <FormLabel className='select-none'>asignee</FormLabel>
                                            <FormControl>
                                                <Input disabled={!isUpdate} placeholder="" {...field} />
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
                                            <FormLabel className='select-none'>priority</FormLabel>
                                            <FormControl>
                                                <Input disabled={!isUpdate} placeholder="" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='text-lg sm:text-2xl mt-2'>
                                    <Popover>
                                        <PopoverTrigger disabled={!isUpdate} asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "max-w-[240px] justify-start text-left font-normal",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent  className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="mt-2">
                                    <Button onClick={() => setIsUpdate(!isUpdate)} className='select-none w-[5rem]' type="submit">{isUpdate? "save" : "update"}</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
                {/* comment section */}
                <div className="my-3 p-5">
                    <h2 className="font-medium text-blue-500">comments section</h2>
                    <div className="p-5 shadow-lg rounded-md border ">
                        <ul>
                            <li>"Can you please provide an update on the task status?"</li>
                            <li>"Any progress on this? Let me know if you need help."</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}
