import { Book, ChevronDown, Cloud, LogOut, Phone, Settings } from "lucide-react";
import { useState } from "react";
import { Home, Code, } from "lucide-react";
import codeant from "../../assets/DarkSubtract.png"


function Sidebar() {
    const [selectedNavigation, setSelectedNavigation] = useState("Repositories");
    const name = "utkarshDairyaPanwar"
    const navigation = [
        { icon: <Home /> , name: "Repositories" },
        { icon: <Code />, name: "AI Code Review" },
        { icon: <Cloud />, name: "Cloud Security" },
        { icon: <Book />, name: "How to Use" },
        { icon: <Settings />, name: "Settings" },
    ];

    const bottomNavigation = [
        { icon: <Phone />, name: "Support" },
        { icon: <LogOut />, name: "Logout" },
    ];

    const navigationItem = navigation.map((item, index) => {
        return (
            <div className={`flex flex-row gap-4 items-center text-sm sm:text-base leading-none border cursor-pointer border-gray-200 border-solid p-2 rounded-lg ${selectedNavigation === item.name
                ? 'text-white bg-blue-600' : 'text-gray-600 bg-white'
                }`} onClick={() => setSelectedNavigation(item.name)} key={index}>
                {item.icon}
                <div>{item.name}</div>
            </div>
        );
    })

    const bottomNavigationItem = bottomNavigation.map((item, index) => {
        return (
            <div className={`flex flex-row gap-4 items-center text-sm sm:text-base leading-none border cursor-pointer border-gray-200 border-solid p-2 rounded-lg text-gray-600 bg-white`}
                onClick={() => setSelectedNavigation(item.name)} key={index}>
                {item.icon}
                <div>{item.name}</div>
            </div>
        );
    });

    return (
        <>
            <div className="flex flex-col fixed left-0 top-0 justify-between items-center h-screen w-60 p-4 border-e border-gray-200">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center text-xl sm:text-3xl leading-none">
                        <img
                            loading="lazy"
                            src={codeant}
                            alt="CodeAnt AI Logo"
                            className="object-contain w-3 sm:w-9"
                        />
                        <div>CodeAnt AI</div>
                    </div>
                    <div className="border border-gray-200 border-solid p-2 rounded-lg flex flex-row  justify-between">
                        <p className="text-lg">
                            {name.substring(0, 12) + "..."}
                        </p>
                        <ChevronDown />
                    </div>
                    {navigationItem}
                </div>
                <div className="flex flex-col gap-4 w-full">
                    {bottomNavigationItem}
                </div>
            </div>
        </>
    )
}

export default Sidebar;