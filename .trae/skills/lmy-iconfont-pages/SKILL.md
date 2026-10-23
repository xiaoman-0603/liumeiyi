---
name: lmy-iconfont-pages
description: Build and review lmy iconfont HTML pages. Use when creating or editing iconfont-*.html pages, enforcing lmy_ naming, prompt logging, local iconfont assets, badges, and fixed mobile bottom navigation.
---

# LMY Iconfont Pages

Apply these project rules when creating or editing iconfont HTML pages in this repository.

- Before executing a user prompt, append it to `lmy_prompt.md` with Asia/Shanghai time, model, and prompt content. Redact private tokens or credentials instead of storing them.
- Use `lmy_` as the prefix for every custom CSS class, custom ID, and JavaScript variable you author. Library-required class names or generated SVG symbol IDs may remain external, but do not add new unprefixed project names.
- Every new HTML page must include a visible hyperlink back to `index.html`.
- Keep icon assets local. Font Awesome pages use `cdn/fontawesome/css/all.min.css`; Lucide pages use `cdn/lucide/lucide.min.js`; project iconfont font pages use `211-刘美怡/font/iconfont.css`.
- For font-icon rendering, prefer the loaded iconfont family with PUA entities such as `&#xe77e;` inside an `lmy_` prefixed span. For SVG rendering, use inline SVG or local SVG scripts and set `fill="currentColor"` when color must follow state.
- Mobile bottom navigation pages use four equal-width items, `position: fixed`, `left: 50%`, `transform: translateX(-50%)`, `width: min(100%, 430px)`, safe-area padding, one numeric badge, and one red dot badge.
- Reuse the established page structure: top bar with home link and version switch, hero, content section, and bottom navigation. Keep responsive behavior down to small mobile widths.
