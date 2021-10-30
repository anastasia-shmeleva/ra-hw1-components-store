import './App.css';

function ShopItemFunc(props) {
  const data = props.item;
  return(
    <div className="main-content">
      <h2>{data.brand}</h2>
      <h1>{data.title}</h1>
      <h3>{data.description}</h3>
      <div className="description">{data.descriptionFull}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{`${data.currency}${data.price.toFixed(2)}`}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}

export default App;
