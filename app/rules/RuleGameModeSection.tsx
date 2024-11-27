"use client";
import TypographieH2 from "@/components/ui/TypographieH2";
import {useTranslation} from "react-i18next";
import TypographieP from "@/components/ui/TypographieP";

// -------------------
const RuleGameModeSection = () => {

    const {t} = useTranslation();

    return (
        <>
            <TypographieH2 className={"text-center text-primary mt-5 underline"}>{t("Game mode")}</TypographieH2>
            <TypographieP className={"text-justify mt-2 ml-5 mr-5 leading-5"}>
                <strong>{t("Competitive")} : </strong> {t("rules-competitive")}
            </TypographieP>
            <TypographieP className={"text-justify ml-5 mr-5 leading-5"}>
                <strong>{t("Cooperative")} : </strong> {t("rules-cooperative")}
            </TypographieP>
        </>
    )
}

export default RuleGameModeSection
