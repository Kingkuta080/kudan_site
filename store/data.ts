export interface NewsData {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    images: string[];
    buttonText?: string;
    location?: string;
    time?: string;
  }

  
export const newsData: NewsData[] = [
    {
      slug: "establishment-of-kadco",
      title: "Establishment of KADCO",
      date: "June 15, 2025",
      description: "Kudan Agricultural Development Company (KADCO) has been established to support local farmers with modern farming techniques and access to markets.",
      content: "Full details about KADCO establishment... (longer content here)",
      images: ["/news/KADCO LOGO.svg"]
    },
    {
      slug: "new-bye-laws-established",
      title: "New Bye Laws Established",
      date: "May 28, 2025",
      description: "The local government has established new bye laws to improve governance and community development in all 10 electoral wards.",
      content: "Full details about the new bye laws... (longer content here)",
      images: [
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    },
    {
      slug: "launch-of-washpro-system",
      title: "Launch of WASHPro System",
      date: "May 15, 2025",
      description: "Chairman Dauda Ilya Abba launches WASHPro, an innovative system to support water, sanitation, and hygiene initiatives.",
      content: "Full details about the launch of WASHPro... (longer content here)",
      images: ["/news/3.jpeg"]
    },  
  
  ];


  export const projects = [
    {
      title: "Borehole Constructions",
      description: "Borehole Construction to Mitigate Water Shortages for Local Farmers",
      image: "/projects/1.JPG",
    },
    {
      title: "Healthcare Center Renovations",
      description: "Rehabilitation of primary healthcare Centers for better service delivery",
      image: "/HealthCare.png",
    },
    {
      title: "WASH Program",
      description: "Improving community health by ensuring access to Water, Sanitation, and Proper Hygiene Practices",
      image: "/projects/3.JPG",
    },
  ];

  export const galleryData = [
    {
      id: "1",
      title: "Image 1",
      description: "Description 1",
      image: "/public/bg1.png",
    },
    {
      id: "2",
      title: "Image 2",
      description: "Description 2",
      image: "/public/bg2.png",
    },
    {
      id: "3",
      title: "Image 3",
      description: "Description 3",
      image: "/public/Agric/bg3.jpeg",
    },
    
    
  ];  