import { META } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-sketch text-base text-ink">SG /</span>
          <span className="label text-ink-faint">{META.name}</span>
        </div>
        <span className="font-sketch text-sm text-ink-faint">
          built intentionally — no templates
        </span>
        <span className="label text-ink-faint">{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
