import TypographieH1 from "@/components/ui/TypographieH1";

type Props = {
    title: string,
    icon: JSX.Element
}
const SelectCard = ({title, icon}: Props) => {

    return (
        <div className={"w-[300px] h-[300px] bg-yellow-500 cursor-pointer flex flex-col justify-center items-center text-center"}>
            <TypographieH1>{title}</TypographieH1>
            {icon}
        </div>
    )
}

export default SelectCard