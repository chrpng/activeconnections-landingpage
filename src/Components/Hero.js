import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import styled from 'styled-components'

import { AnimatedDarkBlueLinkButton } from '../ui-components'

import HeroBackground from '../img/lady-dumbells.png'

const StyledHero = styled.div`
	background-image: linear-gradient(to bottom right, rgba(191, 233, 244, 0.7), rgba(191, 233, 244, 0.9)), url(${HeroBackground}) !important;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: 25% 0%;

	padding: 0 240px;

	display: flex;
	align-items: center;

	height: 500px;
	transition: all 1s;

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
	}

	@media only screen and (max-width: 768px) { /* tablets */
		height: 100vh;
		background-position: center top;
	}
`

const Hero = () => {
	return (
		<StyledHero>
			<div className="hero--desc">
				<ScrollAnimation animateIn="fadeInRight" duration={2} offset={100}><h1>Exercise</h1></ScrollAnimation>
				<ScrollAnimation animateIn="fadeInRight" duration={2} offset={100} delay={500}><h1 className="secondary">for <span className="italic">every</span> body</h1></ScrollAnimation>
				<h2>
					Accessible and inclusive fitness
				</h2>
				<AnimatedDarkBlueLinkButton href="https://go.gymgo.com/active-connections">Join Now!</AnimatedDarkBlueLinkButton>
			</div>
		</StyledHero>
	);
}
 
export default Hero;