import React, { useState } from 'react';
import { Dna, Music, FileText, Play, RotateCcw, Sparkles } from 'lucide-react';

export const InteractiveDemos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dna' | 'tuner' | 'dtp'>('dna');

  // DNA Interactive State
  const [sequence, setSequence] = useState<string[]>(['A', 'T', 'G', 'C', 'C', 'G', 'T', 'A']);
  const [crisprTargetIndex, setCrisprTargetIndex] = useState<number | null>(null);

  // Complementary DNA base
  const getComplement = (base: string) => {
    switch (base) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'G': return 'C';
      case 'C': return 'G';
      default: return 'A';
    }
  };

  const addBase = (b: string) => {
    if (sequence.length < 12) {
      setSequence([...sequence, b]);
    }
  };

  const triggerCrisprCut = () => {
    const cutPos = Math.floor(sequence.length / 2);
    setCrisprTargetIndex(cutPos);
    setTimeout(() => {
      setCrisprTargetIndex(null);
    }, 2000);
  };

  // Guitar Tuner State
  const guitarStrings = [
    { name: 'E2', note: 'E', freq: 82.41, stringIndex: 6 },
    { name: 'A2', note: 'A', freq: 110.00, stringIndex: 5 },
    { name: 'D3', note: 'D', freq: 146.83, stringIndex: 4 },
    { name: 'G3', note: 'G', freq: 196.00, stringIndex: 3 },
    { name: 'B3', note: 'B', freq: 246.94, stringIndex: 2 },
    { name: 'E4', note: 'E', freq: 329.63, stringIndex: 1 },
  ];
  const [activeString, setActiveString] = useState(guitarStrings[1]); // A2
  const [detuneCents, setDetuneCents] = useState(0);

  // DTP / QR State
  const [qrSize, setQrSize] = useState(25); // mm
  const [bleedMm, setBleedMm] = useState(3.0);
  const [eccLevel, setEccLevel] = useState<'L' | 'M' | 'Q' | 'H'>('H');

  return (
    <section id="lab" className="py-20 border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interaktywne Laboratorium Algorytmów</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Doświadcz Technologii w Działaniu
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Sprawdź działanie silników zaimplementowanych w projektach: od parowania zasad azotowych DNA i cięcia CRISPR-Cas9, przez cyfrowy analizator strun gitary, po parametryczną geometrię poligraficzną A5.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl mb-8 max-w-xl">
          <button
            onClick={() => setActiveTab('dna')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'dna'
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Dna className="w-4 h-4" />
            <span>zycieDNA &middot; Helisa &amp; CRISPR</span>
          </button>

          <button
            onClick={() => setActiveTab('tuner')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'tuner'
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>GuitarEduDei &middot; Stroik Web Audio</span>
          </button>

          <button
            onClick={() => setActiveTab('dtp')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'dtp'
                ? 'bg-amber-400 text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>PDF QR Studio &middot; Geometria A5</span>
          </button>
        </div>

        {/* Interactive Panel */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8">
          {/* TAB 1: DNA */}
          {activeTab === 'dna' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Symulacja Podwójnej Helisy DNA &amp; Enzymów CRISPR
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Klikaj nukleotydy, aby wydłużyć nić matrycową, lub uruchom precyzyjne cięcie endonukleazą Cas9.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerCrisprCut}
                    className="px-3.5 py-2 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Symuluj cięcie CRISPR-Cas9</span>
                  </button>

                  <button
                    onClick={() => {
                      setSequence(['A', 'T', 'G', 'C', 'C', 'G', 'T', 'A']);
                      setCrisprTargetIndex(null);
                    }}
                    className="p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-lg transition-colors"
                    title="Resetuj nić"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* DNA Chain Visualizer */}
              <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800/80 overflow-x-auto">
                <div className="min-w-[560px] flex flex-col items-center gap-2">
                  {/* Sense Strand (5' -> 3') */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-500 mr-2">5'</span>
                    {sequence.map((base, idx) => {
                      const isTarget = crisprTargetIndex === idx;
                      const baseColor =
                        base === 'A' ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' :
                        base === 'T' ? 'bg-blue-500/20 text-blue-400 border-blue-500/40' :
                        base === 'G' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' :
                        'bg-purple-500/20 text-purple-400 border-purple-500/40';

                      return (
                        <div key={idx} className="flex flex-col items-center">
                          <div
                            className={`w-11 h-12 rounded-lg border font-mono font-bold text-sm flex items-center justify-center transition-all ${baseColor} ${
                              isTarget ? 'scale-110 ring-2 ring-emerald-400 animate-pulse' : ''
                            }`}
                          >
                            {base}
                          </div>
                          {/* Hydrogen Bond indicator */}
                          <div className="w-0.5 h-4 bg-neutral-700 my-0.5" />
                          {/* Complementary Strand (3' -> 5') */}
                          <div className="w-11 h-12 rounded-lg border border-neutral-800 bg-neutral-900 font-mono font-bold text-sm text-neutral-300 flex items-center justify-center">
                            {getComplement(base)}
                          </div>
                        </div>
                      );
                    })}
                    <span className="text-[11px] font-mono text-neutral-500 ml-2">3'</span>
                  </div>
                </div>

                {crisprTargetIndex !== null && (
                  <div className="mt-4 text-center text-xs font-mono text-emerald-400">
                    &bull; Rozcięcie wiązania fosfodiestrowego w pozycji {crisprTargetIndex + 1} przez kompleks sgRNA-Cas9 (Double-Strand Break)
                  </div>
                )}
              </div>

              {/* Add Base Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400 mr-2">Dodaj nukleotyd:</span>
                  {(['A', 'T', 'G', 'C'] as const).map(b => (
                    <button
                      key={b}
                      onClick={() => addBase(b)}
                      className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-mono font-bold text-xs border border-neutral-700 transition-colors"
                    >
                      {b}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-neutral-400">
                  Długość oligonukleotydu: <span className="font-mono text-white font-bold">{sequence.length}</span> / 12 pz (par zasad)
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GUITAR TUNER */}
          {activeTab === 'tuner' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Cyfrowy Stroik Chromatyczny Web Audio (Autokorelacja FFT)
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Wybierz strunę gitary, aby zasymulować detekcję częstotliwości podstawowej i odchylenia centowego.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDetuneCents(0)}
                    className="px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors border border-neutral-700"
                  >
                    Nastrój idealnie (0 centów)
                  </button>
                </div>
              </div>

              {/* String Selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                {guitarStrings.map(st => {
                  const isSelected = activeString.name === st.name;
                  return (
                    <button
                      key={st.name}
                      onClick={() => setActiveString(st)}
                      className={`p-3 rounded-xl border transition-all text-center flex flex-col items-center ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-mono text-neutral-500">Struna {st.stringIndex}</span>
                      <span className="text-xl font-bold font-mono my-0.5">{st.name}</span>
                      <span className="text-[11px] font-mono tabular-nums text-neutral-400">{st.freq} Hz</span>
                    </button>
                  );
                })}
              </div>

              {/* Gauge Display */}
              <div className="p-8 rounded-xl bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center">
                <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2 font-mono">
                  Wykryta Częstotliwość &middot; Strój EADGBE
                </div>

                <div className="text-5xl font-black text-white font-mono mb-2">
                  {activeString.note}
                </div>

                <div className="text-sm font-mono text-amber-400 mb-6 tabular-nums">
                  {(activeString.freq * Math.pow(2, detuneCents / 1200)).toFixed(2)} Hz &middot; Cel: {activeString.freq} Hz
                </div>

                {/* Cent Needle Meter */}
                <div className="w-full max-w-md relative pt-6 pb-2">
                  <div className="h-2 rounded-full bg-neutral-800 relative overflow-hidden">
                    <div
                      className="absolute top-0 bottom-0 bg-amber-400 transition-all duration-300"
                      style={{
                        left: `${50 + (detuneCents / 50) * 45}%`,
                        width: '4px',
                        transform: 'translateX(-50%)'
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-2">
                    <span>-50 centów</span>
                    <span className="text-emerald-400 font-bold">W STROJU (0)</span>
                    <span>+50 centów</span>
                  </div>
                </div>

                {/* Slider to adjust detune simulation */}
                <div className="mt-6 flex items-center gap-3 w-full max-w-xs text-xs text-neutral-400">
                  <span>Za nisko</span>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    value={detuneCents}
                    onChange={(e) => setDetuneCents(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <span>Za wysoko</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DTP / QR */}
          {activeTab === 'dtp' && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-neutral-800">
                <h3 className="text-lg font-bold text-white mb-1">
                  Kliencki Generator Spadów i QR Matrycy (PDF-lib WASM)
                </h3>
                <p className="text-xs text-neutral-400">
                  Symulacja kalkulacji wektorowych dla formatu A5 (148 x 210 mm) oraz normy drukarskiej Amazon KDP.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Visual A5 Page Sheet */}
                <div className="flex justify-center">
                  <div className="relative w-56 h-80 bg-neutral-100 rounded-sm shadow-xl p-4 flex flex-col justify-between text-neutral-900 border-2 border-dashed border-red-500/70">
                    {/* Bleed outline label */}
                    <div className="absolute -top-5 left-0 text-[10px] font-mono text-red-400">
                      Linia spadu (+{bleedMm} mm)
                    </div>

                    <div className="text-[10px] font-mono border-b border-neutral-300 pb-1 flex justify-between">
                      <span className="font-bold">A5 FORMAT</span>
                      <span>148 &times; 210 mm</span>
                    </div>

                    {/* QR Preview box */}
                    <div
                      className="border border-neutral-800 bg-white p-2 self-center rounded flex flex-col items-center justify-center shadow-sm"
                      style={{ width: `${qrSize * 2.2}px`, height: `${qrSize * 2.2}px` }}
                    >
                      <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-white text-[9px] font-mono text-center p-1">
                        QR [{eccLevel}]
                      </div>
                    </div>

                    <div className="text-[9px] text-neutral-600 font-mono text-center">
                      Bezstratne wstrzyknięcie wektorowe
                    </div>
                  </div>
                </div>

                {/* Parameters */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1">
                      Rozmiar kodu QR: <span className="font-mono text-amber-400">{qrSize} mm</span>
                    </label>
                    <input
                      type="range"
                      min="15"
                      max="40"
                      value={qrSize}
                      onChange={(e) => setQrSize(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1">
                      Spad drukarski (Bleed): <span className="font-mono text-amber-400">{bleedMm.toFixed(1)} mm</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.5"
                      value={bleedMm}
                      onChange={(e) => setBleedMm(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1">
                      Korekcja błędów QR (ECC):
                    </label>
                    <div className="flex gap-2">
                      {(['L', 'M', 'Q', 'H'] as const).map(lvl => (
                        <button
                          key={lvl}
                          onClick={() => setEccLevel(lvl)}
                          className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg border transition-colors ${
                            eccLevel === lvl
                              ? 'bg-amber-400 text-neutral-950 border-amber-400'
                              : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:text-white'
                          }`}
                        >
                          {lvl} ({lvl === 'H' ? '30%' : lvl === 'Q' ? '25%' : lvl === 'M' ? '15%' : '7%'})
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-400 leading-relaxed">
                    Wymiary brutto arkusza: {(148 + bleedMm * 2).toFixed(1)} &times; {(210 + bleedMm * 2).toFixed(1)} mm. Bez kompresji rastrowej tekstu bazowego dokumentu PDF.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
