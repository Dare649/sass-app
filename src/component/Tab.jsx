import { useState } from "react";

const Tab = ({ content1, content2, content3, title1, title2, title3 }) => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };

    const handleTab2 = () => {
        setActiveTab("tab2");
    };

    const handleTab3 = () => {
        setActiveTab("tab3");
    };

    return (
        <div className="w-full">
            <div className="tabItem flex items-center gap-x-3 mt-5 duration-300 border-b-2 border-neutral-300 w-full">
                <h1
                    onClick={handleTab1}
                    className={`${activeTab === "tab1" ? "border-b-4 border-primary-200 duration-300 px-5 cursor-pointer capitalize text-primary-100 font-bold text-lg" : ""} cursor-pointer capitalize font-bold text-md hover:text-primary-100 text-neutral-400 hover:px-3 hover:duration-300`}
                >
                    {title1}
                </h1>
                <h1
                    onClick={handleTab2}
                    className={`${activeTab === "tab2" ? "border-b-4 border-primary-200 duration-300 px-5 cursor-pointer capitalize text-primary-100 font-bold text-lg" : ""} cursor-pointer capitalize font-bold text-md hover:text-primary-100 text-neutral-400 hover:px-3 hover:duration-300`}
                >
                    {title2}
                </h1>
                <h1
                    onClick={handleTab3}
                    className={`${activeTab === "tab3" ? "border-b-4 border-primary-200 duration-300 px-5 cursor-pointer capitalize text-primary-100 font-bold text-lg" : ""} cursor-pointer capitalize font-bold text-md hover:text-primary-100 text-neutral-400 hover:px-3 hover:duration-300`}
                >
                    {title3}
                </h1>
            </div>
            <div className="outlet mt-10 w-full">
            {activeTab === "tab1" ? (
                <div className="duration-500">{content1}</div>
            ) : activeTab === "tab2" ? (
                <div>{content2}</div>
            ) : (
                <div>{content3}</div>
            )}
            </div>
        </div>
    );
};

export default Tab;
