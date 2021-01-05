import styled from 'styled-components'

export const DarkBlueLinkButton = styled.a`
	color: white;
	text-decoration: none;
	padding: 16px 32px;
	background-color: #234daa;
	border-radius: 4px;
	transition: all 0.25s ease-out;
	display: block;
	width: max-content;

	position: relative;

	&:hover {
		background-color: #9CB9DC;
	}
`

export const AnimatedDarkBlueLinkButton = styled(DarkBlueLinkButton)`
	&:hover {
		&::before {
			width: 0;
			height: 0;
			position: absolute;
			right: -30px;
			content: '';
			border-top: 10px solid transparent;
			border-right: 20px solid #4F6986;
			border-bottom: 10px solid transparent;

			animation: slideleft 1s ease-out infinite;
		}
	}

	@keyframes slideleft {
		from {
			transform: translateX(20px);
			opacity: 0.2;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`

export const CloseButton = styled.button`
	background-color: transparent;
	color: #707070;
	font-size: 3em;
	height: 96px;
	position: absolute;
	right: 0;
	top: 0;
	width: 96px;
	z-index: 10;
	:hover {
		color: #C9C9C9;
	}
	&, 
	&:focus{
		border: none;
		outline: none;
	}
`