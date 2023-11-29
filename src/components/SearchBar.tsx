"use client"
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}

function SearchBar({ }: Props) {
    const [value, setValue] = useState("");

  return (
    <>
    <form className='hidden md:flex gap-4 w-full justify-center items-center '>
                 <div className="flex flex-grow max-w-[600px] ">
                         <Input type="search" name="search" id="" placeholder='🔍 Search..' className='border border-secondary-border  py-1 px-4 text-base w-full shadow-md ' onChange={(e) => setValue(e.target.value)} value = {value} />
                         {/* <Button className="py-1 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0 shadow bg-primary text-white dark:bg-white dark:text-black">
                         <Search />
                         </Button> */}
                 </div>
             </form>
</>
  )
}

export default SearchBar