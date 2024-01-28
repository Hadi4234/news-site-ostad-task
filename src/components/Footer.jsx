import React from 'react'
import Link from 'next/link'
import { Facebook, Youtube, Twitter, Linkedin } from 'lucide-react'
import Subscribe from './Subscribe'

const Footer = (props) => {
    return (
        <div className="p-10 bg-primary text-accent dark:bg-dark dark:text-primary flex flex-row justify-around gap-5 mt-10  ">
            <div className="flex flex-col w-1/4 items-start justify-center p-10">
                <h1 className=" text-2xl font-semibold">About Us</h1>
                <p className="mt-4 max-md:hidden">
                    {props.data['socials'][0]['about']}
                </p>
                <div className="flex flex-row justify-center items-center gap-3 mt-4">
                    <Link href={props.data['socials'][0]['facebook']}>
                        <Facebook />
                    </Link>
                    <Link href={props.data['socials'][0]['facebook']}>
                        <Youtube />
                    </Link>
                    <Link href={props.data['socials'][0]['facebook']}>
                        <Twitter />
                    </Link>
                    <Link href={props.data['socials'][0]['facebook']}>
                        <Linkedin />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-1/4 items-start justify-start p-10 ">
                <h1 className=" text-2xl font-semibold">Recommended</h1>
                <div className="mt-4 flex flex-col">
                    {props.data['categories'].map((Item, i) => {
                        if (i < 4) {
                            return (
                                <Link
                                    key={i}
                                    className=""
                                    href={'/category?id=' + Item['id']}
                                >
                                    {Item['name']}
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>
            <div className="flex flex-col w-1/4 items-start justify-start p-10 ">
                <h1 className=" text-2xl font-semibold">Legal</h1>
                <div className="mt-4 flex flex-col">
                    <h3>Privacy Policy</h3>
                    <h3>Terms & Conditions</h3>
                </div>
            </div>
            <div className="flex flex-1 max-md:hidden">
                <Subscribe />
            </div>
        </div>
    )
}

export default Footer
