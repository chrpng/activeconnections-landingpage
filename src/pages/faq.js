import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Reset from '../components/Reset'
import SEO from '../components/seo'

import { graphql } from 'gatsby'

const SpecialHeading = styled.div`
	h2 {
		margin-left: 32px;
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
					<h2>How do I access my Tablet?</h2>
					<p>
						If prompted, the code to access your tablet is 8888.
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