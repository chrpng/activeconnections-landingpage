import React from 'react'
import styled from 'styled-components'

import PromotionalImage from '../img/promotion.png'

const StyledPromotion = styled.div`
	display: flex;
	align-items: center;
	.promotion--desc {
		margin-left: 64px;
		p {
			margin-bottom: 16px;
		}

		ul {
			margin-bottom: 32px;
			li {
				margin-left: 32px;
			}
		}
	}
	
	@media (max-width: 768px) { /* tablets */
		display: block;

		.promotion--desc {
			margin-left: 0;
		}
		.promotion--image img {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	}
`

const Promotion = () => {
	return (
		<StyledPromotion>
			<div className="promotion--image">
				<img src={PromotionalImage} alt="group exercise"/>
			</div>
			<div className="promotion--desc">
				<h1>
					Promotion
				</h1>
				<p>We are pleased to offer a special introductory package that includes a free tablet and exercise gear to the first 100 members:</p>
				<ul>
					<li>Personalized Assessment/Evaluation in your home</li>
					<li><strong>Free</strong> Amazon Fire Tablet (valued at $150)</li>
					<li><strong>Free</strong> Exercise Gear (valued at $28)</li>
					<li>Live Exercise Sessions</li>
					<li>Unlimited access to an online library of customized exercise videos</li>
					<br />
					<li><strong>Free</strong> for 3 months</li>
					<li>Months 4 – 12: Starting at $5/month</li>
				</ul>

				<p>Coming Soon: In-person fitness classes using adaptive equipment (for an additional fee)</p>
			</div>
		</StyledPromotion>
	);
}
 
export default Promotion;