import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import TestimonialsWrapper from "../components/testimonials/TestimonialsWrapper";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Exercism Frontend Developer Hiring Challenge</title>
			</Head>

			<main className='w-full flex flex-col items-center justify-start'>
				<Header />
				<TestimonialsWrapper />
			</main>

			<footer>

			</footer>
		</div>
	)
}

export default Home
