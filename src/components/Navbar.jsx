const Navbar = () => {
    return (
        <section className="w-full h-[80px] flex items-center justify-between text-white font-[700]">
            <div className="w-auto h-auto flex items-center">
                <h1 className="font-[600] text-[24px] font-Poppins">thelouisgram</h1>
            </div>
            <div className=" flex  gap-6 items-center">
                <h2>Home</h2>
                <h2>Skills</h2>
                <h2>Projects</h2>
                <h2>Contact</h2>
            </div>
        </section>
    )
}

export default Navbar
