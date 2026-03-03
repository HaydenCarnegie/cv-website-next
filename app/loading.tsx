export default function Loading() {
  return (
    <div className="max-w-[860px] mx-auto px-12 py-16 animate-pulse">
      <div className="mb-16 pb-8 border-b border-border">
        <div className="h-9 w-56 bg-muted rounded-sm mb-3" />
        <div className="h-4 w-36 bg-muted rounded-sm" />
      </div>
      <div className="space-y-3">
        <div className="h-3 w-24 bg-muted rounded-sm mb-6" />
        <div className="h-4 w-full bg-muted rounded-sm" />
        <div className="h-4 w-5/6 bg-muted rounded-sm" />
        <div className="h-4 w-4/6 bg-muted rounded-sm" />
      </div>
    </div>
  );
}
