import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { AnimatedDarkBlueFillLink } from '../ui-components'

const StyledGiveaway = styled.div`
	width: 700px;
	max-width: 100vw;
	box-sizing: border-box;
	padding: 8px 24px 24px;
	text-align: center;
	.giveaway--desc {
		p {
			margin-bottom: 16px;
		}
	}
	.giveaway--image {
		margin: 16px auto 0;
	}
`

const Giveaway = () => {
	const data = useStaticQuery(GIVEAWAY_IMAGE)

	return (
		<StyledGiveaway>
			<div className="giveaway--desc">
				<h1>Giveaway</h1>
				<p>
					Active Connections Rockland County is celebrating its official launch with a giveaway! <br/>
					Click the link below to enter. Prizes include a lifetime membership to the platform!
				</p>
				
				<AnimatedDarkBlueFillLink margin="auto" href={'https://www.bridgesrc.org/activeconnections/active-connections-launch-giveaway/'} download>Link to Giveaway</AnimatedDarkBlueFillLink>
			</div>
			<div className="giveaway--image">
				<Img
					style={{ display: "block", margin: "auto" }}
					fluid={data.image.childImageSharp.fluid}
					alt="group exercise"
				/>
			</div>
		</StyledGiveaway>
	);
}

const GIVEAWAY_IMAGE = graphql`
	query {
		image: file(relativePath: { eq: "giveaway.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`

export default Giveaway;