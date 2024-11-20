import {cn} from "@/lib/utils";

type TypographiePProps = {
    children: React.ReactNode;
    className?: string;
};
const TypographieH4 = ({children, className}: TypographiePProps) => {

    return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
            {children}
        </h4>
    )
}

export default TypographieH4