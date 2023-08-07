'use server'

import { revalidatePath } from "next/cache"
import { createTask, updateTask } from "../../libs/taskFetcher"

export async function createTaskAction(taskField: string) {
    await createTask(taskField)
    revalidatePath('/testpage')
}

export async function updateTaskAction(id: string, taskDone: boolean) {

    await updateTask(id, taskDone)

    revalidatePath('/testpage')
    
}