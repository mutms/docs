---
title: Installing Training credits
description: How to install the MuTMS Training credits plugin for Moodle LMS.
---

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

## Installing from ZIP packages

MuTMS plugins are not listed in the Moodle Marketplace, so they cannot be found from
within your Moodle site. Download the release package for each plugin from its tags
page on GitHub and install it under *Site administration ▸ Plugins ▸ Install plugins*.

Dependencies are not resolved automatically — install the plugins in the order listed.

1. [MuTMS library](https://github.com/mutms/moodle-tool_mulib/tags)
2. [Training credits custom field](https://github.com/mutms/moodle-customfield_mutrain/tags)
3. [Training credits](https://github.com/mutms/moodle-tool_mutrain/tags)

## Installation via Git

For Moodle 5.1.x, clone plugins into `public/admin/tool/...` and `public/customfield/...`
instead of the paths shown below. All MuTMS plugins use `MOODLE_500_STABLE` for Moodle 5.1.x.

1. Clone the latest supported Moodle release:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
   cd moodle
```

2. Clone the required plugin repositories:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mutrain.git admin/tool/mutrain
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-customfield_mutrain.git customfield/field/mutrain
```

3. Continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
