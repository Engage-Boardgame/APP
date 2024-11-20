import { Button } from "@/components/ui/button";
import { ActionButtonType } from "@/types/ActionButtonType";
import React from "react";

type ActionButtonProps = {
    actionButton: ActionButtonType;
};

export const ActionButton = ({ actionButton }: ActionButtonProps) => {
    return (
        <Button className="w-full h-12 relative" onClick={actionButton.action}>
            {React.cloneElement(actionButton.picto as React.ReactElement, { className: "!w-6 !h-6 absolute left-2" })}
            <span>{actionButton.text}</span>
        </Button>
    );
};
