import React from "react";

function About() {
    return (
        <div className="bg-gradient-to-b from-zinc-700 via-gray-800 to-zinc-900 text-white py-16 rounded-lg">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Profile Image */}
                    <div className="w-80 h-80 md:w-96 md:h-w-96 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg mb-6 md:mb-0">
                        <img
                            src="https://akash-halder-portfolio.vercel.app/static/media/Formal%20Pic.81b9daff6a986e138f46.jpg"
                            alt="Akash Halder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content */}
                    <div className="md:ml-10 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-orange-500 mb-4">About Me</h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Hello! I'm <span className="font-bold text-white">Akash Halder</span>, a web developer, programmer, and video editor.
                            I specialize in creating intuitive and responsive web applications that provide seamless user experiences. With a passion for clean code and efficient design, I thrive on solving complex problems and bringing ideas to life through technology.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-orange-400 mb-3">My Expertise</h3>
                        <p className="text-gray-300 text-lg mb-6">
                            As a web developer, I am proficient in modern front-end technologies like React, JavaScript, and Tailwind CSS. My programming skills also extend to back-end development with Node.js and databases such as MongoDB. Additionally, I am skilled in video editing, producing high-quality content for both web and social media platforms.
                        </p>
                        
                        <div>
                            <h3 className="text-2xl font-semibold text-orange-400 mb-3">About This App</h3>
                            <p className="text-gray-300 text-lg mb-6">
                                This app showcases my skills and projects, and provides insight into my approach to web development. It's designed with a clean and user-friendly interface, utilizing modern technologies to ensure performance and scalability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
