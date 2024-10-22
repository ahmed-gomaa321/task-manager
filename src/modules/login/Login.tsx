"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form';
import { Checkbox } from "@/components/ui/checkbox"
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '@/app/constants/routes'

export default function Login() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup.string().email('email is invalid').required('email is required'),
        password: yup.string().trim().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "password must be at least 8 characters and contains at least one letter, one number, and one special character").required('password is required'),
    })

    interface IFormLogin {
        email: string
        password: string
    }
    const form = useForm<IFormLogin>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })
    const login = (data: IFormLogin) => {
        console.log(data);
        form.reset();
        navigate(ROUTES.DASHBOARD_LAYOUT)
    }
    return (
        <div className='sm:px-40 px-10 py-20 container mx-auto'>
            <div className='shadow-lg p-6 rounded-lg'>
                <h1 className='text-3xl text-blue-500 font-semibold mb-5'>Login Now</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(login)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='select-none'>email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='select-none'>password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" type='password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-between">
                            <div className='flex items-center space-x-2'>
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <Link className='text-blue-500 hover:text-blue-700 font-medium' to={`/${ROUTES.FORGET_PASSWORD}`}>Forget Password?</Link>
                            </div>
                        </div>
                        <Button className='select-none' type="submit">Submit</Button>
                        <p>don't have an account? <Link className='text-blue-500 font-medium hover:text-blue-700' to={`/${ROUTES.REGISTER}`}>Sign up</Link></p>
                    </form>
                </Form>
            </div>
        </div>
    )
}

