"use client"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const Navbar = (props) => {

    let [searchKey,SetSearchKey]=useState("0");
    let [login,SetLogin]=useState(false);

    useEffect(() => {
        if(Cookies.get('token')){
            SetLogin(true);
        }
        else {
            SetLogin(false);
        }
    }, []);
  return (
    <div className='flex flex-row items-center gap-5 py-5 px-10'>
     <h1 className='text-3xl font-semibold'>News<span className='text-3xl text-red-600'>24</span></h1>
      <nav className='flex justify-between items-center gap-5'>
        <div className='flex flex-row justify-center items-center gap-3 max-lg:hidden'>
          <Link className=" text-xl" href="/">Home</Link>
          {props.data.map((Item, i) => {
            return (<Link key={i} className=" text-xl"  href={"/category?id="+Item['id']} >{Item['name']}</Link> )})}
        </div>
        <div className="flex items-center space-x-2">
      <Input  onChange={(e)=>{SetSearchKey(e.target.value)}} type="text" placeholder="Search" />
      <Link href={`/search?keyword=${searchKey}`} className="" type="button"><Search/></Link>
        </div>
 <Popover>
  <PopoverTrigger><Avatar>
      <AvatarImage src="" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
              </Avatar></PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
              


      
      </nav>
    </div>
  )
}

export default Navbar