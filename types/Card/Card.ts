import {Department} from "@/types/Department/Department";
import {CardType} from "@/types/CardType/CardType";
import {Translable} from "@/types/Translable/Translable";

export type Card = {
    id:number,
    description:Translable,
    isActive:boolean,
    department:Department,
    difficulty:number,
    question:Translable,
    type: CardType,

}

export type Cards = Card[]