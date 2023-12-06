import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Shimmer from '../Shimmer';
import Filters from '../Filters';
import Modal from "./Modal"
import TaskButton from './TaskButton';
import Todo from './Todo';
import Progress from './Progress';
import Testing from './Testing';
import Done from './Done';
import { url, headers } from '../util/Constant';
const Kenban = () => {
  const [tasks, setTasks] = useState([]);
  const [filterState,setFilterState] = useState('');
  const [search,setSearch] = useState('');
  const [assigneeFilter,setAssigneeFilter] = useState('');
  const [startDateFilter, setStartDateFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState('');
const readyCount = tasks.filter(task => task.status === 'Ready' && (filterState.length>0 ?  task.priority === filterState : task.priority)  && (search.length>0 ? task.name.toLowerCase().includes(search.toLowerCase()):task.name) && ((startDateFilter ? task.startDate >= startDateFilter : true) && (endDateFilter ? task.endDate <= endDateFilter : true)) && (assigneeFilter.length>0 ? task.assignee.toLowerCase().includes(assigneeFilter.toLowerCase()):task.assignee))
const inprogressCount = tasks.filter(task => task.status === 'In Progress' && (filterState.length>0 ?  task.priority === filterState : task.priority)  && (search.length>0 ? task.name.toLowerCase().includes(search.toLowerCase()):task.name) && ((startDateFilter ? task.startDate >= startDateFilter : true) && (endDateFilter ? task.endDate <= endDateFilter : true)) && (assigneeFilter.length>0 ? task.assignee.toLowerCase().includes(assigneeFilter.toLowerCase()):task.assignee))
const testingCount = tasks.filter(task => task.status === 'Testing' && (filterState.length>0 ?  task.priority === filterState : task.priority)  && (search.length>0 ? task.name.toLowerCase().includes(search.toLowerCase()):task.name) && ((startDateFilter ? task.startDate >= startDateFilter : true) && (endDateFilter ? task.endDate <= endDateFilter : true)) && (assigneeFilter.length>0 ? task.assignee.toLowerCase().includes(assigneeFilter.toLowerCase()):task.assignee))
const doneCount = tasks.filter(task => task.status === 'Done' && (filterState.length>0 ?  task.priority === filterState : task.priority)  && (search.length>0 ? task.name.toLowerCase().includes(search.toLowerCase()):task.name) && ((startDateFilter ? task.startDate >= startDateFilter : true) && (endDateFilter ? task.endDate <= endDateFilter : true)) && (assigneeFilter.length>0 ? task.assignee.toLowerCase().includes(assigneeFilter.toLowerCase()):task.assignee))
const [newTaskName, setNewTaskName] = useState('');
  const [newTaskAssignee, setNewTaskAssignee] = useState('');
  const [newPriority, setNewPriority] = useState('');
  const [newTaskState,setNewTaskState]=useState('');
const [filteredTask,setFilteredTask] = useState('');
  const [newDate, setNewDate]  = useState('');
  const [isFormOpen, setFormOpen] = useState(false);
const getData = () => {
    axios.get(url, { headers })
    .then(response => {
      if(response.status === 200) {
        setTasks(response.data)
      } else {
        console.log('Error')
      }
    })
.catch(error => {
      console.error('Error:', error.message);
    });
  }
  
  useEffect(() => {
    getData()
  },[])
//Modal PopUP open close
  const openForm = () => {
    setFormOpen(true);
  };
  const closeTask = () => {
    setFormOpen(false);
  };
// Drag and Drop
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId.toString());
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
const handleDrop = (e, targetStatus) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: targetStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  //button
  const handleCreateTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      assignee: newTaskAssignee,
      startDate: newDate,
      priority: newPriority, 
      status: newTaskState,
      effortSpent: 0, 
    };
setTasks([...tasks, newTask]);
    setNewTaskName('');
    setNewPriority('');
    setNewDate('');
    setNewTaskState('');
    setNewTaskAssignee('');
    setFormOpen(false);
  };
