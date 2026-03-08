---
title: Security improvements
description: Overview of the MuTMS security plugins for Moodle LMS.
---

MuTMS includes three standalone plugins that improve the security of a standard Moodle installation.
Each plugin is fully open source under GPL 3.0 with no restrictions on commercial use.

## Compromised password blocking

The Compromised password blocking plugin checks passwords against the
[Have I Been Pwned](https://haveibeenpwned.com) database of known breaches when passwords are created,
updated, or optionally on every login. Users with a compromised password are blocked until they reset it.

The plugin uses the k-Anonymity API — the full password is never sent outside Moodle.

## Privileged sessions

The Privileged sessions plugin allows administrators and privileged users to log in with a
low-privilege account and escalate to a privileged session only when needed — similar to `sudo` on
Linux. Privileged sessions can be protected with existing MFA factors for additional security.

This approach reduces the risk of accidental or unauthorised administrative actions during routine
daily work.

## Log-in-as via Incognito window

The Log-in-as via Incognito window plugin enhances the standard Moodle "Log in as" feature. Instead
of switching users within the same browser session, it opens the impersonated session in a new
Incognito window — keeping the admin session active in the main window and avoiding the need to log
back in afterwards.
