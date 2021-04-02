import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Img from 'gatsby-image'

import { CircleImgContainer } from '../ui-components'

const InstructorCard = ({ fixedImg, name, subtitle, description}) => {
	return (
		<div className="instructors--card">
			<ScrollAnimation animateIn="fadeIn" offset={200}>
				<div className="instructors--card--image">
					<CircleImgContainer left={0} top={0} width='200px'>
						<Img fixed={fixedImg} alt={name} />
						{/* <img src={InstructorRafaelMuniz} alt="Instructor Rafael Muniz"/> */}
					</CircleImgContainer>
				</div>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" offset={200}>
				<div className="instructors--card--desc">
					<h2>{name}</h2>
					<h3>{subtitle}</h3>
					<p>
						{description}
					</p>
				</div>
			</ScrollAnimation>
		</div>
	);
}
 
export default InstructorCard;