import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, Lock, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AdminLoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, loginAsAdmin, isAdmin, adminEmail, logoutAdmin } = usePortfolio();
  const [inputEmail, setInputEmail] = useState('kuta.dominik@gmail.com');
  const [error, setError] = useState<string | null>(null);
  const [, setSuccess] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleGoogleLogin = (emailToUse: string) => {
    setError(null);
    const ok = loginAsAdmin(emailToUse);
    if (ok) {
      setSuccess(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        setSuccess(false);
        setIsLoginModalOpen(false);
      }, 1000);
    } else {
      setError(`Brak uprawnień. Dostęp do trybu edycji posiada wyłącznie konto administratora Google: kuta.dominik@gmail.com (Wprowadzono: ${emailToUse})`);
    }
  };

  return (
    <div
      id="admin-login-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsLoginModalOpen(false)}
    >
      <div
        id="admin-login-modal"
        className="relative w-full max-w-md p-6 bg-white dark:bg-[#161616] rounded-2xl shadow-2xl border border-neutral-200 dark:border-[#2e2e2e] text-slate-800 dark:text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="close-login-modal-btn"
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-4 right-4 p-1 text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-[#222] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {isAdmin ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#b08d4b]/10 dark:bg-[#c5a059]/10 text-[#8c6a28] dark:text-[#c5a059] flex items-center justify-center border border-[#b08d4b]/20 dark:border-[#c5a059]/20">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
                Zalogowano jako Administrator
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
                {adminEmail}
              </p>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-light">
              Tryb edycji WYSIWYG jest aktywny. Możesz edytować treści, modyfikować projekty, kody QR i konfigurację.
            </p>
            <div className="flex gap-2 justify-center pt-2">
              <button
                type="button"
                onClick={() => setIsLoginModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#b08d4b] rounded-lg shadow-xs transition"
              >
                Przejdź do edycji
              </button>
              <button
                type="button"
                onClick={logoutAdmin}
                className="px-4 py-2 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/60 border border-red-200 dark:border-red-900/40 rounded-lg transition shadow-xs"
              >
                Wyloguj
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] shadow-xs">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                  Panel Administratora
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Wymagane logowanie Google dla właściciela
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-neutral-50 dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] text-xs text-slate-700 dark:text-neutral-300 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                <ShieldCheck className="w-4 h-4 text-[#8c6a28] dark:text-[#c5a059]" />
                Dostęp zastrzeżony:
              </div>
              <p className="font-light text-neutral-600 dark:text-neutral-400">
                Edycja WYSIWYG, dodawanie projektów i zmiana ustawień SEO są odblokowane wyłącznie dla konta Google:
              </p>
              <div className="font-mono font-semibold text-[#8c6a28] dark:text-[#c5a059] bg-white dark:bg-[#1a1a1a] p-1.5 rounded text-center border border-neutral-200 dark:border-[#333] shadow-xs">
                kuta.dominik@gmail.com
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 rounded-xl text-xs text-red-700 dark:text-red-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Quick Google Auth Action for Dominik */}
            <button
              id="google-quick-login-btn"
              type="button"
              onClick={() => handleGoogleLogin('kuta.dominik@gmail.com')}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-white dark:bg-[#1a1a1a] border border-neutral-300 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] rounded-xl shadow-xs text-xs font-medium text-slate-900 dark:text-white transition duration-200 group"
            >
              {/* Google G Logo SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Zaloguj kontem Google (kuta.dominik@gmail.com)</span>
            </button>

            {/* Custom Google Email Verification Option */}
            <div className="pt-2 border-t border-neutral-200 dark:border-[#262626]">
              <label className="block text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                Lub zweryfikuj inny adres Google:
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  placeholder="twoj-email@gmail.com"
                  className="flex-1 px-3 py-2 text-xs bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#b08d4b] dark:focus:border-[#c5a059] shadow-xs"
                />
                <button
                  type="button"
                  onClick={() => handleGoogleLogin(inputEmail)}
                  className="px-3 py-2 text-xs font-semibold text-slate-700 dark:text-neutral-200 bg-neutral-100 dark:bg-[#1e1e1e] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-200 dark:border-[#333] rounded-lg transition shadow-xs"
                >
                  Weryfikuj
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

