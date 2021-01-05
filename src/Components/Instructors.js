import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'

import { CircleImgContainer } from '../ui-components'

import InstructorRafaelMuniz from '../img/InstructorRafaelMuniz.png'
import InstructorCatherineDoolan from '../img/InstructorCatherineDoolan.png'

const StyledInstructors = styled.div`
	display: flex;

	.instructors--card {
		flex: 1 1 50px;
		display: flex;
		flex-flow: column;
		align-items: center;

		padding: 0px 64px 16px 64px;
		margin: 50px;
		border: 1px dashed #9CB9DC;
		border-radius: 24px;

		@media (max-width: 768px) { /* tablets */
			padding: 0 16px;
			margin: 16px;
			
			p {
				margin-bottom: 0;
			}
		}

		&--image {
			position: relative;
			top: -48px;
		}
		&--desc {
			position: relative;
			top: -16px;
		}
	}

	@media (max-width: 992px) { /* large devices */
		display: block;

		[class$="--card"] {
			margin-top: 64px;
		}
	}
`

const Instructors = () => {
	return (
		<div className="instructors-container">
			<ScrollAnimation animateIn="fadeIn" offset={200}>
				<h1>
					Meet our Clinicians
				</h1>
			</ScrollAnimation>
			<StyledInstructors>
				<div className="instructors--card">
					<ScrollAnimation animateIn="fadeIn" offset={200}>
						<div className="instructors--card--image">
							<CircleImgContainer left={0} top={0} width='200px'>
								<img src={InstructorRafaelMuniz} alt="Instructor Rafael Muniz"/>
							</CircleImgContainer>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" offset={200}>
						<div className="instructors--card--desc">
							<h2>Rafael Muniz</h2>
							<p>
								“Music and Motion with Rafael” is a combination of Zumba, Yoga and Tai-chi designed for
								seniors and people with disabilities. Rafael has almost ten years’ experience working with the
								elder and disabled communities. Always eager to create welcoming, stigma free spaces, he is
								now pleased to bring his commitment and enthusiasm for health and wellness to the Active
								Connections community.
							</p>
						</div>
					</ScrollAnimation>
				</div>
				<div className="instructors--card">
					<ScrollAnimation animateIn="fadeIn" offset={200}>
						<div className="instructors--card--image">
							<CircleImgContainer left={0} top={0} width='200px'>
								<img src={InstructorCatherineDoolan} alt="Instructor Catherine Doolan"/>
							</CircleImgContainer>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" offset={200}>
						<div className="instructors--card--desc">
							<h2>Catherine Doolan</h2>
							<p>
								Cathy’s lifelong passion for health and fitness spans over 40 years. She is thrilled at the
								opportunity to share her knowledge in our uniquely inclusive program. Her diverse background
								in traditional fitness settings and expansion into working on program development with physical
								therapists makes her a natural fit for the Active Connections community.
							</p>
						</div>
					</ScrollAnimation>
				</div>
			</StyledInstructors>
		</div>
	);
}
 
export default Instructors;