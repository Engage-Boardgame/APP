import TypographieH2 from "@/components/ui/TypographieH2";
import TypographieP from "@/components/ui/TypographieP";

type Props = {
    title: string,
    description: string
}
const GlobalRuleSection = ({title,description}:Props) => {
    return (
        <>
            <TypographieH2 className={"text-center text-primary mt-5 underline"}>{title}</TypographieH2>
            <TypographieP className={"text-justify mt-2 ml-5 mr-5 leading-5"}>{description}</TypographieP>
        </>
    )
}

export default GlobalRuleSection
