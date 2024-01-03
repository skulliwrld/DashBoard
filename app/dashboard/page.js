import React from 'react'
import Cards from '@/components/ui/dashboard/DashBoardFields/CardField'
import Chart from '@/components/ui/dashboard/DashBoardFields/Chart'
import Transaction from '@/components/ui/dashboard/DashBoardFields/Transaction'
import SideField from '@/components/ui/dashboard/DashBoardFields/SideField'


function DashBoard() {
  return (
    <main>
      <div className="sections grid md:grid-cols-12 gap-2 ">
        <div className="sec-1 md:col-span-9">
          <div className="cardField">
            <Cards />
          </div>

          <div className="transaction-field">
            <Transaction />
          </div>

          <div className="chart-field">
            <Chart />
          </div>
        </div>

        <aside className="asidebar sec-2 md:col-span-3">
          <SideField />
        </aside>
     </div>
    </main>
  
      
    
    
  )
}

export default DashBoard