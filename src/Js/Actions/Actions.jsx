import { add_task } from "../Constants/ActionTypes";
import { delete_task } from "../Constants/ActionTypes";
import { filter_tasks} from "../Constants/ActionTypes";
import { check_task} from "../Constants/ActionTypes";
import { uncheck_task} from "../Constants/ActionTypes";
import { unfilter_tasks} from "../Constants/ActionTypes";

export const addTask = newTask => {
    return {
        type: add_task,
        payload: newTask
    }
}

export const deleteTask = oldTask => {
    return {
        type: delete_task,
        payload: oldTask
    }
}

export const checkTask = currTask => {
    return {
        type: check_task,
        payload: currTask
    }
}

export const uncheckTask = currTask => {
    return {
        type: uncheck_task,
        payload: currTask
    }
}

export const filterTasks = tasks =>{
    return {
        type : filter_tasks,
        payload: tasks
    }
}

export const unfilterTasks ={
        type : unfilter_tasks
}