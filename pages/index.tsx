import type { NextPage } from "next"
import styles from "../styles/Home.module.css"

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
		</main>
	)
}

export default Home;
