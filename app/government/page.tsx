"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";

export default function GovernmentPage() {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/gov.png"}
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
            Learn about the structure, leadership, and governance of Kudan Local Government.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="structure" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="structure"
                className={`${
                  pathname === "/government/structure"
                    ? "bg-green-700 text-white"
                    : "bg-green-50 text-green-800"
                } hover:bg-green-600 hover:text-white transition-colors duration-300`}
              >
                Government Structure
              </TabsTrigger>
              <TabsTrigger
                value="wards"
                className={`${
                  pathname === "/government/wards"
                    ? "bg-green-700 text-white"
                    : "bg-green-50 text-green-800"
                } hover:bg-green-600 hover:text-white transition-colors duration-300`}
              >
                Electoral Wards
              </TabsTrigger>
            </TabsList>

            {/* Government Structure Tab */}
            <TabsContent value="structure">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-green-800 mb-6">
                    Government Structure
                  </h2>

                  <div className="prose prose-green max-w-none text-gray-700">
                    <p className="mb-4">
                      Kudan LGA is governed by an integrated leadership structure that combines modern electoral representation with traditional authority under the Zazzau Emirate.
                    </p>

                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
                      Executive Arm
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>
                        <span className="font-medium">Chairman:</span> Hon. Dauda Ilya Abba
                      </li>
                      <li>
                        <span className="font-medium">Vice Chairman:</span> Usman Abbas Likoro
                      </li>
                      <li>
                        <span className="font-medium">Secretary to the Local Government:</span> Mohammed Sani Zubair
                      </li>
                      <li>
                        <span className="font-medium">Supervisory Council:</span> Consists of appointed members from the Administrative Department
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
                      Legislative Arm
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>
                        <span className="font-medium">Speaker of the Legislative Council:</span> [Name]
                      </li>
                      <li>
                        <span className="font-medium">Members of the Council:</span> 10 elected councillors representing each ward
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
                      Administrative Departments
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Admin & Finance Department</li>
                      <li>Agriculture & Forestry Department</li>
                      <li>Social Development Department</li>
                      <li>Works & Infrastructure Department</li>
                      <li>Local Government Education Authority</li>
                      <li>Primary Health Care Authority</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Current Leadership
                    </h3>
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <Image
                          src={"/chairman.jpg"}
                          alt="Hon. Dauda Ilya Abba"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-green-800">
                        Hon. Dauda Ilya Abba
                      </h4>
                      <p className="text-gray-600">Chairman</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <Image
                          src={"/vice.jpg"}
                          alt="Usman Abbas Likoro"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-green-800">
                        Usman Abbas Likoro
                      </h4>
                      <p className="text-gray-600">Vice Chairman</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Electoral Wards Tab */}
            <TabsContent value="wards">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">
                  Electoral Wards
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Kudan Ward",
                    "Hunkuyi Ward",
                    "Sabon Gari Ward",
                    "Garu Ward",
                    "Zabi Ward",
                    "Doka Ward",
                    "Likoro Ward",
                    "Taban Sani Ward",
                    "Kauran Wali North Ward",
                    "Kauran Wali South Ward",
                  ].map((ward) => (
                    <Card key={ward} className="hover:shadow-md transition-shadow">
                      <CardHeader className="bg-green-50 pb-3">
                        <CardTitle className="text-green-800">{ward}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-gray-700">
                          Represented by an elected councillor who serves as the voice of the people in the local government legislative council.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Traditional Institution Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Traditional Institution
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Emirate Council
              </h3>
              <p className="text-gray-700 mb-4">
                Kudan falls under the Zazzau Emirate (based in Zaria). Traditional leadership plays an integral role in preserving Kudan’s cultural identity and complementing modern governance.
              </p>

              <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
                Districts
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  <span className="font-medium">Kudan District:</span> Headed by Alhaji Halliru Mahmud Tukuran Zazzau, who collaborates closely with the local government to foster community cohesion and preserve cultural continuity.
                </li>
                <li>
                  <span className="font-medium">Hunkuyi District:</span> Serving as the administrative and cultural center, it is headed by Alhaji Aminu Muhammad Ashiru.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Village Heads
              </h3>
              <p className="text-gray-700 mb-4">
                A total of 27 village heads operate under these districts, ensuring that traditional practices and community customs are preserved.
              </p>

              <div className="bg-green-100 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-medium text-green-800 mb-2">
                  Role of Traditional Leaders
                </h4>
                <p className="text-gray-700">
                  These traditional structures help maintain a balance between age-old customs and contemporary administrative practices, ensuring that Kudan’s heritage remains vibrant and respected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}