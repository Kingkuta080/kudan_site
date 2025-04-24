"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { newsData } from "@/store/data";

interface NewsData {
  slug: string;
  title: string;
  date: string;
  description: string;
  images: string[];
}

export default function News() {
  const pathname = usePathname();

  return (
    <div className="py-16 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-green-800 mb-4"
          >
            News - Stay in Touch with Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-green-600 mx-auto"
          ></motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {newsData.slice(0, 3).map((news) => (
            <Card key={news.slug} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-green-800">{news.title}</CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={news.images[0]}
                    alt={news.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700 mb-4">{news.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-green-700 border-green-700 hover:bg-green-700 hover:text-white" asChild>
                    <Link href={`/news/${news.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/news">
              <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
                View More News
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
