import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafio de 7 dias para recuperar sua atenção",
  description:
    "Um protocolo de 7 dias para sair da sobrecarga mental e voltar a ter clareza."
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
