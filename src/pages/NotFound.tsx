import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const { t: _t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container className="text-center">
        <h1 className="mb-4 font-playfair text-8xl font-bold text-gradient-gold">
          404
        </h1>
        <p className="mb-8 text-xl text-navy-300">
          La pagina che stai cercando non esiste.
        </p>
        <Link to="/">
          <Button>
            <Home className="h-5 w-5" />
            Torna alla Home
          </Button>
        </Link>
      </Container>
    </div>
  );
}
