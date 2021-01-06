import React from "react"

import Layout from '../components/Layout'
import Reset from '../components/Reset'
import SEO from '../components/seo'

import { Hero, Promotion, About, Instructors, Videos } from '../components'
import './App.css'

export default function index() {
  return <div>
			<Reset />
			<SEO title="Home" />
			<Layout>
				<Hero />

				<Promotion />

				<About />

				<Instructors />

				<Videos />
			</Layout>
		</div>
}
