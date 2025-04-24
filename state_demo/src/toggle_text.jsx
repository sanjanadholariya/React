import { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <p>This text can be hidden or shown.</p>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  )
}
export default ToggleText;