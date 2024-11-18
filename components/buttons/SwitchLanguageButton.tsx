"use client";


import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";
import { langs } from "@/lib/i18n";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import TypographieH4 from "../ui/TypographieH4";

export function SwitchLangButton() {
    const { t, i18n } = useTranslation();
    const currentLang = langs.find((lang) => lang.code === i18n.language);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    {currentLang && (
                        <Image src={`/icons/${currentLang.flag}`} alt={currentLang.name} width={32} height={32} />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {langs.map((lang, index) => (
                    <DropdownMenuItem key={index} onClick={() => i18n.changeLanguage(lang.code)}>
                        <Image src={`/icons/${lang.flag}`} alt={lang.name} width={32} height={32} />
                        <TypographieH4>{t(lang.name)}</TypographieH4>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}