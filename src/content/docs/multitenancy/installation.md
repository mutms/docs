---
title: Installing Multi-tenancy
description: How to install the MuTMS Multi-tenancy plugin for Moodle LMS.
---

The Multi-tenancy plugin cannot be installed directly from the Moodle plugins
database because it requires a core Moodle patch. Installation must be done
via Git.

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle, the core patch, and all MuTMS plugins pre-configured.
:::

## Installation via Git

1. Clone the latest supported Moodle release:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
   cd moodle
```

2. Apply the Multi-tenancy core patch:
```bash
   git remote add patches https://github.com/mutms/patches.git
   git fetch patches
   git merge patches/patch/mutenancy/MOODLE_405_STABLE
```

3. Clone the MuTMS library plugin:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
```

4. Clone the Multi-tenancy plugin:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mutenancy.git admin/tool/mutenancy
```

5. Continue with the
   <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.