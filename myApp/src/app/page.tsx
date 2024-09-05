// "use client"
// import Link from 'next/link'
// import React, { ChangeEvent } from 'react'
// import { useState } from 'react'

// export default function Page() {
//   const [roomId, setRoomId] = useState<string>("")
//   return (
//     <main className='flex min-h-screen flex-col items- center justify-between gap-y-6 p-24'>
//       <h1 className='text-3xl font-bold text-blue-700'>Nextjs video calling App with Zegocloud</h1>
//       <input type="text" placeholder='enter the room id' className='px-4 py-2 outline-none bg-grat-100 rounded-lg'
//       value={roomId}
//       onChange={(e:ChangeEvent<HTMLInputElement>)=>setRoomId(e.target.value)}/>
//        <Link href={""}>
//        <button className='px-4 py-2 bg-blue-700 text-white rounded-md'>join Room</button>
//        </Link>

//     </main>
//   )
// }
"use client"
import { useState } from "react";
import { ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const[roomId , setRoomId]= useState<string>("")
  return (
    <main className="flex flex-col items-center justify-between gap-y-6 p-24">
      <h1 className="text-3xl font-bold text-blue-700 ">Nextjs Video Calling App with ZegoCloud</h1>
      <input type="text" 
      placeholder="Enter the meeting id" 
      className="px-4 py-2 outline-none bg-gray-100 rounded-lg"
      value={roomId}
    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setRoomId(e.target.value)}}/>
    <Link href={`/room/${roomId}`}>
    <button className="px-4 py-2 bg-blue-700 text-white rounded-md">Join Room</button>
    </Link>
    </main>
  );
}