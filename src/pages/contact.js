import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import Layout from '../components/Layout'
import Reset from '../components/Reset'
import SEO from '../components/seo'

const SpecialHeading = styled.div`
	h2 {
		margin-left: 32px;
	}
`

const StyledForm = styled(Form)`
	label,
	button {
		display: block;
	}

	label {
		margin-bottom: 8px;
	}

	input,
	textarea, {
		display: inline-block;
	}

	input,
	textarea {
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		width: 50%;
		padding: 16px 16px;
		border-radius: 8px;
		border-width: 1px;
		vertical-align: middle;
		resize: vertical;
		margin-bottom: 16px;
	}

	textarea {
		height: 128px;
	}

	.validation-error {
		padding-left: 16px;
		color: red;
		display: inline;
	}

	button {
		color: white;
		text-decoration: none;
		padding: 16px 32px;
		background-color: #234daa;
		border-radius: 4px;
		border: none;
		transition: all 0.25s ease-out;
		display: block;
		width: max-content;

		position: relative;

		&:hover {
			background-color: #9CB9DC;
		}
	}
`

const Contact = () => {
	const encode = (data) => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	}

	const handleSubmit = (values, actions) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": "contact-activeconnections",
				...values,
				"subject": (!values.subject || values.subject.trim().length === 0) ? `New message from ${values.name}` : values.subject,
			})
		})
		.then(() => {
			alert('Message submitted! We will get back to you as soon as possible.');
			actions.resetForm()
		})
		.catch(() => {
			alert('Error');
		})
		.finally(() => actions.setSubmitting(false))
	}

	const validate = values => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const errors = {};
		if(!values.name) {
			errors.name = 'Name Required'
		}
		if(!values.email || !emailRegex.test(values.email)) {
			errors.email = 'Valid Email Required'
		}
		if(!values.message) {
			errors.message = 'Message Required'
		}
		return errors;
	}

	return (
		<div>
			<Reset />
			<SEO title='Contact' />
			<Layout>
				<SpecialHeading>
					<h1>Questions?</h1>
					<h2>Leave us a message.</h2>
				</SpecialHeading>
				<Formik
					initialValues={{
						name: '',
						email: '',
						message: '',
					}}
					onSubmit={handleSubmit}
					validate={validate}
				>
				{() => (
					<StyledForm name="contact-activeconnections" data-netlify={true}>
						<label htmlFor="name">Your Name: </label>
						<Field name="name" />
						<span className="validation-error"><ErrorMessage name="name" /></span>

						<label htmlFor="email">Your Email: </label>
						<Field name="email" />
						<span className="validation-error"><ErrorMessage name="email" /></span>

						<label htmlFor="subject">Subject (Optional): </label>
						<Field name="subject" />

						<label htmlFor="message">Message: </label>
						<Field name="message" component="textarea" placeholder="I was wondering..." />
						<span className="validation-error"><ErrorMessage name="message" /></span>

						<button type="submit">Send</button>
					</StyledForm>
				)}
				</Formik>
				<div></div>
			</Layout>
		</div>
	);
}
 
export default Contact;