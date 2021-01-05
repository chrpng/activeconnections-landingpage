import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'

import AboutImage from '../img/group-exercise.png'

import { navHeight } from './Navbar'

const StyledAbout = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	scroll-margin-top: ${navHeight};

	> * {
		flex: 1 1 500px;
	}
	
	.about--image {
		margin-left: 96px;
		flex-basis: 50%;
		.fadeInRightSm {
			animation: fadeInRightSm 1s;
		}
		img {
			width: 100%;
		}
	}

	@keyframes fadeInRightSm {
		from {
			opacity: 0;
			transform: translate3d(20px, 0, 0);
		}

		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	@media (max-width: 992px) { /* large devices */
		display: block;

		[class$="--image"] {
			margin: 0;
		}
	}
`

const About = () => {
	return (
		<StyledAbout id="about-anchor">
			<div className="about--desc">
				<ScrollAnimation animateIn="fadeIn" offset={200}>
					<h1>
						About
					</h1>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" offset={200}>
				<p>
					Active Connections is an accessible and inclusive fitness center designed with the whole
					community in mind. BRIDGES, an Independent Living Center that serves people with
					disabilities, received a grant from the Mother Cabrini Health Foundation to implement an
					accessible fitness center that overcomes barriers to fitness for people with disabilities who are at
					increased risk for heart disease and secondary illnesses, obesity, and social isolation.
				</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" offset={200}>
				<p>
					BRIDGES partnered with Active Physical Therapy and Wellness to form Active Connections
					and provide an accessible, affordable space for people with disabilities to exercises alongside the
					rest of the community. Active Connections provides a way to increase fitness, lose weight,
					reduce blood pressure, and increase health outcomes.
				</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" offset={200}>
				<p>
					Active Connections currently offers a virtual gym with live classes and unlimited access to a 
					library of customized exercise videos.  Each individual will receive a personalized physical 
					assessment/fitness evaluation performed by licensed, trained clinicians.  An exercise program 
					will be designed for you based upon your own unique needs.  Classes will be led by trained professionals.  
				</p>
				</ScrollAnimation>
			</div>
			<div className="about--image">
				<ScrollAnimation animateIn="fadeInRightSm" offset={300}>
					<img src={AboutImage} alt="group exercise"/>
				</ScrollAnimation>
			</div>
		</StyledAbout>
	);
}
 
export default About;