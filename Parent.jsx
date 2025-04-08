import React from "react";
import Child from "./Child"; // si tu as aussi un composant Child.jsx

function Parent() {
  const handleReceive = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <h2>Composant Parent</h2>
      <Child onSend={handleReceive} />
    </div>
  );
}

export default Parent;