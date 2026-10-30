---
name: github-submit
description: Commit this project and push it to the GitHub repository at https://github.com/xiaoman-0603/liumeiyi.git using the configured SSH key. Use when the user asks to submit, commit and push, or sync this project to GitHub.
---

# GitHub Submit

Submit this workspace to GitHub with `git@github.com:xiaoman-0603/liumeiyi.git`. A configured SSH key is expected; never store tokens or private keys in the repository or in `lmy_prompt.md`.

## Steps

1. Append the current prompt to `lmy_prompt.md` first, with Asia/Shanghai time, the model name, and the prompt text. Redact credentials.
2. Run `git status --short` and `git remote -v`. Do not commit secrets, `.env`, private keys, or credentials.
3. Stage project files explicitly by name or path. Do not use `git add -A`.
4. Commit with a Chinese message that describes why the change was made.
5. Verify SSH connectivity before pushing:
   - `ssh -T -o BatchMode=yes git@github.com` normally returns "successfully authenticated".
   - If port 22 is refused, retry over 443: `ssh -T -o BatchMode=yes -p 443 git@ssh.github.com`.
6. Push with an explicit URL so an existing Gitee `origin` is not disturbed:
   `git push git@github.com:xiaoman-0603/liumeiyi.git master:master`
7. If the remote has commits the local branch lacks, merge them (never rebase or force push) and push again.
8. Report the commit hash, the pushed branch, and any untracked files left out.

## Rules

- Never force push to `master`.
- Never rebase published history.
- Keep user content in Chinese.
