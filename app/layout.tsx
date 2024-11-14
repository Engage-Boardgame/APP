import { I18nProvider } from "@/providers/I18nProvider";
import StoreProvider from "@/providers/StoreProvider";
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ModalProvider from "@/providers/ModalProvider";

export const metadata: Metadata = {
    title: "Engage",
    description: "Jeu de société 'Engage'",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="fr">
            <body>
                <I18nProvider>
                    <StoreProvider>
                        <ModalProvider>
                            {children}
                        </ModalProvider>
                    </StoreProvider>
                </I18nProvider>
            </body>
        </html>
    );
}
