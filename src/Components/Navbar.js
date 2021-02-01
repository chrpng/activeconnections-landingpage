import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const navHeight = '100px'

const StyledNav = styled.nav`
	position: fixed;
	z-index: 1;
	width: 100%;
	background: linear-gradient(to right, #fff, #fff 50%, #ddd);

	display: flex; 
	justify-content: space-between;
	align-items: center;
	height: ${navHeight};
	padding: 0 24px;

	box-shadow: 0px 5px 5px rgba(170, 170, 170, 0.5);

	.home-image {
		flex-grow: 0;
		height: calc(100% - 24px);

		img {
			height: 100%;
		}
	}

	.links {
		display: flex;
		justify-content: flex-end;

		a {
			margin-left: 24px;
			text-decoration: none;
			padding: 8px 16px;
			color: #234daa;
			border-radius: 8px;
		}
	}

	@media (max-width: 992px) { /* large devices */
		position: static;
	}

	@media (max-width: 576px) { /* large devices */
		.links {
			a {
				margin-left: 0;
				padding: 8px;
			}
		}
	}
`

const Navbar = () => {
	const data = useStaticQuery(NAVBAR_LOGO)
	return (
		<StyledNav>
			<a className="home-image" href="/" ><Img fixed={data.image.childImageSharp.fixed} alt="navlogo" /></a>
			
			<div className="links">
				<Link to="/#about-anchor">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</StyledNav>
	)
}

const NAVBAR_LOGO = graphql`
	query {
		image: file(relativePath: { eq: "ActiveConnections.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(height: 76) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
	}
`
 
export default Navbar