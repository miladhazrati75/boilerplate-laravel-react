import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faSignOut } from "@fortawesome/free-solid-svg-icons";
import "./app2.css";
export default function App() {
    return (
        <>
            <div className="flex justify-between gap-10">
                <div className=" flex-initial w-1/4">
                    <div className="flex justify-between w-full p-4">
                        <div className="flex items-center gap-3">
                            <span className="light"></span>
                            <h5>میلاد حضرتی</h5>
                        </div>
                        <div>{<FontAwesomeIcon icon={faSignOut} />}</div>
                    </div>
                    <hr />
                    <div className="flex justify-between w-full p-4">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faDashboard} />
                            <h5>داشبورد</h5>
                        </div>
                        <div className="counter">۵</div>
                    </div>
                    <div className="flex justify-between w-full p-4">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faDashboard} />
                            <h5>داشبورد</h5>
                        </div>
                        <div className="counter">۵</div>
                    </div>
                    <div className="flex justify-between w-full p-4">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faDashboard} />
                            <h5>داشبورد</h5>
                        </div>
                        <div className="counter">۵</div>
                    </div>
                    <div className="flex justify-between w-full p-4">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faDashboard} />
                            <h5>داشبورد</h5>
                        </div>
                        <div className="counter">۵</div>
                    </div>
                    <div className="flex justify-between w-full p-4">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faDashboard} />
                            <h5>داشبورد</h5>
                        </div>
                        <div className="counter">۵</div>
                    </div>
                    <div className="flex justify-between w-full p-4">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faDashboard} />
                            <h5>داشبورد</h5>
                        </div>
                        <div className="counter">۵</div>
                    </div>
                </div>
                <div className="w-3/4 h-[0%]">
                    <div className="w-full p-4 font-bold">داشبورد</div>
                    <div className="w-full p-4 m-5 card">
                        <div className="font-bold text-xl">داشبورد</div>
                        <div className="my-5 text-sm">داشبورد</div>
                    </div>
                    <div className="w-full p-4 m-5 card">
                        <div className="font-bold text-xl">داشبورد</div>
                        <div className="my-5 text-sm">داشبورد</div>
                    </div>
                    <div className="w-full p-4 font-bold">داشبورد</div>
                </div>
                <hr />
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
