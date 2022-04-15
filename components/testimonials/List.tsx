export default function List() {
	return (
		<div className='w-full h-[640px] flex items-start justify-center'>
			<table className='w-full h-full table-fixed'>
				<tbody className='w-full'>
					<tr className='w-full h-16 px-6 py-2 flex items-center border-b border-[#EAECF3]'>
						<td className='w-12'>
							<img className='w-8 h-8' src="/languageIconbash.png" alt="Bash Icon"/>
						</td>
						<td className='w-[480px]'>
							<div className='flex items-center px-4'>
								<img
									alt="User Avatar"
									className='w-[42px] h-[42px] mr-4 rounded-full'
									src="https://exercism.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHV5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1605f19abf53a68991613dcaa77aa706b70e93a5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWNocEFjZz0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e51c85b8d2c9669c631b964f2f35132e4e43e95f/avatar.jpg"
								/>
								<div className='flex flex-col items-start justify-center'>
									<span className='font-medium leading-6 text-base'>Mitchell Pritchett</span>
									<span className='font-normal leading-[21px] text-sm'>on Series in Bash</span>
								</div>
							</div>
						</td>
						<td className='w-[656px]'>
							<span className='text-[15px]'>Very kind mentor who has patience to explain everything I am not s...</span>
						</td>
						<td className='w-[148px]'>
							<span className='font-medium text-sm'>an hour ago</span>
						</td>
						<td>
							<img src="/arrow-right-1.png" alt="arrow right"/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}