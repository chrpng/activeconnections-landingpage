import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledFooter = styled.footer`
	padding-top: 48px;
	text-align: center;

	.footer-links {
		position: relative;
		padding-bottom: 24px;
		margin-bottom: 24px;

		display: flex;
		justify-content: space-around;
		align-items: center;

		@media (max-width: 992px) { /* large devices */
			display: block;
		}

		a {
			text-decoration: none;
			flex-basis: 50px;

			span {
				color: #16171C;

				&:hover {
					color: #9CB9DC;
				}

				@media (max-width: 992px) { /* large devices */
					display: none;
				}
			}
		}

		&:after {
			content: '';
			border-bottom: 1px solid #16171C;
			position: absolute;
			display: inline-block;
			left: 80px;
			right: 80px;
			bottom: 0;
		}
	}
	.social-media-links {
		i {
			font-size: 2em;
			color: #234daa;
			padding: 8px;
		}
	}
	p {
		padding-top: 24px;
		padding-bottom: 24px;
	}
`

const Footer = () => {
	const data = useStaticQuery(FOOTER_IMAGE)

	return (
		<StyledFooter>
			<div className="footer-links">
				<a href="https://www.bridgesrc.org/">
					<Img fixed={data.imageOne.childImageSharp.fixed} alt="BRIDGES logo" />
					<span>BRIDGES</span>
				</a>
				<a href="https://activeptandwellness.com/">
					<Img fixed={data.imageTwo.childImageSharp.fixed} alt="Active PT logo" />
					<span>Active Physical Therapy</span>
				</a>
			</div>
			<div className="social-media-links">
				<span>Check out our social media!</span>
				<a href="https://www.facebook.com/activeconnectionsrc"><i className="fab fa-facebook" aria-label="Facebook"></i></a>
				<a href="https://twitter.com/activerockland"><i className="fab fa-twitter" aria-label="Twitter"></i></a>
				<a href="https://www.instagram.com/activeconnectionsrc/"><i className="fab fa-instagram" aria-label="Instagram"></i></a>
			</div>
			<p>© A Partnership of BRIDGES and Active Physical Therapy & Wellness, 2020.</p>
		</StyledFooter>
	);
}

const FOOTER_IMAGE = graphql`
	query {
		imageOne: file(relativePath: { eq: "BRIDGES_Logo_R1.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 100) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}

		imageTwo: file(relativePath: { eq: "Active PT_logo.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 100) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
	}
`

export default Footer;