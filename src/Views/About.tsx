import { Link } from "react-scroll";

export const About = () => {
    return (
        <section className="container mx-auto min-h-screen flex items-center justify-center flex-col" id="about">
            <div className="grid grid-cols-1 md:grid-col-2 gap-9">
                <div>
                    <img src="/images/about-image.svg" alt="" />
                </div>
                <div>
                    <h2 className="uppercase  tracking-wider">ABout</h2>
                    <p className="mb-6">I am a Front-end web developer specialising in all things React.</p>
                    <p className="mb-6">
                        I am currently studying at Noroff for the past three years, however I have also been self taught
                        for the last five years
                    </p>
                    <p className="mb-6">
                        I love web development as I love a challange, and I love to learn new things.{" "}
                    </p>

                    <p>Get in touch if you think we could work together!</p>
                </div>
                <div>
                    <Link
                        to="contact"
                        className=" cursor-pointer bg-gradient-to-r hover:bg-magenta-400 from-magenta-300 via-magenta-500 to-magenta-700 py-2 rounded-lg font-bold uppercase tracking-wider text-xl font-display text-nightBlue-800 px-4"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </section>
    );
};
