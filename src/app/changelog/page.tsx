import Timeline from "@/components/timeline";

export default function ChangelogPage() {
  return (
    <main className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold">Changelog</h1>
        <p className="mt-2 text-muted-foreground">
          Version history and release notes.
        </p>
      </div>

      <Timeline />
    </main>
  );
}
