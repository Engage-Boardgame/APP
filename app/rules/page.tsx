"use client";
import {useTranslation} from "react-i18next";
import TypographieBigH1 from "@/components/ui/TypographieBigH1";
import TypographieH2 from "@/components/ui/TypographieH2";
import GlobalRuleSection from "@/app/rules/GlobalRuleSection";
import RuleGameModeSection from "@/app/rules/RuleGameModeSection";

// --------------

export default function RulesView() {

    const {t} = useTranslation();

    return (
        <div className={"flex justify-center mt-4 flex-col items-center"}>
            <TypographieBigH1>{t("Game rules")}</TypographieBigH1>
            <TypographieH2
                className={"text-center text-primary mt-5 underline"}>{t("Explanatory video")}</TypographieH2>
            <div className="relative w-full max-w-4xl mt-2 aspect-video">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/yrrmvtz43Vs?si=ZaEuIeONTgcS9bh4"
                    title="Règles du jeu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>
            <GlobalRuleSection title={t("Start the game")} description={t("rules-start-game")}/>
            <GlobalRuleSection title={t("How a round runs")} description={t("rules")} />
            <RuleGameModeSection />
            <GlobalRuleSection title={t("Truth cards")} description={t("rules-truth-cards")} />
            <GlobalRuleSection title={t("The job cards")} description={t("rules-job-cards")} />
        </div>
    )
}
