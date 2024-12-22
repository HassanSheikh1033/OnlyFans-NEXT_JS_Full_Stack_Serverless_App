import Image from "next/image";
import AuthButtons from "./AuthButtons";

const HeroSection = () => {
	return (
		<div className='flex h-screen w-full'>
			<div className='flex-1 flex overflow-hidden bg-[#156c8ca6] relative justify-center items-center z-10 bg-noise'>
				<img
					src='/logo/logo1.png'
					alt='OnlyFans Logo'
					className='absolute -left-1/4 opacity-15 -bottom-52 lg:scale-150 xl:scale-105 scale-[2]
            pointer-events-none select-none'
				/>
				<div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
					<div>
						<p className='text-5xl md:text-6xl font-extrabold leading-tight'>
							<span className='bg-clip-text text-transparent bg-white '>
								Only Fans
							</span>
							<br />
							<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-900'>
								Ecommerce Store
							</span>
						</p>
					</div>

					<p className='text-2xl md:text-3xl text-balance'>
						Hey! It's <span className=' px-2 font-bold text-white'>NOT</span> what it looks
						like.
					</p>
					<p className='text-2xl md:text-3xl mb-6 leading-snug text-balance'>
						Built for <span className='bg-sky-500 font-bold px-2 text-white'>Products</span> NOT{" "}
						<span className='bg-red-500 px-2 font-bold text-white'>OTHERS</span>
					</p>
					<AuthButtons />
				</div>
			</div>

			<div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex'>
				<Image
					src={"/main.png"}
					alt='Horse'
					fill
					className='object-cover opacity-90 pointer-events-none select-none h-full'
				/>
			</div>
		</div>
	);
};
export default HeroSection;
