'use client'

import { useTransition } from 'react'
import { Task } from '@prisma/client'
import { updateTaskAction } from '../_actions'

type TaskItemProps = {
    task: Task
}

const TaskItem = ({ task }: TaskItemProps )  => {
    const [isPending, startTransition] = useTransition()

    return (
        <li className='flex items-center gap-3'>
            <input
            id={task.id}
            type='checkbox'
            defaultChecked={task.taskDone}
            onChange={(e) =>
                startTransition(() => updateTaskAction(task.id, e.target.checked))
            }
            className='peer h-4 w-4 cursor-pointer rounded 
            border-gray-500 text-slate-600 focus:ring-slate-600'
            />
            <label
            htmlFor={task.id}
            className='cursor-pointer peer-checked:text-slate-500 peer-checked:line-through'
            >
                {task.task}
            </label>
            <span
            className='ml-auto text-sm text-slate-500 peer-checked:line-through'>
                {task.updatedAt.toUTCString()}
            </span>
        </li>
    )
}

export default TaskItem;