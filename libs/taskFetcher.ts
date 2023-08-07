import prisma from './prismadb'

export async function getTask() {
    try {
        const tasks = await prisma.task.findMany()
        return { tasks }
    } catch (error) {
        return { error }
    }
}

export async function createTask(task: string) {
    try {
        const taskCreated = await prisma.task.create({ data: {task, taskDone: false}})
        return {taskCreated}
    } catch (error) {
        return { error }
    }
}

export async function updateTask(id: string, taskDone: boolean) {
    try {
        const task = await prisma.task.update({where: {id}, data: {taskDone}}) 
        return {task}
    } catch (error) {
        return {error}
    }
}