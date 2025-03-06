import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Establishment of KADCO</CardTitle>
                <CardDescription>June 15, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="KADCO Establishment"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Kudan Agricultural Development Company (KADCO) has been established to support local farmers with modern farming techniques and access to markets.
                </p>
                <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">New Bye Laws Established</CardTitle>
                <CardDescription>May 28, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="New Bye Laws"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  The local government has established new bye laws to improve governance and community development in all 10 electoral wards.
                </p>
                <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Launch of WASHPro System</CardTitle>
                <CardDescription>May 15, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1584824388878-91b5ad632e31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="WASHPro Launch"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Chairman Dauda Ilya Abba launches WASHPro, an innovative system to support water, sanitation, and hygiene initiatives.
                </p>
                <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Women Empowerment Program</CardTitle>
                <CardDescription>July 10-12, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Women Empowerment Program"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  A three-day workshop focused on empowering women through agricultural skills, financial literacy, and entrepreneurship.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Location:</strong> Kudan Community Center</p>
                  <p className="text-gray-700"><strong>Time:</strong> 9:00 AM - 4:00 PM</p>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Annual Farmers' Exhibition</CardTitle>
                <CardDescription>August 5-7, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Farmers' Exhibition"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  Join us for the annual exhibition showcasing agricultural innovations, local produce, and networking opportunities for farmers.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Location:</strong> Kudan Agricultural Complex</p>
                  <p className="text-gray-700"><strong>Time:</strong> 8:00 AM - 6:00 PM</p>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}