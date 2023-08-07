'use client'

import { useRef } from "react"
import { createTaskAction } from "../_actions"

const NewTaskForm = () => {
    const formRefresh = useRef<HTMLFormElement>(null)

    async function action (data: FormData) {
        const taskField = data.get('taskField')
        if (!taskField || typeof taskField !== "string") return


        await createTaskAction(taskField)

        formRefresh.current?.reset()
    }
    return ( 
    <form ref={formRefresh} action={action}
    style={{ marginLeft: "400px", marginTop: "30px" }}>
        <label style={{ marginRight: "20px"}}>Enter your task..</label>
        <input 
        name="taskField"
        id="PostedTaskText" 
        className="text-black dark:border-gray-600 
        leading-tight focus:outline-none 
        border border-gray-300" type="text" 
        placeholder="feed the cat"/>
        <p style={{marginTop: "10px" ,marginLeft: "300px"}}>
            <button 
            type="submit"
            id="PostTaskAction" 
            className="text-black dark:border-black-600 
            leading-tight bg-white">Post task
            </button>
        </p>
    </form>
    )
}

export default NewTaskForm;