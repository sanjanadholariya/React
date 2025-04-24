import { useState } from "react";

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    function toggle() {
        setIsOn(!isOn);
    }

    return (
        <>
            <div align="center" style={{margin:20}}>
                <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>

            </div>
        </>
    )
}
export default ToggleButton;
