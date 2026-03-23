import type { NextConfig } from "next";
import { fileURLToPath } from "url";

const turbopackRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  experimental: {
    // Avoid `child_process` workers on Windows environments that block spawning.
    workerThreads: true,
    // Keep builds deterministic and lightweight.
    cpus: 1,
  },
  turbopack: {
    root: turbopackRoot,
  },
  typescript: {
    // Work around Windows environments that block Next.js from spawning the
    // TypeScript checker during `next build`. Run `npm run typecheck` in CI.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
