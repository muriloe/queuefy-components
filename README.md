# QueueFy Component Library

[Open the hosted Storybook catalogue](https://muriloe.github.io/queuefy-components/).

This repository contains the generated static preview of QueueFy's reusable React components. The catalogue includes 74 stories, interactive controls, light/dark themes, and illustrative component states.

Component source lives in the QueueFy application's `project/v2/packages/ui/` workspace. Build it there with `pnpm build:storybook`, then validate with `pnpm test:components`. Replace the generated files here while preserving `.git/`, this README, and `.nojekyll`, and commit the update to `main`. GitHub Pages publishes that commit.

After deployment, the source workspace can run its browser checks against the live site:

```bash
STORYBOOK_URL=https://muriloe.github.io/queuefy-components/ pnpm test:components
```

This catalogue uses sample content and visual component callbacks. It has no application account, sync engine, database, or backend connection.
