import React from 'react'
import Link from 'next/link'
// import Subscribe from "@/components/Subscribe";

const PopularList = (props) => {
    return (
        <div className="w-1/4 mt-5 px-5 max-md:hidden">
            <div className=" bg-black mt-2 rounded-lg text-white p-2">
                <h1 className="p-1">POPULAR</h1>
            </div>

            {props.popular.map((item, i) => {
                return (
                    <div
                        className=" rounded-xl shadow-xl py-3 my-2 px-0"
                        key={i}
                    >
                        <Link href={'/details?id=' + item['id']} className="">
                            <img
                                className=" rounded-t-xl "
                                src={item['img4']}
                                alt="News Image"
                            />

                            <h6 className=" text-lg font-medium px-3 py-2">
                                {item['title']}
                            </h6>
                        </Link>
                    </div>
                )
            })}

            {/* <div className="bg-dark mt-2 rounded-1 text-white p-2">
                    <span className="p-1">SUBSCRIBE</span>
                </div>

                <div className="col-12 py-1 px-0">
                    <Subscribe/>
                </div> */}
        </div>
    )
}

export default PopularList
