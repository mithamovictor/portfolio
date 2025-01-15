import {FC} from "react";

const Footer: FC = () => {
    const year = new Date().getFullYear();

    return (<footer className="flex flex-row justify-center items-center w-full max-w-screen-lg p-4 w-full max-w-screen-lg">
        <p>&copy; {year}. All rights reserved.</p>
    </footer>)
}

export default Footer;