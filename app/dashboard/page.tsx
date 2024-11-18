"use client";

import { ActionButtonCard } from "@/components/buttons/ActionButtonCard";
import { Button } from "@/components/ui/button";
import TypographieBigH1 from "@/components/ui/TypographieBigH1";
import { ActionButtonType } from "@/types/ActionButtonType";
import { ArrowLeft, GalleryVerticalEnd, IdCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
    const { t } = useTranslation();
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const actionButtons: ActionButtonType[] = [
        {
            text: t("Cards"),
            action: () => {},
            picto: <GalleryVerticalEnd style={{ width: "64px", height: "64px" }} />,
        },
        {
            text: t("Job cards"),
            action: () => {},
            picto: <IdCard style={{ width: "64px", height: "64px" }} />,
        },
    ];

    return (
        <div className="flex-1 flex justify-center">
            <div className="container flex flex-col items-center justify-between mt-2 sm:mt-4 mx-4">
                <div>
                    <TypographieBigH1>{t("Dashboard")}</TypographieBigH1>
                    <div className="flex flex-row flex-wrap gap-1 mt-8">
                        {actionButtons.map((actionButton, index) => (
                            <ActionButtonCard key={index} className="w-[48%]" actionButton={actionButton} />
                        ))}
                    </div>
                </div>

                <Button className="w-5/6 sm:w-2/3 my-5 h-16" onClick={handleGoBack}>
                    <ArrowLeft style={{width: "32px", height: "32px"}} />
                </Button>
            </div>
        </div>
    );
}
