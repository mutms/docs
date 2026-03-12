---
title: Installing Interactive book
description: How to install the MuTMS Interactive book plugin for Moodle LMS.
---

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

## Using the Moodle plugins database

1. Install the [Interactive book plugin](https://moodle.org/plugins/mod_mubook)
2. The following required plugin will be installed automatically:
   - [MuTMS library](https://moodle.org/plugins/tool_mulib)

## Installation via Git

For Moodle 5.1.x, clone plugins into `public/admin/tool/...` and `public/mod/...`
instead of the paths shown below. All MuTMS plugins use `MOODLE_500_STABLE` for Moodle 5.1.x.

1. Clone the latest supported Moodle release:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
   cd moodle
```

2. Clone the required plugin repositories:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-mod_mubook.git mod/mubook
```

3. Continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
