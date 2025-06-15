import React from "react";

export default function SimpleButton() {
  return (
    <div>
      <button onClick={() => console.log("Kliknięto przycisk!")}>
        Kliknij mnie
      </button>
    </div>
  );
}
