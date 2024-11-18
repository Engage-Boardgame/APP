import {Cards} from "@/types/Card/Card";
import {Translable} from "@/types/Translable/Translable";

export type CardType = {
    id: number,
    color: string,
    theme: Translable,
    Cards: Cards
}

export type CardTypes = CardType[]