"use client";

import TypographieH1 from "@/components/ui/TypographieH1";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="flex-1 flex justify-center">
            <div className="container flex justify-center mt-2 sm:mt-4">
                <TypographieH1 className="font-black text-primary uppercase">{t("Welcome")}</TypographieH1>
            </div>
        </div>
    );
}
