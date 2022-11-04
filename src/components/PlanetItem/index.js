import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planetItem-container">
      <h1 className="heading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
