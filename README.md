# JMB Starter Package

Files included:
- `styles.css`  — Minimal external CSS file (intentionally minimal to avoid changing the original HTML).
- `main.js`     — Minimal JavaScript placeholder (no-op) to avoid modifying existing behavior.
- `.gitignore`  — Reasonable defaults for common projects.
- `online_viewer_net (41).htm` — The original uploaded HTML file (not modified).
- `jmb_starter_package.zip` — ZIP archive containing the above files.

Important note from user: **Do not change anything.**
- The external CSS and JS are intentionally minimal and will not alter the original HTML page's appearance or behavior.
- If you later want to extend styling or scripts, edit `styles.css` and `main.js` respectively.

How to use:
1. Unzip `jmb_starter_package.zip`.
2. Serve the `online_viewer_net (41).htm` file (open in a browser). If you want to link the external CSS/JS, add:
   <link rel="stylesheet" href="styles.css">
   <script src="main.js"></script>
   near the existing head/body tags — but per your note, don't change the HTML unless you want to.
