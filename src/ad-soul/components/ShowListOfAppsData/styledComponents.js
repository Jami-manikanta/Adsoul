import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const TaskTitle = styled.div`
   ${tw`flex justify-center items-center`};
   width: 15%;
   height: 50px;
`

const CreatedBy = styled.div`
   ${tw`flex justify-center items-center`};
   width: 14%;
   height: 50px;
`

const TaskState = styled.div`
   ${tw`flex justify-center items-center`};
   width: 14%;
   height: 50px;
`

const IssueType = styled.div`
   ${tw`flex justify-center items-center`};

   width: 14%;
   height: 50px;
`
const Description = styled.div`
   ${tw`flex justify-center items-center`};

   width: 14%;
   height: 50px;
`
const Info = styled.div`
   ${tw`flex justify-center items-center`};
   width: 14%;
   height: 50px;
`
const TaskDiv = styled.div`
   ${tw`flex border border-gray-300`};
   height: 50px;
   background-color: ${props =>
      props.eachTask % 2 === 0 ? '#d7dfe9' : 'white'};
`

export {
   TaskTitle,
   CreatedBy,
   TaskState,
   IssueType,
   Description,
   Info,
   TaskDiv
}
