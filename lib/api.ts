import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '../types/post';
import { compareAsc, format } from 'date-fns';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const { title, date } = data;

  const fmtDate = format(new Date(date), 'MMMM dd, yyyy');
  return {
    slug: realSlug,
    title,
    date: fmtDate,
    content,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
    .reverse();
  return posts;
}
