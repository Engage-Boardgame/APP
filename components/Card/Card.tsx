"use client";
import {Card} from "@/types/Card/Card";
import DifficultyIcon from "@/components/Card/DifficultyIcon";
import TypographieH4 from "@/components/ui/TypographieH4";
import {BookHeart, Captions, CircleHelp} from "lucide-react";
import {useState} from "react";

// ------------------

type Props = {
    card?: Card
}

// ------------------

const Card = ({card}: Props) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={"w-[300px] h-min-[300px] bg-white border-8 border-yellow-500 cursor-pointer"} onClick={handleFlip}>
            <div className={"w-[100%] h-[100%] flex flex-col items-center justify-between"}>
                <div className={"flex flex-row bg-yellow-500 p-2 m-2 rounded items-center gap-2"}>
                    <TypographieH4>3</TypographieH4>
                    <TypographieH4>Question personnelle</TypographieH4>
                    <BookHeart size={28}/>
                </div>
                <div>
                    {!isFlipped ?
                        <div className={"flex flex-col items-center text-center"}>
                            <CircleHelp size={40}/>
                            <TypographieH4 className={"font-bold"}>
                                Que fais-tu durant tes loisirs ? Pourquoi ? Qu'est-ce que cela t'apporte ?
                            </TypographieH4>
                        </div>
                        :
                        <div className={"flex flex-col items-center text-center"}>
                            <Captions size={40} />
                            <TypographieH4 className={"font-bold"}>
                                L'objectif est de mieux te connaître. Souvent la réponse importe peu.
                                Essaie de mettre en évidence les soft skills qui en découlent.
                            </TypographieH4>
                        </div>
                    }
                </div>
                <DifficultyIcon difficulty={3}/>
            </div>
        </div>
    )
}

export default Card