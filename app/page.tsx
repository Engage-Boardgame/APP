"use client";

import { ActionButton } from "@/components/buttons/ActionButton";
import { CONNEXION_MODAL } from "@/components/Factory/ModalFactory";
import { Button } from "@/components/ui/button";
import TypographieP from "@/components/ui/TypographieP";
import { setModal } from "@/features/appSlice";
import { useAppDispatch } from "@/hooks/hooks";
import { ActionButtonType } from "@/types/ActionButtonType";
import { BookText, HomeIcon, Play } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();

    const onClickGameRules = () => {
        console.log("Game rules");
    };

    const onClickStartGame = () => {
        console.log("Start a game");
    };

    const onClickDashboard = () => {
        console.log("Dashboard");
    };

    const actionsButtons: ActionButtonType[] = [
        { text: t("Game rules"), action: onClickGameRules, picto: <BookText /> },
        { text: t("Start a game"), action: onClickStartGame, picto: <Play /> },
        { text: t("Dashboard"), action: onClickDashboard, picto: <HomeIcon /> },
    ];

    const dispatch = useAppDispatch();

    const handleConnexion = () => {
        dispatch(setModal(CONNEXION_MODAL));
    }

    return (
        <div className="flex-1 flex justify-center">
            <div className="container flex flex-col items-center justify-between mt-2 sm:mt-4">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-8">
                        <h1 className="font-black text-primary uppercase text-4xl sm:text-6xl text-center">
                            {`${t("Welcome")} !`}
                        </h1>
                        <TypographieP className="text-primary text-center mb-4">
                            {`${t("Engage is a platform that allows you to create and manage your own events.")}`}
                        </TypographieP>
                    </div>

                    <div className="flex flex-col items-center justify-between mt-8 gap-4 w-4/5 sm:w-2/3">
                        {actionsButtons.map((actionButton, index) => (
                            <ActionButton key={index} actionButton={actionButton} />
                        ))}
                    </div>
                </div>
                <Button variant="link" onClick={handleConnexion} className="mb-4 underline">
                    {t("Log in")}
                </Button>
            </div>
        </div>
    );
}
