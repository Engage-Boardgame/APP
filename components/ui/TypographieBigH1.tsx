"use client";

type TypographieBigH1Props = {
    children: React.ReactNode;
}

export default function TypographieBigH1({ children }: TypographieBigH1Props) {

    return <h1 className="font-black text-primary uppercase text-4xl sm:text-6xl text-center">{children}</h1>;
}
