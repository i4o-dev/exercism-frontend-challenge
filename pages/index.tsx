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
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet" />
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
