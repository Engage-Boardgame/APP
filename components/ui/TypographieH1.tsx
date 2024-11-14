import { cn } from "@/lib/utils";

type TypographieH1Props = {
    children: React.ReactNode;
    className?: string;
}

const TypographieH1 = ({children, className}: TypographieH1Props) => {

    return (
        <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl", className)}>
            {children}
        </h1>
    )
}

export default TypographieH1