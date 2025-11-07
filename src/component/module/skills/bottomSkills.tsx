function BottomSkills() {
    const skills = [
        { name: "HTML", img: "/images/html.svg" },
        { name: "CSS", img: "/images/css.svg" },
        { name: "Tailwind", img: "/images/tailwind.png" },
        { name: "Bootstrap", img: "/images/bootstrap.svg" },
        { name: "JavaScript", img: "/images/javascript.svg" },
        { name: "Figma", img: "/images/figma.svg" },
        { name: "Git", img: "/images/git.svg" },
        { name: "React", img: "/images/react.svg" },
        { name: "Next", img: "/images/next.png" },
        { name: "HTML", img: "/images/html.svg" },
        { name: "CSS", img: "/images/css.svg" },
        { name: "Tailwind", img: "/images/tailwind.png" },
        { name: "Bootstrap", img: "/images/bootstrap.svg" },
        { name: "JavaScript", img: "/images/javascript.svg" },
        { name: "Figma", img: "/images/figma.svg" },
        { name: "Git", img: "/images/git.svg" },
        { name: "React", img: "/images/react.svg" },
        { name: "Next", img: "/images/next.png" },
        // { name: "HTML", img: "/images/html.svg" },
        // { name: "CSS", img: "/images/css.svg" },
        // { name: "Tailwind", img: "/images/tailwind.png" },
        // { name: "Bootstrap", img: "/images/bootstrap.svg" },
        // { name: "JavaScript", img: "/images/javascript.svg" },
        // { name: "Figma", img: "/images/figma.svg" },
        // { name: "Git", img: "/images/git.svg" },
        // { name: "React", img: "/images/react.svg" },
        // { name: "Next", img: "/images/next.png" },

    ];

    return (
        <div className="slider py-30 flex flex-wrap justify-center">
            {skills.concat(skills).map((skill, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer bg-[#11152C] 
          border border-[#1B1E37] border-t 
          [border-image:linear-gradient(to_right,#0D1224,#9ca3af,#0D1224)_1] 
          px-6 py-5 rounded-xl m-2 shadow-lg 
          h-[120px] min-w-[120px] sm:h-[150px] sm:min-w-[150px] 
          hover:scale-105 transition-transform duration-300"
                >
                    <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-11 h-11 sm:w-16 sm:h-16 object-contain"
                    />
                    <p className="py-3 font-bold text-[18px] sm:text-2xl uppercase">
                        {skill.name}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default BottomSkills;
