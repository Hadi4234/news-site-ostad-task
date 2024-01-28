import React from 'react'
import { Clock8 } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const NewsList = (props) => {
    return (
        <div className="w-full md:w-3/4 grid grid-flow-row grid-cols-2 md:grid-cols-3  gap-2 md:gap-4 mt-5 px-3 md:px-5">
            {props.latest.map((item) => {
                return (
                    <div className="rounded-xl shadow-xl" key={item['id']}>
                        <div className="animate__animated animate__fadeInUp">
                            <img
                                className=" rounded-t-xl"
                                src={item['img3']}
                                alt="News Image"
                            />
                            <div className=" p-4">
                                <h6 className=" text-xl font-medium">
                                    {item['title']}
                                </h6>
                                <p className=" font-light text-wrap">
                                    {item['short_des']}
                                </p>
                            </div>
                            <div className="flex justify-between pb-4 px-4">
                                <p className="flex">
                                    <span>
                                        <Clock8 />
                                    </span>
                                    3 Days Ago
                                </p>
                                <Link
                                    href={'/details?id=' + item['id']}
                                    className={buttonVariants({
                                        variant: 'secondary',
                                    })}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default NewsList
