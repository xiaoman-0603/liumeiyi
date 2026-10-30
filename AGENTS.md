# AGENTS.md

## Repo shape
- This is a collection of separate static sites for web-design coursework, not one app. There is no root `package.json`, build, or test suite.
- `211-刘美怡/` is the only Node project: React 19 + Vite 8 + Oxlint. Its package is named `yuanshen`, not after the folder. `dist/` is untracked build output; never hand-edit it.
- Root pages: `iconfont-1.html`, `inconfont-2.html` (misspelling is the real filename), `iconfont-3.html`, `iconfont-4.html`.
- `211-刘美怡/WechatRead/` is a static mobile site with its own `index.html`, `style.css`, and `iconfont/`. `211-刘美怡/font/` holds iconfont demos and JS lesson pages.
- `cdn/` is vendored Font Awesome/Lucide; `xiaoli/` is unrelated template material. Leave both alone unless the task is about them.

## Commands (sub-app only)
Run from `211-刘美怡`:
- `npm install` once (`node_modules/` is gitignored and currently absent)
- `npm run dev` / `npm run build` / `npm run preview`
- `npm run lint` -> `oxlint` (JS only; no typecheck or tests)
For root HTML, open it in a browser; there is no automated check. Verify links and local asset paths manually.

## Non-obvious project rules
- Before acting on a prompt in this repo, append the prompt, Asia/Shanghai time, and model to `lmy_prompt.md`. Append only; never rewrite history or store tokens/secrets.
- Prefix every custom CSS class, custom ID, CSS custom property, and JS variable with `lmy_` (e.g. `.lmy_page`, `--lmy_ink`). Do not rename library-generated names or SVG symbol IDs.
- Every new HTML page needs a visible home link to its section's `index.html` (there is no repo-root `index.html`).
- Keep icons local: `cdn/fontawesome/css/all.min.css` for font icons, `cdn/lucide/lucide.min.js` for SVG, `211-刘美怡/font/iconfont.css` for the project iconfont. Do not add remote CDN URLs.
- Mobile bottom nav: four equal-width items, `position: fixed`, `left: 50%`, `transform: translateX(-50%)`, `width: min(100%, 430px)`, safe-area padding, one numeric badge and one red dot.
- Authoritative details live in `.trae/skills/lmy-iconfont-pages/SKILL.md`; read it before editing iconfont pages.

## Git
- Remote `origin` -> `https://gitee.com/jiang-jili/lmy.git`; work on `master`, matching existing history.
- Commit messages are concise Chinese one-liners. Never force-push.
- `.vscode/` and `.trae-html-share-packages/` are untracked; don't add them unless asked. `.vscode/.vscode/launch.json` is stale (it points at `D:\网页制作`, not this repo).

## Windows quirks
- Shell is PowerShell 5.1: no `&&`; chain with `;` or `if ($?)`.
- The repo path contains Chinese (`D:\网页设计`). Quote all paths and use `-LiteralPath`. If a tool cannot resolve the Chinese absolute path, route through an ASCII junction or copy files via an ASCII temp path instead of renaming repo folders.
