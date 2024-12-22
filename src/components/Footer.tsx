const Footer = () => {
	return (
		<footer className='md:px-8 md:py-0 border-t'>
			<div className='container flex  items-center gap-4 h-24'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					OnlyFans - All Rights Reserved {" "}
					
					- Hassan Farooq 2024{" "}
					<a
						href='https://github.com/HassanSheikh1033/'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
