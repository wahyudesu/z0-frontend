import fs from "fs";
import { marked } from "marked";
import path from "path";

export default async function ChangelogPage() {
  const changelogDir = path.join(process.cwd(), "src/content/changelog");

  // Prefer a single merged file `index.md` (newest-first) if present.
  const indexPath = path.join(changelogDir, "index.md");
  if (fs.existsSync(indexPath)) {
    const raw = fs.readFileSync(indexPath, "utf-8");
    const html = marked.parse(raw);
    return (
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-semibold">Changelog</h1>
          <p className="mt-2 text-muted-foreground">
            Version history and release notes.
          </p>
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <article className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </div>
      </main>
    );
  }

  // Fallback: read all files in the directory and render them (old behavior)
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(changelogDir)
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  } catch (e) {
    // directory missing
  }

  // sort by filename descending (newest first)
  files = files.sort().reverse();

  const entries = files.map((file) => {
    const filePath = path.join(changelogDir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const html = marked.parse(raw);
    return { file, html };
  });

  return (
    <main className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold">Changelog</h1>
        <p className="mt-2 text-muted-foreground">
          Version history and release notes.
        </p>
      </div>

      <div className="mt-8 max-w-4xl mx-auto space-y-8">
        {entries.map((e) => (
          <article className="prose max-w-none" key={e.file}>
            <div dangerouslySetInnerHTML={{ __html: e.html }} />
          </article>
        ))}
      </div>
    </main>
  );
}
