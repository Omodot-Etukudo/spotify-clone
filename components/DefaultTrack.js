import {HeartIcon, PlayIcon} from "@heroicons/react/solid"
import Image from "next/image"
function DefaultTrack() {
    return (
       
        <div className="flex flex-col space-y-6 h-screen lg:h-full lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-16 lg:pb-6 lg:mb-10 px-3 lg:bg-main-bg">
           <div className="w-full py-1 flex justify-start items-end space-x-6">
                <div className=" bg-main-bg flex justify-center items-center">
                    <Image alt="Song Name"  loading="lazy"  width={200} height={200} className="w-full h-full rounded-sm"  src="https://i.scdn.co/image/ab67616d0000b273aa5909aa78cffca935762637" />
                </div>
                <div className="flex flex-col space-y-8 justify-end" >
                    <div className="flex flex-col space-y-2">
                        <h3 className="uppercase text-xxs text-white">Song</h3>
                        <h1 className="font-extrabold lg:text-6xl md:text-4xl text-2xl text-white">COPYCAT</h1>
                    </div>
                    <div className="flex space-x-1 justify-start items-center text-white text-xxs"><Image alt="Song Name"  placeholder="blur" loading="lazy" blurDataURL width={20} height={20} className="w-full h-full rounded-full"  src="https://i.scdn.co/image/ab67616d0000b273aa5909aa78cffca935762637" /><p className="font-semibold">Billie Eilish</p><span>&#183;</span><p>2020</p><span>&#183;</span><p>3:37</p></div>
                </div>
           </div>
           <div className="flex flex-col space-y-8 justify-start items-start">
                <div className="flex space-x-6 justify-center items-center">
                    <div className={`lg:drop-shadow-2xl cursor-default rounded-full bg-spotify-green w-12 h-12 flex justify-center items-center p-2 hover:scale-110  transition-all duration-300`}>
                        <PlayIcon aria-label="Play Music" className="w-7 h-7 text-gray-900"/>
                    </div>
                    <div>
                        <HeartIcon className="w-10 h-10 text-card-hover" />
                    </div>
                       
                </div>
                <div className="grid grid-flow-col grid-cols-12 gap-4">
                        <div className="col-span-7 flex flex-col space-y-2 justify-start items-start w-full">
                            <div className="flex flex-col space-y-4 justify-start items-start w-full md:w-8/12 lg:w-5/12">
                                <p className="font-extrabold text-white text-md">Lyrics</p>
                                <div className="w-full leading-normal text-xs flex flex-col space-y-4">
                                    <p>
                                        Don&apos;t be cautious, don&apos;t be kind
                                        You committed, I&apos;m your crime
                                        Push my button anytime
                                    </p>
                                    <p>
                                        You got your finger on the trigger
                                        But your trigger finger&apos;s mine
                                        Silver dollar, golden flame
                                        Dirty water, poison rain
                                        Perfect murder, take your aim
                                    </p>
                                    <p>
                                        I don&apos;t belong to anyone
                                        But everybody knows my name
                                        By the way, you&apos;ve been uninvited
                                    </p>
                                    <p>
                                        &apos;Cause all you say, are all the same things I did
                                        Copycat tryna cop my manner
                                        Watch your back when you can&apos;t watch mine
                                        Copycat tryna cop my glamor
                                        Why so sad, bunny? Can&apos;t have mine
                                        Call me calloused, call me cold
                                    </p>

                                    <p>
                                        You&apos;re italic, I&apos;m in bold
                                        Call me cocky, watch your tone
                                        You better love me, &apos;cause you&apos;re just a clone
                                        By the way, you&apos;ve been uninvited
                                    </p>

                                    <p>
                                        &apos;Cause all you say are all the same things I did
                                        Copycat tryna cop my manner
                                        Watch your back when you can&apos;t watch mine
                                        Copycat tryna cop my glamor
                                        Why so sad, bunny? Can&apos;t have mine
                                        Mine
                                    </p>

                                    <p>
                                        I would hate to see you go
                                        Hate to be the one that told you so
                                        You just crossed the line
                                        You&apos;ve run out of time
                                    </p>

                                    <p>
                                        I&apos;m so sorry, now you know
                                        Sorry I&apos;m the one that told you so
                                        Sorry, sorry, I&apos;m sorry, sorry
                                        Psych
                                    </p>

                                    <p>
                                        By the way, you&apos;ve been uninvited
                                        &apos;Cause all you say are all the same things I did
                                        Copycat tryna cop my manner
                                    </p>

                                    <p>
                                        Watch your back when you can&apos;t watch mine
                                        Copycat tryna cop my glamor
                                        Why so sad, bunny? Can&apos;t have mine.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <div className="flex space-x-4 justify-start items-start">
                                <Image alt="Song Name"  placeholder="blur" loading="lazy" blurDataURL width={70} height={70} className="w-full h-full rounded-full"  src="https://i.scdn.co/image/ab67616d0000b273aa5909aa78cffca935762637" />
                                <div className="flex flex-col justify-start items-start space-y-2">
                                    <p className="uppercase text-xxs text-white">Artist</p>
                                    <h4 className="text-white font-semibold text-sm">Billie Eilish</h4>
                                </div>
                            </div>
                        </div>
                    </div> 

            </div> 
        </div>
      
    )
}

export default DefaultTrack
