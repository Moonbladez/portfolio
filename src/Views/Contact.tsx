import { contactLinks } from "./../constants/contactLinks";

export const Contact = () => {
    return (
        <section className="container mx-auto min-h-screen flex justify-center flex-col" id="contact">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-5xl  mb-8"> Contact Me</h2>
                    <ul>
                        {contactLinks.map((link, index) => (
                            <li key={index} className="flex items-center mb-10">
                                {link.icon}
                                {link.link ? (
                                    <a href={link.anchor} className="hover:text-auroraGreen-100">
                                        {link.text}
                                    </a>
                                ) : (
                                    link.text
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="flex">
                        <a
                            href="https://www.linkedin.com/in/rebecca-young83/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/images/linkedin.svg" className="h-10" alt="Linkedin logo" loading="lazy" />
                        </a>
                        <a href="https://github.com/Moonbladez" target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.svg" className="h-10 text-auroraGreen-200" alt="Linkedin logo" />
                        </a>
                    </div>
                </div>

                <div>
                    <form name="contact" className="flex flex-col" method="POST" data-netlify="true">
                        <input
                            type="text"
                            placeholder="name"
                            required
                            className="mb-6 ring ring-pink-200 p-2 rounded border-2 border-gray-900"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            required
                            className="mb-6  ring ring-pink-200 p-2 rounded border-2 border-gray-900"
                        />
                        <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={5}
                            placeholder="message"
                            required
                            className="mb-6 ring ring-pink-200 p-2 rounded border-2 border-gray-900"
                        ></textarea>
                        <button className="bg-gradient-to-r hover:bg-magenta-400 from-magenta-300 via-magenta-500 to-magenta-700 py-2 rounded-lg font-bold uppercase tracking-wider text-xl font-display">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
