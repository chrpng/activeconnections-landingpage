import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { navHeight } from './Navbar'

const BgImg = styled(Img)`
  position: absolute;
	height: 100%;
  top: 0;
  right: 0;
`

const StyledAbout = styled.div`
	display: flex;
	align-items: stretch;
	position: relative;
	scroll-margin-top: ${navHeight};
	padding: 0 !important;

	> * {
		flex: 1 1 500px;
	}
	
	.about--desc {
		padding: 64px 96px;
	}

	.about--image {
		flex-basis: 30%;
		@media (max-width: 1200px) {
			flex-basis: 40%;
		}

		.fadeInRightSm {
			animation: fadeInRightSm 1s;
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
	const data = useStaticQuery(ABOUT_IMAGE)

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
				<BgImg
					imgStyle={{ objectPosition: "75%" }}
					fluid={data.image.childImageSharp.fluid}
					alt="group exercise"
				/>
			</div>
		</StyledAbout>
	);
}

const ABOUT_IMAGE = graphql`
	query {
		image: file(relativePath: { eq: "group-exercise.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fluid(maxWidth: 1500) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
 
export default About;