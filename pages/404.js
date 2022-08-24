import Link from 'next/link'
import Image from 'next/image'
export default function FourOhFour() {
  return <div className=" bg-gradient-to-bl from-yellow-500 via-red-700 to-red-800 h-screen">
    
  <Link passHref href="/"><div className="flex px-6 py-8 "><Image alt="spotify-logo" className="object-contain cursor-pointer" width={100} height={30} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"></Image></div></Link>
  <div className="flex flex-col">
    <h1 className="text-center my-48 align-middle text-gray-200 font-medium text-xl lg:text-3xl">Sorry, couldn&apos;t find that.</h1>
  </div>
    
    
  </div>
}