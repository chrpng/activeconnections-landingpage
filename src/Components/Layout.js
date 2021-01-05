import React from "react"
import PromotionModal from './PromotionModal'
import { Navbar, Footer } from './'

import { navHeight } from './Navbar'

import styled from 'styled-components'

const StyledApp = styled.div`
	background: linear-gradient(to bottom right, #fff, #fff 50%, #ddd);

	main {
		padding-top: ${navHeight};

		> * {
			padding: 64px 96px;

			&:nth-child(2n+1) {
				background-color: rgba(191, 233, 244, 0.9);
			}
		}
	}

	@media (max-width: 992px) {
		main {
			padding-top: 0;
		}
	}

	@media (max-width: 768px) { /* tablets */
		main {
			> * {
				padding: 16px;
			}
		}
	}
}
`

export default function Layout({ children }) {
  return (
    <StyledApp className="wrapper">
			<Navbar />
			<main>
				{children}
			</main>
			<Footer />
			<PromotionModal />
		</StyledApp>
  )
}