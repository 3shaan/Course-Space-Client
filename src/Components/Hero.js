import React from 'react';

const Hero = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left order-1 lg:ml-16">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Learn, Practice, Build, Show Your Creativity.
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
				They say, knowledge is power. So select a course, learn it, show your intelectuality.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="." className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:bg-blue-700 duration-700">Course start</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:order-1">
			<img src="https://globalcolliance.com/wp-content/uploads/2021/06/course.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg" />
		</div>
	</div>
</section>

    );
};

export default Hero;