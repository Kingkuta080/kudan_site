import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Kudan Local Government"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kudan</h1>
          <p className="text-xl max-w-3xl">
            Learn about our history, culture, and the people who make Kudan Local Government Area special.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general">General Information</TabsTrigger>
              <TabsTrigger value="history">Brief History</TabsTrigger>
              <TabsTrigger value="culture">Culture & Heritage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-green-800 mb-6">General Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">Leadership</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><span className="font-medium">Chairman:</span> Hon. Dauda Ilya Abba</li>
                        <li><span className="font-medium">Vice Chairman:</span> Usman Abbas Likoro</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">Location & Geography</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><span className="font-medium">Location:</span> Kaduna State</li>
                        <li><span className="font-medium">Headquarters:</span> Hunkuyi</li>
                        <li><span className="font-medium">Area:</span> 345.4 km²</li>
                        <li><span className="font-medium">Neighboring Locations:</span> Bordering Makarfi, Soba, Sabon Gari LGAs, Giwa and parts of Katsina (Danja LGA) and Kano (Sundu LGA)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">Demographics</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><span className="font-medium">Major Tribes:</span> Hausa, Fulani</li>
                        <li><span className="font-medium">Languages:</span> Hausa, Fulfulde</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">Economy & Climate</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><span className="font-medium">Main Economic Activities:</span> Farming, livestock rearing, trading</li>
                        <li><span className="font-medium">Climate:</span> Tropical savanna with distinct dry (November–March) and wet (April–October) seasons</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Image 
                    src="https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Kudan Local Government Area"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Kudan Landscape"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                    <Image 
                      src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Kudan Community"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Brief History</h2>
                  
                  <div className="prose prose-green max-w-none text-gray-700">
                    <p className="mb-4">
                      Kudan Local Government Area was established in 1996 in Kaduna State. The name "Kudan" is derived from Kudandariya, a founding figure whose legacy spans over 600 years.
                    </p>
                    
                    <p className="mb-4">
                      Today, our administrative headquarters is located in Hunkuyi, the center of local governance and community life. Kudan is led by an elected Chairman and Vice Chairman and comprises 10 electoral wards, each represented by an elected councilor, with village heads providing grassroots support.
                    </p>
                    
                    <p className="mb-4">
                      Over the decades, Kudan has maintained its deep-rooted agricultural traditions while steadily embracing modern development and progress.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Administrative Structure</h3>
                    <p className="mb-4">
                      Kudan LGA is divided into 10 electoral wards, each represented by an elected councilor. The local government is led by an elected Chairman and Vice Chairman who oversee the administration and development of the area.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Traditional Leadership</h3>
                    <p>
                      As part of the Zazzau Emirate, Kudan LGA is divided into two main districts, each led by a district head. In addition, 27 village heads operate under these districts, managing local governance and preserving cultural practices.
                    </p>
                  </div>
                </div>
                
                <div>
                  <Image 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Historical Representation of Kudan"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg mb-6"
                  />
                  
                  <div className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Traditional Districts</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-green-700">Kudan District</h4>
                        <p className="text-gray-700">
                          Headed by Alhaji Halliru Mahmud Tukuran Zazzau, who collaborates closely with the local government to foster community cohesion and preserve cultural continuity.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-green-700">Hunkuyi District</h4>
                        <p className="text-gray-700">
                          Serving as the administrative and cultural center, it is headed by Alhaji Aminu Muhammad Ashiru.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="culture">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Culture & Heritage</h2>
                  
                  <div className="prose prose-green max-w-none text-gray-700">
                    <p className="mb-4">
                      Kudan is known for its rich cultural traditions that celebrate a way of life centered around farming and community. Residents take pride in traditional festivals, music, dance, and crafts that have been passed down through generations.
                    </p>
                    
                    <p className="mb-4">
                      These cultural expressions not only bind the community together but also highlight our strong connection to the land.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Major Tribes</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                      <li>Hausa</li>
                      <li>Fulani</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Languages Spoken</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                      <li><span className="font-medium">Primary:</span> Hausa</li>
                      <li><span className="font-medium">Secondary:</span> English (official language), Fulfulde, and Nigerian Pidgin</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Cultural Practices</h3>
                    <p>
                      Traditional ceremonies mark important life events such as births, marriages, and harvests. Music and dance play a central role in these celebrations, with traditional instruments and rhythms that have been preserved for generations.
                    </p>
                  </div>
                </div>
                
                <div>
                  <Image 
                    src="https://images.unsplash.com/photo-1566994616736-69fe8cc420f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Cultural Celebration"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Image 
                      src="https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Traditional Music"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                    <Image 
                      src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Traditional Crafts"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Cultural Heritage Preservation</h3>
                    <p className="text-gray-700">
                      The local government works closely with traditional leaders to preserve and promote the rich cultural heritage of Kudan. Annual cultural festivals showcase traditional music, dance, crafts, and cuisine, attracting visitors from across the region.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Geography & Economy Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Geography & Economy</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Strategic Location</h3>
              <p className="text-gray-700 mb-4">
                Kudan Local Government is strategically located in Kaduna State, sharing borders with neighboring LGAs such as Makarfi, Soba, Sabon Gari LGAs, Giwa and parts of Katsina (Danja LGA), Kano (Sundu LGA) States.
              </p>
              <p className="text-gray-700 mb-4">
                This prime location, coupled with fertile lands, has made agriculture the backbone of our economy.
              </p>
              
              <h4 className="text-xl font-medium text-green-700 mt-6 mb-2">Climate</h4>
              <p className="text-gray-700 mb-4">
                Tropical savanna with distinct dry (November–March) and wet (April–October) seasons.
              </p>
              
              <h4 className="text-xl font-medium text-green-700 mt-6 mb-2">Main Economic Activities</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Farming (irrigation-based cultivation of crops)</li>
                <li>Livestock rearing</li>
                <li>Trading</li>
              </ul>
            </div>
            
            <div>
              <Image 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kudan Landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Traditional Leadership</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Kudan District</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="District Head"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-green-800">Alhaji Halliru Mahmud Tukuran Zazzau</h3>
                  <p className="text-gray-600">District Head</p>
                </div>
                <p className="text-gray-700">
                  Collaborates closely with the local government to foster community cohesion and preserve cultural continuity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Hunkuyi District</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="District Head"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-green-800">Alhaji Aminu Muhammad Ashiru</h3>
                  <p className="text-gray-600">District Head</p>
                </div>
                <p className="text-gray-700">
                  Serves as the administrative and cultural center of Kudan Local Government Area.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Village Heads</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-green-100">
                    <span className="text-3xl text-green-800">27</span>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">Village Heads</h3>
                  <p className="text-gray-600">Community Leaders</p>
                </div>
                <p className="text-gray-700">
                  Village heads operate under these districts, ensuring that traditional practices and community customs are preserved at the grassroots level.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-green-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 text-center">
              These traditional structures help maintain a balance between age-old customs and contemporary administrative practices, ensuring that Kudan's heritage remains vibrant and respected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}