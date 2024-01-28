'use client'
import { toast } from 'sonner'

import { useState } from 'react'
import { IsEmail, IsEmpty } from '@/utility/FormHelper'
import SubmitButton from '@/components/SubmitButton'
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

const LoginForm = () => {
    let [data, setData] = useState({ email: '', password: '' })
    const [submit, setSubmit] = useState(false)
    const inputOnChange = (name, value) => {
        setData((data) => ({
            ...data,
            [name]: value,
        }))
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        if (IsEmail(data.email)) {
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

            let res = await fetch('/api/user/login', options)
            let ResJson = await res.json()

            setSubmit(false)

            if (ResJson['status'] === 'success') {
                toast('Login Success')
                window.location.href = '/'
            } else {
                toast('Request Fail')
            }
        }
    }

    return (
        <div className="flex flex-row h-screen justify-center items-center ">
            <Card className="p-10 w-full m-5 md:w-2/5 ">
                <CardHeader>
                    <CardTitle>User Login</CardTitle>
                    <CardDescription>
                        Deploy your new project in one-click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={formSubmit} className=" ">
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
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5 my-2">
                            <Label
                                className="text-lg font-medium"
                                htmlFor="password"
                            >
                                User Password
                            </Label>
                            <Input
                                value={data.password}
                                onChange={(e) => {
                                    inputOnChange('password', e.target.value)
                                }}
                                type="password"
                            />
                        </div>

                        <SubmitButton
                            className=" mt-3"
                            submit={submit}
                            text="Login"
                        />
                    </form>
                </CardContent>
                <CardFooter className="flex flex-row divide-x">
                    <Link
                        href="/user/registration"
                        className={buttonVariants({ variant: 'ghost' })}
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="/user/emailVerify"
                        className={buttonVariants({ variant: 'ghost' })}
                    >
                        Forget Password
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
export default LoginForm
