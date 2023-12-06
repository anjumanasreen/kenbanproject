import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const Done = ({doneCount,tasks,filterState,search,startDateFilter,endDateFilter,assigneeFilter,handleDragStart}) => {
return(
        <div>
            <h2 className='font-bold border-sky-500 border-b-2 pb-[10%] mb-[10%]'>Done({doneCount.length})</h2>
{tasks.filter(task => task.status === 'Done' && (filterState.length>0 ?  task.priority === filterState : task.priority) && (search.length>0 ? task.name.toLowerCase().includes(search.toLowerCase()):task.name) && ((startDateFilter ? task.startDate >= startDateFilter : true) && (endDateFilter ? task.endDate <= endDateFilter : true)) && (assigneeFilter.length>0 ? task.assignee.toLowerCase().includes(assigneeFilter.toLowerCase()):task.assignee)).map(task => (
<div key={task.id} draggable onDragStart={(e) => handleDragStart(e, task.id)} className="m-[5px] w-[250px] p-[20px] task">
                <p className='text-xs mb-[5px] text-right font-bold text-red-600'>{task.priority === 'High' ? <FontAwesomeIcon icon={faCircle} /> : ""}</p>
                <p className='text-xs mb-[5px] text-right font-bold text-green-600'>{task.priority === 'Low' ? <FontAwesomeIcon icon={faCircle} /> : ""}</p>
<p className='text-xs mb-[5px] text-right font-bold text-orange-500'>{task.priority === 'Medium' ? <FontAwesomeIcon icon={faCircle} /> : ""}</p>
                <h3 className='mb-[5px]'>{task.name}</h3>
                <p className='border-[1px] mb-[5px] rounded-full border-slate-500 p-1 text-xs w-[50%]'>☰ Default tasklist</p>
<p className='text-xs mb-[5px]'>{task.assignee}<span className='rounded-full border-slate-500 text-xs mt-[2px] bg-gray-400 w-[50%] text-center ml-[10px]'>{task.startDate}</span></p>
                <p className='text-xs mb-[5px] font-bold'>{task.priority} priority</p>
            </div>
))}
        </div>
    )
}
export default Done