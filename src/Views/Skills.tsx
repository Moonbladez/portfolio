import { SkillsCard } from "./../Components/SkillsCard";

import { skillsInfo, newSkillsInfo } from "./../constants/skillsInfo";

export const Skills = () => {
    return (
        <section className="container mx-auto min-h-screen flex justify-center flex-col" id="skills">
            <h2>my skills</h2>
            <div className="mb-10">
                <h3>The technologies and tools I use</h3>
                <div className="grid grid-cols-2 gap-3  md:grid-cols-3 lg:grid-cols-4 md:gap-10">
                    {skillsInfo.map((skill, index) => (
                        <SkillsCard title={skill.title} image={skill.image} key={index} />
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <h3 className="mb-6">Technologies I am working, or improving on:</h3>
                <div className="grid grid-cols-2 gap-3  md:grid-cols-3 lg:grid-cols-4 md:gap-10">
                    {newSkillsInfo.map((skill, index) => (
                        <SkillsCard title={skill.title} image={skill.image} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
