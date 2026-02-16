import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import Container from '@/components/layout/Container';
import { useContactForm } from '@/hooks/useContactForm';

export default function Contact() {
  const { t } = useTranslation();
  const { formData, errors, isSubmitting, isSuccess, updateField, handleSubmit } =
    useContactForm();

  const propertyTypes = [
    { value: 'apartment', label: t('contact.form.propertyTypes.apartment') },
    { value: 'villa', label: t('contact.form.propertyTypes.villa') },
    { value: 'house', label: t('contact.form.propertyTypes.house') },
    { value: 'studio', label: t('contact.form.propertyTypes.studio') },
    { value: 'other', label: t('contact.form.propertyTypes.other') },
  ];

  const contactInfo = [
    { icon: Mail, text: t('contact.info.email') },
    { icon: Phone, text: t('contact.info.phone') },
    { icon: MapPin, text: t('contact.info.address') },
    { icon: Clock, text: t('contact.info.hours') },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(t);
  };

  const inputClass = (hasError?: string) =>
    `w-full rounded-xl border ${hasError ? 'border-red-400' : 'border-gray-200'} bg-white px-4 py-3 font-body text-sm text-dark-950 placeholder:text-dark-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20`;

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-dark-950 md:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="text-dark-400">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="space-y-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-accent text-sm font-medium text-dark-950">
                  {t('contact.form.name')}
                </label>
                <input
                  className={inputClass(errors.name)}
                  placeholder={t('contact.form.namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block font-accent text-sm font-medium text-dark-950">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  className={inputClass(errors.email)}
                  placeholder={t('contact.form.emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-accent text-sm font-medium text-dark-950">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  className={inputClass(errors.phone)}
                  placeholder={t('contact.form.phonePlaceholder')}
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
              <div>
                <label className="mb-1.5 block font-accent text-sm font-medium text-dark-950">
                  {t('contact.form.propertyType')}
                </label>
                <select
                  className={inputClass(errors.propertyType)}
                  value={formData.propertyType}
                  onChange={(e) => updateField('propertyType', e.target.value)}
                >
                  <option value="">{t('contact.form.propertyTypePlaceholder')}</option>
                  {propertyTypes.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.propertyType && <p className="mt-1 text-xs text-red-500">{errors.propertyType}</p>}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-accent text-sm font-medium text-dark-950">
                {t('contact.form.message')}
              </label>
              <textarea
                className={inputClass(errors.message)}
                rows={4}
                placeholder={t('contact.form.messagePlaceholder')}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-700"
              >
                <CheckCircle className="h-5 w-5" />
                {t('contact.form.success')}
              </motion.div>
            )}

            <button type="submit" disabled={isSubmitting} className="btn-gold">
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-dark-950 p-8 text-white">
              <h3 className="mb-6 font-display text-xl font-bold">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="pt-2 text-sm text-white/70">{info.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
