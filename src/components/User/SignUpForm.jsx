'use client'
import { useState } from 'react'
import { IsEmail, IsEmpty } from '@/utility/FormHelper'
import SubmitButton from '@/components/SubmitButton'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignUpForm = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
    })
    const [submit, setSubmit] = useState(false)
    const router = useRouter()
    const inputOnChange = (name, value) => {
        setData((data) => ({
            ...data,
            [name]: value,
        }))
    }
    const formSubmit = async () => {
        if (IsEmpty(data.firstName)) {
            toast('First Name Required')
        } else if (IsEmpty(data.lastName)) {
            toast('last Name Required')
        } else if (IsEmpty(data.mobile)) {
            toast('Mobile No Required')
        } else if (IsEmail(data.email)) {
            toast('Valid Email Address Required')
        } else if (IsEmpty(data.password)) {
            toast('Password Required')
        } else {
            setSubmit(true)
            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
            let res = await fetch('/api/user/registration', options)
            let ResJson = await res.json()

            if (ResJson['status'] === 'success') {
                toast('Registration Success')
                router.push('/user/login')
            } else {
                setSubmit(false)
                toast('Request Fail')
            }
        }
    }

    return (
        <div className="flex flex-row h-screen justify-center items-center ">
            <Card className="p-10 w-full m-5 md:w-2/5 ">
                <CardHeader>
                    <CardTitle>SignUp Form</CardTitle>
                    <CardDescription>
                        Deploy your new project in one-click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={formSubmit} className=" ">
                        <div className="flex flex-col space-y-1.5 my-2">
                            <Label
                                className="text-lg font-medium"
                                htmlFor="first name"
                            >
                                First Name
                            </Label>
                            <Input
                                value={data.firstName}
                                onChange={(e) => {
                                    inputOnChange('firstName', e.target.value)
                                }}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5 my-2">
                            <Label
                                className="text-lg font-medium"
                                htmlFor="last name"
                            >
                                Last Name
                            </Label>
                            <Input
                                value={data.lastName}
                                onChange={(e) => {
                                    inputOnChange('lastName', e.target.value)
                                }}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5 my-2">
                            <Label
                                className="text-lg font-medium"
                                htmlFor="mobile"
                            >
                                Mobile
                            </Label>
                            <Input
                                value={data.mobile}
                                onChange={(e) => {
                                    inputOnChange('mobile', e.target.value)
                                }}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5 my-2">
                            <Label
                                className="text-lg font-medium"
                                htmlFor="email"
                            >
                                Email
                            </Label>
                            <Input
                                value={data.email}
                                onChange={(e) => {
                                    inputOnChange('email', e.target.value)
                                }}
                                type="email"
                                className="form-control"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5 my-2">
                            <Label
                                className="text-lg font-medium"
                                htmlFor="password"
                            >
                                Password
                            </Label>
                            <Input
                                value={data.password}
                                onChange={(e) => {
                                    inputOnChange('password', e.target.value)
                                }}
                                type="password"
                                className="form-control"
                            />
                        </div>
                        <SubmitButton
                            submit={submit}
                            onClick={formSubmit}
                            text="Sign Up"
                        />
                    </form>
                </CardContent>
                <CardFooter className="flex flex-row divide-x"></CardFooter>
            </Card>
        </div>
    )
}
export default SignUpForm
