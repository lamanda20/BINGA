import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import airbnbLogo from '@/partenaires/Airbnb_Logo_Bélo.svg.png';
import expediaLogo from '@/partenaires/expedia.png';

export default function FullManagement() {
  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <div className="grid gap-24">
          {/* Row 1: text left, image right */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-sm font-accent italic text-dark-600">Une gestion complète</p>
              <h2 className="mb-4 font-display text-3xl font-bold text-dark-950 md:text-4xl">
                La conciergerie Airbnb simple et sécurisée
              </h2>
              <p className="mb-4 leading-relaxed text-dark-400">
                Entre les arrivées, les départs, les réservations, et les tâches d'entretien, être
                propriétaire sur Airbnb peut devenir une source de tracas. Offrez-vous la tranquillité
                d'esprit avec une gestion complète de vos locations, adaptée aux séjours courts et
                moyens!
              </p>
              <p className="leading-relaxed text-dark-400">
                Chez Yo Maroc, nous prenons en main chaque détail pour vous simplifier votre
                quotidien.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <div className="overflow-hidden h-80 w-72 md:w-80 md:h-96 lg:w-[380px] lg:h-[420px]">
                <img
                  src="/hero-bg.jpg"
                  alt="Immeuble extérieur"
                  className="w-full h-full object-cover rounded-tr-full"
                />
              </div>

              {/* Airbnb circular logo overlay */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-300 shadow-lg">
                  <img src={airbnbLogo} alt="Airbnb" className="h-6 w-6 object-contain" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: image left, text right */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              {/* Make the image have a rounded top (arch) similar to the top-right image above */}
              <div className="overflow-hidden h-72 w-72 md:h-80 md:w-80 lg:h-[360px] lg:w-[360px] rounded-tl-full rounded-tr-full">
                <img
                  src="/hero-bg.jpg"
                  alt="Agent ou intérieur"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blue partner mark (badge) */}
              <div className="absolute -right-6 bottom-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                  <img src={expediaLogo} alt="Partenaire" className="h-6 w-6 object-contain" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-sm font-accent italic text-dark-600">Un partenaire fiable</p>
              <h3 className="mb-4 font-display text-2xl font-bold text-dark-950">Louez votre résidence en toute confiance</h3>
              <p className="mb-4 leading-relaxed text-dark-400">
                Confiez-nous votre logement et louez en toute tranquillité ! Yo Maroc est votre
                partenaire de confiance pour une gestion simplifiée de vos locations Airbnb au Maroc.
              </p>
              <p className="leading-relaxed text-dark-400">
                Bien plus qu'une simple conciergerie, nous sommes votre allié pour une gestion optimale
                et de qualité de vos locations courte durée au Maroc.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
