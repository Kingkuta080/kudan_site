import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgriculturePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Agriculture in Kudan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agriculture in Kudan</h1>
          <p className="text-xl max-w-3xl">
            Discover our agricultural heritage, modern farming practices, and the crops that make Kudan a major agricultural hub.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Agricultural Excellence</h2>
            <p className="text-gray-700">
              Kudan Local Government is a major agricultural hub in Kaduna State, blessed with fertile land, irrigation systems and a favorable climate that supports both wet and dry season farming. The area's farming activities range from staple food production to cash crops and livestock rearing, making it a key contributor to food security and economic development in the State and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* KADI & KADCO Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Kudan Agro-Development Initiative (KADI)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  KADI is a strategic program aimed at modernizing agriculture in Kudan by improving productivity, supporting agribusiness, and ensuring sustainability. The initiative provides farmers with:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access to modern farming techniques</li>
                  <li>Irrigation systems</li>
                  <li>Storage facilities</li>
                  <li>Financial support</li>
                  <li>Agricultural extension services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Kudan Agro-Development Company (KADCO)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  As the commercial and implementation arm of KADI, KADCO is responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Creating market linkages</li>
                  <li>Facilitating agro-processing</li>
                  <li>Driving large-scale agricultural investments</li>
                  <li>Enabling value addition through processing facilities</li>
                  <li>Ensuring better market access for farmers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Major Crops Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Major Crops in Kudan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Grapes</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Grapes"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Kudan accounts for approximately 85% of Nigeria's grape production, with over 80 vineyards yielding high-quality grapes for both local consumption and export.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Irish Potatoes</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Irish Potatoes"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Kudan is widely recognized as a major center for potato production, notably of Irish potatoes, owing to its rich, fertile soils and ideal climatic conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Tomatoes</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tomatoes"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Advanced irrigation systems enable year-round cultivation, ensuring a steady supply of high-quality tomatoes to markets across Kaduna State and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Cabbage & Carrots</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cabbage & Carrots"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Kudan LGA is a leading producer of cabbage and carrots, with farmers producing high volumes for both local markets and distribution across various states.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Sugarcane</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1622826168303-c870adc78b6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sugarcane"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Sugarcane farming is a major agricultural activity in Kauran Wali and Likoro wards, with potential for establishing sugar processing plants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Livestock & Processing Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Livestock Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Livestock"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Beyond crop farming, Kudan has a strong tradition of livestock rearing, including cattle, goats, and poultry. Many households engage in animal husbandry as a primary or secondary source of income.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800">Agro-Processing & Value Addition</CardTitle>
              </CardHeader>
              <CardContent>
                <Image 
                  src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Agro-Processing"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">
                  Kudan is home to various agro-processing activities, including the production of kuli-kuli (groundnut cake), rice milling, local dairy products, and processed grains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}