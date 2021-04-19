import React, { Component } from 'react'
import {
   TaskTitle,
   CreatedBy,
   TaskState,
   IssueType,
   Description,
   Info,
   TaskDiv
} from '../ShowListOfAppsData/styledComponents'

class IndividualData extends Component {
   render() {
      const { eachTask } = this.props
      return (
         <TaskDiv eachTask={eachTask.task_id}>
            <TaskTitle>{eachTask.date}</TaskTitle>
            <CreatedBy>{eachTask.revenue}</CreatedBy>
            <Description>{eachTask.adRequest}</Description>
            <Info>{eachTask.adResponse}</Info>
            <TaskState>{eachTask.impressions}</TaskState>
            <IssueType>{eachTask.clicks}</IssueType>
            <Info>hlo</Info>
         </TaskDiv>
      )
   }
}

export default IndividualData
