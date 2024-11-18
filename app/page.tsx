"use client";

import { Button } from "@/components/ui/button";
import TypographieBlockquote from "@/components/ui/TypographieBlockquote";
import TypographieH1 from "@/components/ui/TypographieH1";
import TypographieH2 from "@/components/ui/TypographieH2";
import TypographieH3 from "@/components/ui/TypographieH3";
import TypographieH4 from "@/components/ui/TypographieH4";
import TypographieP from "@/components/ui/TypographieP";
import {useAppDispatch} from "@/lib/hooks";
import {setModal} from "@/features/appSlice";
import {CONNEXION_MODAL} from "@/components/Factory/ModalFactory";
import {useTranslation} from "react-i18next";

// --------------

export default function Home() {

    const {t} = useTranslation();

    const dispatch = useAppDispatch();

    const handleConnexion = () => {
        dispatch(setModal(CONNEXION_MODAL));
    }

    return (
        <div>
            <TypographieH1>H1</TypographieH1>
            <TypographieH2>H2</TypographieH2>
            <TypographieH3>H3</TypographieH3>
            <TypographieH4>H4</TypographieH4>
            <TypographieP>P</TypographieP>
            <TypographieBlockquote>Block quote</TypographieBlockquote>
            <Button>Click me</Button>
            <div onClick={handleConnexion}>
                <TypographieP>{t("Log in")}</TypographieP>
            </div>
        </div>
    );
}
