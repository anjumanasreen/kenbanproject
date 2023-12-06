export default function Filters({filterState,filterChange,search,searchChange,startDateChange,startDateFilter,endDateChange,endDateFilter,assigneeFilter,assigneeFilterChange}) {
    return (
      <div className='flex ml-[8%]'>
          <div>
              <label>Search: </label>
              <input className="border-[1px] mb-2 border-black rounded input" type="text" value={search} onChange={searchChange}/>
          </div>
  <div className='ml-[3%]'>
              <select className='bg-gray-400 rounded' value={filterState} 
                  onChange={filterChange} >
                  <option value="">Select</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
              </select>
          </div>
  <div className='ml-[3%]'>
              <label>Start Date:</label>
              <input className='border-[1px] mb-2 border-black rounded input' type="date" value={startDateFilter} onChange={startDateChange} />
          </div>
  
          <div className='ml-[3%]'>
              <label>End Date:</label>
              <input className='border-[1px] mb-2 border-black rounded input' type="date" value={endDateFilter} onChange={endDateChange} />
          </div>
  <div className='ml-[3%]'>
              <label>Assignee:</label>
              <input className='border-[1px] mb-2 border-black rounded input' type="text" value={assigneeFilter} onChange={assigneeFilterChange} />
          </div>
      </div>
    )
  }