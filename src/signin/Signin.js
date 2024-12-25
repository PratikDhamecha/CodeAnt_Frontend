import codeAnt from '../assets/DarkSubtract.png';
import subtract from '../assets/Subtract.png';
import Card from "./cardcomponent/Card";
import GitHub from '../assets/Github.png';
import Bitbucket from '../assets/BitBucket.png';
import Azure from '../assets/Azure.png';
import GitLab from '../assets/GitLab.png';
import key from '../assets/key.png';
import { useState } from "react";

function Signin() {
    const [activeButton, setActiveButton] = useState("SAAS");
    var options = [];

    const handleToggle = (button) => {
        setActiveButton(button);
    };

    const saas_providers = [
        {
            icon: GitHub,
            provider: "Github",
            altText: "Github logo",
            onClick: () => console.log("Sign in with Github clicked"),
        },
        {
            icon: Bitbucket,
            provider: "Bitbucket",
            altText: "Bitbucket logo",
            onClick: () => console.log("Sign in with Bitbucket clicked"),
        },
        {
            icon: Azure,
            provider: "Azure Devops",
            altText: "Azure Devops logo",
            onClick: () => console.log("Sign in with Azure Devops clicked"),
        },
        {
            icon: GitLab,
            provider: "GitLab",
            altText: "GitLab logo",
            onClick: () => console.log("Sign in with GitLab clicked"),
        },
    ];

    const self_providers = [
        {
            icon: GitLab,
            provider: "GitLab",
            altText: "GitLab logo",
            message: "Self Hosted GitLab"
        },
        {
            icon: key,
            provider: "SS)",
            altText: "key logo",
            message: "Sign with SSO",
        },
    ];

    if (activeButton === "SAAS") {
        options = saas_providers.map((provide) => {
            return (
                <div
                    className="flex gap-4 justify-center items-center py-4 max-w-full bg-white rounded-lg border border-gray-300 border-solid w-[446px] max-md:px-5"
                    role="button"
                    tabIndex={0}
                >
                    <img
                        loading="lazy"
                        src={provide.icon}
                        alt={provide.altText}
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
                    />
                    <div className="inline-flex items-center w-auto">Sign in with {provide.provider}</div>
                </div>
            );
        })
    }
    else {
        options = self_providers.map((provide) => {
            return (
                <div
                    className="flex gap-4 justify-center items-center py-4 max-w-full bg-white rounded-lg border border-gray-300 border-solid w-[446px] max-md:px-5"
                    role="button"
                    tabIndex={0}
                >
                    <img
                        loading="lazy"
                        src={provide.icon}
                        alt={provide.altText}
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
                    />
                    <div className="inline-flex items-center w-auto">{provide.message}</div>
                </div>
            );
        })
    }

    return (
        <>
            <div className="h-full w-full">
                {/* Left side Component */}
                <div className="hidden md:flex z-0 flex-col flex-1 justify-between items-center self-center max-w-full w-1/2 h-screen border-e-2 bg-white border-gray-200 p-4 float-start">
                    <div className="flex-grow flex items-center justify-center">
                        <Card className="" />
                    </div>
                    <div className="w-full flex justify-start">
                        <div className="h-48 w-48">
                            <img src={subtract} alt="Description" />
                        </div>
                    </div>
                </div>

                {/* Right side Component */}
                <div className="flex justify-center items-center min-h-screen bg-gray-50">
                    <div className="flex flex-col px-4 py-6 w-full max-w-sm sm:max-w-lg">
                        {/* First Section */}
                        <div className="flex flex-col px-6 py-6 w-full border border-gray-200 border-solid rounded-t-xl">
                            <div className="flex flex-col justify-center items-center w-full text-gray-900">
                                <div className="flex gap-3 items-center text-xl sm:text-3xl leading-none">
                                    <img
                                        loading="lazy"
                                        src={codeAnt}
                                        alt="CodeAnt AI Logo"
                                        className="object-contain w-8 sm:w-9"
                                    />
                                    <div>CodeAnt AI</div>
                                </div>
                                <div className="mt-4 text-xl sm:text-3xl font-semibold text-center">
                                    Welcome to CodeAnt AI
                                </div>
                                <div className="flex sm:flex-row w-full bg-gray-50 mt-4 ">
                                    <button
                                        className={`overflow-hidden flex-1 shrink gap-1 self-stretch px-4 py-3 sm:px-3 sm:py-4 whitespace-nowrap w-1/2 rounded-lg ${activeButton === 'SAAS'
                                            ? 'text-white bg-blue-600 shadow-[0px_1px_2px_rgba(10,13,18,0.05)]'
                                            : 'text-gray-700 bg-gray-200'
                                            }`}
                                        onClick={() => handleToggle('SAAS')}
                                    >
                                        SAAS
                                    </button>
                                    <button
                                        className={`overflow-hidden flex-1 shrink gap-1 self-stretch px-4 py-3 sm:px-3 sm:py-4 whitespace-nowrap w-1/2 rounded-lg ${activeButton === 'Self Hosted'
                                            ? 'text-white bg-blue-600 shadow-[0px_1px_2px_rgba(10,13,18,0.05)]'
                                            : 'text-gray-700 bg-gray-200'
                                            }`}
                                        onClick={() => handleToggle('Self Hosted')}
                                    >
                                        Self Hosted
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Second Section */}
                        <div className="flex items-center w-full text-sm sm:text-base font-semibold bg-white border-s border-e border-b border-gray-200 border-solid rounded-b-xl">
                            <div className="flex flex-col w-full py-6 px-4 items-center space-y-2">
                                {options}
                            </div>
                        </div>

                        {/* Third Section */}
                        <div className="flex flex-row justify-center items-center w-full mt-4 text-sm">
                            <p className="text-center">
                                By signing up you agree to{' '}
                                <a href="/privacy-policy" className="text-black font-bold">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;