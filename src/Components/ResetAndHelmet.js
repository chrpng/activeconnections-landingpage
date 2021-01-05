import React from "react"

import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet';

import icon from '../img/ActiveConnections.ico'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default function ResetAndHelmet() {
  return (
		<React.Fragment>
			<GlobalStyle />
			<Helmet>
				<link rel="icon" href={icon} />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway:ital,wght@0,300;0,400;1,500&display=swap"
					rel="stylesheet" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
				<title>Active Connections</title>
			</Helmet>
		</React.Fragment>
  )
}