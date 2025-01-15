import {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/vm_logo.png"

const Header: FC = () => {
    return (<header className={'flex flex-row justify-between items-center w-full max-w-screen-lg p-4'}>
        <div>
            <Image className={"w-60 h-auto"} src={logo} alt={"logo"} />
        </div>
        <nav>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
            </ul>
        </nav>
    </header>)
}

export default Header;