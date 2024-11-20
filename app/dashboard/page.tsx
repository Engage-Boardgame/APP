"use client";

import { ActionButtonCard } from "@/components/buttons/ActionButtonCard";
import TypographieBigH1 from "@/components/ui/TypographieBigH1";
import { ActionButtonType } from "@/types/ActionButtonType";
import { GalleryVerticalEnd, IdCard } from "lucide-react";
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
            action: () => {router.push("/dashboard/cards")},
            picto: <GalleryVerticalEnd className="!w-16 !h-16" />,
        },
        {
            text: t("Job cards"),
            action: () => {},
            picto: <IdCard className="!w-16 !h-16" />,
        },
    ];

    return (
        <div className="flex-1 flex justify-center">
            <div className="container flex flex-col items-center justify-between mt-2 sm:mt-4 mx-4">
                <div>
                    <TypographieBigH1>{t("Dashboard")}</TypographieBigH1>
                    <div className="flex flex-row flex-wrap gap-1 mt-8 justify-center">
                        {actionButtons.map((actionButton, index) => (
                            <ActionButtonCard key={index} className="w-[48%]" actionButton={actionButton} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
