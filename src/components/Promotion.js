import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledPromotion = styled.div`
	display: flex;
	align-items: center;
	.promotion--desc {
		margin-left: 64px;
		p {
			margin-bottom: 16px;
		}

		ul {
			margin-bottom: 32px;
			li {
				margin-left: 32px;
			}
		}
	}
	
	@media (max-width: 768px) { /* tablets */
		display: block;

		.promotion--desc {
			margin-left: 0;
			text-align: center;
			ul li {
				list-style-type: none;
			}
		}
		.promotion--image {
			.gatsby-image-wrapper,
			img {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
`

const Promotion = () => {
	const data = useStaticQuery(PROMOTIONAL_IMAGE)

	return (
		<StyledPromotion>
			<div className="promotion--image">
				<Img
					style={{ display: "block", margin: "auto" }}
					fixed={data.image.childImageSharp.fixed}
					alt="group exercise"
				/>
			</div>
			<div className="promotion--desc">
				<h1>
					Promotion
				</h1>
				<p>We are pleased to offer a special introductory package that includes a free tablet and exercise gear to the first 100 members:</p>
				<ul>
					<li>Personalized Assessment/Evaluation in your home</li>
					<li><strong>Free</strong> Amazon Fire Tablet (valued at $150)</li>
					<li><strong>Free</strong> Exercise Gear (valued at $28)</li>
					<li>Live Exercise Sessions</li>
					<li>Unlimited access to an online library of customized exercise videos</li>
					<li> </li>
					<li><strong>Free</strong> for 3 months</li>
					<li>Months 4 – 12: Starting at $5/month</li>
				</ul>

				<p>Coming Soon: In-person fitness classes using adaptive equipment (for an additional fee)</p>
			</div>
		</StyledPromotion>
	);
}

const PROMOTIONAL_IMAGE = graphql`
	query {
		image: file(relativePath: { eq: "promotion.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(width: 278, height: 226) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
	}
`

export default Promotion;