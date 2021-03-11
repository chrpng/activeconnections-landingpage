import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { AnimatedDarkBlueFillLink, DarkBlueLink } from '../ui-components'

import registrationPDF from '../file/Registration Form - Active Connections 3-10-2021[7022].pdf'

const StyledHero = styled.div`
	padding: 0 240px;

	display: flex;
	align-items: center;

	height: 500px;

	position: relative;

	transition: all 1s; // for going from 500px to full screen 

	.gatsby-image-container {
		top: 0;
		bottom: 0;
		left: 0;
		min-width: 100%;
		position: absolute;
		opacity: 0.2;
	}

	.hero--desc {
		h1 {
			color: #234daa;
			font-weight: 300;

			&.secondary {
				position: relative;
				left: 48px;
			}
		}
		h2 {
			padding-bottom: 16px;
		}

		.button-container {
			display: flex;
			justify-content: space-between;
			> div:not(:first-child) {
				margin-left: 64px;
			}
		}
	}

	@media only screen and (max-width: 768px) { /* tablets */
		height: 100vh;

		.hero--desc .button-container {
			> div {
				justify-content: space-between;
				&:not(:first-child) {
					margin-left: 0px;
				}
			}
		}
	}
`

const Hero = () => {
	const data = useStaticQuery(HERO_IMAGE)

	return (
		<StyledHero>
			<div className="gatsby-image-container">
				<Img
					style={{ height: "100%", width: "100%", pointerEvents: "none" }}
					imgStyle={{ objectFit: "cover" }}
					fluid={data.image.childImageSharp.fluid}
					alt="woman doing dumbbell exercises"
				/>
			</div>
			<div className="hero--desc">
				<ScrollAnimation animateIn="fadeInRight" duration={2} offset={100}><h1>Exercise</h1></ScrollAnimation>
				<ScrollAnimation animateIn="fadeInRight" duration={2} offset={100} delay={500}><h1 className="secondary">for <span className="italic">every</span> body</h1></ScrollAnimation>
				<h2>
					Accessible and inclusive fitness
				</h2>
				<div className="button-container">
					<div className="register">
						<AnimatedDarkBlueFillLink href={registrationPDF} target="_blank">Register Now</AnimatedDarkBlueFillLink>
						<DarkBlueLink href={registrationPDF} download>Form (direct download)</DarkBlueLink>
					</div>
					<div>
						<AnimatedDarkBlueFillLink href="https://go.gymgo.com/active-connections">Log in</AnimatedDarkBlueFillLink>
					</div>
				</div>
			</div>
		</StyledHero>
	);
}

const HERO_IMAGE = graphql`
	query {
		image: file(relativePath: { eq: "lady-dumbbells.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fluid(maxWidth: 1350) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
 
export default Hero;