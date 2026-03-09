---
title: Privileged sessions
description: Overview and installation of the MuTMS Privileged sessions plugin for Moodle LMS.
---

The Privileged sessions plugin allows administrators and privileged users to log in with a low-privilege
account and escalate to a privileged session only when needed — similar to `sudo` on Linux. Privileged
sessions can be protected with existing MFA factors for additional security.

This approach reduces the risk of accidental or unauthorised administrative actions during routine daily
work.

## Features

- Low-privilege daily accounts with on-demand privilege escalation
- Configurable roles and contexts per privileged user
- Optional MFA verification before starting a privileged session
- Useful for working around bugs that appear when a user holds both teacher and student roles in the same course

## Configuration

1. Navigate to **Site administration > Users > Permissions > Privileged users**.
2. Press **Add privileged user**.
3. Select the user to grant sudo access.
4. Define the roles and contexts where the user will have privileged access.
5. Optionally enforce MFA for additional security.

## Starting a privileged session

1. Log in with your regular low-privilege account.
2. Click the user menu in the top right.
3. Select **Start privileged session**.
4. Press **Continue** or supply your MFA verification code.
5. End the privileged session once your management tasks are complete.

:::note
This plugin uses the Switch role feature internally — course-level privileges appear as "Switched roles"
in the Moodle UI.
:::

## Installation

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

This plugin requires the [MuTMS library](https://moodle.org/plugins/tool_mulib). Install from the
[Moodle plugins database](https://moodle.org/plugins/tool_musudo) or via Git:

For Moodle 5.1.x, clone plugins into `public/admin/tool/...` instead of the paths shown below.
All MuTMS plugins use `MOODLE_500_STABLE` for Moodle 5.1.x.
```bash
git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
cd moodle
git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_musudo.git admin/tool/musudo
```

Then continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
