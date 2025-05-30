import { Outlet } from "react-router-dom";
import Sidebar from "../../../../shared/components/sidebar/Sidebar";
import TeamNav from "../components/teamNav";

const MyTeam = () => {
    return (
        <div className="">
            <TeamNav />
            <div className="flex">
                <Sidebar
                    currentImage="../src/assets/images/indianLeague.png"
                    className="left-0 top-[100px] h-full w-64 bg-[#1F1B2C] z-[1000]"
                />

                <div
                    className={`flex-1 h-[calc(100vh-100px)] bg-cover bg-left bg-no-repeat bg-[#081a37] text-white overflow-y-scroll transition-all duration-300 ease-in-out relative`}
                    style={{
                        backgroundImage:
                            "url('../../../../../public/leagues/indianLeaguePage2.png')",
                        backgroundSize: "fill",
                        backgroundPosition: "left",
                    }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MyTeam;
