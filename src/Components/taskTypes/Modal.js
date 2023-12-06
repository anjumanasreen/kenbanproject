export default function Modal({
  newTaskName,
  modalNameChange,
  newTaskAssignee,
  modalAssigneeNameChange,
  newPriority,
  modalPriorityChange,
  newTaskState,
  modalTaskStateChange,
  closeTask,
  handleCreateTask,
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-[15%] ml-[35%] bg-neutral-400">
      <div className="pb-[10%]">
        <div className="font-bold text-xl mb-2">Create New Task</div>
        <table>
          <tr>
            <td>
              <label className="p-5">Name</label>
            </td>
            <td>
              <input
                className="border-[1px]  mb-2 border-black rounded p-1 bg-neutral-300"
                type="text"
                value={newTaskName}
                onChange={modalNameChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className="p-5">Assignee</label>
            </td>
            <td>
              <input
                className="border-[1px]  mb-2 border-black rounded p-1 bg-neutral-300"
                type="text"
                value={newTaskAssignee}
                onChange={modalAssigneeNameChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className="p-5">Priority</label>
            </td>
            <td>
              <select
                className="border-[1px]  mb-2 border-black rounded p-1 w-[100%] bg-neutral-300"
                value={newPriority}
                onChange={modalPriorityChange}
              >
                <option value="">Select</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label className="p-5">State:</label>
            </td>
            <td>
              <select
                className="border-[1px] bg-neutral-300 mb-2 border-black rounded p-1 w-[100%]"
                value={newTaskState}
                onChange={modalTaskStateChange}
              >
                <option value="">Select</option>
                <option value="Ready">Ready</option>
                <option value="In Progress">In Progress</option>
                <option value="Testing">Testing</option>
                <option value="Done">Done</option>
              </select>
            </td>
          </tr>
        </table>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateTask}
        >
          Create Task
        </button>
        <button
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded ml-[10%]"
          onClick={closeTask}
        >
          Close
        </button>
      </div>
    </div>
  );
}
