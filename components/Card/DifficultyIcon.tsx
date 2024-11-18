import {Star} from "lucide-react";

// --------------

type Props = {
    difficulty: number,
    size?: number,
    color?: string
}

// --------------

const DifficultyIcon = ({difficulty, size = 40, color = "black"}: Props) => {

    switch (difficulty) {
        case 1 :
            return <Star size={size} color={color}/>;
        case 2 :
            return <div className={"flex flex-row"}><Star size={size} color={color}/><Star size={size} color={color}/>
            </div>;
        case 3:
            return <div className={"flex flex-row"}><Star size={size} color={color}/><Star size={size}
                                                                                           color={color}/><Star
                size={size} color={color}/></div>;
        default:
            return null;
    }
}

export default DifficultyIcon