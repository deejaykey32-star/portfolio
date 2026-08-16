import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { SiteConfig, ProjectItem, GraphicItem, MarketingCaseStudy } from '../types';

// Initialize Firebase App instance
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore database (supporting custom databaseId if configured)
export const db =
  firebaseConfig.firestoreDatabaseId &&
  firebaseConfig.firestoreDatabaseId !== '(default)'
    ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
    : getFirestore(app);

export interface FirestoreBackupRecord {
  id: string;
  name: string;
  note?: string;
  createdAt: string;
  timestamp: number;
  projectsCount: number;
  graphicsCount: number;
  caseStudiesCount: number;
  data: {
    config: SiteConfig;
    projects: ProjectItem[];
    graphics: GraphicItem[];
    caseStudies: MarketingCaseStudy[];
    version: string;
  };
}

export const BACKUPS_COLLECTION = 'backups';
export const LIVE_PORTFOLIO_COLLECTION = 'live_portfolio';
export const LIVE_DOC_ID = 'current';

/**
 * Creates a new full snapshot backup in Firestore
 */
export async function createFirestoreBackup(
  payload: {
    config: SiteConfig;
    projects: ProjectItem[];
    graphics: GraphicItem[];
    caseStudies: MarketingCaseStudy[];
  },
  customName?: string,
  note?: string
): Promise<{ success: boolean; id: string; error?: string }> {
  try {
    const backupId = `backup_${Date.now()}`;
    const dateFormatted = new Date().toLocaleString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const backupDocRef = doc(db, BACKUPS_COLLECTION, backupId);
    const backupData: FirestoreBackupRecord = {
      id: backupId,
      name: customName?.trim() || `Kopia zapasowa ${dateFormatted}`,
      note: note?.trim() || 'Ręczna kopia zapasowa portfolio',
      createdAt: new Date().toISOString(),
      timestamp: Date.now(),
      projectsCount: payload.projects.length,
      graphicsCount: payload.graphics.length,
      caseStudiesCount: payload.caseStudies.length,
      data: {
        config: payload.config,
        projects: payload.projects,
        graphics: payload.graphics,
        caseStudies: payload.caseStudies,
        version: '1.0',
      },
    };

    await setDoc(backupDocRef, backupData);

    // Also update the live state document in Firestore
    const liveDocRef = doc(db, LIVE_PORTFOLIO_COLLECTION, LIVE_DOC_ID);
    await setDoc(liveDocRef, {
      ...backupData,
      lastSyncedAt: new Date().toISOString(),
    });

    return { success: true, id: backupId };
  } catch (error: any) {
    console.error('Błąd podczas tworzenia kopii w Firestore:', error);
    return { success: false, id: '', error: error?.message || 'Nieznany błąd zapisu w Firestore' };
  }
}

/**
 * Fetches all backups from Firestore ordered by timestamp descending
 */
export async function fetchFirestoreBackups(): Promise<FirestoreBackupRecord[]> {
  try {
    const backupsRef = collection(db, BACKUPS_COLLECTION);
    const q = query(backupsRef, orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);

    const results: FirestoreBackupRecord[] = [];
    snapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data() as FirestoreBackupRecord;
      results.push({
        ...data,
        id: docSnapshot.id,
      });
    });

    return results;
  } catch (error) {
    console.error('Błąd pobierania kopii z Firestore:', error);
    return [];
  }
}

/**
 * Subscribes to real-time updates of Firestore backups
 */
export function subscribeToFirestoreBackups(
  onUpdate: (backups: FirestoreBackupRecord[]) => void,
  onError?: (error: Error) => void
) {
  try {
    const backupsRef = collection(db, BACKUPS_COLLECTION);
    const q = query(backupsRef, orderBy('timestamp', 'desc'));

    return onSnapshot(
      q,
      (snapshot) => {
        const results: FirestoreBackupRecord[] = [];
        snapshot.forEach((docSnapshot) => {
          const data = docSnapshot.data() as FirestoreBackupRecord;
          results.push({
            ...data,
            id: docSnapshot.id,
          });
        });
        onUpdate(results);
      },
      (err) => {
        console.error('Firestore onSnapshot error:', err);
        if (onError) onError(err);
      }
    );
  } catch (error: any) {
    console.error('Failed to setup Firestore subscription:', error);
    return () => {};
  }
}

/**
 * Deletes a backup from Firestore by ID
 */
export async function deleteFirestoreBackup(backupId: string): Promise<boolean> {
  try {
    const docRef = doc(db, BACKUPS_COLLECTION, backupId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Błąd usuwania kopii z Firestore:', error);
    return false;
  }
}

/**
 * Fetches single backup payload from Firestore
 */
export async function getFirestoreBackupById(backupId: string): Promise<FirestoreBackupRecord | null> {
  try {
    const docRef = doc(db, BACKUPS_COLLECTION, backupId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as FirestoreBackupRecord;
    }
    return null;
  } catch (error) {
    console.error('Błąd pobierania szczegółów kopii z Firestore:', error);
    return null;
  }
}

export const firebaseMetadata = {
  projectId: firebaseConfig.projectId,
  databaseId: firebaseConfig.firestoreDatabaseId || '(default)',
  authDomain: firebaseConfig.authDomain,
};
