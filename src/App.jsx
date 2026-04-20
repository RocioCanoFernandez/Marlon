import React from 'react';
import { Instagram, Youtube, Linkedin, Facebook, Download, MessageCircle, Music, Star, Mail, Phone, ExternalLink } from 'lucide-react';

const MarlonHub = () => {
  const hubData = {
    name: "Marlon Rodríguez Mendoza",
    role: "Músico · Percusionista · Compositor · Productor",
    email: "biensuperbien@gmail.com",
    phone: "602473329",
    whatsapp: "34602473329",
    phrase: "Es ahora!",
    links: {
      instagram: "https://www.instagram.com/marletecerro?igsh=MWU2OXdrdjdsNTVxZQ%3D%3D&utm_source=qr",
      youtube: "https://www.youtube.com/channel/UCpOfoiuwC91ZGrdeOqCCGDw",
      spotify: "https://open.spotify.com/artist/6Wxrbazqgs9PMjHcuy22DN?si=K0JyP9qUQdWfeRl0Kg2qQg",
      tiktok: "https://www.tiktok.com/@marletecerro",
      linkedin: "https://www.linkedin.com/in/marlon-rodriguez-301458155?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      facebook: "https://www.facebook.com/share/1PaYeE4ucT/?mibextid=wwXIfr",
      mo2live: "https://www.instagram.com/mo2live.music?igsh=MWgwZWd0dWZqZHc3cg%3D%3D&utm_source=qr"
    }
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${hubData.name}
TITLE:${hubData.role}
EMAIL:${hubData.email}
TEL;TYPE=WORK,VOICE:+${hubData.whatsapp}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Marlon_Rodriguez.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black_base text-warm_white font-sans pb-12 selection:bg-ocre selection:text-white">
      
      {/* 1. Cabecera Visual */}
      {/* Hero background con foto (placeholder temporal hasta asignación exacta) */}
      <div className="relative h-72 sm:h-80 w-full bg-brown_dark overflow-hidden">
        <img 
          src="/hero_marlon.jpeg" 
          alt="Fondo escénico"
          className="w-full h-full object-cover opacity-60"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Degradado suave inferior para fundirse con el fondo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black_base via-black_base/40 to-transparent"></div>
        
        {/* VCard Floating Button (top right) */}
        <button 
          onClick={handleSaveContact} 
          className="absolute top-6 right-6 w-12 h-12 bg-black_base/40 backdrop-blur-md border border-warm_white/20 hover:border-gold hover:bg-black_base/60 transition-all duration-300 z-50 rounded-full flex items-center justify-center group cursor-pointer text-warm_white"
          title="Guardar contacto (vCard)"
        >
          <Download className="w-5 h-5 group-hover:text-gold transition-colors drop-shadow-sm" />
        </button>
      </div>

      <div className="max-w-xl mx-auto px-6 relative -mt-24 sm:-mt-28 z-10">
        
        {/* 2. Bloque de Identidad y Contacto */}
        <div className="flex flex-col items-center text-center">
          {/* Foto de perfil */}
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-black_base shadow-2xl overflow-hidden bg-brown_dark relative mb-5">
            <img 
              src="/foto_marlon.jpeg" 
              alt={hubData.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=MR&background=C9852E&color=F6E7CE&size=200';
              }}
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-warm_white tracking-tight mb-2">
            {hubData.name}
          </h1>
          <h2 className="text-sm sm:text-base text-gold uppercase tracking-widest font-bold mb-6">
            Músico · Percusionista · Compositor · Productor
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-warm_white/80 font-medium text-sm mb-8">
            <a href={`mailto:${hubData.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              {hubData.email}
            </a>
            <span className="hidden sm:block opacity-30 text-gold">•</span>
            <a href={`tel:${hubData.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              {hubData.phone}
            </a>
          </div>

          {/* 3. Frase Principal */}
          <div className="mb-10 w-full relative">
            {/* Elemento decorativo de separación */}
            <div className="flex justify-center mb-6 opacity-30">
              <div className="w-12 h-px bg-gold"></div>
              <div className="w-2 h-2 rounded-full bg-gold mx-2 -mt-1"></div>
              <div className="w-12 h-px bg-gold"></div>
            </div>
            
            <p className="text-3xl font-black text-ocre italic tracking-wide text-shadow-sm">
              "Es ahora!"
            </p>
          </div>
        </div>

        {/* 4. Accesos Principales */}
        <div className="space-y-4 mb-10">
          <a 
            href={hubData.links.spotify} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between p-4 bg-gradient-to-r from-ocre to-terra hover:from-gold hover:to-ocre text-black_base rounded-2xl font-black text-lg transition-all duration-300 shadow-lg shadow-ocre/20 hover:shadow-xl hover:shadow-ocre/40 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <Music className="w-6 h-6" />
              <span>Escuchar música</span>
            </div>
            <ExternalLink className="w-5 h-5 opacity-70" />
          </a>

          <a 
            href={hubData.links.youtube} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between p-4 bg-brown_dark/40 hover:bg-brown_red/80 border border-gold/20 hover:border-gold/50 text-warm_white rounded-2xl font-bold transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Youtube className="w-6 h-6 text-red-500" />
              <span>Ver en YouTube</span>
            </div>
          </a>

          <a 
            href={hubData.links.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between p-4 bg-brown_dark/40 hover:bg-brown_red/80 border border-gold/20 hover:border-gold/50 text-warm_white rounded-2xl font-bold transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Instagram className="w-6 h-6 text-pink-500" />
              <span>Seguir en Instagram</span>
            </div>
          </a>

          <a 
            href={hubData.links.tiktok} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between p-4 bg-brown_dark/40 hover:bg-brown_red/80 border border-gold/20 hover:border-gold/50 text-warm_white rounded-2xl font-bold transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              {/* Emulating Tiktok Icon since lucide might omit it sometimes, Music icon or custom shape */}
              <svg className="w-6 h-6 text-warm_white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.33-5.17 1.95-7.14 1.58-1.91 3.98-3.04 6.45-3.08v4.03c-1.42.06-2.58.91-3.26 2.15-.6 1.09-.76 2.45-.2 3.61.59 1.17 1.79 1.89 3.09 1.94 1.25.04 2.48-.51 3.2-1.51.52-.73.8-1.63.8-2.54.02-3.8.01-7.6.01-11.4 0-.58-.02-1.16-.01-1.74z"/>
              </svg>
              <span>Ver vídeos en TikTok</span>
            </div>
          </a>
        </div>

        {/* 6. Servicios Artísticos */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gold mb-6 text-center tracking-wide uppercase">Servicios</h3>
          
          <div className="space-y-4">
            <div className="bg-brown_dark/30 border border-warm_white/5 rounded-2xl p-5 hover:bg-brown_dark/50 transition-colors">
              <h4 className="font-bold text-warm_white text-lg flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-ocre" /> 
                Conciertos y sesiones en vivo
              </h4>
              <p className="text-warm_white/70 text-sm leading-relaxed">
                Actuaciones con presencia, ritmo y conexión directa con el público, adaptadas a distintos formatos y espacios.
              </p>
            </div>

            <div className="bg-brown_dark/30 border border-warm_white/5 rounded-2xl p-5 hover:bg-brown_dark/50 transition-colors">
              <h4 className="font-bold text-warm_white text-lg flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-ocre" /> 
                Percusión para grabaciones y en vivo
              </h4>
              <p className="text-warm_white/70 text-sm leading-relaxed">
                Colaboraciones rítmicas para estudio y directo, aportando fuerza, matiz y personalidad musical a cada proyecto.
              </p>
            </div>

            <div className="bg-brown_dark/30 border border-warm_white/5 rounded-2xl p-5 hover:bg-brown_dark/50 transition-colors">
              <h4 className="font-bold text-warm_white text-lg flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-ocre" /> 
                Música para bodas y eventos
              </h4>
              <p className="text-warm_white/70 text-sm leading-relaxed">
                Propuestas musicales para bodas, celebraciones y eventos especiales, con un enfoque cuidado, versátil y memorable.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Enlaces Secundarios */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a href={hubData.links.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-warm_white/5 hover:bg-warm_white/10 text-warm_white/80 hover:text-gold rounded-full text-sm font-medium transition-colors flex items-center gap-2">
             <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href={hubData.links.facebook} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-warm_white/5 hover:bg-warm_white/10 text-warm_white/80 hover:text-gold rounded-full text-sm font-medium transition-colors flex items-center gap-2">
             <Facebook className="w-4 h-4" /> Facebook
          </a>
          <a href={hubData.links.mo2live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-warm_white/5 hover:bg-warm_white/10 text-warm_white/80 hover:text-gold rounded-full text-sm font-medium transition-colors flex items-center gap-2">
             <Instagram className="w-4 h-4" /> mo2live.music
          </a>
        </div>

        {/* Separator before footer */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-warm_white/10 to-transparent my-10"></div>

        {/* 8. Pie del ecosistema SeviAI */}
        <div className="seviai-footer-container">
          <style>{`
            .seviai-footer-container {
              padding: 0 2rem 2rem 2rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              opacity: 0.9;
            }
            .seviai-footer-copyright {
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              font-weight: 600;
              color: rgba(246, 231, 206, 0.4); /* warm_white opacity */
              text-align: center;
              margin: 0 0 1.25rem 0;
            }
            .seviai-footer-link {
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              font-weight: 800;
              color: rgba(246, 231, 206, 0.6);
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              text-decoration: none;
              transition: color 0.3s ease;
              padding: 10px 16px;
            }
            .seviai-footer-logo {
              height: 20px;
              width: auto;
              opacity: 0.6;
              filter: grayscale(100%) brightness(200%);
              transition: all 0.3s ease;
            }
            @media (hover: hover) {
              .seviai-footer-link:hover {
                color: #DCAE56;
              }
              .seviai-footer-link:hover .seviai-footer-logo {
                opacity: 1;
                filter: grayscale(0%);
              }
            }
            .seviai-footer-link:active {
              color: #DCAE56;
            }
            .seviai-footer-link:active .seviai-footer-logo {
              opacity: 1;
              filter: grayscale(0%);
            }
          `}</style>
          <p className="seviai-footer-copyright">
            © 2026 {hubData.name}
          </p>
          <a href="https://www.seviai.es/" target="_blank" rel="noopener noreferrer" className="seviai-footer-link">
            SeviAI Ecosystem
            <img src="/logo_sin_fondo.png" alt="SeviAI" className="seviai-footer-logo" />
          </a>
        </div>

      </div>

      {/* 9. Elemento flotante inferior (WhatsApp) */}
      <a 
        href={`https://wa.me/${hubData.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-terra hover:bg-ocre shadow-xl shadow-terra/40 hover:shadow-2xl hover:shadow-ocre/60 hover:-translate-y-1 transition-all duration-300 z-50 rounded-full flex items-center justify-center group cursor-pointer border border-gold/30"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      
    </div>
  );
};

export default MarlonHub;
