import Link from "next/link";

export default function HomePage() {

  const mockUrls = [
    "https://utfs.io/f/pj0T1BSISEVBkXBIMR5X5V8RtaZrjl9YIocfGAv3gzuUBE7K",
    "https://utfs.io/f/pj0T1BSISEVBFyYbGtOfTIs1GMqJ9AiyPv8arNhdQ7mkC3YH",
    "https://utfs.io/f/pj0T1BSISEVB0AKka3tJh7lLA8DnyMOWZxu1zbRitEdpme3T",
    "https://utfs.io/f/pj0T1BSISEVBnRzMgl0G5ITbL47Fdu63A0x18zw9mYSZpQEX",
  ]

  const mockImages = mockUrls.map((elm, index) => ({
    id: index +1,
    url: elm
  }))
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
          {mockImages.map((image)=> (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))}
        </div>
    </main>
  );
}
