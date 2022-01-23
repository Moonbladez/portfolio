import { PortfolioItem } from "./../Components/PortfolioItem";

import { PortfolioInfo } from "./../constants/portfolioInfo";

export const Portfolio = () => {
    return (
        <section className="container mx-auto min-h-screen flex justify-center flex-col" id="portfolio">
            <h2>Some Things I've Built</h2>
            <div className="grid gap-20">
                {PortfolioInfo.map((item, index) => {
                    return (
                        <PortfolioItem
                            title={item.title}
                            image={item.image}
                            key={index}
                            description={item.description}
                            skills={item.skills}
                            url={item.url}
                            repo={item.repo}
                        />
                    );
                })}
            </div>
        </section>
    );
};
