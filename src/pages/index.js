import React from "react"

import Layout from '../Components/Layout'
import ResetAndHelmet from '../Components/ResetAndHelmet'

import { Hero, Promotion, About, Instructors, Videos } from '../Components'
import './App.css'

export default function index() {
  return <div>
			<ResetAndHelmet />
			<Layout>
				<Hero />

				<Promotion />

				<About />

				<Instructors />

				<Videos />
			</Layout>
		</div>
}
