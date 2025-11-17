import type { Metadata } from "next";
import { Playfair_Display, Lato, Montserrat } from "next/font/google";
import "./globals.css";

// --- COMPONENTES DA MOLDURA (Futuros) ---
// Vamos importá-los mesmo que ainda não existam.
// É normal que o editor mostre um erro neles por enquanto.
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// --- OTIMIZAÇÃO DE FONTES (Passo 1) ---
// Importamos as fontes que farão parte dos nossos "temas".
// Elas são "auto-hospedadas" pelo Next.js (super rápido!)
// E o mais importante: definimos "variáveis CSS" para elas.

const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // O nome da variável para o Tema "Elegante"
});

const fontLato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato", // O nome da variável para o Tema "Minimalista"
});

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // O nome da variável para o Tema "Moderno"
});

// --- SEO BÁSICO (Metadados) ---
export const metadata: Metadata = {
  title: "Agenda Elegante", // Mude para o nome da sua plataforma
  description: "Sua plataforma de agendamento para profissionais de beleza.",
};

// --- O LAYOUT EM SI ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      // Aqui está a "mágica" da otimização:
      // Nós injetamos as classes das fontes no <html>.
      // Agora, qualquer classe CSS (ex: .tema-rose) pode usar
      // essas variáveis (ex: var(--font-playfair)).
      className={`${fontPlayfair.variable} ${fontLato.variable} ${fontMontserrat.variable}`}
    >
      <body
        className={
          // Usamos as classes padrão do shadcn (background/foreground)
          // e garantimos que o footer fique no final da página (flex-col)
          "min-h-screen bg-background text-foreground flex flex-col"
        }
      >
        {/* 1. O Menu Principal (vai aparecer em todas as páginas) */}
        <Navbar />

        {/* 2. O Conteúdo da Página (onde o {children} é renderizado) */}
        <main className="flex-grow">{children}</main>

        {/* 3. O Rodapé (vai aparecer em todas as páginas) */}
        <Footer />
      </body>
    </html>
  );
}