//Creating a single task card
//Created by Kelley Crittenden


import React from 'react'
import TaskManger from '../../modules/TaskManager';

const TaskCard = props => {

  const handleFieldChange = () => {
    TaskManger.completedTask(props.task)
      .then(() => props.getTasks())
  }
  
  return (
    <div className="card">

      {props.task.completed ? null : 
      
      <div className="card-content">

        <h3>To Do: 
            <span className="card-taskName">{props.task.name}</span>
        </h3>

        <p>Complete by: {props.task.dueDate}</p>
        <button 
            type="button" 
            onClick={() => props.deleteTask(props.task.id)}>
            Delete</button>

        <button 
            type="button" 
            onClick={() => props.history.push(`/task/${props.task.id}/edit`)}>
            Edit</button>

        <input type="checkbox"
          required
          className="forms-control"
          id="tasks"
          checked={props.task.completed}
          onChange={handleFieldChange}
        />

        <label>Completed</label>

      </div>}
    </div>
  )
}
export default TaskCard
