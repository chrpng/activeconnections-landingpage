import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.div`
	padding-bottom: 56.25%;
	position: relative;

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`
const Video = ({ title, src }) => {
	return (
		<StyledVideo>
			<iframe title={title} src={src}></iframe>
		</StyledVideo>
	);
}
 
export default Video;