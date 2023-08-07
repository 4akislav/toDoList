'use client'

import { useRouter } from "next/navigation"
import { getTask } from "../../libs/taskFetcher";
import TaskItem from "./components/TaskItem";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const { tasks } = await getTask()
  const router =  useRouter();

  return (
    <div>
      <div>
        <p
          className="text-3xl" style={{marginTop: "20px", marginBottom: "20px"}}>Welcome home
            </p>
              <div className="text-1xl"><p style={{marginBottom: "50px"}}>Try to make your own "to do list"!</p></div>
    <p><button style={{ marginRight: "200px", border: "1px solid white"}} className="
    relative
    rounded-full
    h-11  
    p-2
    items-center
    justify-center
    hover:bg-white
    hover:bg-opacity-10
    transition
    " onClick={() => router.push("/testpage")}>Let's go!</button></p></div>
    <div>
      <h1 style={{ marginTop: "20px", marginLeft: "550px",}}>Posted tasks!</h1>
      <ul>
        {tasks?.map(task => (
          <TaskItem key={task.id} task={task}/>
        ))}
      </ul>
    </div>
    </div>
  )
}
