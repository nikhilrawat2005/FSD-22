import './App.css'


function App() {
  return (
    <div className="storefront">
      <header className="site-header">
        <div className="brand-bar">
          <a className="brand" href="/" aria-label="My Store home">
            MY STORE
          </a>
        </div>

        <div className="nav-bar">
          <div className="header-inner">
            <nav className="main-nav" aria-label="Main navigation">
              <a href="#Home">Home</a>
              <a href="#myitems">My Items</a>
              <a href="#men">My Cart</a>
              <a href="#myprofile">My Profile</a>
              <a href="#logout">Logout</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="product-section">
        <h2 className="section-title">Our Products</h2>
        <div className="product-grid">

          <div className="card">
            <img src="https://m.media-amazon.com/images/I/81Kar4TUFPL.jpg" alt="Bathroom Product" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">Bathroom Product</h3>
              <p className="card-text">A thing used in bathroom</p>
              <p className="card-price">₹200</p>
              <button className="btn-add">Add to Cart</button>
            </div>
          </div>

          <div className="card">
            <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=450,q=85,fit=cover/Home-Centre/Test-UI/Kitchen3_Desktop_BannerCarousel-4_A_3_12-25Feb2026.jpg" alt="Kitchen Product" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">VINOD Kitchen Set</h3>
              <p className="card-text">Premium kitchen product</p>
              <p className="card-price">₹1500</p>
              <button className="btn-add">Add to Cart</button>
            </div>
          </div>

          <div className="card">
            <img src="https://m.media-amazon.com/images/I/71mEsHyzSCL._AC_SL1500_.jpg" alt="Bedding Product" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">Luxury Bedsheet</h3>
              <p className="card-text">Soft cotton double bedsheet</p>
              <p className="card-price">₹899</p>
              <button className="btn-add">Add to Cart</button>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" alt="boAt Headphones" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">boAt Rockerz 450</h3>
              <p className="card-text">Wireless Bluetooth headphones 15hr battery</p>
              <p className="card-price">₹1299</p>
              <button className="btn-add">Add to Cart</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
