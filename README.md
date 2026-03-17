# MuTMS documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Source repository for [docs.mutms.org](https://docs.mutms.org), built with [Astro Starlight](https://starlight.astro.build).

## Local development

Standard Astro Starlight requirements.

```bash
git clone https://github.com/mutms/docs.git
cd docs
npm install
npm run dev
```

## Local development with OrbStack (macOS)
```bash
git clone https://github.com/mutms/docs.git sitedocs
cd sitedocs
docker-compose up
```

Open [https://node.sitedocs.orb.local/](https://node.sitedocs.orb.local/) in your browser.

To run commands inside the container:
```bash
docker-compose exec node bash
```

## Licence

GPL-3.0-or-later
