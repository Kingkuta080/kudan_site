import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag } from 'lucide-react';
import { newsData } from '@/store/data';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.slug,
  }));
}

export default function NewsDetail({ params }: PageProps) {
  const news = newsData.find((item) => item.slug === params.id);

  if (!news) {
    notFound();
  }

  return (
    <article className="py bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-10 mb-8">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            {news.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{news.date}</span>
            </div>
          </div>
        </header>

        <div className="relative w-full h-[400px] mb-12">
          <Image
            src={news.images[0]}
            alt={news.title}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        <div className="py-3 prose prose-lg max-w-none">
          <p className="text-gray-600">{news.description}</p>
          {/* Add more detailed content here if available in your data */}
        </div>
      </div>
    </article>
  );
}
