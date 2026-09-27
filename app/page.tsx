import Image from 'next/image'
import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react'

const orderUrl = 'https://order.epipay.com/m4200000526248/en/WebOrder?STORE_CODE=MTAwMA=='
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=25+Howe+Ave+Passaic+NJ+07055'
const facebookUrl = 'https://www.facebook.com/jaime.ponciano.549'

const menuCategories = [
  'Tacos',
  'Tortas',
  'Quesadillas',
  'Burritos',
  'Desayunos / Breakfast',
  'Aguas frescas',
]

const dishes = [
  { name: 'Tacos', english: 'Fresh tacos', image: '/images/tacos.jpg', alt: 'Tacos con cilantro, cebolla, limón y salsas de Las Delicias de Jaimito' },
  { name: 'Súper quesadilla', english: 'Super quesadilla', image: '/images/quesadilla.jpg', alt: 'Quesadilla grande con queso, carne y salsas' },
  { name: 'Torta cubana', english: 'Cuban-style torta', image: '/images/torta-cubana.jpg', alt: 'Torta cubana servida en Las Delicias de Jaimito' },
  { name: 'Súper huarache', english: 'Super huarache', image: '/images/huarache.jpg', alt: 'Huarache con carne, lechuga y queso' },
  { name: 'Chilaquiles', english: 'Breakfast favorite', image: '/images/chilaquiles.jpg', alt: 'Chilaquiles con huevos y carne' },
  { name: 'Nachos', english: 'Loaded nachos', image: '/images/nachos.jpg', alt: 'Nachos con guacamole, pico de gallo y jalapeños' },
  { name: 'Tostadas', english: 'Crispy tostadas', image: '/images/tostadas.jpg', alt: 'Tostadas con lechuga, queso y tomate' },
  { name: 'Pambazo', english: 'Mexican sandwich', image: '/images/pambazo.jpg', alt: 'Pambazo preparado por Las Delicias de Jaimito' },
]

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="headerInner container">
          <a className="brand" href="#top" aria-label="Las Delicias de Jaimito — inicio">
            <Image src="/images/logo-oficial.png" alt="Logo oficial de Las Delicias de Jaimito" width={70} height={57} className="brandLogo" priority />
            <span className="brandText"><strong>Las Delicias</strong><span>de Jaimito</span></span>
          </a>
          <nav className="mainNav" aria-label="Navegación principal">
            <a className="navLink" href="#menu">Menú / Menu</a>
            <a className="navLink" href="#galeria">Galería / Gallery</a>
            <a className="navLink" href="#visitanos">Visítanos / Visit</a>
            <a className="orderButton headerOrder" href={orderUrl} target="_blank" rel="noopener noreferrer">Ordena / Order <ArrowRight size={17} aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="heroInner container">
          <div className="heroCopy">
            <span className="eyebrow"><span className="eyebrowDot" /> Comida mexicana en Passaic, NJ</span>
            <h1 id="hero-title">Sabor de casa,<br /><em>hecho para compartir.</em></h1>
            <p className="heroEnglish">A taste of Mexico, made to share.</p>
            <p className="heroDescription">Tacos, tortas y antojitos para disfrutar en familia. Descubre nuestros platillos y haz tu pedido en línea.</p>
            <p className="heroDescription english">Tacos, tortas and more for the whole family. Explore our food and order online.</p>
            <div className="heroActions">
              <a className="orderButton" href={orderUrl} target="_blank" rel="noopener noreferrer">Ordena en línea / Order online <ArrowRight size={19} aria-hidden="true" /></a>
              <a className="textButton" href="#galeria">Ver platillos / View dishes <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
            <p className="heroAddress"><MapPin size={18} aria-hidden="true" /> 25 Howe Ave, Passaic, NJ 07055</p>
          </div>
          <div className="heroVisual">
            <div className="heroPhoto">
              <Image src="/images/restaurante.jpg" alt="Fachada de Las Delicias de Jaimito en Passaic, Nueva Jersey" fill priority sizes="(max-width: 900px) 100vw, 44vw" className="coverImage storefrontImage" />
            </div>
            <div className="heroPhotoCaption"><span>Bienvenidos / Welcome</span><strong>Las Delicias de Jaimito</strong></div>
          </div>
        </div>
      </section>

      <section className="introStrip" aria-label="Sobre el restaurante">
        <div className="container introInner">
          <span>Sabores mexicanos <small>Mexican flavors</small></span>
          <span>Hecho para compartir <small>Made to share</small></span>
          <span>En Passaic, NJ <small>Visit us in Passaic</small></span>
        </div>
      </section>

      <section className="menuSection sectionSpace" id="menu" aria-labelledby="menu-title">
        <div className="container">
          <div className="sectionIntro">
            <span className="sectionKicker">Nuestro menú / Our menu</span>
            <h2 id="menu-title">Algo rico para cada antojo.</h2>
            <p>From Mexican classics to breakfast favorites, there is always something to enjoy.</p>
          </div>
          <div className="categoryList">{menuCategories.map((category) => <span key={category}>{category}</span>)}</div>
          <p className="menuNote">Precios y disponibilidad: confirmar con el restaurante. / Please confirm prices and availability with the restaurant.</p>
        </div>
      </section>

      <section className="gallerySection sectionSpace" id="galeria" aria-labelledby="gallery-title">
        <div className="container">
          <div className="sectionIntro galleryIntro">
            <div><span className="sectionKicker">De nuestra cocina / From our kitchen</span><h2 id="gallery-title">Platillos que hablan por sí solos.</h2><p>Fotos reales compartidas por Las Delicias de Jaimito. / Real food from the restaurant.</p></div>
            <a className="textButton" href={facebookUrl} target="_blank" rel="noopener noreferrer">Más fotos / More photos <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="galleryGrid">
            {dishes.map((dish) => (
              <figure className="dishCard" key={dish.name}>
                <div className="dishImage"><Image src={dish.image} alt={dish.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" className="coverImage" /></div>
                <figcaption><strong>{dish.name}</strong><span>{dish.english}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="orderBanner" aria-labelledby="order-title">
        <div className="container orderBannerInner"><div><span className="sectionKicker">¿Ya se te antojó? / Ready to eat?</span><h2 id="order-title">Tu próximo antojo está a un clic.</h2><p>Order your favorites online for pickup or delivery.</p></div><a className="orderButton lightButton" href={orderUrl} target="_blank" rel="noopener noreferrer">Ordena ahora / Order now <ArrowRight size={19} aria-hidden="true" /></a></div>
      </section>

      <section className="visitSection sectionSpace" id="visitanos" aria-labelledby="visit-title">
        <div className="container visitInner">
          <div className="visitCopy"><span className="sectionKicker">Aquí te esperamos / Come visit</span><h2 id="visit-title">Encuéntranos en Passaic.</h2><p>Ven a disfrutar de Las Delicias de Jaimito. / Come enjoy Las Delicias de Jaimito in person.</p><div className="visitDetails"><div><MapPin size={22} aria-hidden="true" /><span><strong>Dirección / Address</strong>25 Howe Ave, Passaic, NJ 07055</span></div><div><Phone size={22} aria-hidden="true" /><span><strong>Teléfono / Phone</strong>(201) 757-3351</span></div><div><Clock3 size={22} aria-hidden="true" /><span><strong>Horario / Hours</strong>Confirmar con el restaurante / Please call to confirm</span></div></div><div className="visitActions"><a className="orderButton" href={mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar / Directions <ArrowRight size={18} aria-hidden="true" /></a><a className="textButton" href="tel:+12017573351">Llámanos / Call us</a></div></div>
          <div className="visitPhoto"><Image src="/images/restaurante.jpg" alt="Entrada del restaurante Las Delicias de Jaimito" fill sizes="(max-width: 900px) 100vw, 38vw" className="coverImage storefrontImage" /></div>
        </div>
      </section>

      <footer className="siteFooter" id="contacto">
        <div className="container footerMain"><div className="footerBrand"><Image src="/images/logo-oficial.png" alt="Logo oficial de Las Delicias de Jaimito" width={93} height={76} className="footerLogo" /><div><strong>Las Delicias de Jaimito</strong><span>Mexican food · Passaic, NJ</span></div></div><div className="footerLinks"><a href="#menu">Menú / Menu</a><a href="#galeria">Galería / Gallery</a><a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a><a href={orderUrl} target="_blank" rel="noopener noreferrer">Order Online</a></div></div>
        <div className="container footerBottom"><span>© {new Date().getFullYear()} Las Delicias de Jaimito</span><span>25 Howe Ave, Passaic, NJ · (201) 757-3351</span><span>Powered and secured by Techmonke Robotics LLC.</span></div>
      </footer>
    </main>
  )
}
