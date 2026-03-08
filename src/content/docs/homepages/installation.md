---
title: Installing Custom home pages
description: How to install the MuTMS Custom home pages plugin for Moodle LMS.
---

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

## Using the Moodle plugins database

1. Install the [Custom home pages](https://moodle.org/plugins/tool_muhome)
2. The following required dependencies will be installed automatically:
    - [MuTMS library](https://moodle.org/plugins/tool_mulib)

## Installation via Git

1. Clone the latest supported Moodle release:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
   cd moodle
```

2. Clone the required plugin repositories:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_muhome.git admin/tool/muhome
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
```

3. Continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
