# Report: Expense Tracker Project

**Name:** hade abu baker
**Role:** A (Front-end)

## 1. My Role and the Files I Wrote

I was responsible for the front-end. I created the repository, added `.gitignore` so `config.php` is never uploaded, and added my teammates as collaborators. I wrote `includes/header.php` (Bootstrap link and navbar), `includes/footer.php` (closing tags and Bootstrap script), `public/assets/css/style.css` (small custom styles on top of Bootstrap), and the `README.md` with the project name, team names and run instructions.

## 2. The Conflict

All three of us edited the navbar in `includes/header.php` at the same time, each adding a link to our own page, without pulling in between. The first push went through. When I pulled after committing, Git stopped with a merge conflict, and the file showed the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) around the three different link lines.

I decided to keep all three links, because each one was needed and none replaced another. I removed the markers, put the links in one navbar in the order Home, Add Expense, Summary, then committed the merge and pushed. After that, my teammates pulled and checked that all three links worked.

[Screenshot: the conflict before resolving]
[Screenshot: after resolving]

## 3. Undoing Changes

- **Before commit:** the change is only in the working directory, so I use `git restore <file>` to discard it. This is for a mistake I have not saved in history.
- **After commit, before push:** the commit exists only on my machine, so I use `git reset` (for example `git reset --soft HEAD~1` to keep the changes, or `--hard` to drop them). This rewrites local history, which is safe because nobody else has it.
- **After push:** other people may already have the commit, so I must not rewrite history. I use `git revert <commit>`, which creates a new commit that cancels the old one and keeps the history honest.

In the real case, B pushed a commit that broke the home page. I pulled, found the bad commit in the log, and used `git revert` on it, then pushed. B and C pulled and confirmed the home page worked again.

[Screenshot: repository history before and after the revert]

## 4. The Hardest Part of Teamwork

The hardest part was keeping in sync. Early on, we sometimes worked on the same file without telling each other, and that caused the conflict. I solved it by pulling before starting any work, making small commits with clear messages, and telling the team in the group chat every time I pushed.
