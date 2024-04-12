import {CloudDownload, Package} from "lucide-react";
import {getImageName} from "@/lib/utils/download";

export default function DownloadComponent({baseSystem, primaryGPU, developerEdition}: { baseSystem: string; primaryGPU: string; developerEdition: string}) {
    const imageName = getImageName(baseSystem, primaryGPU, developerEdition) + "-latest"
    const downloadLink: string = `https://dl.getaurora.dev/${imageName}.iso`
    const checksumLink: string = `https://dl.getaurora.dev/${imageName}.iso-CHECKSUM`
    //https://dl.getaurora.dev/aurora-dx-latest.iso
    return (
        <>
            <div className={"flex flex-row gap-5"}>
                <a href={downloadLink}
                   className={"w-fit text-[18px] h-fit flex flex-row justify-center items-center gap-2 p-5 text-white rounded-xl shadow-lg bg-gradient-to-br from-aurora-darkblue to-aurora-purple"}>
                    <CloudDownload/> Download ISO ({imageName})
                </a>
                <a href={checksumLink}
                   className={"w-fit text-[18px] h-fit flex flex-row justify-center items-center gap-2 p-5 text-white rounded-xl shadow-lg bg-gradient-to-br from-aurora-darkblue to-aurora-purple"}>
                    <Package/> Get Checksum to verify
                </a>
            </div>
        </>
    )
}
