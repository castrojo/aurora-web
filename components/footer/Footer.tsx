import {RefObject} from "react";
import {CircleArrowUp, Github, GitMerge, GlobeIcon} from "lucide-react";

export default function Footer({introRef}: {introRef: RefObject<any>}) {
    return (
        <>
            <footer
                className={"min-h-[30vh] w-full bg-gray-800 flex flex-col justify-center gap-4 p-10 lg:p-0 text-center text-white items-center"}>
                <button className={"mt-5 flex flex-row items-center gap-5 justify-center"}
                        onClick={() => {
                            introRef.current.scrollIntoView({
                                behavior: 'smooth',
                                block: "start"
                            })
                        }}>
                    <CircleArrowUp className={"w-10 h-10"}/>
                    Go up
                </button>
                <div className={"text-xl"}>
                    Aurora is proudly built with technology from the <a className={"text-underline font-bold"}
                                                                        href={"https://universal-blue.org"}>Universal-Blue</a> Project, a toolkit to reshape the landscape of the Linux Desktop.
                </div>

                <div>
                    Aurora is not affiliated and or endorsed by The Fedora Project, KDE e.V., The KDE Project, Red Hat,
                    Microsoft, ASUS or any other companies mentioned above.
                </div>
                <div>
                    Built with ❤️ in Austria.
                </div>
                <div>
                    © Copyright {new Date().getFullYear()} Niklas Haiden and the Project Aurora authors.
                </div>

                <div className={"w-3/5 flex flex-row gap-5 underline justify-center mb-5"}>
                    <a className={"flex flex-row gap-1"} href={"https://github.com/ublue-os/bluefin"}>
                        <Github/> GitHub Repository
                    </a>

                    <a className={"flex flex-row gap-1"} href={"https://universal-blue.org"}>
                        <GitMerge/>
                        Universal Blue Website
                    </a>

                    <a className={"flex flex-row gap-1"} href={"https://github.com/NiHaiden/aurora-web"}>
                        <GlobeIcon/>
                        Website Source Code
                    </a>
                </div>
            </footer>
        </>
    )
}