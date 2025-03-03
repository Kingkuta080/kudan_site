import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GovernmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Kudan Government"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Government</h1>
          <p className="text-xl max-w-3xl">
            Learn about the structure, agencies, and departments of Kudan Local Government.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="structure" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="structure">Government Structure</TabsTrigger>
              <TabsTrigger value="agencies">Agencies & Departments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="structure">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Government Structure</h2>
                  
                  <div className="prose prose-green max-w-none text-gray-700">
                    <p className="mb-4">
                      Kudan Local Government operates under a democratic structure with elected officials who serve as representatives of the people. The local government is led by an elected Chairman and Vice Chairman who oversee the administration and development of the area.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Executive Branch</h3>
                    <p className="mb-4">
                      The executive branch is headed by the Chairman, who serves as the chief executive officer of the local government. The Chairman is responsible for implementing policies, managing resources, and ensuring the delivery of services to the people.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Legislative Branch</h3>
                    <p className="mb-4">
                      The legislative branch consists of elected councilors representing the 10 electoral wards in Kudan. They are responsible for making laws, approving budgets, and providing oversight of the executive branch.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Administrative Structure</h3>
                    <p>
                      The local government administration is headed by the Secretary to the Local Government, who coordinates the activities of various departments and ensures the implementation of government policies and programs.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Current Leadership</h3>
                    
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <Image 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                          alt="Hon. Dauda Ilya Abba"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-green-800">Hon. Dauda Ilya Abba</h4>
                      <p className="text-gray-600">Chairman</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <Image 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                          alt="Usman Abbas Likoro"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-green-800">Usman Abbas Likoro</h4>
                      <p className="text-gray-600">Vice Chairman</p>
                    </div>
                  </div>
                  
                  <Image 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Kudan Local Government Secretariat"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-green-800 mb-6">Electoral Wards</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ward) => (
                    <Card key={ward} className="hover:shadow-md transition-shadow">
                      <CardHeader className="bg-green-50 pb-3">
                        <CardTitle className="text-green-800">Ward {ward}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-gray-700">
                          Represented by an elected councilor who serves as the voice of the people in the local government legislative council.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="agencies">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">Agencies & Departments</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-green-800">Agriculture Department</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Responsible for agricultural development, extension services, and support for farmers in the local government area.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Agricultural extension services</li>
                        <li>Farmer support programs</li>
                        <li>Irrigation development</li>
                        <li>Livestock management</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-green-800">Health Department</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Oversees healthcare delivery, primary healthcare centers, and public health programs in Kudan.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Primary healthcare services</li>
                        <li>Immunization programs</li>
                        <li>Maternal and child health</li>
                        <li>Disease control and prevention</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-green-800">Education Department</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Manages primary education, adult literacy programs, and educational infrastructure in the local government.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Primary school management</li>
                        <li>Teacher training and development</li>
                        <li>School infrastructure</li>
                        <li>Adult literacy programs</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-green-800">Works Department</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Responsible for infrastructure development, maintenance of roads, and public buildings.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Road construction and maintenance</li>
                        <li>Public buildings management</li>
                        <li>Water infrastructure</li>
                        <li>Rural electrification projects</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-green-800">Finance Department</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Manages the financial resources, budget preparation, and revenue generation for the local government.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Budget preparation and implementation</li>
                        <li>Revenue generation</li>
                        <li>Financial reporting</li>
                        <li>Payroll management</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="text-green-800">Social Welfare Department</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 mb-4">
                        Provides social services, support for vulnerable groups, and community development programs.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Support for vulnerable groups</li>
                        <li>Women empowerment programs</li>
                        <li>Youth development initiatives</li>
                        <li>Community development projects</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Special Agencies</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-green-700 mb-2">Kudan Agricultural Development Company (KADCO)</h4>
                      <p className="text-gray-700">
                        A special agency established to support local farmers with modern farming techniques, access to markets, and agricultural inputs. KADCO plays a crucial role in enhancing agricultural productivity and ensuring food security in the local government area.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-green-700 mb-2">Kudan Community Development Agency</h4>
                      <p className="text-gray-700">
                        Focuses on community-driven development initiatives, mobilizing communities to participate in development projects, and building capacity for sustainable development at the grassroots level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Organizational Structure</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-green-800 text-white p-4 rounded-lg w-64 text-center mb-4">
                <h3 className="font-semibold">Chairman</h3>
                <p className="text-sm">Hon. Dauda Ilya Abba</p>
              </div>
              
              <div className="w-1 h-8 bg-green-800"></div>
              
              <div className="bg-green-700 text-white p-4 rounded-lg w-64 text-center mb-4">
                <h3 className="font-semibold">Vice Chairman</h3>
                <p className="text-sm">Usman Abbas Likoro</p>
              </div>
              
              <div className="w-1 h-8 bg-green-800"></div>
              
              <div className="bg-green-600 text-white p-4 rounded-lg w-64 text-center mb-4">
                <h3 className="font-semibold">Secretary to Local Government</h3>
              </div>
              
              <div className="w-1 h-8 bg-green-800"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-500 text-white p-3 rounded-lg text-center">
                  <h3 className="font-semibold">Heads of Departments</h3>
                </div>
                
                <div className="bg-green-500 text-white p-3 rounded-lg text-center">
                  <h3 className="font-semibold">Legislative Council</h3>
                </div>
                
                <div className="bg-green-500 text-white p-3 rounded-lg text-center">
                  <h3 className="font-semibold">Special Agencies</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}