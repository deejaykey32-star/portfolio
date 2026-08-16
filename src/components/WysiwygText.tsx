import React, { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Edit3, Check, X } from 'lucide-react';

interface WysiwygTextProps {
  value: string;
  onSave: (newValue: string) => void;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  multiline?: boolean;
  placeholder?: string;
  id?: string;
}

export const WysiwygText: React.FC<WysiwygTextProps> = ({
  value,
  onSave,
  className = '',
  tag: Tag = 'span',
  multiline = false,
  placeholder = 'Kliknij, aby edytować tekst...',
  id,
}) => {
  const { editMode, isAdmin } = usePortfolio();
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setCurrentText(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    onSave(currentText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setCurrentText(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!isAdmin || !editMode) {
    return <Tag id={id} className={className}>{value || placeholder}</Tag>;
  }

  if (isEditing) {
    return (
      <div className="relative inline-block w-full my-1 z-30">
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={4}
            className="w-full p-2 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-2 border-indigo-500 rounded-lg shadow-xl focus:outline-none ring-2 ring-indigo-400/30"
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-1.5 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-2 border-indigo-500 rounded-md shadow-xl focus:outline-none ring-2 ring-indigo-400/30"
          />
        )}
        <div className="flex items-center gap-1.5 mt-1.5">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow transition"
          >
            <Check className="w-3.5 h-3.5" /> Zapisz
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 rounded transition"
          >
            <X className="w-3.5 h-3.5" /> Anuluj
          </button>
        </div>
      </div>
    );
  }

  return (
    <Tag
      id={id}
      onClick={() => setIsEditing(true)}
      title="Kliknij, aby edytować (Tryb WYSIWYG aktywny)"
      className={`${className} group relative cursor-pointer rounded px-1 transition-all hover:bg-indigo-500/10 hover:outline hover:outline-1 hover:outline-indigo-500`}
    >
      {value || <span className="italic text-slate-400">{placeholder}</span>}
      <span className="hidden group-hover:inline-flex absolute -top-3 -right-2 items-center justify-center p-1 bg-indigo-600 text-white rounded-full shadow-md text-[10px]">
        <Edit3 className="w-2.5 h-2.5" />
      </span>
    </Tag>
  );
};
