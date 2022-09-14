import LikedPodcasts from "../LikedPodcasts"
import Mediacard from "../Mediacard"

function PodcastComponent() {
    return (
       
        <div className="h-screen lg:h-full lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-20 lg:pb-6 lg:mb-10 px-3 lg:dark:bg-main-bg bg-white">
           
            <div className="flex flex-col space-y-4 justify-start items-start w-full">
                <div className="flex flex-row justify-start items-center w-full"><h2 className="text-white text-md lg:text-lg font-semibold">Podcasts</h2></div>
                <div className="w-full flex gap-3 flex-wrap">
                    <LikedPodcasts/>             
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    <Mediacard isPodcast picture="ab6765630000ba8a269c9c597fca9835f921cf95" title="I said what I said" artist="Eggcorn Digital" />
                    
                </div>
                
            </div>
        </div>
        
    )
}

export default PodcastComponent
