import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../components/Header";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Exercism Frontend Developer Hiring Challenge</title>
				<meta name="description" content="Exercism Frontend Developer Hiring Challenge"/>
				<link rel="icon" href="/favicon-32x32.png"/>
			</Head>

			<main>
				<Header />
			</main>

			<footer>

			</footer>
		</div>
	)
}

export default Home
