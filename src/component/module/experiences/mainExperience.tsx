import LeftExperience from "./leftExperience";


import RightExperience from "./rightExperience";

function MainExperience() {
    return (
        <div
            id="experience"
            className="px-5 sm:px-8 py-16 sm:py-20 bg-[#0D1224] text-white border-y-[1px] border-transparent [border-image:linear-gradient(to_right,#0D1224,#9ca3af,#0D1224)_1]"
        >
            {/* Section Button */}
            <button className="borderAnimation border bg-[#1A1443] px-3 py-2 text-center relative mx-auto block mb-12 sm:mb-16">
                EXPERIENCES
                <span className="hidden sm:block absolute top-[20px] right-32.5 bg-white w-55 h-[1px] animated-line"></span>
                <span className="hidden sm:block absolute top-[20px] left-32.5 bg-white w-55 h-[1px] animated-line"></span>
            </button>

            {/* Experience Content */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mx-auto">
                <LeftExperience />
                <RightExperience />
            </div>
        </div>
    );
}

export default MainExperience;