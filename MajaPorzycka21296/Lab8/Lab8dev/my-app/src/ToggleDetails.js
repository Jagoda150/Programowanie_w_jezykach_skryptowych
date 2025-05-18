import React, { useState } from 'react';

function ToggleDetails() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
      </button>
      {show && <p>Puk puk kto tam hipopotam.</p>}
    </div>
  );
}

export default ToggleDetails;
