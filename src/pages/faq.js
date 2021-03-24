import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Reset from '../components/Reset'
import SEO from '../components/seo'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import AccessVideo from "../file/LWR_Recording.mp4"

const SpecialHeading = styled.div`
	h2 {
		margin-left: 32px;
	}
`

const StyledSplitDiv = styled.div`
	display: flex;

	@media (max-width: 992px) { /* large devices */
		display: block;
		text-align: center;
	}
`

const StyledVideoContainer = styled.div`
	width: 100%;
	margin-left: 16px;

	video,
	iframe {
		width: 100%;
	}

	@media (max-width: 992px) { /* large devices */
		margin-top: 16px;
		margin-left: 0;
	}
`

const FAQ = ({ data }) => {
	return (
		<div>
			<Reset />
			<SEO title='FAQ' />
			<Layout>
				<SpecialHeading>
					<h1>Frequently Asked Questions</h1>
				</SpecialHeading>
				<div>
					<h2>How do I get the free Tablet and exercise gear?</h2>
					<p>
						The free tablet and exercise gear is a special introductory promotion 
						available to the first 100 Active Connections registrants. To claim this 
						offer you must be among the first 100 members to sign up for the service 
						with a 1 year commitment (paid annually or month to month – first 3 months 
						are free, months 4-12 are $5/month). Tablet and gear must be picked up at the 
						BRIDGES main office at:
						<br />
						<br />
						2290 Palisades Center Drive
						<br />
						West Nyack, NY 10994.
						<br />
						<br />
						<strong>Items cannot be mailed.</strong>
					</p>

					<h2>How do I access my Tablet?</h2>
					<p>
						If prompted, the code to access your tablet is 8888. For any other questions and technical assistance, email us at <strong>info@activeconnections.live</strong>
					</p>

					<h2>How do I make an account?</h2>
					<p>
						The GymGo team has created a helpful guide for account creation (skip to 1:30). If an account was made for you by Active Connections staff, please wait 1-2 days to receive an email with instructions on how to create your account.
					</p>

					<h2>How can I access the videos?</h2>
					<p>
						The GymGo team has created a helpful guide to locate your video library (skip to 1:30). Navigate to your account details and select “My Videos and Files” to view a specific workout. 
					</p>
					<StyledSplitDiv>
						<Img fixed={data.accessImg.childImageSharp.fixed} />

						<StyledVideoContainer>
							<video controls>
								<source src={AccessVideo} type="video/mp4" />
							</video>
						</StyledVideoContainer>
					</StyledSplitDiv>
					<p></p>

					<h2>Are individualized assessments offered by Active Connections?</h2>
					<p>
						Yes. You will be contacted by someone from our team to schedule an in-home assessment. Virtual assessments are unavailable. Although assessments can be deferred to a later date, we strongly suggest that it is performed ASAP in order to establish a baseline for care and to better serve you. 
					</p>
				</div>
			</Layout>
		</div>
	);
}

export const query = graphql`
	query {
		accessImg: file(relativePath: { eq: "FAQ_access.png" }) {
			childImageSharp {
				fixed(width: 200) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
	}
`
 
export default FAQ;