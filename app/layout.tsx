import { Providers } from "@/providers";
import type { Metadata } from "next";
import { Suspense } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}
