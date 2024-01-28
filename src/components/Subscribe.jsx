'use client'
import React, { useState } from 'react'
import { ErrorToast, IsEmail, SuccessToast } from '@/utility/FormHelper'
import SubmitButton from '@/components/SubmitButton'
import { Input } from './ui/input'
import { toast } from 'sonner'
const Subscribe = () => {
    let [data, setData] = useState({ email: '' })
    const [submit, setSubmit] = useState(false)
    const inputOnChange = (name, value) => {
        setData((data) => ({
            ...data,
            [name]: value,
        }))
    }

    const formSubmit = async () => {
        if (IsEmail(data.email)) {
            toast('Valid Email Address Required')
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
            let res = await fetch('/api/subscriber', options)
            let ResJson = await res.json()
            setSubmit(false)
            setData({ email: '' })
            if (ResJson['status'] === 'success') {
                toast('Request Success')
            } else {
                toast('Request Fail')
            }
        }
    }

    return (
        <div className="my-10 flex flex-col  w-full">
            <div className="flex flex-col justify-center items-center  px-10">
                <h6 className="text-3xl font-semibold">News Letter</h6>
                <div className="flex flex-row">
                    <Input
                        value={data.email}
                        onChange={(e) => {
                            inputOnChange('email', e.target.value)
                        }}
                        type="text"
                        placeholder="Email Address"
                        className=" w-fit"
                    />
                    <SubmitButton
                        onClick={formSubmit}
                        className=""
                        submit={submit}
                        text="Submit"
                    />
                </div>
            </div>
        </div>
    )
}

export default Subscribe
