import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { QRCodeSVG } from 'qrcode.react';
import { X, ExternalLink, Download, Copy, Check, QrCode, Palette } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QrCodeModal: React.FC = () => {
  const { qrModal, closeQrModal } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [qrFgColor, setQrFgColor] = useState(qrModal.color || '#0a0a0a');
  const [qrBgColor, setQrBgColor] = useState('#ffffff');
  const [qrSize] = useState(240);
  const qrRef = useRef<HTMLDivElement>(null);

  if (!qrModal.isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(qrModal.url);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadSVG = () => {
    if (!qrRef.current) return;
    const svgElement = qrRef.current.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `qr-${qrModal.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  const presetColors = [
    { label: 'Złoto', fg: '#c5a059', bg: '#ffffff' },
    { label: 'Czerń', fg: '#0a0a0a', bg: '#ffffff' },
    { label: 'Cloudflare', fg: '#ea580c', bg: '#ffffff' },
    { label: 'Google AI', fg: '#2563eb', bg: '#ffffff' },
    { label: 'Szmaragd', fg: '#059669', bg: '#ffffff' },
  ];

  return (
    <div
      id="qr-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={closeQrModal}
    >
      <div
        id="qr-modal-content"
        className="relative w-full max-w-md p-6 bg-white dark:bg-[#161616] rounded-2xl shadow-2xl border border-neutral-200 dark:border-[#2e2e2e] transition-all text-slate-800 dark:text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-[#262626]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] shadow-xs">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white leading-tight">
                {qrModal.title || 'Interaktywny Kod QR'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 font-light">
                Kliknij kod QR, aby przejść bezpośrednio lub zeskanuj smartfonem
              </p>
            </div>
          </div>
          <button
            id="close-qr-modal-btn"
            onClick={closeQrModal}
            className="p-1 text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-[#222] transition"
            aria-label="Zamknij okno kodu QR"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clickable QR Code Viewport */}
        <div className="flex flex-col items-center justify-center my-4">
          <a
            id="qr-direct-link"
            href={qrModal.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Kliknij, aby otworzyć: ${qrModal.url}`}
            className="group relative p-4 bg-white rounded-xl shadow-md border-2 border-neutral-200 dark:border-neutral-700 hover:border-[#b08d4b] dark:hover:border-[#c5a059] transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
          >
            <div ref={qrRef} className="flex items-center justify-center">
              <QRCodeSVG
                value={qrModal.url}
                size={qrSize}
                fgColor={qrFgColor}
                bgColor={qrBgColor}
                level="H"
                includeMargin={false}
              />
            </div>
            
            {/* Hover overlay hint */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px] text-white">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-semibold rounded-lg text-xs shadow-lg">
                <ExternalLink className="w-3.5 h-3.5" /> Przejdź do projektu
              </div>
            </div>
          </a>

          <p className="mt-3 text-xs text-center font-mono text-neutral-500 dark:text-neutral-400 max-w-xs truncate">
            {qrModal.url}
          </p>
        </div>

        {/* Color Palette Switcher */}
        <div className="my-4 pt-3 border-t border-neutral-200 dark:border-[#262626]">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <Palette className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" /> Kolorystyka kodu QR:
            </span>
          </div>
          <div className="flex items-center gap-2">
            {presetColors.map((color) => (
              <button
                key={color.label}
                type="button"
                onClick={() => {
                  setQrFgColor(color.fg);
                  setQrBgColor(color.bg);
                }}
                className={`w-6 h-6 rounded-full border-2 transition-transform ${
                  qrFgColor === color.fg ? 'scale-110 ring-2 ring-[#b08d4b] dark:ring-[#c5a059]' : 'opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: color.fg, borderColor: color.bg }}
                title={color.label}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            id="copy-qr-url-btn"
            type="button"
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-neutral-200 bg-neutral-50 dark:bg-[#1e1e1e] hover:bg-neutral-100 dark:hover:bg-[#282828] border border-neutral-200 dark:border-[#333] rounded-lg transition shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" /> Skopiowano!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Kopiuj Link
              </>
            )}
          </button>

          <a
            id="visit-qr-url-btn"
            href={qrModal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#b08d4b] rounded-lg shadow-xs transition"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Otwórz Stronę
          </a>
        </div>

        <div className="mt-3 text-center">
          <button
            id="download-qr-btn"
            type="button"
            onClick={handleDownloadSVG}
            className="inline-flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400 hover:text-[#b08d4b] dark:hover:text-[#c5a059] underline"
          >
            <Download className="w-3 h-3" /> Pobierz wektorowy kod QR (.SVG)
          </button>
        </div>
      </div>
    </div>
  );
};

