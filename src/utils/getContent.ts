import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import type { ContentData, KontaktyData, CenikData } from '~/types';

type AvailableDataTypes = ContentData | KontaktyData | CenikData;

export async function getContent<T extends AvailableDataTypes>(fileName: string): Promise<T | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/content/editable', `${fileName}.yml`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as T;
    return data;
  } catch (error) {
    console.error(`Error loading content from ${fileName}:`, error);
    return null;
  }
}
