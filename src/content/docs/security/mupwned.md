---
title: Compromised password blocking
description: Overview and installation of the MuTMS Compromised password blocking plugin for Moodle LMS.
---

The Compromised password blocking plugin checks passwords against the
[Have I Been Pwned](https://haveibeenpwned.com) database of known breaches when passwords are created,
updated, or optionally on every login. Users with a compromised password are blocked until they reset it.

The plugin uses the k-Anonymity API — the full password is never sent outside Moodle.

## Features

- Checks passwords on creation and update
- Optional check on every login
- k-Anonymity API — no full password ever leaves Moodle
- Blocks access until a compromised password is replaced

## Configuration

1. Install the plugin.
2. Log in as admin — ensure you can reset your administrator password via email if needed.
3. Enable the **Password policy** setting and review password requirements.
4. Navigate to **Site administration > Plugins > Authentication > Compromised password blocking**.
5. Enable **Detect compromised passwords**.
6. Optionally enable **Check password on login**.

:::caution
If anything goes wrong, passwords can be reset from the CLI via `/admin/cli/reset_password.php`.
:::

## Installation

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

This plugin has no dependencies. Install it from the
[Moodle plugins database](https://moodle.org/plugins/tool_mupwned) or via Git:
```bash
git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
cd moodle
git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mupwned.git admin/tool/mupwned
```

Then continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
