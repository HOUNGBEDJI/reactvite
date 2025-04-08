import React from "react";

function Child({ onSend }) {
  return (
    <button onClick={() => onSend("Message de l'enfant")}>
      Envoyer au parent
    </button>
  );
}

export default Child;