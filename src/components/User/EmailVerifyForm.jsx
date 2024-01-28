'use client'
import { useState } from 'react'
import { IsEmail } from '@/utility/FormHelper'
import SubmitButton from '@/components/SubmitButton'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
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
const EmailVerifyForm = () => {
    const [data, setData] = useState({ email: '' })
    const [submit, setSubmit] = useState(false)

    const router = useRouter()
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
        } else {
            setSubmit(true)
            let res = await fetch(
                `/api/user/recover/verifyEmail?email=${data.email}`
            )
            let ResJSON = await res.json()
            if (ResJSON.status === 'success') {
                // Temporary Session
                sessionStorage.setItem('email', data.email)

                router.push('/user/otpVerify')
                toast.success('Request Success')
            } else {
                toast.error('Invalid Email Address!')
            }
            setSubmit(false)
        }
    }

    return (
        <div className="flex flex-row h-screen justify-center items-center ">
            <Card className="p-10 w-full m-5 md:w-2/5 ">
                <CardHeader>
                    <CardTitle>Forget Email</CardTitle>
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
                                className="form-control mb-2"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5 my-2">
                            <SubmitButton
                                className="btn btn-danger mt-3"
                                submit={submit}
                                text="Next"
                            />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-row divide-x"></CardFooter>
            </Card>
        </div>
    )
}
export default EmailVerifyForm
