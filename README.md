#  GitHub Star DateRange CLI

This CLI tool fetches the most starred GitHub repositories created within a given date range.

---

##  Installation

Install the package globally:

    npm install -g

After installation, use the command:

    findstarredgithubrepo

---

##  Rate Limits

The GitHub Search API allows 10 requests per minute for unauthenticated users.
If you exceed this limit, wait 1 minute before retrying.

---

##  Example Usage

If installed globally:

    findstarredgithubrepo

Or run directly:

    ./index.js

### Sample Run

    $ ./index.js

    √ What is start date (eg: YYYY-MM_DD 2024-12-20)? ... 2025-12-01
    √ What is end date (eg: YYYY-MM_DD 2024-12-25)? ... 2025-12-10
    √ Mention number of starred repository needed ... 4

    repository 1
    NAME: Open-AutoGLM
    URL: https://github.com/zai-org/Open-AutoGLM
    DESCRIPTION: An Open Phone Agent Model & Framework. Unlocking the AI Phone for Everyone

    repository 2
    NAME: react2shell-scanner
    URL: https://github.com/assetnote/react2shell-scanner
    DESCRIPTION: High Fidelity Detection Mechanism for RSC/Next.js RCE (CVE-2025-55182 & CVE-2025-66478)

    repository 3
    NAME: CVE-2025-55182
    URL: https://github.com/msanft/CVE-2025-55182
    DESCRIPTION: Explanation and full RCE PoC for CVE-2025-55182

    repository 4
    NAME: Paper2Slides
    URL: https://github.com/HKUDS/Paper2Slides
    DESCRIPTION: "Paper2Slides: From Paper to Presentation in One Click"

---

##  Features

- Interactive prompts for start date, end date, and repository count
- Fetches GitHub repositories created within the given date range
- Sorts results by stars (highest first)
- Displays repository name, URL, and description
