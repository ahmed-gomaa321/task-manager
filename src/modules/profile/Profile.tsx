import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import userImg from "@/assets/images/user-profile.png"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
export default function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState(
        { name: "John Doe", role: "front end" }
    );
    const form = useForm({
        defaultValues: {
            name: userData.name,
            role: userData.role
        }
    })
    const editProfile = (data: { name: string; role: string; }) => {
        setUserData({
            name: data.name,
            role: data.role
        })
    }
    return (
        <section className='font-medium p-10'>
            <div className='flex justify-between items-center flex-col flex-wrap p-5 shadow-md rounded-md relative'>
                <div className='absolute top-2 right-2'>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setIsOpen(true)} variant="outline">Edit  Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(editProfile)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
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
                                        name="role"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>role: </FormLabel>
                                                <FormControl>
                                                    <Input  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button onClick={() => setIsOpen(!isOpen)} type="submit">save</Button>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
                <h1 className='text-2xl text-blue-500'>employee Details</h1>
                <div className='py-2 px-3'>
                    <img className='w-[300px]' src={userImg} alt="user-img" />
                </div>
                <div className='text-center'>
                    <h1>name: {userData.name}</h1>
                    <p>role: {userData.role}</p>
                </div>
            </div>
        </section>
    )
}
