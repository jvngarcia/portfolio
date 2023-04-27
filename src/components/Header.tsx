import Image from "next/image"
import type { MainHeader } from "~/interfaces/Headers";


const Header: React.FC<MainHeader> = ({ title, image, cover }) => {
    return (
        <header className="mt-6">
            <Image src={ cover } width={1200} height={264} alt="cover JVN García" className="rounded-xl shadow-xl" />
            <div className="-mt-12 flex justify-center">
                <Image src={ image } width={124} height={124} alt="cover JVN García" className="rounded-full shadow-xl" />
            </div>
            <h1 className="text-center mt-8 text-4xl font-semibold">{ title }</h1>
        </header>
    )
}

export default Header;