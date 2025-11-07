function CartProject() {
    const projects = [
        {
            title: "Modern Landing Page",
            img: "/images/lending.png",
            desc: "A clean, responsive landing page designed for fast loading and smooth user experience. Built with Tailwind CSS to look perfect on mobile, tablet, and desktop devices.",
            tech: ["HTML", "CSS"],
            site: "#",
        },
        {
            title: "Portfolio",
            img: "/images/exam-light.png",
            desc: "A modern and elegant personal portfolio website built with the latest web technologies. Designed with a clean UI, smooth animations, and a fully responsive layout that looks perfect on any device.",
            tech: ["HTML", "Tailwind", "React", "React-Router"],
            site: "https://protfolio-2-eight.vercel.app/",
        },
        {
            title: "Educational Website",
            img: "/images/nurulilm.png",
            desc: "A modern, animated, and responsive Madrasah website with elegant design and smooth user experience.",
            tech: ["HTML5", "Tailwind", "React.js", "React-Router", "Framer-Motion"],
            site: "https://madrasatun-nurul-i-lm.vercel.app/",
        },
    ];

    return (
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-25">
            {projects.map((project, index) => (
                <div key={index} className="rounded-2xl overflow-hidden group">
                    <div className="relative">
                        <a href={project.site} target="_blank" rel="noopener noreferrer">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="h-[45%] w-full cursor-pointer group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-white text-lg font-semibold tracking-wide">
                                    Click Here
                                </span>
                            </div>
                        </a>
                    </div>

                    <div className="bg-[#11152C] p-5 hover:border hover:border-purple-400 rounded-b-[5px] transition-all duration-300">
                        <h4 className="font-bold my-3 text-2xl">{project.title}</h4>
                        <p className="text-[#9CA392]">{project.desc}</p>

                        <div className="flex flex-wrap gap-3.5 pt-3.5">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-7 py-1.5 flex font-bold items-center justify-center rounded-full border border-purple-400 text-purple-300 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartProject;
