"use client";

import { Button } from "@/components/ui/button";
import TypographieH1 from "@/components/ui/TypographieH1";
import TypographieP from "@/components/ui/TypographieP";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="flex-1 flex justify-center">
            <div className="container flex flex-col items-center justify-center mt-2 sm:mt-4">
                <TypographieH1 className="font-black text-primary uppercase">{t("Error 404")}</TypographieH1>
                <TypographieP className="text-primary mb-4">{`${t("The page you are looking for does not exist")}.`}</TypographieP>
                <Button asChild>
                    <Link href="/">{t("Go back to the homepage")}</Link>
                </Button>
            </div>
        </div>
    );
}
