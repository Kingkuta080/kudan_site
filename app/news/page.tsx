"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { NewsData, newsData } from '@/store/data';
import { ArrowLeft } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function News() {
  const router = useRouter(); // Use useRouter hook

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://sdmntprwestus.oaiusercontent.com/files/00000000-baac-6230-aef0-751365b51b6e/raw?se=2025-04-29T10%3A59%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=964d6c54-f1f7-5065-a791-6ca9ff6cbd35&skoid=e4438ed3-2a6f-4fd3-bf63-222012dc627c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-29T03%3A16%3A30Z&ske=2025-04-30T03%3A16%3A30Z&sks=b&skv=2024-08-04&sig=HkFC3ylPtR4MBXFrTPEalGsxPpIEvkgSz5N%2B8oojdGo%3D"
            alt="News and Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl max-w-3xl">
            Stay updated with the latest news, announcements, and upcoming events from Kudan Local Government.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Latest News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news: NewsData, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
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

          {/* View More News Button */}
          <div className="flex justify-center mt-12">
              <button 
              className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition flex items-center gap-2"
              onClick={() => router.back()}
              >
                 <ArrowLeft /> Back
              </button>
          </div>
        </div>
      </section>
    </div>
  );
}