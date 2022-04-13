export default function Footer() {
	return (
		<footer className='w-full h-[72px] px-8 py-4 flex items-center justify-between border-t border-[#D5D8E4]'>
			<button className='flex items-center px-4 py-2 bg-gray-200 rounded-md text-[#5C5589]'>
				<img src="/arrow-left.png" alt="Pagination Arrow"/>
				<span className='text-base font-semibold ml-[10px]'>Previous</span>
			</button>
			<div className='flex grow items-center justify-center'>
				<ul className='grid grid-cols-3 gap-3'>
					<li>
						<button className='w-10 h-10 flex items-center justify-center border border-[#D5D8E4] rounded-md text-sm text-[#5C5589]'>
							1
						</button>
					</li>
					<li>
						<button className='w-10 h-10 flex items-center justify-center border border-[#D5D8E4] rounded-md text-sm text-[#5C5589]'>
							2
						</button>
					</li>
					<li>
						<button className='w-10 h-10 flex items-center justify-center border border-[#D5D8E4] rounded-md text-sm text-[#5C5589]'>
							3
						</button>
					</li>
				</ul>
				<span className='w-10 h-10 flex items-center justify-center mx-3 rounded-md text-[#5C5589]'>...</span>
				<ul className='grid grid-cols-3 gap-3'>
					<li>
						<button className='w-10 h-10 flex items-center justify-center border border-[#D5D8E4] rounded-md text-sm text-[#5C5589]'>
							12
						</button>
					</li>
					<li>
						<button className='w-10 h-10 flex items-center justify-center border border-[#D5D8E4] rounded-md text-sm text-[#5C5589]'>
							13
						</button>
					</li>
					<li>
						<button className='w-10 h-10 flex items-center justify-center border border-[#D5D8E4] rounded-md text-sm text-[#5C5589]'>
							14
						</button>
					</li>
				</ul>
			</div>
			<button className='flex items-center px-4 py-2 bg-gray-200 rounded-md text-[#5C5589]'>
				<span className='text-base font-semibold mr-[10px]'>Next</span>
				<img src="/arrow-right.png" alt="Pagination Arrow"/>
			</button>
		</footer>
	)
}