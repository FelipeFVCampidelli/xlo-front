import './ProductCard.css'

export default function ProductCard(props) {
  return (
    <div className="UserCard grid-item">
      <img src={props.user.image} alt="produto" />
      <p className="name">{props.user.name}</p>
      <p className="description">{props.user.description}</p>
    </div>
  )
}
