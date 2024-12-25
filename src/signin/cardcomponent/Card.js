import DarkSubract from "../../assets/DarkSubtract.png";
import iconSrc from "../../assets/Group 4.png";

function Card() {
    const state = [
        { count: "30+", label: "Language Support" },
        { count: "10K+", label: "Developers" },
        { count: "100K+", label: "Hours Saved" }
    ]

    return (
        <>
            <div className="relative max-w-[460px] p-6">
                {/* First Component */}
                <div className="flex flex-col w-full shadow-xl bg-white rounded-3xl">
                    <div className="flex gap-2 items-center p-6 text-lg font-bold text-slate-900">
                        <img
                            loading="lazy"
                            src={DarkSubract}
                            className="object-contain shrink-0 w-7 aspect-[0.9]"
                            alt="AI Code Detection Icon"
                        />
                        <span>AI to Detect & Autofix Bad Code</span>
                    </div>
                    <div className="w-full border-t border-slate-200" />
                    <div className="flex gap-5 justify-between p-6">
                        {state.map((stat, index) => (
                            <div key={index} className="flex flex-col justify-center items-center">
                                <div className="text-lg font-bold text-slate-900">{stat.count}</div>
                                <div className="text-sm leading-none text-neutral-900">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Component */}
                <div
                    className="absolute right-[-10px] -bottom-[100px] flex justify-between items-start px-6 py-4 bg-white rounded-lg shadow-xl w-[200px] max-w-[250px]"
                    style={{ zIndex: 1 }}
                >
                    {/* Left Section: Icon and Label */}
                    <div className="flex flex-col items-center">
                        <img
                            src={iconSrc}
                            alt=""
                            className="w-12 h-12 mb-3 bg-indigo-100 rounded-full p-2"
                        />
                        <div className="flex flex-col items-start">
                            <div className="text-sm font-medium text-gray-700">issue fix</div>
                            <div className="text-lg font-bold text-gray-900">500k+</div>
                        </div>
                    </div>

                    {/* Right Section: Percentage and Timeframe */}
                    <div className="flex flex-col justify-center">
                        <div className="text-sm font-bold text-blue-600">14.4%</div>
                        <div className="mt-1 text-xs text-gray-500">this week</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;