import React, { useState } from "react";
import Togglebtn from "../components/togglebtn";
import Axiostest from "../components/axiostest";

const Twicepage = () => {
    const [isToggle, setIsToggle] = useState(true); 

    return (
        <div className="flex flex-col items-center justify-center align-center">
            {isToggle ? <Togglebtn /> : <Axiostest />}
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
                onClick={() => setIsToggle(!isToggle)}
            >
                컴포넌트 변경
            </button>
        </div>
    );
}

export default Twicepage;
