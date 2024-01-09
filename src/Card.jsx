
import profilepic from './components/Image1.png'
function Card() {
  return (
    <div className='Card'>
        <img className="Card-Img" src={profilepic} alt="Human"></img>
        <h2 className="text">Deliver food to your door Step!</h2>
        <p className="Txt">Authentic food, Quick Service, Fast Delivery</p>
    </div>
  )
}

export default Card
