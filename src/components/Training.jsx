import React from 'react'
import BarChart from './BarChart '
import LineChart from './LineChart'
import PieChart from './PieChart '

const Training = () => {
  return (
    <div className=' rounded-sm flex'>
       <div className="max-w-[1240px] mx-auto text-white relative">
        <div className='px-4 py-12 h-3 w-3 flex-1 ml-2'>

       <BarChart/>
        </div>
        <PieChart/>
        {/* <div>
            
       <LineChart/>
        </div> */}
    <div>

    </div>
        </div>

    </div>
  )
}

export default Training