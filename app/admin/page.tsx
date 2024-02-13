import React from 'react'
import { getServerSession } from 'next-auth'
import {redirect} from "next/navigation"

const page = async () => {
    const session:any = await getServerSession();
    if(!session || session.user?.email !== "k@gmail.com"){
        console.log(session.user?.email)
        redirect("/")
    }
  return (
    <div className='text-zinc-900'>
      adminPage
      <p>{session.user?.email}</p>
    </div>
  )
}

export default page
