import React from 'react';
import Link from "next/link";

const NewsList = (props) => {
    return (
        <div className="w-full md:w-3/4 grid grid-flow-row grid-cols-2 md:grid-cols-3  gap-2 md:gap-4 mt-5 px-3 md:px-5">
            {
                props.latest.map((item,i)=>{
                    return(
                       
                            <div className=" bg-white shadow-sm" key={i}>
                                <img className="" src={item['img3']} alt="News Image"/>
                                <div className="">
                                    <h6 className="">{item['title']}</h6>
                                    <p>{item['short_des']}</p>
                                    <p className="my-2 fw-bold p-0"><i className="bi bi-clock"></i> 3 Days Ago</p>
                                    <Link href={"/details?id="+item['id']} className="btn mt-2 btn-sm btn-outline-danger">Read More</Link>
                                </div>
                            </div>
                      
                    )
                })
            }
        </div>
    );
};
export default NewsList;