interface SkillCardProps {
    title: string;
    image: string;
}

export const SkillsCard = (props: SkillCardProps) => {
    return (
        <div className="flex flex-col items-center">
            <div className="mb-3">
                <img src={props.image} alt={props.title} className="h-20" />
            </div>
            <p className="text-auroraGreen-500 tracking-widest">{props.title}</p>
        </div>
    );
};
