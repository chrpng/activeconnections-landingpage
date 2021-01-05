import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'

const StyledVideos = styled.div`
	.videos--grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		
		grid-gap: 24px;

		> div {
			padding-bottom: 56.25%;
			position: relative;

			iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}

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
				<div>
					<iframe title="Wrist Prep Routine" src="https://www.youtube.com/embed/mSZWSQSSEjE"></iframe>
				</div>
				<div>
					<iframe title="Posture correction" src="https://www.youtube.com/embed/LT_dFRnmdGs"></iframe>
				</div>
				<div>
					<iframe title="Pushups" src="https://www.youtube.com/embed/QGCW-jL1O4s"></iframe>
				</div>
			</div>
		</StyledVideos>
	);
}
 
export default Videos;