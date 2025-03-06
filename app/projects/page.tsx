import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Kudan Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl max-w-3xl">
            Building a Better Community Together - Explore our ongoing and upcoming development initiatives.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg">
              At Kudan Local Government, we believe in transparency and community engagement. Our projects are designed to improve local infrastructure and community services. We're committed to working closely with our citizens to ensure that every initiative meets the needs of our community.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Development */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Infrastructure Development</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1584824388878-91b5ad632e31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Borehole Construction"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Borehole Constructions</h3>
                <p className="text-sm mb-4">Providing clean water access across communities</p>
                <Button variant="ghost" size="sm" className="text-white self-start hover:bg-white/20">
                  <Play className="mr-2 h-4 w-4" /> Watch Progress
                </Button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare Center Renovation"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Healthcare Center Renovations</h3>
                <p className="text-sm mb-4">Improving healthcare facilities for better service delivery</p>
                <Button variant="ghost" size="sm" className="text-white self-start hover:bg-white/20">
                  <Play className="mr-2 h-4 w-4" /> Watch Progress
                </Button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Road Construction"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Road Infrastructure</h3>
                <p className="text-sm mb-4">Connecting communities through improved road networks</p>
                <Button variant="ghost" size="sm" className="text-white self-start hover:bg-white/20">
                  <Play className="mr-2 h-4 w-4" /> Watch Progress
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Social Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Community & Social Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">WASH Program</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1584824388878-91b5ad632e31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="WASH Program"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  The Water, Sanitation, and Hygiene (WASH) program focuses on improving community health through:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Upgrading water supply systems</li>
                  <li>Constructing sanitation facilities</li>
                  <li>Promoting hygiene education</li>
                  <li>Implementing WASHPro system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Enterprise Development Program</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Enterprise Development"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">
                  KEDEP supports nano and micro businesses through:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Business clinic and advisory services</li>
                  <li>Shared facility centers</li>
                  <li>Startup grants and financial access</li>
                  <li>Skills acquisition training</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agricultural & Economic Development */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Agricultural & Economic Development</h2>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-800">Kudan Agro Development Initiative (KADI)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Image 
                    src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="KADI"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    KADI focuses on modernizing the agricultural sector through:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Establishing agro-processing zones</li>
                    <li>Developing storage facilities</li>
                    <li>Promoting value chain integration</li>
                    <li>Supporting modern farming techniques</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Environmental & Sustainability */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Environmental & Sustainability Initiatives</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Green Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1552525892-893d56d0a393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Green Spaces"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Development of public parks and green spaces to enhance environmental quality and community well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Renewable Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Renewable Energy"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Implementation of solar power projects to provide sustainable energy solutions for communities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Waste Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Waste Management"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Modern waste management systems to ensure cleaner and healthier communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}