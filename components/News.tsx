"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface NewsEvent {
  title: string;
  date: string;
  description: string;
  buttonText?: string;
}

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
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">News & Upcoming Events</h2>
          <motion.div
            className="w-24 h-1 bg-green-600 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* Tabs Section */}
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList>

          {/* Content */}
          {['news', 'events'].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible">
                {(tab === 'news' ? newsData : eventData).map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex">
                    <NewsCard {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* View All Button */}
        <motion.div className="text-center mt-10" initial="hidden" whileInView="visible" variants={itemVariants}>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/news">View All News & Events</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

const NewsCard: React.FC<NewsEvent> = ({ title, date, description, buttonText = "Read More" }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300 w-full h-full flex flex-col">
    <CardHeader>
      <CardTitle className="text-green-800">{title}</CardTitle>
      <CardDescription>{date}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-gray-700">{description}</p>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const newsData: NewsEvent[] = [
  {
    title: "Establishment of KADCO",
    date: "June 15, 2025",
    description: "Kudan Agricultural Development Company (KADCO) has been established to support local farmers with modern farming techniques and access to markets.",
  },
  {
    title: "New Bye Laws Established",
    date: "May 28, 2025",
    description: "The local government has established new bye laws to improve governance and community development in all 10 electoral wards.",
  },
];

const eventData: NewsEvent[] = [
  {
    title: "Women Empowerment Program",
    date: "July 10-12, 2025",
    description: "A three-day workshop focused on empowering women through agricultural skills, financial literacy, and entrepreneurship.",
    buttonText: "Register",
  },
  {
    title: "Annual Farmers' Exhibition",
    date: "August 5-7, 2025",
    description: "Join us for the annual exhibition showcasing agricultural innovations, local produce, and networking opportunities for farmers.",
    buttonText: "Learn More",
  },
];
