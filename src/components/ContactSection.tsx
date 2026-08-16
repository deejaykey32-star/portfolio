import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { QRCodeSVG } from 'qrcode.react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  QrCode,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const { config, openQrModal } = usePortfolio();
  const [formSent, setFormSent] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Aplikacja AI / Web',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setFormSent(false);
      setFormState({
        name: '',
        email: '',
        projectType: 'Aplikacja AI / Web',
        message: '',
      });
    }, 4000);
  };

  const vCardUrl = `mailto:${config.email}?subject=Współpraca%20z%20Dominik%20Kuta`;

  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-[#222222] bg-[#f8f7f4] dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-[#161616] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono uppercase tracking-wider mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
            <span>Porozmawiajmy o Projekcie</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Skontaktuj się i Zbudujmy Coś Wyjątkowego
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-light">
            Masz pomysł na aplikację AI, potrzebujesz nowej identyfikacji graficznej lub chcesz zwiększyć ruch i konwersję ze swoich stron?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Col: Contact Info & Interactive QR */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white dark:bg-[#161616] rounded-2xl border border-neutral-200 dark:border-[#262626] shadow-xl space-y-6">
              
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
                Dane Kontaktowe & Dostępność
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-[#121212] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] rounded-xl border border-neutral-200 dark:border-[#282828] hover:border-[#b08d4b] dark:hover:border-[#c5a059] transition group shadow-xs"
                >
                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#181818] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] group-hover:scale-105 transition-transform shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">Adres Email:</span>
                    <span className="font-semibold text-slate-800 dark:text-neutral-200 font-mono">
                      {config.email}
                    </span>
                  </div>
                </a>

                {config.phone && (
                  <a
                    href={`tel:${config.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-[#121212] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] rounded-xl border border-neutral-200 dark:border-[#282828] hover:border-[#b08d4b] dark:hover:border-[#c5a059] transition group shadow-xs"
                  >
                    <div className="p-2.5 rounded-lg bg-white dark:bg-[#181818] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] group-hover:scale-105 transition-transform shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">Telefon:</span>
                      <span className="font-semibold text-slate-800 dark:text-neutral-200 font-mono">
                        {config.phone}
                      </span>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] shadow-xs">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#181818] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">Lokalizacja:</span>
                    <span className="font-semibold text-slate-800 dark:text-neutral-200">
                      {config.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Clickable Quick QR Box */}
              <div className="pt-4 border-t border-neutral-200 dark:border-[#262626] text-center">
                <p className="text-xs font-medium text-slate-700 dark:text-neutral-300 mb-2 flex items-center justify-center gap-1.5">
                  <QrCode className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" />
                  <span>Szybki Kontakt przez Kod QR:</span>
                </p>

                <div
                  onClick={() => openQrModal(vCardUrl, `Kontakt z ${config.name}`, 'Kontakt', '#c5a059')}
                  title="Kliknij, aby wysłać maila lub zapisać kontakt"
                  className="group relative inline-block p-3.5 bg-white rounded-xl border border-neutral-300 dark:border-neutral-700 hover:border-[#b08d4b] dark:hover:border-[#c5a059] shadow-xs cursor-pointer hover:scale-105 transition-all"
                >
                  <QRCodeSVG
                    value={vCardUrl}
                    size={120}
                    fgColor="#0a0a0a"
                    bgColor="#ffffff"
                    level="M"
                  />
                  <div className="absolute inset-0 bg-black/80 rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold px-2 py-1 bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black rounded font-mono">
                      Kliknij i Napisz
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-2">
                  Zeskanuj, aby natychmiast utworzyć wiadomość email do Dominika Kuty
                </p>
              </div>

            </div>
          </div>

          {/* Right Col: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white dark:bg-[#161616] rounded-2xl border border-neutral-200 dark:border-[#262626] shadow-xl">
              
              {formSent ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#b08d4b]/10 dark:bg-[#c5a059]/10 text-[#8c6a28] dark:text-[#c5a059] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
                    Dziękuję za wiadomość!
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
                    Twoje zapytanie zostało przesłane do Dominika Kuty. Odpowiem najszybciej jak to możliwe (zazwyczaj w ciągu kilku godzin).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm font-sans">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-neutral-300 mb-1">
                        Twoje Imię i Nazwisko / Firma *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Jan Kowalski (Firma Sp. z o.o.)"
                        className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#b08d4b] dark:focus:border-[#c5a059] transition"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 dark:text-neutral-300 mb-1">
                        Adres Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jan.kowalski@firma.pl"
                        className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#b08d4b] dark:focus:border-[#c5a059] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 dark:text-neutral-300 mb-1">
                      Czego dotyczy Twój projekt?
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-[#b08d4b] dark:focus:border-[#c5a059] transition"
                    >
                      <option value="Aplikacja AI / Google AI Studio">Aplikacja AI / Google AI Studio</option>
                      <option value="Cloudflare Pages & Edge Development">Cloudflare Pages & Edge Development</option>
                      <option value="Dedykowany WordPress & WooCommerce">Dedykowany WordPress & WooCommerce</option>
                      <option value="Projektowanie Graficzne & Identyfikacja Wizualna">Projektowanie Graficzne & Identyfikacja Wizualna</option>
                      <option value="Kampania Marketingowa, SEO & Pozycjonowanie w AI">Kampania Marketingowa, SEO & Pozycjonowanie w AI</option>
                      <option value="Inne zapytanie / Doradztwo">Inne zapytanie / Doradztwo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 dark:text-neutral-300 mb-1">
                      Szczegóły projektu / Wiadomość *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Opisz krótko cel projektu, oczekiwany termin i budżet..."
                      className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#b08d4b] dark:focus:border-[#c5a059] transition"
                    />
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black font-semibold rounded-lg shadow-md transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Wyślij Zapytanie Ofertowe</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

