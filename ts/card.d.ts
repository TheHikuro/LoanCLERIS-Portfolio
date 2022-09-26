export interface CardProps {
    jobs: {
        title: string;
        date: string;
        description: string;
        techno: StaticImageData[]
        image: StaticImageData;
        id?: number;
    }
}