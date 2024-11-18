import { Button } from "@/components/ui/button";
import { ActionButtonType } from "@/types/ActionButtonType";

type ActionButtonProps = {
    actionButton: ActionButtonType;
};

export const ActionButton = ({ actionButton }: ActionButtonProps) => {
    return (
        <Button className="w-full h-12 relative" onClick={actionButton.action}>
            <div className="w-4 h-4 absolute left-2">{actionButton.picto}</div>
            <span>{actionButton.text}</span>
        </Button>
    );
};
