import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Apps from "../Apps"

@inject('listOfAppsStore')
@observer
class ListOfApps extends Component {
   render() {
      const { listOfAppsList } = this.props.listOfAppsStore
      return (
         <div className='flex flex-col'>
            <div>
               {listOfAppsList.length > 0 ? (
                  listOfAppsList.map(eachProject => (
                     <Apps
                        key='1'
                        eachProject={eachProject}
                     />
                  ))
               ) : (
                  <div className='h-screen border-solid border-red text-bold text-4xl flex justify-center items-center'>
                     Data Not Found !
                  </div>
               )}
            </div>
         </div>
      )
   }
}

export default ListOfApps
