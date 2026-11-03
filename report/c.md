# Report: Expense Tracker Project

**Name:** hade abu baker
**Role:** C (Database and JavaScript)

## 1. My Role and the Files I Wrote

I was responsible for the database and JavaScript. I wrote `database/schema.sql`, which builds the `expense_tracker` database with a `categories` table (id, name) and an `expenses` table (id, description, amount, category_id, expense_date), plus the starting categories: Food, Transport, Bills, Entertainment and Other. I wrote `public/summary.php`, which shows the total per category (using GROUP BY) and its percentage of the grand total as Bootstrap progress bars. I also wrote `public/assets/js/main.js`, which validates the form before sending: an empty, zero or negative amount blocks the submit and shows a message next to the field.

## 2. The Conflict

We all edited the navbar in `includes/header.php`, each adding the link to our own page, and committed without pushing. When I pulled, Git showed a conflict with markers around the different versions of the navbar lines.

I chose to keep all three links, since removing any of them would break the navigation. I deleted the markers, arranged the links in one navbar, committed, and pushed. Then I tested that the Summary link and the other two pages opened correctly.

[Screenshot: the conflict before resolving]
[Screenshot: after resolving]

## 3. Undoing Changes

- **Before commit:** `git restore <file>` discards edits that were not committed.
- **After commit, before push:** `git reset` moves the branch back (`--soft` keeps the changes, `--hard` removes them). It is fine because the commit is still only on my machine.
- **After push:** `git revert <commit>` makes a new commit that cancels the old one. It is the right choice because others already have the commit.

In the real case, B pushed a commit that broke the home page. I pulled, looked through the log, and found the commit that caused it by checking which one changed `public/index.php` with an unclear message. A reverted it, and I pulled again and confirmed the home page worked.

## 4. The Hardest Part of Teamwork

The hardest part was waiting for other people's work: my `summary.php` could not run until B pushed `db.php`. I solved it by finishing `schema.sql` and `main.js` first, which did not depend on anyone, and starting `summary.php` as soon as B told us `db.php` was pushed.
