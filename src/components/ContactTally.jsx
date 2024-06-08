import React, { useEffect } from 'react';

const ContactTally = () => {
  useEffect(() => {
    // Asegúrate de que Tally.loadEmbeds está disponible
    if (window.Tally) {
      window.Tally.loadEmbeds();
    } else {
      // Carga el script de Tally si no está disponible
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        window.Tally.loadEmbeds();
      };
      document.body.appendChild(script);
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monta

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <iframe data-tally-src="https://tally.so/embed/n0MJG6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&" loading="lazy" width="100%" height="547" frameborder="0" marginheight="0" marginwidth="0" title="Contact."></iframe>
    </div>
  );
};

export default ContactTally;
