import Container from '@/components/layout/Container';

export default function Privacy() {
  return (
    <div className="pt-28 pb-16">
      <Container>
        <h1 className="mb-8 font-playfair text-4xl font-bold text-navy">
          Privacy Policy
        </h1>
        <div className="prose prose-navy max-w-3xl">
          <p className="text-navy-300 leading-relaxed mb-4">
            La presente informativa sulla privacy descrive le modalità di raccolta,
            utilizzo e protezione dei dati personali degli utenti del sito web di
            BINGA Management.
          </p>
          <h2 className="font-playfair text-2xl font-bold text-navy mt-8 mb-4">
            Raccolta dei Dati
          </h2>
          <p className="text-navy-300 leading-relaxed mb-4">
            Raccogliamo i dati personali che ci fornisci volontariamente attraverso
            il modulo di contatto: nome, email, numero di telefono, tipo di proprietà
            e messaggio.
          </p>
          <h2 className="font-playfair text-2xl font-bold text-navy mt-8 mb-4">
            Utilizzo dei Dati
          </h2>
          <p className="text-navy-300 leading-relaxed mb-4">
            I dati raccolti vengono utilizzati esclusivamente per rispondere alle
            richieste di informazioni e per fornire i servizi richiesti.
          </p>
          <h2 className="font-playfair text-2xl font-bold text-navy mt-8 mb-4">
            Protezione dei Dati
          </h2>
          <p className="text-navy-300 leading-relaxed mb-4">
            Adottiamo misure di sicurezza tecniche e organizzative per proteggere
            i dati personali da accessi non autorizzati.
          </p>
          <h2 className="font-playfair text-2xl font-bold text-navy mt-8 mb-4">
            Contatti
          </h2>
          <p className="text-navy-300 leading-relaxed">
            Per qualsiasi domanda relativa alla privacy, contattaci all&apos;indirizzo
            info@bingamanagement.com.
          </p>
        </div>
      </Container>
    </div>
  );
}
