---
title: Installing Programs
description: How to install the MuTMS Programs plugin for Moodle LMS.
---

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

## Using the Moodle plugins database

1. Install the [Programs plugin](https://moodle.org/plugins/tool_muprog)
2. The following required plugins will be installed automatically:
   - [MuTMS library](https://moodle.org/plugins/tool_mulib)
   - [Program enrolment](https://moodle.org/plugins/enrol_muprog)
   - [My programs block](https://moodle.org/plugins/block_muprog_my)
   - [My programs overview block](https://moodle.org/plugins/block_muprogmyoverview)
3. Optionally install the following recommended plugins:
   - [Workplace certificate manager](https://moodle.org/plugins/tool_certificate)
   - [Programs certificate element](https://moodle.org/plugins/certificateelement_muprog)
   - [Training credits custom field](https://moodle.org/plugins/customfield_mutrain)
   - [Training credits](https://moodle.org/plugins/tool_mutrain)

## Installation via Git

For Moodle 5.1.x, clone plugins into `public/admin/tool/...`, `public/enrol/...`, and
`public/blocks/...` instead of the paths shown below. All MuTMS plugins use `MOODLE_500_STABLE`
for Moodle 5.1.x.

1. Clone the latest supported Moodle release:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
   cd moodle
```

2. Clone the required plugin repositories:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-enrol_muprog.git enrol/muprog
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-block_muprog_my.git blocks/muprog_my
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-block_muprogmyoverview.git blocks/muprogmyoverview
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_muprog.git admin/tool/muprog
```

3. Clone the optional plugin repositories:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mutrain.git admin/tool/mutrain
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-customfield_mutrain.git customfield/field/mutrain
   git clone -b MOODLE_400_STABLE https://github.com/moodleworkplace/moodle-tool_certificate.git admin/tool/tool_certificate
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-certificateelement_muprog.git admin/tool/certificate/element/muprog
```

4. Continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
