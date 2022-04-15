import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

export default function TestimonialsWrapper() {
	return (
		<div className='w-full container px-8 flex flex-col items-center justify-center grow'>
			<div className='w-[680px] h-[155px] flex flex-col items-center justify-center mt-10 mb-8'>
				<img className='mb-3' src="/mood-happy.png" alt="Testimonials Icon"/>
				<h2 className='text-[32px] leading-[44px] font-bold mb-5'>Testimonials I&apos;ve left</h2>
				<img src="/testimonials-vector-1.png" alt="Testimonials Vector"/>
			</div>
			<main className='w-full mb-10 rounded-lg shadow-[0px_4px_42px_rgba(79,114,205,0.15)]'>
				<Header />
				<List />
				<Footer />
			</main>
		</div>
	)
}