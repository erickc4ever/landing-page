/*
  Este também é um Server Component.
  Leve, rápido e sem JavaScript no cliente.
*/
export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between text-sm text-muted-foreground">
        <p>
          &copy; {anoAtual} Agenda Elegante. Todos os direitos reservados.
        </p>

        {/* Você pode adicionar links de redes sociais aqui */}
        <div className="flex gap-4">
          <p>Feito com ♡</p>
        </div>
      </div>
    </footer>
  );
}