import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/constants/routes';


export default function Register() {
    const schema = yup.object().shape({
        userName: yup.string().required('name is required'),
        email: yup.string().email('email is invalid').required('email is required'),
        password: yup.string().trim().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "password must be at least 8 characters and contains at least one letter, one number, and one special character").required("password is required"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords must match").required('confirm Password is required')
    })

    interface IFormRegister {
        userName: string
        email: string
        password: string
        confirmPassword: string
    }
    const form = useForm<IFormRegister>({
        defaultValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        resolver: yupResolver(schema)
    })
    const register = (data: IFormRegister) => {
        console.log(data);
        form.reset();
    }
    return (
        <div className='sm:px-40 px-10 py-20 container mx-auto'>
            <div className='shadow-lg p-6 rounded-lg'>
                <h1 className='text-3xl text-blue-500 font-semibold mb-5'>Register Now</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(register)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="userName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='select-none'>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='select-none'>confirm Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" type='password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='select-none' type="submit">Submit</Button>
                        <p>already have an account? <Link className='text-blue-500 font-medium hover:text-blue-700' to={`/${ROUTES.LOGIN}`}>Login</Link></p>
                    </form>
                </Form>
            </div>
        </div>
    )
}

