import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '../src/content/editable');
const astroFilesDir = path.join(__dirname, '../src/pages');
const filesDir = path.join(__dirname, '../public/assets/files');
const outputFilePath = path.join(__dirname, '../public/search-index.json');

// Funkce na extrakci obsahu
const extractContent = (data: unknown): string => {
  if (typeof data === 'string') return data;
  if (Array.isArray(data)) return data.map(extractContent).join(' ');
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).map(extractContent).join(' ');
  }
  return '';
};

// Hlavní funkce
async function generateSearchIndex() {
  const searchIndex: Array<{ id: string; title: string; url: string; content: string }> = [];

  // Zpracování YAML souborů
  const yamlFiles = fs.readdirSync(contentDir);
  for (const file of yamlFiles) {
    if (path.extname(file) === '.yml') {
      const filePath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = yaml.load(fileContents) as Record<string, unknown>;

      const content = extractContent(data).replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();

      // Handle anchors for departments
      if (data.departments) {
        for (const department of data.departments as Array<Record<string, unknown>>) {
          if (department.anchor && department.department) {
            searchIndex.push({
              id: `${file}#${department.anchor}`,
              title: String(department.department),
              url: `${data.url}#${department.anchor}`,
              content: extractContent(department),
            });
          }
        }
      }

      // Handle anchors for specific sections (e.g., planned_repairs, heating_season, pricing)
      const sections = ['planned_repairs', 'heating_season', 'pricing'];
      for (const section of sections) {
        if (data[section]) {
          const sectionData = data[section] as Record<string, unknown>;
          if (sectionData.anchor) {
            searchIndex.push({
              id: `${file}#${sectionData.anchor}`,
              title: String(sectionData.title || section),
              url: `${data.url}#${sectionData.anchor}`,
              content: extractContent(sectionData),
            });
          }
        }
      }

      // Add general entry for the file if no anchors are specified
      searchIndex.push({
        id: file,
        title: String(data.hero_title || data.title || 'Untitled'),
        url: String(data.url || `/${file.replace('.yml', '')}`),
        content,
      });
    }
  }

  // Zpracování .astro souborů
  const astroFiles = fs.readdirSync(astroFilesDir).filter((file) => file.endsWith('.astro'));
  for (const file of astroFiles) {
    const filePath = path.join(astroFilesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const extractedData = {
      id: file,
      title: '',
      url: `/${file.replace('.astro', '')}`,
      content: '',
    };

    if (file === 'index.astro') {
      const featuresItems = content.match(/<Features2[^>]*items=\{([\s\S]*?)\}/)?.[1] || '';
      const listItems = content.match(/<List[^>]*items=\{([\s\S]*?)\}/)?.[1] || '';

      extractedData.content = [featuresItems, listItems]
        .map((item) =>
          item
            .replace(/<[^>]*>/g, '')
            .replace(/[[\]{}"']/g, '')
            .trim()
        )
        .join(' ');
    } else if (file === 'teplo.astro') {
      const heroTitle = content.match(/<Hero[^>]*title="([^"]+)"/)?.[1] || '';
      const heroSubtitle = content.match(/<Hero[^>]*subtitle="([^"]+)"/)?.[1] || '';
      const listItems = content.match(/<List[^>]*items=\{([\s\S]*?)\}/)?.[1] || '';

      extractedData.content = [heroTitle, heroSubtitle, listItems]
        .map((item) =>
          item
            .replace(/<[^>]*>/g, '')
            .replace(/[[\]{}"']/g, '')
            .trim()
        )
        .join(' ');
    } else if (file === 'udrzba.astro') {
      // Extrahování všech titles z <Content>, <Stats>, a <Features2>
      const contentTitles = [...content.matchAll(/<Content[^>]*items=\{([\s\S]*?)\}/g)].flatMap((block) => {
        const items = block[1];
        return [...items.matchAll(/title:\s*'([^']+)'/g)].map((match) => match[1]);
      });

      const statsTitles = [...content.matchAll(/<Stats[^>]*stats=\{([\s\S]*?)\}/g)].flatMap((block) => {
        const items = block[1];
        return [...items.matchAll(/title:\s*'([^']+)'/g)].map((match) => match[1]);
      });

      const featuresTitles = [...content.matchAll(/<Features2[^>]*items=\{([\s\S]*?)\}/g)].flatMap((block) => {
        const items = block[1];
        return [...items.matchAll(/title:\s*'([^']+)'/g)].map((match) => match[1]);
      });

      // Kombinace všech získaných titles
      extractedData.content = [...contentTitles, ...statsTitles, ...featuresTitles].join(', ');
    }

    if (extractedData.content.trim()) {
      searchIndex.push(extractedData);
    }
  }

  // Extrakce souborů v `public/assets/files`
  const directories = fs
    .readdirSync(filesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const dir of directories) {
    const directoryPath = path.join(filesDir, dir);
    const files = fs.readdirSync(directoryPath);

    for (const fileName of files) {
      const pageUrl = `/ke-stazeni/${dir}`;

      searchIndex.push({
        id: fileName,
        title: fileName,
        url: pageUrl,
        content: `File name: ${fileName}`,
      });
    }
  }

  // Zapsání výstupu
  fs.writeFileSync(outputFilePath, JSON.stringify(searchIndex, null, 2));
  console.log(`Hotovo, boss! Search index vygenerován na: ${outputFilePath}`);
}

// Spuštění
generateSearchIndex();
