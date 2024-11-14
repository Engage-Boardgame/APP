"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { SwitchLangButton } from "../buttons/SwitchLanguageButton";

export const Navbar = () => {
    
    return (
        <div className="w-full h-16 lg:h-24 bg-primary flex justify-center">
            <div className="container flex-1 flex items-center justify-between mx-4 sm:m-0">
                <Image
                    onClick={() => redirect("/")}
                    src="/logo/Engage.png"
                    alt="LogoEngage"
                    className="w-[125px] sm:w-[200px]"
                    width={200}
                    height={200}
                />
                <SwitchLangButton />
            </div>
        </div>
    );
};
