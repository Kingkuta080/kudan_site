"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/AboutKudan/About Kudan.jpg"
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
            Learn about our history, culture, and the people of Kudan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="general"
                className={`${
                  pathname === "/about"
                    ? "bg-green-700 text-white" // Active tab style
                    : "bg-green-50 text-green-800 hover:bg-green-100" // Default tab style
                }`}
              >
                General Information
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className={`${
                  pathname === "/about/history"
                    ? "bg-green-700 text-white" // Active tab style
                    : "bg-green-50 text-green-800 hover:bg-green-100" // Default tab style
                }`}
              >
                Brief History
              </TabsTrigger>
              <TabsTrigger
                value="culture"
                className={`${
                  pathname === "/about/culture"
                    ? "bg-green-700 text-white" // Active tab style
                    : "bg-green-50 text-green-800 hover:bg-green-100" // Default tab style
                }`}
              >
                Culture & Heritage
              </TabsTrigger>
            </TabsList>

            {/* General Information Tab */}
            <TabsContent value="general">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-green-800 mb-6">
                    General Information
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">
                        Leadership
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>
                          <span className="font-medium">Chairman:</span> Hon.
                          Dauda Ilya Abba
                        </li>
                        <li>
                          <span className="font-medium">Vice Chairman:</span>{" "}
                          Usman Abbas Likoro
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">
                        Location & Geography
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>
                          <span className="font-medium">Location:</span> Kaduna
                          State
                        </li>
                        <li>
                          <span className="font-medium">Headquarters:</span>{" "}
                          Hunkuyi
                        </li>
                        <li>
                          <span className="font-medium">Area:</span> 345.4 km²
                        </li>
                        <li>
                          <span className="font-medium">
                            Neighboring Locations:
                          </span>{" "}
                          Bordering Makarfi, Soba, Sabon Gari LGAs, Giwa and
                          parts of Katsina (Danja LGA) and Kano (Sundu LGA)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">
                        Demographics
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>
                          <span className="font-medium">Major Tribes:</span>{" "}
                          Hausa, Fulani
                        </li>
                        <li>
                          <span className="font-medium">Languages:</span> Hausa,
                          Fulfulde
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-2">
                        Economy & Climate
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>
                          <span className="font-medium">
                            Main Economic Activities:
                          </span>{" "}
                          Farming, livestock rearing, trading
                        </li>
                        <li>
                          <span className="font-medium">Climate:</span> Tropical
                          savanna with distinct dry (November–March) and wet
                          (April–October) seasons
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <Image
                    src="/AboutKudan/About Kudan.jpg"
                    alt="Kudan Local Government Area"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg mb-6"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="/Agric/agro.png"
                      alt="Kudan Landscape"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                    <Image
                      src="/bg2.png"
                      alt="Kudan Community"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Brief History Tab */}
            <TabsContent value="history">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-green-800 mb-6">
                    Brief History
                  </h2>

                  <div className="prose prose-green max-w-none text-gray-700">
                    <p className="mb-4">
                      Kudan Local Government Area was established in 1996 in
                      Kaduna State. The name &quot;Kudan&quot; is derived from Kudandariya,
                      a founding figure whose legacy spans over 600 years.
                    </p>

                    <p className="mb-4">
                      Today, our administrative headquarters is located in
                      Hunkuyi, the center of local governance and community life.
                      Kudan is led by an elected Chairman and Vice Chairman and
                      comprises 10 electoral wards, each represented by an
                      elected councilor, with village heads providing grassroots
                      support.
                    </p>

                    <p className="mb-4">
                      Over the decades, Kudan has maintained its deep-rooted
                      agricultural traditions while steadily embracing modern
                      development and progress.
                    </p>
                  </div>
                </div>

                <div>
                  <Image
                    src="https://th.bing.com/th/id/OIP.w3vOtFmTc8J6mWZgenMu7AHaE8?rs=1&pid=ImgDetMain"
                    alt="Historical Representation of Kudan"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg mb-6"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Culture & Heritage Tab */}
            <TabsContent value="culture">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-green-800 mb-6">
                    Culture & Heritage
                  </h2>

                  <div className="prose prose-green max-w-none text-gray-700">
                    <p className="mb-4">
                      Kudan is known for its rich cultural traditions that
                      celebrate a way of life centered around farming and
                      community. Residents take pride in traditional festivals,
                      music, dance, and crafts that have been passed down
                      through generations.
                    </p>

                    <p className="mb-4">
                      These cultural expressions not only bind the community
                      together but also highlight our strong connection to the
                      land.
                    </p>

                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
                      Major Tribes
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                      <li>Hausa</li>
                      <li>Fulani</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
                      Languages Spoken
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                      <li>
                        <span className="font-medium">Primary:</span> Hausa
                      </li>
                      <li>
                        <span className="font-medium">Secondary:</span> English
                        (official language), Fulfulde, and Nigerian Pidgin
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <Image
                    src="https://th.bing.com/th/id/OIP.qU3TGfGdqKctuezuZW6R2gHaEJ?rs=1&pid=ImgDetMain"
                    alt="Cultural Celebration"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg mb-6"
                  />

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Image
                      src="https://th.bing.com/th/id/OIP.48OQJDMDFyyvhyrDeHzLdwHaE-?rs=1&pid=ImgDetMain"
                      alt="Traditional Music"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                    <Image
                      src="https://th.bing.com/th/id/R.946cba39f029274a31caec7ff9ccc9bf?rik=XPODj6wfTAa0HQ&pid=ImgRaw&r=0"
                      alt="Traditional Crafts"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
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
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Geography & Economy
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-medium text-green-700 mt-6 mb-2">
                Location
              </h4>
              <p className="text-gray-700 mb-4">
                Kudan Local Government is strategically located in Kaduna State,
                sharing borders with neighboring LGAs such as Makarfi, Soba,
                Sabon Gari LGAs, Giwa and parts of Katsina (Danja LGA), Kano
                (Sundu LGA) States.
              </p>
              <p className="text-gray-700 mb-4">
                This prime location, coupled with fertile lands, has made
                agriculture the backbone of our economy.
              </p>

              <h4 className="text-xl font-medium text-green-700 mt-6 mb-2">
                Climate
              </h4>
              <p className="text-gray-700 mb-4">
                Tropical savanna with distinct dry (November–March) and wet
                (April–October) seasons.
              </p>

              <h4 className="text-xl font-medium text-green-700 mt-6 mb-2">
                Main Economic Activities
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Farming (irrigation-based cultivation of crops)</li>
                <li>Livestock rearing</li>
                <li>Trading</li>
              </ul>
            </div>

            <div>
              <Image
                src="/AboutKudan/GeoEconomy/gov.png"
                alt="Kudan Landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}