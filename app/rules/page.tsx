"use client";
import {useTranslation} from "react-i18next";
import TypographieBigH1 from "@/components/ui/TypographieBigH1";
import TypographieH2 from "@/components/ui/TypographieH2";
import TypographieP from "@/components/ui/TypographieP";

// --------------

export default function RulesView() {

    const {t} = useTranslation();

    return (
        <div className={"flex justify-center mt-4 flex-col"}>
            <TypographieBigH1>{t("Game rules")}</TypographieBigH1>
            <TypographieH2 className={"text-center text-primary mt-10 underline"}>{t("How a round runs")}</TypographieH2>
            <TypographieP className={"text-justify mt-5"}>
                {t("rules")}
            </TypographieP>
        </div>
    )
}
