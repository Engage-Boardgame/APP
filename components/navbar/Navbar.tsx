"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SwitchLangButton } from "../buttons/SwitchLanguageButton";

export const Navbar = () => {

    const router = useRouter();
    
    return (
        <div className="w-full h-16 lg:h-24 bg-primary flex justify-center">
            <div className="container flex-1 flex items-center justify-between mx-4 sm:m-0">
                <Image
                    onClick={() => router.push("/")}
                    src="/logo/Engage.png"
                    alt="LogoEngage"
                    className="w-[125px] sm:w-[200px] hover:cursor-pointer"
                    width={200}
                    height={200}
                />
                <SwitchLangButton />
            </div>
        </div>
    );
};
