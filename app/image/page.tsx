import Image from "next/image"

export default function Page() {
  return (
    <div>
      <div className="relative w-full" style={{ height: '35vh', marginTop: 'calc(-1 * env(safe-area-inset-top, 0px))' }}>
        <Image 
          src="/test.jpeg" 
          alt="Image" 
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 p-4 pt-[env(safe-area-inset-top)]">
        <h1 className="text-2xl font-bold">Hello Waki</h1>
        <p>Тут твій контент</p>
      </div>
    </div>
  )
}