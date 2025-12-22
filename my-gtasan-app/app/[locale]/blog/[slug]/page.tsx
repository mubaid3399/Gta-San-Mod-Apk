import { Metadata } from 'next';
import { blogPosts } from '../../../data/blogPosts';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

// This is a server component that generates metadata
export async function generateMetadata({ params }: { params: { slug: string; locale: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gtasanandreas.info';
  const canonicalUrl = `${baseUrl}/${params.locale}/blog/${slug}`;

  return {
    title: `${post.title} | GTA San Andreas`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: [
      'GTA San Andreas',
      'GTA Online',
      'Grand Theft Auto',
      'GTA cheats',
      'GTA guides',
      'GTA gameplay',
      'GTA tips',
      'GTA missions',
      'GTA money making',
      'GTA weapons',
      'GTA vehicles',
      post.category,
      ...post.title.split(' ').filter(word => word.length > 3),
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.publishedDate,
      authors: [post.author],
      tags: [post.category, 'GTA', 'Grand Theft Auto', 'Gaming'],
      images: [
        {
          url: `${baseUrl}${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/webp',
        },
      ],
      url: canonicalUrl,
      siteName: 'GTA San Andreas',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}${post.coverImage}`],
      creator: '@gtasanandreas',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en/blog/${slug}`,
        'de': `${baseUrl}/de/blog/${slug}`,
        'fr': `${baseUrl}/fr/blog/${slug}`,
        'it': `${baseUrl}/it/blog/${slug}`,
        'es': `${baseUrl}/es/blog/${slug}`,
        'pt': `${baseUrl}/pt/blog/${slug}`,
        'ru': `${baseUrl}/ru/blog/${slug}`,
        'ja': `${baseUrl}/ja/blog/${slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: post.category,
    other: {
      'article:published_time': post.publishedDate,
      'article:author': post.author,
      'article:section': post.category,
    },
  };
}

// Generate static params for all blog posts (for static generation)
export async function generateStaticParams() {
  const locales = ['en', 'de', 'fr', 'it', 'es', 'pt', 'ru', 'ja'];

  return blogPosts.flatMap(post =>
    locales.map(locale => ({
      slug: post.slug,
      locale: locale,
    }))
  );
}

// Server component wrapper
export default function BlogPostPage({ params }: { params: { slug: string; locale: string } }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Pass to client component
  return <BlogPostClient params={params} />;
}
