function RightAbout() {
    return <>
        <div className="w-[100%] mr-[70px] md:w-[50%] flex items-center-safe gap-5">
            <div className="w-[20%]">
                <button className="hidden md:block border borderAnimation px-1.5 py-1 sm:px-3 sm:py-2 [writing-mode:vertical-rl] text-center relative ">
                    ABOUT ME <span className="absolute hidden md:block top-[104px] right-[17px] bg-white w-[1px] h-15 animated-line"></span>
                </button>
            </div>
            <div className="w-[80%]">
                <img src="/images/siam.jpg" alt="photo" className="w-[100%] rounded-2xl hover:scale-102 hover:rotate-7 md:hover:scale-105 sm:hover:rotate-2 lg:hover:rotate-10  transition duration-300 ease " />
            </div>
        </div>
    </>
}

export default RightAbout