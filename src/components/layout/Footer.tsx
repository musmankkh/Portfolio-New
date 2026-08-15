import { profile } from "../../data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-rule/60 border-t">
      <div className="mx-auto max-w-(--content-max) px-6 py-8 sm:px-10">
        <p className="text-muted font-outlier text-xs">
          © {year} {profile.name || "—"}
        </p>
      </div>
    </footer>
  );
}
