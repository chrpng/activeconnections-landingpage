import { Modal as BootstrapModal } from 'react-bootstrap'
import styled from 'styled-components'

const Modal = styled(BootstrapModal).attrs({ size: 'xl' })`
	.modal-content {
		border-radius: 32px !important;
		overflow: hidden;
		padding: 64px 80px;
	}
`

Modal.CloseBtn = styled.button`
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

export default Modal