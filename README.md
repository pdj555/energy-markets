# Energy Market Intelligence

A Spring Boot API serving five deterministic ISO markets, with a Next.js 16 dashboard on top. Built so agents and humans read the same data.

```mermaid
flowchart LR
  G[Generator] --> API[Spring Boot API]
  API --> UI[Next.js Dashboard]
  CI[Claude Workflows] --> API
  CI --> UI
```

## Quickstart

Requires **Node 26**, **pnpm 11**, Java 22+, Maven 3.9+.

```bash
# Terminal 1 — API
cd backend && mvn spring-boot:run

# Terminal 2 — Dashboard
cd frontend && corepack enable && pnpm install && pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## What it does

- Five deterministic ISO markets. CAISO, ERCOT, MISO, NEISO, PJM. Same seed, same output. Reproducible telemetry for testing and evals.
- Reactive API. Spring WebFlux backend with streaming endpoints. LMP, load, and generation mix per ISO.
- Live dashboard. Next.js 16 with TanStack Query and Chart.js. Price curves, heatmaps, and market comparison views.
- Claude Code workflows, skills, and CI evals run against the same API the dashboard uses.

## Stack

| Layer | Technology |
| :-- | :-- |
| API | Java 22, Spring WebFlux, deterministic generator |
| Dashboard | Next.js 16, React 19, TanStack Query, Chart.js |
| Toolchain | Node 26, pnpm 11 |
| Agent platform | Claude Code workflows, skills, CI evals |
| Markets | CAISO, ERCOT, MISO, NEISO, PJM |

## Verify

```bash
cd backend && mvn test
cd frontend && pnpm run type-check && pnpm run test:ci && pnpm run build
```

MIT · [LICENSE](LICENSE)