//Filters
  const filterChange = (e) => {
    setFilterState(e.target.value);
    const updatedTasks = tasks.filter(task => 
      task.priority === e.target.value
     );
     setFilteredTask(updatedTasks)
  }
const searchChange = (e) => {
    setSearch(e.target.value)
  }
  const endDateChange = (e) => {
    setEndDateFilter(e.target.value)
  }
  const startDateChange = (e) => {
    setStartDateFilter(e.target.value)
  }
const assigneeFilterChange = (e) => {
    setAssigneeFilter(e.target.value)
  }

  //modal popup
  const modalNameChange = (e) => {
    setNewTaskName(e.target.value)
  }
const modalAssigneeNameChange = (e) => {
    setNewTaskAssignee(e.target.value)
  }
  const modalPriorityChange = (e) => {
    setNewPriority(e.target.value)
  }
  const modalTaskStateChange = (e) => {
    setNewTaskState(e.target.value)
  }
return tasks.length === 0 ? (<Shimmer />) : (
    <div>
      <div className='pt-[10%]'>
        <Filters 
          filterState={filterState} 
          filterChange={filterChange} 
          search={search}
searchChange={searchChange} 
          startDateFilter={startDateFilter} 
          startDateChange={startDateChange} 
          endDateFilter={endDateFilter} 
          endDateChange={endDateChange} 
          assigneeFilterChange={assigneeFilterChange} 
          assigneeFilter={assigneeFilter}/>
      </div>
      <div className="flex ml-[8%] pt-[3%] gap-[1%]">
        <div className="column"> 
          <h2 className='font-bold border-b-2 pb-[10%] mb-[10%]'>BACKLOG(0)</h2>
          <div onClick={openForm}><TaskButton /></div>
        </div>
<div className="column" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, 'Ready')}>
          <Todo 
            readyCount={readyCount} 
            tasks={tasks} 
            filterState={filterState} 
            search={search}
startDateFilter={startDateFilter} 
            endDateFilter={endDateFilter} 
            assigneeFilter={assigneeFilter} 
            handleDragStart={handleDragStart}/>
          <div onClick={openForm}><TaskButton /></div>
        </div>
<div className="column" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, 'In Progres')}>
          <Progress 
            inprogressCount={inprogressCount} 
            tasks={tasks} 
            filterState={filterState} 
            search={search}
startDateFilter={startDateFilter} 
            endDateFilter={endDateFilter} 
            assigneeFilter={assigneeFilter} 
            handleDragStart={handleDragStart}/>
          <div onClick={openForm}> 
            <TaskButton />
          </div>
        </div>
<div className="column" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, 'Testing')}>
          <Testing 
            testingCount={testingCount} 
            tasks={tasks} 
            filterState={filterState} 
            search={search}
startDateFilter={startDateFilter} 
            endDateFilter={endDateFilter} 
            assigneeFilter={assigneeFilter} 
            handleDragStart={handleDragStart}/>
          <div onClick={openForm}> 
            <TaskButton />
          </div>
        </div>
<div className="column" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, 'Done')}>
          <Done 
            doneCount={doneCount} 
            tasks={tasks} 
            filterState={filterState} 
            search={search}
startDateFilter={startDateFilter} 
            endDateFilter={endDateFilter} 
            assigneeFilter={assigneeFilter} 
            handleDragStart={handleDragStart}/>
          <div onClick={openForm}> 
            <TaskButton />
          </div>
        </div>
        {isFormOpen && (
          <div className="fixed w-[100%] h-[100%] text-center justify-center left-0 top-0 border-[2px] border-black create-task">
            <Modal 
              newTaskName={newTaskName}
modalNameChange={modalNameChange} 
              newTaskAssignee={newTaskAssignee} 
              modalAssigneeNameChange={modalAssigneeNameChange} 
              newPriority={newPriority} 
              modalPriorityChange={modalPriorityChange}
newTaskState={newTaskState} 
              modalTaskStateChange={modalTaskStateChange} 
              closeTask={closeTask} 
              handleCreateTask={handleCreateTask}/>
          </div>)}
      </div>
    </div>
  );
};
export default Kenban;