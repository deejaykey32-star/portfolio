import React, { useState } from 'react';
import {
  Cloud,
  Database,
  RefreshCw,
  Download,
  Trash2,
  CheckCircle2,
  AlertCircle,
  X,
  Plus,
  Server,
  FileJson,
  ShieldCheck,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Briefcase,
  History,
  Info,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { FirestoreBackupRecord } from '../types';

export const FirestoreBackupModal: React.FC = () => {
  const {
    isFirestoreModalOpen,
    setIsFirestoreModalOpen,
    firestoreBackups,
    isFirestoreLoading,
    isFirestoreConnected,
    createCloudBackup,
    restoreCloudBackup,
    deleteCloudBackup,
    isAutoSync,
    toggleAutoSync,
    lastCloudSyncTime,
    firebaseProjectInfo,
    projects,
    graphics,
    caseStudies,
    exportBackup,
    importBackup,
  } = usePortfolio();

  const [backupName, setBackupName] = useState('');
  const [backupNote, setBackupNote] = useState('');
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState<FirestoreBackupRecord | null>(null);

  if (!isFirestoreModalOpen) return null;

  const handleCreateBackup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    setActionMessage(null);

    const defaultName = `Backup ${new Date().toLocaleDateString('pl-PL')} ${new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}`;
    const nameToUse = backupName.trim() || defaultName;

    const res = await createCloudBackup(nameToUse, backupNote);
    setIsCreating(false);

    if (res.success) {
      setActionMessage({
        type: 'success',
        text: `Kopia zapasowa "${nameToUse}" została pomyślnie zapisana w bazie Google Firestore!`,
      });
      setBackupName('');
      setBackupNote('');
    } else {
      setActionMessage({
        type: 'error',
        text: res.error || 'Wystąpił problem podczas zapisu do bazy Firestore.',
      });
    }
  };

  const handleRestore = (backup: FirestoreBackupRecord) => {
    const confirmMsg = `Czy na pewno chcesz przywrócić stan portfolio z kopii "${backup.name}" z dnia ${new Date(backup.createdAt).toLocaleString('pl-PL')}?\n\nObecny stan (${projects.length} projektów, ${graphics.length} grafik, ${caseStudies.length} case studies) zostanie zastąpiony danymi z kopii (${backup.projectsCount} projektów, ${backup.graphicsCount} grafik, ${backup.caseStudiesCount} case studies).`;
    
    if (window.confirm(confirmMsg)) {
      restoreCloudBackup(backup);
      setActionMessage({
        type: 'success',
        text: `Pomyślnie przywrócono stan portfolio z kopii zapasowej "${backup.name}"!`,
      });
      setSelectedPreview(null);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Czy na pewno chcesz trwale usunąć kopię "${name}" z bazy Firestore?`)) {
      const ok = await deleteCloudBackup(id);
      if (ok) {
        setActionMessage({
          type: 'success',
          text: `Kopia zapasowa "${name}" została usunięta z bazy Firestore.`,
        });
        if (selectedPreview?.id === id) {
          setSelectedPreview(null);
        }
      } else {
        setActionMessage({
          type: 'error',
          text: 'Nie udało się usunąć kopii z bazy Firestore.',
        });
      }
    }
  };

  const downloadBackupAsJson = (backup: FirestoreBackupRecord) => {
    const blob = new Blob([JSON.stringify(backup.data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dominik-kuta-firestore-backup-${backup.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsFirestoreModalOpen(false)}
    >
      <div
        id="firestore-backup-modal"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#151515] rounded-2xl shadow-2xl border border-neutral-200 dark:border-[#2e2e2e] text-slate-800 dark:text-neutral-200 overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-200 dark:border-[#262626] bg-neutral-50/90 dark:bg-[#111111]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-[#1f1a10] border border-amber-200 dark:border-[#c5a059]/40 text-[#b08d4b] dark:text-[#c5a059] shadow-xs">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
                  Kopie Zapasowe Google Firebase Firestore
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Połączono
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light mt-0.5">
                Bezpieczna, automatyczna replikacja i wersjonowanie bazy portfolio w chmurze Google Cloud.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsFirestoreModalOpen(false)}
            className="p-2 text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-neutral-200 dark:hover:bg-[#222] transition"
            title="Zamknij okno"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action feedback message */}
        {actionMessage && (
          <div
            className={`px-5 py-3 text-xs flex items-center justify-between border-b ${
              actionMessage.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-200'
                : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800/40 text-red-800 dark:text-red-200'
            }`}
          >
            <div className="flex items-center gap-2">
              {actionMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
              )}
              <span>{actionMessage.text}</span>
            </div>
            <button
              onClick={() => setActionMessage(null)}
              className="text-xs font-bold underline hover:opacity-80"
            >
              Zamknij
            </button>
          </div>
        )}

        {/* Body content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-5">
          {/* Cloud Infrastructure Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-[#282828] bg-neutral-50/50 dark:bg-[#181818] shadow-xs">
              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 mb-1">
                <Database className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                <span className="font-semibold text-slate-700 dark:text-neutral-300">Projekt Firebase</span>
              </div>
              <p className="font-mono font-bold text-slate-900 dark:text-white truncate">
                {firebaseProjectInfo.projectId}
              </p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                Kolekcja: <code className="text-[#b08d4b] dark:text-[#c5a059]">backups</code>
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-[#282828] bg-neutral-50/50 dark:bg-[#181818] shadow-xs">
              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 mb-1">
                <Server className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                <span className="font-semibold text-slate-700 dark:text-neutral-300">Stan Lokalny</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-800 dark:text-neutral-200 font-mono">
                <span>{projects.length} proj.</span>
                <span>•</span>
                <span>{graphics.length} graf.</span>
                <span>•</span>
                <span>{caseStudies.length} case st.</span>
              </div>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3 h-3" /> Gotowy do snapshotu
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-[#282828] bg-neutral-50/50 dark:bg-[#181818] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-neutral-500 dark:text-neutral-400 mb-1">
                  <div className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                    <span className="font-semibold text-slate-700 dark:text-neutral-300">Auto-Replikacja</span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleAutoSync}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition ${
                      isAutoSync
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {isAutoSync ? 'WŁĄCZONA' : 'WYŁĄCZONA'}
                  </button>
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  {lastCloudSyncTime
                    ? `Ostatnia kopia: ${new Date(lastCloudSyncTime).toLocaleTimeString('pl-PL')}`
                    : 'Brak zapisów w bieżącej sesji'}
                </p>
              </div>
            </div>
          </div>

          {/* Create New Backup Section */}
          <div className="p-4 rounded-xl border border-amber-200/70 dark:border-[#c5a059]/30 bg-amber-50/30 dark:bg-[#191610] shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" />
              <h4 className="font-semibold text-slate-900 dark:text-white text-xs">
                Utwórz Nowy Snapshot w Firestore
              </h4>
            </div>

            <form onSubmit={handleCreateBackup} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Nazwa kopii zapasowej (opcjonalnie)
                  </label>
                  <input
                    type="text"
                    placeholder={`np. Stabilna wersja v1.2 - ${new Date().toLocaleDateString('pl-PL')}`}
                    value={backupName}
                    onChange={(e) => setBackupName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-[#121212] border border-neutral-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Komentarz / Notatka (opcjonalnie)
                  </label>
                  <input
                    type="text"
                    placeholder="np. Dodano nowe projekty AI Studio i zaktualizowano ROAS"
                    value={backupNote}
                    onChange={(e) => setBackupNote(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-[#121212] border border-neutral-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Snapshot utrwala pełne konfiguracje, treść, projekty, kreacje graficzne, case studies i linki QR.
                </p>
                <button
                  type="submit"
                  disabled={isCreating}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#b08d4b] rounded-lg shadow-sm transition disabled:opacity-50 cursor-pointer"
                >
                  {isCreating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Zapisywanie...
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> Utwórz Kopię w Chmurze
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* List of Cloud Backups */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" />
                <h4 className="font-semibold text-slate-900 dark:text-white text-xs">
                  Zapisane Kopie w Bazie Firestore ({firestoreBackups.length})
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={exportBackup}
                  className="px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#1e1e1e] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-300 dark:border-[#333] rounded-lg transition flex items-center gap-1"
                  title="Pobierz kopię lokalną w formacie .json"
                >
                  <FileJson className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" /> Eksportuj JSON
                </button>
              </div>
            </div>

            {isFirestoreLoading && firestoreBackups.length === 0 ? (
              <div className="p-8 text-center border border-neutral-200 dark:border-[#282828] rounded-xl bg-neutral-50 dark:bg-[#141414]">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#b08d4b] dark:text-[#c5a059] mb-2" />
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Pobieranie kopii zapasowych z Firestore...</p>
              </div>
            ) : firestoreBackups.length === 0 ? (
              <div className="p-8 text-center border border-dashed border-neutral-300 dark:border-[#333] rounded-xl bg-neutral-50/50 dark:bg-[#141414]">
                <Database className="w-8 h-8 mx-auto text-neutral-400 dark:text-neutral-600 mb-2" />
                <h5 className="font-semibold text-slate-800 dark:text-neutral-200 text-xs">
                  Brak zapisanych kopii w kolekcji Firestore
                </h5>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mt-1 mb-3">
                  Kliknij przycisk "Utwórz Kopię w Chmurze" powyżej, aby zapisać pierwszy punkt przywracania Twojego portfolio.
                </p>
                <button
                  type="button"
                  onClick={handleCreateBackup}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] dark:bg-[#c5a059] rounded-lg shadow-xs transition"
                >
                  Utwórz Pierwszy Backup Teraz
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                {firestoreBackups.map((backup) => (
                  <div
                    key={backup.id}
                    className="p-3.5 rounded-xl border border-neutral-200 dark:border-[#282828] bg-white dark:bg-[#171717] hover:border-amber-300 dark:hover:border-[#c5a059]/50 transition shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900 dark:text-white">
                          {backup.name}
                        </span>
                        <span className="px-2 py-0.5 bg-neutral-100 dark:bg-[#222] text-neutral-600 dark:text-neutral-400 font-mono text-[10px] rounded border border-neutral-200 dark:border-[#333]">
                          {new Date(backup.createdAt).toLocaleString('pl-PL', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      {backup.note && (
                        <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-light">
                          {backup.note}
                        </p>
                      )}
                      <div className="flex items-center gap-3 text-[11px] text-neutral-500 dark:text-neutral-400 font-mono pt-0.5">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" />
                          {backup.projectsCount || backup.data?.projects?.length || 0} projektów
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <ImageIcon className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" />
                          {backup.graphicsCount || backup.data?.graphics?.length || 0} grafik
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" />
                          {backup.caseStudiesCount || backup.data?.caseStudies?.length || 0} case studies
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleRestore(backup)}
                        className="px-3 py-1.5 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black font-mono font-bold rounded text-xs flex items-center gap-1.5 transition shadow-xs"
                        title="Przywróć stan portfolio z tego backupu"
                      >
                        <RefreshCw className="w-3 h-3" /> Przywróć
                      </button>

                      <button
                        type="button"
                        onClick={() => downloadBackupAsJson(backup)}
                        className="p-1.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-[#222] dark:hover:bg-[#2c2c2c] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#333] rounded text-xs transition"
                        title="Pobierz jako plik JSON"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(backup.id, backup.name)}
                        className="p-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/60 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-800/40 rounded text-xs transition"
                        title="Usuń ten snapshot z Firestore"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-neutral-200 dark:border-[#262626] bg-neutral-50 dark:bg-[#111111] text-xs">
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <Info className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
            <span>Kopia zapasowa chroni dane przed wyczyszczeniem pamięci podręcznej przeglądarki.</span>
          </div>
          <button
            type="button"
            onClick={() => setIsFirestoreModalOpen(false)}
            className="px-4 py-1.5 font-semibold text-slate-700 dark:text-neutral-300 bg-neutral-200/80 hover:bg-neutral-300 dark:bg-[#1e1e1e] dark:hover:bg-[#282828] border border-neutral-300 dark:border-[#333] rounded-lg transition"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};
