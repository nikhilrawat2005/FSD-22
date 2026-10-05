import { useMemo, useState } from 'react'
import './App.css'

const products = [
  { id: 1, name: 'Milo Ribbed Lounge Set', category: 'Clothing', price: 68, oldPrice: 86, rating: 4.9, badge: 'Best seller', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85' },
  { id: 2, name: 'Arc Ceramic Table Lamp', category: 'Home', price: 54, oldPrice: 68, rating: 4.8, badge: 'New in', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85' },
  { id: 3, name: 'Canvas Daylight Tote', category: 'Accessories', price: 32, oldPrice: 40, rating: 4.7, badge: 'Popular', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85' },
  { id: 4, name: 'Noma Everyday Sneakers', category: 'Shoes', price: 92, oldPrice: 120, rating: 4.9, badge: 'Limited', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85' },
  { id: 5, name: 'Melted Stone Vase', category: 'Home', price: 44, oldPrice: 55, rating: 4.6, badge: 'New in', image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=85' },
  { id: 6, name: 'Cove Cotton Overshirt', category: 'Clothing', price: 76, oldPrice: 95, rating: 4.8, badge: 'Popular', image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85' },
  { id: 7, name: 'Koa Leather Crossbody', category: 'Accessories', price: 84, oldPrice: 105, rating: 4.9, badge: 'Best seller', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85' },
  { id: 8, name: 'Cloud Knit Slides', category: 'Shoes', price: 48, oldPrice: 60, rating: 4.5, badge: 'Fresh drop', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85' },
]

const categories = ['All pieces', 'Clothing', 'Home', 'Accessories', 'Shoes']

function App() {
  const [activeCategory, setActiveCategory] = useState('All pieces')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [toast, setToast] = useState('')

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === 'All pieces' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  }), [activeCategory, search])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const showToast = (message) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2200)
  }

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      return existing
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }]
    })
    showToast(`${product.name} added to bag`)
  }

  const updateQuantity = (id, change) => {
    setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0))
  }

  const toggleFavorite = (id) => {
    setFavorites((current) => current.includes(id) ? current.filter((favorite) => favorite !== id) : [...current, id])
  }

  return (
    <div className="store-shell">
      <div className="announcement">Free shipping on orders over $75 <span>•</span> Easy 30-day returns</div>
      <header className="site-header">
        <a className="wordmark" href="#top">Morrow<span>.</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#shop">Shop</a><a href="#story">Our story</a><a href="#journal">Journal</a>
        </nav>
        <div className="header-actions">
          <label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search pieces" aria-label="Search pieces" /></label>
          <button className="icon-button" type="button" aria-label="Open wishlist" onClick={() => showToast(`${favorites.length} saved piece${favorites.length === 1 ? '' : 's'}`)}>♡<small>{favorites.length || ''}</small></button>
          <button className="bag-button" type="button" onClick={() => setCartOpen(true)}>Bag <span>{cartCount}</span></button>
        </div>
      </header>

      <main id="top">
        <section className="hero-banner">
          <div className="hero-copy"><p className="eyebrow">The soft edit / 01</p><h1>Things made<br /><em>to be lived in.</em></h1><p className="hero-text">Thoughtful objects, easy layers, and little luxuries for the everyday.</p><a className="dark-button" href="#shop">Explore the edit <span>↗</span></a></div>
          <div className="hero-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1500&q=90" alt="Woman wearing a neutral outfit" /><span className="image-note">01 / 05</span></div>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading"><div><p className="eyebrow">Curated for now</p><h2>Shop the edit</h2></div><p className="result-count">{visibleProducts.length} pieces</p></div>
          <div className="shop-controls"><div className="category-tabs">{categories.map((category) => <button className={activeCategory === category ? 'active' : ''} key={category} type="button" onClick={() => setActiveCategory(category)}>{category}</button>)}</div><button className="filter-button" type="button" onClick={() => showToast('All pieces are already sorted by our editors')}>Filter + sort <span>↓</span></button></div>
          <div className="product-grid">{visibleProducts.map((product) => <article className="product-card" key={product.id}><div className="product-image"><img src={product.image} alt={product.name} /><span className="product-badge">{product.badge}</span><button className={`favorite ${favorites.includes(product.id) ? 'selected' : ''}`} type="button" aria-label={`Save ${product.name}`} onClick={() => toggleFavorite(product.id)}>{favorites.includes(product.id) ? '♥' : '♡'}</button><button className="quick-add" type="button" onClick={() => addToCart(product)}>Quick add <span>+</span></button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.category}</p></div><div className="price"><strong>${product.price}</strong><del>${product.oldPrice}</del></div></div><div className="rating">★★★★★ <span>{product.rating}</span></div></article>)}</div>
        </section>

        <section className="story-section" id="story"><div className="story-image"><img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=85" alt="Clothing rack with neutral garments" /></div><div className="story-copy"><p className="eyebrow">Why Morrow</p><h2>A little less,<br /><em>a lot more meaning.</em></h2><p>We believe the best things earn their place. Morrow is a considered collection of pieces that bring ease, beauty, and intention to your daily rituals.</p><a className="text-link" href="#journal">Read our story <span>↗</span></a></div></section>
        <section className="newsletter" id="journal"><p className="eyebrow">A note from Morrow</p><h2>Good things, occasionally.</h2><p>New arrivals, thoughtful stories, and a little inspiration for your inbox.</p><form onSubmit={(event) => { event.preventDefault(); showToast('You are on the list. Welcome to Morrow.') }}><input type="email" required placeholder="Your email address" aria-label="Your email address" /><button type="submit">Join us <span>↗</span></button></form></section>
      </main>

      <footer><a className="wordmark" href="#top">Morrow<span>.</span></a><p>Objects for a slower, softer life.</p><div><a href="#shop">Shop</a><a href="#story">About</a><a href="#journal">Contact</a></div><small>© 2025 Morrow Studio</small></footer>

      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(event) => event.stopPropagation()}><div className="drawer-header"><div><p className="eyebrow">Your selection</p><h2>Your bag <span>{cartCount}</span></h2></div><button type="button" aria-label="Close bag" onClick={() => setCartOpen(false)}>×</button></div>{cart.length === 0 ? <div className="empty-bag"><span>○</span><h3>Your bag is waiting.</h3><p>Add something lovely to get started.</p><button className="dark-button" type="button" onClick={() => { setCartOpen(false); document.getElementById('shop').scrollIntoView() }}>Browse pieces</button></div> : <><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div><h3>{item.name}</h3><p>${item.price}</p><div className="quantity"><button type="button" onClick={() => updateQuantity(item.id, -1)}>−</button><span>{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.id, 1)}>+</button></div></div><button className="remove" type="button" aria-label={`Remove ${item.name}`} onClick={() => updateQuantity(item.id, -item.quantity)}>×</button></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div><p>Shipping calculated at checkout.</p><button className="dark-button full" type="button" onClick={() => { setCartOpen(false); setCheckoutOpen(true) }}>Checkout <span>↗</span></button></div></>}</aside></div>}
      {checkoutOpen && <div className="modal-wrap"><div className="checkout-modal"><button className="modal-close" type="button" onClick={() => setCheckoutOpen(false)}>×</button><p className="eyebrow">Almost yours</p><h2>Complete your order</h2><form onSubmit={(event) => { event.preventDefault(); setCheckoutOpen(false); setCart([]); showToast('Order placed. Thank you for choosing Morrow.') }}><input required placeholder="Full name" /><input required type="email" placeholder="Email address" /><input required placeholder="Delivery address" /><div className="form-row"><input required placeholder="City" /><input required placeholder="Postcode" /></div><button className="dark-button full" type="submit">Place order · ${subtotal.toFixed(2)}</button></form></div></div>}
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

export default App
