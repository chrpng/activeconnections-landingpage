import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'

import Video from './Video'

const StyledVideos = styled.div`
	.videos--grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		
		grid-gap: 24px;

		@media (max-width: 992px) { /* tablets */
			display: block;
		}
	}
`

const Videos = () => {
	return (
		<StyledVideos>
			<ScrollAnimation animateIn="fadeIn" offset={200}>
				<h1>
					Videos
				</h1>
			</ScrollAnimation>
			<div className="videos--grid">
				<Video title="Yoga" src="https://www.youtube.com/embed/EFTNYtRxhtE" />
				<Video title="Zumba, Yoga, and Tai Chi" src="https://www.youtube.com/embed/Ad0mqQgTTgE" />
				<Video title="Upper Body" src="https://www.youtube.com/embed/PkXi6ygU8ak" />
			</div>
		</StyledVideos>
	);
}
 
export default Videos;