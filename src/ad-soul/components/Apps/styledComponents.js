import tw from 'tailwind.macro'
import styled from '@emotion/styled'
const AppDiv = styled.div`
   ${tw`flex border border-gray-300`};
   background-color: ${props =>
      props.eachProject % 2 === 0 ? '#d7dfe9' : 'white'};
`
export { AppDiv };