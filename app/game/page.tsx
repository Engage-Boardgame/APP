import Card from "@/components/Card/Card";
import SelectCard from "@/components/Card/SelectCard";
import {BookHeart} from "lucide-react";

// -----------

const GamePage = () => {

    return (
        <div className={"gap-3 flex flex-col"}>
            <Card />
            <SelectCard title={"Question Personnelle"} icon={<BookHeart size={130} />}/>
        </div>
    )
}

export default GamePage