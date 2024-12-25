import { FaSyncAlt, FaPlus, FaSearch } from "react-icons/fa";
const repositories = [
    {
        name: "design-system",
        status: "Public",
        language: "React",
        size: "7320 KB",
        updatedAt: "1 day ago",
    },
    {
        name: "codeant-ci-app",
        status: "Private",
        language: "Javascript",
        size: "5871 KB",
        updatedAt: "2 days ago",
    },
    {
        name: "analytics-dashboard",
        status: "Private",
        language: "Python",
        size: "4521 KB",
        updatedAt: "5 days ago",
    },
    {
        name: "mobile-app",
        status: "public",
        language: "Swift",
        size: "3096 KB",
        updatedAt: "3 days ago",
    },
    {
        name: "e-commerce-platform",
        status: "Private",
        language: "Java",
        size: "6210 KB",
        updatedAt: "6 days ago",
    },
    {
        name: "blog-website",
        status: "public",
        language: "HTML/CSS",
        size: "1876 KB",
        updatedAt: "4 days ago",
    },
    {
        name: "social-network",
        status: "Private",
        language: "PHP",
        size: "5432 KB",
        updatedAt: "5 days ago",
    },
];

function Badge({ children }) {
    return <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded-2xl text-xs font-semibold border border-blue-200">{children}</span>;
}

function Button({ variant, size, children, icon: Icon }) {

    return (
        <button className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 ${size === "sm" ? "text-sm" : "text-base"} ${variant === "outline"
            ? "border border-gray-400 text-gray-800 hover:bg-gray-100" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
            {Icon && <Icon className="w-4 h-4" />}
            {children}
        </button>
    );
}

function Input({ placeholder, className }) {
    return (
        <div className="relative w-80 max-w-4xl">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
                type="text"
                placeholder={placeholder}
                className={`border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}/>
        </div>
    );
}
function Repositories() {
    return (
        <>
            <div className="w-full mt-14 sm:mt-0 sm:ml-60 bg-gray-50 sm:p-4 p-0">
                <div className="flex flex-col border border-gray-200 bg-white rounded-2xl">
                    <div className="flex flex-col sm:flex-row  justify-between items-start sm:items-end gap-3 sm:gap-0 p-6">
                        <div>
                            <h1 className="text-2xl font-semibold text-slate-900">Repositories</h1>
                            <p className="text-sm text-gray-500">33 total repositories</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" icon={FaSyncAlt}>
                                Refresh All
                            </Button>
                            <Button size="sm" icon={FaPlus}>
                                Add Repository
                            </Button>
                        </div>
                    </div>

                    <div className="ml-6 mb-6">
                        <Input placeholder="Search Repositories" />
                    </div>

                    <div className="">
                        {repositories.map((repo, index) => (
                            <div
                                key={repo.name}
                                className={`flex items-center justify-between p-4 ps-7 border bg-gray-50 hover:bg-gray-100 transition-colors ${index === repositories.length - 1 ? "" : "rounded-b-lg"}`}
                            >
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-slate-900">{repo.name}</span>
                                        <Badge
                                            variant={repo.status === "Public" ? "secondary" : "outline"}
                                        >
                                            {repo.status}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                                            {repo.language}
                                        </span>
                                        <span>{repo.size}</span>
                                        <span>Updated {repo.updatedAt}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Repositories;
