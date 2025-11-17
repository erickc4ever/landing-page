import Link from "next/link";
import { Button } from "@/components/ui/button"; // Vamos usar o botão do shadcn

/*
  Este é um Server Component.
  Note que não há "use client" no topo.
  Isso é ótimo para otimização!
*/

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO (lado esquerdo) */}
        <Link href="/">
          <span className="text-xl font-bold tracking-tight">
            Agenda Elegante
          </span>
        </Link>

        {/* LINKS DE NAVEGAÇÃO (centro) - Opcional para o hub */}
        <div className="hidden md:flex gap-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Início
          </Link>
          <Link href="/para-profissionais" className="text-sm text-muted-foreground hover:text-foreground">
            Para Profissionais
          </Link>
        </div>

        {/* BOTÕES DE AÇÃO (lado direito) */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Quero minha página</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}