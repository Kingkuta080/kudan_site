import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Play, Volume2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Sections */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop
            poster="https://images.unsplash.com/photo-1504963764356-2d4d2b051e7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          >
            <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Kudan Local Government</h1>
            <p className="text-xl mb-8">Farming is our Pride, Progress is our Goal</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-800">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Kudan Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">About Kudan</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="https://images.unsplash.com/photo-1589928049394-71dfc4486cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kudan Local Government Area"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">General Information</h3>
              <p className="text-gray-700 mb-4">
                Kudan Local Government Area is located in Kaduna State with its headquarters in Hunkuyi. 
                Spanning an area of 345.4 km², Kudan is led by Hon. Dauda Ilya Abba (Chairman) and 
                Usman Abbas Likoro (Vice Chairman).
              </p>
              <p className="text-gray-700 mb-6">
                The major tribes are Hausa and Fulani, with Hausa and Fulfulde being the predominant languages. 
                The main economic activities include farming, livestock rearing, and trading.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/about">
                  Read More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Chairman */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Message from the Chairman</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Hon. Dauda Ilya Abba</h3>
              <p className="text-gray-700 mb-4">
                Welcome to the official website of Kudan Local Government Area. It is with great pleasure that I address you as the Chairman of this vibrant and progressive community.
              </p>
              <p className="text-gray-700 mb-4">
                Our administration is committed to transparent governance, sustainable development, and improving the quality of life for all residents of Kudan.
              </p>
              <div className="mt-6 flex items-center">
                <Button variant="outline" className="flex items-center text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Listen to Full Message
                </Button>
                <audio className="hidden" controls>
                  <source src="#" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Hon. Dauda Ilya Abba - Chairman"
                width={400}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Agriculture - Farming is our Pride</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Potatoes</CardTitle>
                <CardDescription>High-quality produce</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Potatoes"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Kudan's farmers are celebrated for producing high-quality potatoes that are distributed throughout Nigeria.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Grapes</CardTitle>
                <CardDescription>Gaining recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Grapes"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Our grape farms have gained widespread recognition for their quality and innovative farming techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Other Crops</CardTitle>
                <CardDescription>Diverse agricultural products</CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Various Vegetables"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Other prominent crops include cabbage, carrots, and tomatoes, contributing to the region's agricultural diversity.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/agriculture">Learn More About Our Agriculture</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">News & Upcoming Events</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="news">Latest News</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="news">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-800">Establishment of KADCO</CardTitle>
                    <CardDescription>June 15, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Kudan Agricultural Development Company (KADCO) has been established to support local farmers with modern farming techniques and access to markets.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-800">New Bye Laws Established</CardTitle>
                    <CardDescription>May 28, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      The local government has established new bye laws to improve governance and community development in all 10 electoral wards.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-800">Women Empowerment Program</CardTitle>
                    <CardDescription>July 10-12, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      A three-day workshop focused on empowering women through agricultural skills, financial literacy, and entrepreneurship.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-800">Annual Farmers' Exhibition</CardTitle>
                    <CardDescription>August 5-7, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Join us for the annual exhibition showcasing agricultural innovations, local produce, and networking opportunities for farmers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/news">View All News & Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Current Projects</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
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
                <p className="text-sm">Providing clean water access across communities</p>
                <Button variant="ghost" size="sm" className="text-white mt-2 self-start hover:bg-white/20">
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
                <p className="text-sm">Improving healthcare facilities for better service delivery</p>
                <Button variant="ghost" size="sm" className="text-white mt-2 self-start hover:bg-white/20">
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
                <p className="text-sm">Connecting communities through improved road networks</p>
                <Button variant="ghost" size="sm" className="text-white mt-2 self-start hover:bg-white/20">
                  <Play className="mr-2 h-4 w-4" /> Watch Progress
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Connect With Kudan Local Government</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay informed about our initiatives, projects, and events. Reach out to us with your questions or feedback.
          </p>
          <Button asChild className="bg-white text-green-800 hover:bg-green-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}