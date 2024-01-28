'use client'
import { useState } from 'react'
import { IsEmpty, SuccessToast } from '@/utility/FormHelper'
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

const PINVerifyForm = () => {
    const [data, setData] = useState({
        email: sessionStorage.getItem('email'),
        otp: '',
    })
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
        if (IsEmpty(data.otp)) {
            toast('Valid PIN Code Required')
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

            let res = await fetch('/api/user/recover/verifyOTP', options)
            let ResJson = await res.json()

            setSubmit(false)

            if (ResJson['status'] === 'success') {
                toast('Verification Success')
                sessionStorage.setItem('otp', data.otp)
                router.push('/user/resetPassword')
            } else {
                toast('Request Fail')
            }
        }
    }

    return (
        <div className="flex flex-row h-screen justify-center items-center ">
            <Card className="p-10 w-full m-5 md:w-2/5 ">
                <CardHeader>
                    <CardTitle>Verification PIN</CardTitle>
                    <CardDescription>
                        Deploy your new project in one-click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={formSubmit} className=" ">
                        <div className="flex flex-col space-y-1.5 my-2">
                            <Label
                                className="text-lg font-medium"
                                htmlFor="pin code"
                            >
                                6 Digit Code
                            </Label>
                            <Input
                                onChange={(e) => {
                                    inputOnChange('otp', e.target.value)
                                }}
                                type="text"
                                className="form-control mb-2"
                            />
                        </div>
                        <SubmitButton
                            className="btn btn-danger mt-3"
                            submit={submit}
                            text="Verify"
                        />
                    </form>
                </CardContent>
                <CardFooter className="flex flex-row divide-x"></CardFooter>
            </Card>
        </div>
    )
}
export default PINVerifyForm
