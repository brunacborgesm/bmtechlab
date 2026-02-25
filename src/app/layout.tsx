import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BM Tech Lab | Estúdio Digital",
    description: "Desenvolvemos sites modernos, rápidos e elegantes para empresários e autônomos.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    );
}
