import { I18nProvider } from "@/providers/I18nProvider";
import StoreProvider from "@/providers/StoreProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Engage",
    description: "Jeu de société 'Engage'",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body>
                <I18nProvider>
                    <StoreProvider>{children}</StoreProvider>
                </I18nProvider>
            </body>
        </html>
    );
}
