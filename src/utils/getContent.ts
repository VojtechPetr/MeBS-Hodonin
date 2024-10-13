import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import type { ContentData } from '~/types'; 

export async function getContent(fileName: string): Promise<ContentData | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/content', `${fileName}.yml`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as ContentData;
    return data;
  } catch (error) {
    console.error(`Error loading content from ${fileName}:`, error);
    return null;
  }
}
