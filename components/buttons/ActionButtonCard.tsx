import { cn } from "@/lib/utils";
import { ActionButtonType } from "@/types/ActionButtonType";
import { Button } from "../ui/button";

export type ActionButtonCardProps = {
    actionButton: ActionButtonType;
    className?: string;
};

export const ActionButtonCard = ({ actionButton, className }: ActionButtonCardProps) => {
    return (
        <Button
            className={cn("w-full h-32 sm:h-48 flex flex-col items-center justify-center gap-2", className)}
            onClick={actionButton.action}>
            <div className="flex items-center justify-center">{actionButton.picto}</div>
            <span className="text-center text-lg text-wrap">{actionButton.text}</span> {/* Texte */}
        </Button>
    );
};
