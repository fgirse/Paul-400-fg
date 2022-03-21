/* eslint-disable prettier/prettier */
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
    <section className="bg-slate-800 w-[100vw] h-[calc(100vh-12vh)] border-t-4 border-b-4 border-amber-500">
      <div className="bg-slate-700 w-9/12 mx-auto flex flex-col justify-between items-center">      
      <h1 className="text-6xl headingA font-bold text-yellow-500">Nicht angemeldet !!!</h1>
      <div className="mt-12 bg-grey-600 w-6/12 h-36 rounded-2xl ">

      </div>
      <button className="w-60 bg-sky-800 text-gray-300 text-2xl" onClick={() => signIn()}>Sign in</button>

      
      </div>
   


    </section>
      
    </>
  )
}