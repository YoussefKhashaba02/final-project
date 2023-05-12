import { add_task } from "../Constants/ActionTypes"
import { delete_task } from "../Constants/ActionTypes"
import { filter_tasks} from "../Constants/ActionTypes";
import { check_task} from "../Constants/ActionTypes";
import { uncheck_task} from "../Constants/ActionTypes";
import { unfilter_tasks} from "../Constants/ActionTypes";


const initialState={
    tasks:[{
        id: 1,
        title:"first",
        description:"des",
        isDone:"false"
}]
}
let Totaltasks=[{
    id: 1,
    title:"first",
    description:"des",
    isDone:"false"
}];



export const rootReducer =(state = initialState, action)=>{
    switch(action.type){
        case add_task:
            Totaltasks=[...Totaltasks,action.payload]
            return { tasks: [...state.tasks, action.payload]}

        case delete_task:
            Totaltasks=Totaltasks.filter((task)=>task.id !==action.payload.id)
            return{ tasks: state.tasks.filter((task)=>task.id !==action.payload.id)}
        
        case filter_tasks:
            return { tasks: state.tasks.filter((task) => !task.isDone )}
        
        case unfilter_tasks:
            return {tasks: Totaltasks}
        
        case check_task:
            const newTasks =  state.tasks.map(task => {
                if(task.id == action.payload.id){
                  return {...task, done: true}
                }
                return task

              })
          
          Totaltasks= newTasks
          return {tasks:newTasks}
        
        case uncheck_task:
            const newTasks2 =  state.tasks.map(task => {
                if(task.id == action.payload.id){
                  return {...task, done: false}
                }
                return task

              })
          
          Totaltasks= newTasks2
          return {tasks:newTasks2}
        
        default: return {tasks: state.tasks} 

    }
}