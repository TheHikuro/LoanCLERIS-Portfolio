interface TitleProps {
    title: string;
}

export const Title = ({ title }: TitleProps) => {
    return (
        <h3 className="absolute top-24 -mr-8 uppercase tracking-[20px] text-gray-500 text-2xl">{title}</h3>
    )
}