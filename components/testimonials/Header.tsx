import {useState} from "react";

export default function Header() {
	const [isFilterFocused, setIsFilterFocused] = useState(false);

	return (
		<header className='w-full h-20 px-6 py-4 flex items-center justify-between border-b border-[#D5D8E4]'>
			<div className='flex items-center'>
				<button className='flex items-center justify-center mr-6'>
					<img className='mr-3' src="/exercism-tracks.png" alt="Exercism Tracks Dropdown"/>
					<img src="/arrow-down.png" alt="Dropdown Arrow"/>
				</button>
				<div className={`w-[416px] h-12 px-5 py-3 flex items-center ${isFilterFocused ? 'bg-white border border-[#2E57E8] shadow-[0px_0px_2px_2px_rgba(46,87,232,0.25)]' : 'bg-[#F0F3F9]'} rounded-md`}>
					<img className='w-6 h-6 mr-4' src="/search.png" alt=""/>
					<input
						className='bg-transparent flex grow border-none outline-none'
						onBlur={() => setIsFilterFocused(false)}
						onFocus={() => setIsFilterFocused(true)}
						placeholder='Filter by exercise title'
						type="text"
					/>
				</div>
			</div>
			<div>
				<button className='w-[348px] h-12 px-5 py-3 flex items-center justify-between bg-[#F0F3F9] rounded-md'>
					<span>Sort by Most Recent</span>
					<img src="/arrow-down.png" alt="Dropdown Arrow"/>
				</button>
			</div>
		</header>
	)
}