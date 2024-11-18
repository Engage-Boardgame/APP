import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

type ActionButtonProps = {
    text: string;
};

export const ActionButton = ({ text }: ActionButtonProps) => {
    return (
        <Button className="w-full relative">
            <ArrowRightIcon className="w-4 h-4 absolute left-2" />
            <span>{text}</span>
        </Button>
    );
};
