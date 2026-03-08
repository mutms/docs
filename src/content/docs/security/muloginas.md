---
title: Log-in-as via Incognito window
description: Overview and installation of the MuTMS Log-in-as via Incognito window plugin for Moodle LMS.
---

The Log-in-as via Incognito window plugin enhances the standard Moodle "Log in as" feature. Instead of
switching users within the same browser session, it opens the impersonated session in a new Incognito
window — keeping the admin session active in the main window and avoiding the need to log back in
afterwards.

## Features

- "Log in as" opens in a new Incognito window — no repeated logins for administrators
- Admin session remains active in the main window in parallel
- Incognito mode isolates the "Log in as" session from normal LMS use

## Known limitations

- In Safari, "Open in New Private Window" is only available when already in a private window
- In Chrome and Edge, Incognito windows share a single session — only one "Log in as" session can be active at a time
- Course-level "Log in as" is not supported
- The generated link expires after fifteen seconds, which may be an accessibility concern
- Mobile and tablet browsers may not be fully supported

## Installation

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

This plugin has no dependencies. Install it from the
[Moodle plugins database](https://moodle.org/plugins/tool_muloginas) or via Git:
```bash
git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
cd moodle
git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_muloginas.git admin/tool/muloginas
```

Then continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
