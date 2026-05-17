import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio da Atenção - Saia do Automático | Vitor Tyso",
  description:
    "Sua atenção está sendo roubada todos os dias. O Desafio da Atenção é um protocolo de 14 dias para sair do automático antes que a vida passe sem você."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-canvas font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
