import { promises as fs } from "fs";
import path from "path";

// On Vercel the filesystem is read-only except for /tmp
const IS_VERCEL = !!process.env.VERCEL;
const RUNTIME_DIR = IS_VERCEL
  ? "/tmp/mea-clim-storage"
  : path.join(process.cwd(), "storage");
// Seed dir is always the bundled storage/ folder (read-only on Vercel, but readable)
const SEED_DIR = path.join(process.cwd(), "storage");

const ANALYTICS_FILE = path.join(RUNTIME_DIR, "analytics.json");
const SUBMISSIONS_FILE = path.join(RUNTIME_DIR, "submissions.json");

const MAX_EVENTS = 10000;

async function ensureFile(filePath: string, seedFileName: string) {
  try {
    await fs.access(filePath);
  } catch {
    // Create runtime dir
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Try to seed from bundled file (works on Vercel since SEED_DIR is readable)
    const seedPath = path.join(SEED_DIR, seedFileName);
    try {
      const seed = await fs.readFile(seedPath, "utf-8");
      await fs.writeFile(filePath, seed, "utf-8");
    } catch {
      // No seed file — start empty
      await fs.writeFile(filePath, "[]", "utf-8");
    }
  }
}

// --- Analytics ---

export interface AnalyticsEvent {
  type: string;
  page: string;
  referrer?: string;
  element?: string;
  timestamp: string;
  userAgent?: string;
}

export async function getAnalyticsEvents(): Promise<AnalyticsEvent[]> {
  await ensureFile(ANALYTICS_FILE, "analytics.json");
  const raw = await fs.readFile(ANALYTICS_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveAnalyticsEvent(event: AnalyticsEvent): Promise<void> {
  const events = await getAnalyticsEvents();
  events.push(event);
  // Keep only the last MAX_EVENTS
  const trimmed = events.slice(-MAX_EVENTS);
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(trimmed, null, 2), "utf-8");
}

// --- Submissions ---

export interface Submission {
  id: string;
  nom: string;
  telephone: string;
  email: string;
  service: string;
  message: string;
  date: string;
  status: "new" | "read" | "replied_email" | "replied_phone" | "done";
}

export async function getSubmissions(): Promise<Submission[]> {
  await ensureFile(SUBMISSIONS_FILE, "submissions.json");
  const raw = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveSubmission(submission: Submission): Promise<void> {
  const submissions = await getSubmissions();
  submissions.unshift(submission);
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
}

export async function updateSubmission(id: string, updates: Partial<Submission>): Promise<Submission | null> {
  const submissions = await getSubmissions();
  const index = submissions.findIndex((s) => s.id === id);
  if (index === -1) return null;
  submissions[index] = { ...submissions[index], ...updates };
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
  return submissions[index];
}

export async function deleteSubmission(id: string): Promise<boolean> {
  const submissions = await getSubmissions();
  const filtered = submissions.filter((s) => s.id !== id);
  if (filtered.length === submissions.length) return false;
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}
