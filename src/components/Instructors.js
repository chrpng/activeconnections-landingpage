import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'

import InstructorCard from './InstructorCard'

const StyledInstructors = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 50px;

	.instructors--card {
		margin-top: 50px;
		flex: 1 1 50px;
		display: flex;
		flex-flow: column;
		align-items: center;

		padding: 0px 64px 16px 64px;
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
	const data = useStaticQuery(CLINICIAN_IMAGE)

	return (
		<div className="instructors-container">
			<ScrollAnimation animateIn="fadeIn" offset={200}>
				<h1>
					Meet our Clinicians
				</h1>
			</ScrollAnimation>
			<StyledInstructors>
				<InstructorCard
					fixedImg={data.imageOne.childImageSharp.fixed}
					name="Rafael Muniz"
					description="“Music and Motion with Rafael” is a combination of Zumba, Yoga and Tai-chi designed for
						seniors and people with disabilities. Rafael has almost ten years’ experience working with the
						elder and disabled communities. Always eager to create welcoming, stigma free spaces, he is
						now pleased to bring his commitment and enthusiasm for health and wellness to the Active
						Connections community."
				/>
				<InstructorCard
					fixedImg={data.imageTwo.childImageSharp.fixed}
					name="Catherine Doolan"
					description="Cathy’s lifelong passion for health and fitness spans over 40 years. She is thrilled at the
						opportunity to share her knowledge in our uniquely inclusive program. Her diverse background
						in traditional fitness settings and expansion into working on program development with physical
						therapists makes her a natural fit for the Active Connections community."
				/>
				<InstructorCard
					fixedImg={data.imageThree.childImageSharp.fixed}
					name="Asher Collins"
					description="Asher has a diverse background which includes a strong fitness component.  He comes to Active 
						Connections as an registered/licensed Occupational Therapist and looks forward to assisting all members 
						in their holistic pursuit of wellness goals."
				/>
				<InstructorCard
					fixedImg={data.imageFour.childImageSharp.fixed}
					name="Richard Serrano"
					description="Rich has more than 15 years of experience as a physical therapist and is the director and 
						owner of Active PT & Wellness. His philosophy is “NO pain, Big Gain“. Rich loves the people he serves 
						and loves helping them achieve their goals. He loves learning new things."
				/>
				<InstructorCard
					fixedImg={data.imageFive.childImageSharp.fixed}
					name="Terry Fiore Lavery, RYT"
					description="Terry is a fitness instructor with the SilverSneakers Fitness Program, as well as a certified 
						Enhance Fitness instructor with the YMCA. She has a 200-hour yoga certification from the New Age Center 
						in Nyack with Paula Heitzner, as well as an additional 200-hour yoga certification from Kundalini Yoga 
						East in Manhattan. She is the editor and on the board of the Yoga Teachers Association of the Hudson Valley. 
						Terry is also certified to teach Pilates from IM=X Pilates and water aerobics from the Aquatic Exercise Association. 
						In 2015, Terry obtained her TESOL certification from Westchester Community College and has been teaching English 
						as a Second Language since. She is also a medical editor."
				/>
				<InstructorCard
					fixedImg={data.imageSix.childImageSharp.fixed}
					name="Franky Simon"
					subtitle="Founder of SimonSays Fitness, NASM CPT, NASM Nutritional Specialist"
					description={`
						Franky’s main focus is to help people incorporate fitness into their 
						lifestyle. Create a program for them that involves stability, strength, 
						and power. To keep them showing up consistently so they can achieve 
						their health goals.`}
				/>
			</StyledInstructors>
		</div>
	);
}

const CLINICIAN_IMAGE = graphql`
	query {
		imageOne: file(relativePath: { eq: "ClinicianRafaelMuniz.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 200) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		imageTwo: file(relativePath: { eq: "ClinicianCatherineDoolan.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 200) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		imageThree: file(relativePath: { eq: "ClinicianAsherCollins.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 200) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		imageFour: file(relativePath: { eq: "ClinicianRichardSerrano.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 200) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		imageFive: file(relativePath: { eq: "ClinicianTerryFioreLavery.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 200) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		imageSix: file(relativePath: { eq: "ClinicianFrankySimon.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 200) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
	}
`

export default Instructors;