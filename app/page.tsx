import getCities from "@/lib/getCities";

export default async function Home() {
    const citiesData : Promise<City[]> = getCities();
    const citiesInfo: City[] = await citiesData
    const cities = citiesInfo

    return (
        <main>
            Home
        </main>
    )
}
