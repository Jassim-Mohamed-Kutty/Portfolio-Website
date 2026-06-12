// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Pick a Nitro deploy preset based on the build environment so the same
// project can deploy to Vercel, Netlify, or fall back to a generic Node
// server. Vercel/Netlify CI set VERCEL / NETLIFY automatically; NITRO_PRESET
// always wins if set explicitly.
const nitroPreset =
  process.env.NITRO_PRESET ||
  (process.env.VERCEL ? "vercel" : undefined) ||
  (process.env.NETLIFY ? "netlify" : undefined) ||
  "node-server";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force-enable the Nitro deploy plugin (otherwise it's skipped outside the
  // Lovable sandbox and Vercel/Netlify only get a static client bundle, which
  // is what causes the platform-level 404 on every non-index path).
  nitro: { preset: nitroPreset },
});
