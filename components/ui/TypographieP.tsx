import { cn } from "@/lib/utils";

type TypographiePProps = {
    children: React.ReactNode;
    className?: string;
};

const TypographieP = ({ children, className }: TypographiePProps) => {
    return (
        <p className={cn("leading-7 text-lg", className)}>{children}</p>
    )
}

export default TypographieP