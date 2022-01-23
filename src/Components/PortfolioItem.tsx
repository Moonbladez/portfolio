interface PortfolioItemProps {
    skills: String[];
    title: string;
    image: string;
    description: string;
    url: string;
    repo: string;
}

export const PortfolioItem = (props: PortfolioItemProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-50 md:gap-10">
            <div className="mb-2 md:mb-0">
                <img src={props.image} alt={props.title} className="w-100 object-cover rounded-xl" />
            </div>

            <div>
                <div>
                    <h3 className="mb-10">{props.title}</h3>
                </div>
                {props.description}
                <div className="mt-8 flex flex-wrap">
                    {props.skills.map((skill) => {
                        return (
                            <span className="mr-5 bg-auroraGreen-200 text-nightBlue-500 px-2 py-1 rounded-xl mb-1">
                                {skill}
                            </span>
                        );
                    })}
                </div>
                <div className="mt-8">
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-5 hover:text-auroraGreen-100"
                    >
                        Website
                    </a>
                    <a
                        href={`https://github.com/Moonbladez/${props.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-auroraGreen-100"
                    >
                        Github Repo
                    </a>
                </div>
            </div>
        </div>
    );
};
