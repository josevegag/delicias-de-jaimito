import { MapPin, Phone, Clock, Star, ArrowUpRight, Utensils, Languages } from 'lucide-react'

const orderUrl = 'https://order.online/en-US/store/24390428'
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=25+Howe+Ave+Passaic+NJ+07055'

const menuCategories = [
  ['Tacos', 'Tacos frescos con sabor tradicional.'],
  ['Super Tortas', 'Tortas grandes, bien servidas y preparadas al momento.'],
  ['Super Burritos', 'Burritos mexicanos con carnes y acompañamientos.'],
  ['Quesadillas', 'Quesadillas doradas con queso y proteína.'],
  ['Desayunos', 'Breakfast plates, huevos, pancakes y opciones calientes.'],
  ['Aguas Frescas', 'Bebidas naturales para acompañar la comida.']
]

const popular = ['Torta Cubana', 'Torta de Chorizo', 'Tacos de Carnitas', 'Super Huaraches', 'Burritos', 'Platos Fuertes']

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="brand"><span className="mark">LJ</span><div><p>Restaurante Mexicano</p><h1>Las Delicias de Jaimito</h1></div></div>
        <nav><a href="#menu">Menu</a><a href="#location">Location</a><a href="#contact">Contact</a><a className="navCta" href={orderUrl}>Order Online</a></nav>
      </header>
      <section className="hero">
        <div className="heroText">
          <span className="eyebrow"><Star size={16}/> Passaic, New Jersey</span>
          <h2>Authentic Mexican flavor, made fresh every day.</h2>
          <p>Comida mexicana auténtica en Passaic, NJ. Sabor familiar, porciones generosas y pedidos online para pickup o delivery.</p>
          <div className="actions"><a className="button primary" href={orderUrl}>Order Online <ArrowUpRight size={18}/></a><a className="button ghost" href="#menu">View Menu</a></div>
          <div className="quickFacts"><span><MapPin size={17}/> 25 Howe Ave, Passaic, NJ</span><span><Phone size={17}/> (201) 757-3351</span></div>
        </div>
        <div className="heroCard"><div className="plate plateOne">Tacos</div><div className="plate plateTwo">Tortas</div><div className="plate plateThree">Aguas frescas</div></div>
      </section>
      <section className="split">
        <div><span className="sectionTag"><Languages size={16}/> English / Español</span><h3>Welcome / Bienvenidos</h3></div>
        <p><strong>EN:</strong> A neighborhood Mexican restaurant serving breakfast, tacos, tortas, burritos, quesadillas, main plates and refreshing aguas frescas.</p>
        <p><strong>ES:</strong> Restaurante mexicano local con desayunos, tacos, tortas, burritos, quesadillas, platillos fuertes y aguas frescas.</p>
      </section>
      <section id="menu" className="menuSection">
        <div className="sectionHead"><span className="sectionTag"><Utensils size={16}/> Menu Preview</span><h3>Popular categories</h3><p>Prices and item availability should be confirmed with the restaurant before final production.</p></div>
        <div className="menuGrid">{menuCategories.map(([title, desc]) => <article className="menuCard" key={title}><h4>{title}</h4><p>{desc}</p><span>Confirm price</span></article>)}</div>
      </section>
      <section className="popular"><div className="sectionHead light"><span className="sectionTag">Customer favorites</span><h3>Platillos populares</h3></div><div className="pillGrid">{popular.map(item => <span key={item}>{item}</span>)}</div></section>
      <section className="catering"><div><span className="sectionTag">Catering</span><h3>Food for family gatherings, office lunches and special events.</h3></div><a className="button primary" href="tel:+12017573351">Call Restaurant</a></section>
      <section id="location" className="location"><div className="locationCard"><span className="sectionTag"><MapPin size={16}/> Visit us</span><h3>25 Howe Ave, Passaic, NJ 07055</h3><p>Located in Passaic, New Jersey. Use the map button for directions.</p><div className="infoRows"><span><Phone size={18}/> (201) 757-3351</span><span><Clock size={18}/> Hours: confirm with restaurant</span></div><div className="actions"><a className="button primary" href={mapsUrl}>Open Map</a><a className="button ghost" href={orderUrl}>Order Online</a></div></div><div className="mapMock">Google Map Area</div></section>
      <footer id="contact"><div><h3>Las Delicias de Jaimito</h3><p>Authentic Mexican food in Passaic, NJ.</p></div><div><a href={orderUrl}>Order Online</a><a href="tel:+12017573351">Call</a><a href={mapsUrl}>Directions</a></div><small>Powered and secured by Techmonke Robotics LLC.</small></footer>
    </main>
  )
}
