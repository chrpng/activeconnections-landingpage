import styled from 'styled-components'

export const CircleImgContainer = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 100px;
	overflow: hidden;

	img {
		position: relative;
		left: ${props => props.left};
		top: ${props => props.top};
		width: ${props => props.width};
	}
`