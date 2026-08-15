export function EmptyState({ children }: { children: string }) {
  return (
    <p className="border-rule text-muted font-outlier max-w-(--measure) rounded-(--radius-md) border border-dashed px-4 py-3 text-xs">
      {children}
    </p>
  );
}
