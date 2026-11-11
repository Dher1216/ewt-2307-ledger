2307 LEDGER

WINDOWS APP (laptop)
1. Install Node.js LTS from https://nodejs.org
2. Open this folder in Command Prompt (type cmd in the address bar).
3. npm install   then   npm start     (installer: npm run dist)

PHONE APP (Android + iPhone) - the "docs" folder
Upload this whole project to a PUBLIC GitHub repository, then:
Settings > Pages > Deploy from a branch > main > /docs > Save.
Open https://YOURUSERNAME.github.io/REPOSITORYNAME/ on the phone and add it to the Home Screen.
When you change docs/index.html later, also change the number in docs/sw.js (v1 -> v2) so phones update.

NEVER upload exported backup (.json) files to GitHub - they contain client data.
