import styles from '../styles/header.module.css'

export default function Header() {
	return <header className='w-100 h-16 border-b border-[#EAECF3] flex items-center justify-center'>
		<div className="container w-full h-16 flex items-center">
			<a className='flex items-center mr-14' href="/">
				<img src="/exercism-with-logo-black.svg" alt="Exercism Logo"/>
			</a>
			<nav className='flex grow'>
				<ul className='flex'>
					<li className='p-2 mr-4 text-base font-semibold'>Dashboard</li>
					<li className='p-2 mr-4 text-base font-semibold'>Tracks</li>
					<li className='p-2 mr-4 text-base font-semibold'>Mentoring</li>
					<li className='p-2 mr-4 text-base font-semibold'>Contribute</li>
				</ul>
			</nav>
			<div className='w-auto h-16 flex items-center justify-end'>
				<div className='flex items-center mr-16'>
					<button
						className={`${styles.reputation} flex items-center py-1`}
						style={{
							backgroundImage: "linear-gradient(#130b43,#130b43),linear-gradient(#9e00ff,#20f)",
							boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)"
						}}
					>
						<img className={`${styles.reputationIcon} w-6 h-6 mr-2`} src="/reputation.svg" alt="Reputation Icon"/>
						<span className='text-base font-semibold text-white'>27</span>
						<div className={`${styles.unseen} w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 bg-white rounded-full`} />
					</button>
				</div>
				<div className='flex items-center'>
					<button className='flex items-center justify-center'>
						<div
							className='w-10 h-10 mr-4 bg-cover rounded-full shadow-md'
							style={{ backgroundImage: "url(https://exercism.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHV5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1605f19abf53a68991613dcaa77aa706b70e93a5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWNocEFjZz0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e51c85b8d2c9669c631b964f2f35132e4e43e95f/avatar.jpg)" }}
						>
							<img
								alt="User Avatar"
								className='sr-only'
								src="https://exercism.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHV5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1605f19abf53a68991613dcaa77aa706b70e93a5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWNocEFjZz0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e51c85b8d2c9669c631b964f2f35132e4e43e95f/avatar.jpg"
							/>
						</div>
						<img className='w-4 h-4' src="/navigation-menu-vertical.svg" alt="Exercism Logo"/>
					</button>
				</div>
			</div>
		</div>
	</header>
}