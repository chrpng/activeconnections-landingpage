import React from 'react'
import styled from 'styled-components'
import { AiOutlineForm } from 'react-icons/ai'

const StyledBlock = styled.div`
	background-color: ${props => props.backgroundColor};
	color: white;
	width: 200px;
	height: 300px;
	border-radius: 20px;
`

const IconBlock = ({ bgColor, text, Icon }) => {
	return (
		<StyledBlock backgroundColor={bgColor}>
			<Icon />
			{text}
		</StyledBlock>
	);
}

IconBlock.defaultProps = {
	bgColor: "red",
	text: "Default text",
	Icon: AiOutlineForm,
}
 
export default IconBlock;