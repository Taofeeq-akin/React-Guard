import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // to makees elemts tag inside see thier style class name

  return <div className={classes}>{props.children}</div>; //props.children will make the code inside Card component works cus other elements can not be put inside
}

export default Card;
