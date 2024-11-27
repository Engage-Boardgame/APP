'use client'

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

export default function Layout({ children }: Props) {

    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return (
        <div className="flex-1 flex flex-col justify-between items-center container mr-auto ml-auto">
            {children}
            <Button className="w-5/6 sm:w-2/3 my-5 h-16" onClick={handleGoBack}>
                <ArrowLeft style={{ width: "32px", height: "32px" }} />
            </Button>
        </div>
    );
}
