import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// import Giveaway from './Promotion'
import Giveaway from './Giveaway'
import { CloseButton } from '../ui-components'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)',
		borderRadius					: '24px'
  },
	overlay: {
		zIndex: 10,
	}
};

const SpecialOfferButton = styled.button`
	position: fixed;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 8px;
	text-align: center;
	border: none;
	background-color: #e76b6b;
	color: white;
	overflow: hidden;

	div {
		position: relative;

		&:before {
			width: 0;
			height: 0;
			position: absolute;
			right: calc(50% - 80px);
			content: '';
			border-top: 10px solid transparent;
			border-right: 20px solid white;
			border-bottom: 10px solid transparent;

			animation: slideleft 1s ease-out infinite;
		}

		&:after {
			width: 0;
			height: 0;
			position: absolute;
			left: calc(50% - 80px);
			content: '';
			border-top: 10px solid transparent;
			border-left: 20px solid white;
			border-bottom: 10px solid transparent;

			animation: slideright 1s ease-out infinite;
		}
	}

	@media (max-width: 768px) { /* tablets */
		display: none;
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

	@keyframes slideright {
		from {
			transform: translateX(-20px);
			opacity: 0.2;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`

Modal.setAppElement('#___gatsby')

const PromotionModal = () => {
	const [ show, setShow ] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => {
		setShow(false);
		sessionStorage.setItem('firstVisit', true);
	}

	useEffect(() => {
		if (!sessionStorage.getItem('firstVisit')) setShow(true);
	}, []);

	return (
		<div>
			<SpecialOfferButton onClick={handleShow}>
				<div>Giveaway Offer!</div>
			</SpecialOfferButton>
			<Modal
				isOpen={show}
				onRequestClose={handleClose}
				style={customStyles}
				contentLabel="Promotion"
			>
				<CloseButton onClick={handleClose}>&times;</CloseButton>
				<Giveaway />
			</Modal>
		</div>
	);
}
 
export default PromotionModal;