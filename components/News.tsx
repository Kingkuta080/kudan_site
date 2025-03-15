"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface NewsEvent {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  location?: string;
  time?: string;
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
  const pathname = usePathname(); // Get the current path

  return (
    <section className="py-16 bg-white">
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
            <TabsTrigger
              value="news"
              className={`${
                pathname === "/news"
                  ? "bg-green-700 text-white" // Active tab style
                  : "bg-green-50 text-green-800 hover:bg-green-100" // Default tab style
              }`}
            >
              Latest News
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className={`${
                pathname === "/news/events"
                  ? "bg-green-700 text-white" // Active tab style
                  : "bg-green-50 text-green-800 hover:bg-green-100" // Default tab style
              }`}
            >
              Upcoming Events
            </TabsTrigger>
          </TabsList>

          {/* News Content */}
          <TabsContent value="news">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {newsData.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <NewsCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Events Content */}
          <TabsContent value="events">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {eventData.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <NewsCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
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

const NewsCard: React.FC<NewsEvent> = ({ title, date, description, imageUrl, buttonText = "Read More", location, time }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
    <CardHeader>
      <CardTitle className="text-green-800">{title}</CardTitle>
      <CardDescription>{date}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <p className="text-gray-700 mb-4">{description}</p>
      {location && time && (
        <div className="space-y-2">
          <p className="text-gray-700"><strong>Location:</strong> {location}</p>
          <p className="text-gray-700"><strong>Time:</strong> {time}</p>
        </div>
      )}
    </CardContent>
    <CardFooter className="p-6">
      <Button
        variant="outline"
        className="w-full text-green-700 border-green-700 hover:bg-green-700 hover:text-white transition-colors duration-300"
      >
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
    imageUrl: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New Bye Laws Established",
    date: "May 28, 2025",
    description: "The local government has established new bye laws to improve governance and community development in all 10 electoral wards.",
    imageUrl: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Launch of WASHPro System",
    date: "May 15, 2025",
    description: "Chairman Dauda Ilya Abba launches WASHPro, an innovative system to support water, sanitation, and hygiene initiatives.",
    imageUrl: "https://images.unsplash.com/photo-1584824388878-91b5ad632e31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const eventData: NewsEvent[] = [
  {
    title: "Women Empowerment Program",
    date: "July 10-12, 2025",
    description: "A three-day workshop focused on empowering women through agricultural skills, financial literacy, and entrepreneurship.",
    imageUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    buttonText: "Register Now",
    location: "Kudan Community Center",
    time: "9:00 AM - 4:00 PM",
  },
  {
    title: "Annual Farmers' Exhibition",
    date: "August 5-7, 2025",
    description: "Join us for the annual exhibition showcasing agricultural innovations, local produce, and networking opportunities for farmers.",
    imageUrl: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More",
    location: "Kudan Agricultural Complex",
    time: "8:00 AM - 6:00 PM",
  },
];