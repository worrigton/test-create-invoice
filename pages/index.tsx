import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import Input from "../components/Input/input.server" 
import React, { Suspense } from 'react'

const Home: NextPage = () => {
	return (
		<main>
			<section className={styles.section_header}>
				<h1>
					Invoice Template Generator
				</h1>
				<h3>
					Fill in your business details in the invoice template below to
					create a professional invoice for your customers.
				</h3>
			</section>
			<Suspense>
				<Input
					type="text"
					placeholder="Your Company"
					fontLg
					required
					value="esto es el value"
					name="company"
				/>
			</Suspense>
		</main>
	)
}

export default Home;


export async function getServerSideProps() {
	return {
		props: {
			id: "1",
		}
	}
}