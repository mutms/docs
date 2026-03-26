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

The branch names and plugin paths depend on Moodle version:

| Moodle version | Moodle branch       | patch branch | `tool_mutenancy` | `tool_mulib` |
| --- |---------------------| --- | --- | --- |
| 4.5.x | `MOODLE_405_STABLE` | `patch/mutenancy/MOODLE_405_STABLE` | `MOODLE_405_STABLE` → `admin/tool/mutenancy` | `MOODLE_405_STABLE` → `admin/tool/mulib` |
| 5.0.x | `MOODLE_500_STABLE` | `patch/mutenancy/MOODLE_500_STABLE` | `MOODLE_500_STABLE` → `admin/tool/mutenancy` | `MOODLE_500_STABLE` → `admin/tool/mulib` |
| 5.1.x | `MOODLE_501_STABLE` | `patch/mutenancy/MOODLE_501_STABLE` | `MOODLE_501_STABLE` → `public/admin/tool/mutenancy` | `MOODLE_500_STABLE` → `public/admin/tool/mulib` |

Note that there might be git merge conflicts if you merge multi-tenancy patch into unreleased upstream MOODLE_XXX_STABLE branches.
If that happens you may try patch/mutenancy/MOODLE_XXX_STABLE_NEXT branch instead.

### Moodle 4.5.x

```bash
   git clone -b v4.5.10 https://github.com/moodle/moodle.git
   cd moodle
   git remote add patches https://github.com/mutms/patches.git
   git fetch patches
   git merge mutenancy-4.5.10-02
   git clone -b v4.5.10.03 https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
   git clone -b v4.5.10.03 https://github.com/mutms/moodle-tool_mutenancy.git admin/tool/mutenancy
```

After cloning git repositories continue with the
<a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle 4.5 installation</a>.

### Moodle 5.0.x

```bash
   git clone -b v5.0.6 https://github.com/moodle/moodle.git
   cd moodle
   git remote add patches https://github.com/mutms/patches.git
   git fetch patches
   git merge mutenancy-5.0.6-02
   git clone -b v5.0.6.03 https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
   git clone -b v5.0.6.03 https://github.com/mutms/moodle-tool_mutenancy.git admin/tool/mutenancy
```

After cloning git repositories continue with the
<a href="https://docs.moodle.org/500/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle 5.0 installation</a>.

### Moodle 5.1.x

```bash
   git clone -b v5.1.3 https://github.com/moodle/moodle.git
   cd moodle
   git remote add patches https://github.com/mutms/patches.git
   git fetch patches
   git merge mutenancy-5.1.3-02
   git clone -b v5.0.6.03 https://github.com/mutms/moodle-tool_mulib.git public/admin/tool/mulib
   git clone -b v5.1.3.03 https://github.com/mutms/moodle-tool_mutenancy.git public/admin/tool/mutenancy
```

After cloning git repositories continue with the
<a href="https://docs.moodle.org/501/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle 5.1 installation</a>.
