# Report: Expense Tracker Project

**Name:** hade abu baker
**Role:** B (Back-end)

## 1. My Role and the Files I Wrote

I was responsible for the back-end. I wrote `config.example.php` (a template with fake database values), `includes/db.php` (PDO connection that provides `$pdo` to the pages), `public/index.php` (table of all expenses from newest to oldest, with the total below), and `public/add_expense.php` (the form to add an expense, with PHP validation that the description is not empty and the amount is greater than zero). I also created my own `config.php` locally and checked that Git does not track it.

## 2. The Conflict

All three of us added a link to our page in the navbar of `includes/header.php` and committed without pushing. When I pulled, Git reported a conflict in that file, because the same lines had been changed in different ways.

I opened the file, read the three versions, and decided to keep every link since they were all needed. I removed the conflict markers, kept the links in one clean navbar, committed the result, and pushed. Then I checked that the links to the three pages worked.

[Screenshot: the conflict before resolving]
[Screenshot: after resolving]

## 3. Undoing Changes

- **Before commit:** use `git restore <file>` to throw away changes that are not committed yet.
- **After commit, before push:** use `git reset` (`--soft HEAD~1` keeps the work, `--hard HEAD~1` deletes it). It is safe only because the commit has not been shared.
- **After push:** use `git revert <commit>`. It adds a new commit that undoes the bad one without rewriting shared history, so teammates are not affected.

In the real case, I intentionally pushed a bug into `public/index.php` that broke the home page, with a vague commit message and without telling the team. A and C pulled, found my commit in the log, and A reverted it. This showed me why clear commit messages matter and why a pushed mistake needs `revert`, not `reset`.

[Screenshot: repository history]

## 4. The Hardest Part of Teamwork

The hardest part was depending on teammates' files. C's `summary.php` needed my `db.php`, so I had to push it quickly and tell C. I solved it by building and pushing `db.php` first, before the pages, and by messaging the team after every push.
