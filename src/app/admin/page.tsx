import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import Admindashboardclient from './Admindashboardclient';

async function Adminpage() {
  const user = await currentUser();
 //user is not logged always on landing page 
   if (!user) redirect("/")

    const adminEmail = process.env.ADMIN_EMAIL;
    const userEmail = user.emailAddresses[0]?.emailAddress;
    
    //user is not the admin
    if(!adminEmail || userEmail !==adminEmail) redirect("/dashboard")

  return (
    <Admindashboardclient/>
  )
}

export default Adminpage