import { cn } from "@/lib/utils";

type TypographieH2Props = {
    children: React.ReactNode;
    className?: string;
};

const TypographieH2 = ({ children, className }: TypographieH2Props) => {
    return (
        <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0", className)}>{children}</h2>
    )
}

export default TypographieH2