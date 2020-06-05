import React from "react"

const SpecialDishes = (data) => {
  return (
      <>
        {
          data.align === 'right' ? <Right data={data.data.node.frontmatter} index={data.index} /> : <Left  data={data.data.node.frontmatter} index={data.index} />
        }
      </>
  );
};


const Left = (props) => {
  return (
    <div className="row mt-5">
      <div className="col-lg-5 col-md-6 align-self-center py-5">
        <h2 className="special-number">0{props.index}.</h2>
        <div className="dishes-text">
          <Title title={props.data.title} />
          <Ingredient ingredients={props.data.ingredients} />
          <Price price={props.data.price}/>
          <SnipcartButton product={props.data} />
        </div>
      </div>
      <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
        <Image data={props.data} />
      </div>
    </div>
  )
};
const Right = (props) => {
  return(
    <div className="row mt-5">
      <div className="col-lg-5 col-md-6 align-self-center order-2 order-md-1 mt-4 mt-md-0">
        <Image data={props.data} />
      </div>
      <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center order-1 order-md-2 py-5">
        <h2 className="special-number">0{props.index}.</h2>
        <div className="dishes-text">
          <Title title={props.data.title} />
          <Ingredient ingredients={props.data.ingredients} />
          <Price price={props.data.price}/>
          <SnipcartButton product={props.data} />
        </div>
      </div>
    </div>
)
};

const Image = (props) => {
  return <img src={props.data.image} className="img-fluid shadow w-100" alt={props.data.title} />
};
const Title = (props) => {
  let title = props.title;
  const first_word = (title.split(' '))[0];
  const rest_title = title.substr(first_word.length + 1);

  return(
    <h3>
      <span>{first_word}</span>
      <br/>
      {rest_title}
    </h3>
  )
};
const Ingredient = (props) => {
  return(
    <p className="pt-3">
      <u>Les ingrédients :</u><br/>
      {props.ingredients}
    </p>
  )
};
const Price = (props) => {
  return <h3 className="special-dishes-price">€ {Number.parseFloat(props.price).toFixed(2)}</h3>
};
const SnipcartButton = (props) => {
  let options = getOptions(props.product);
  return (
    <button className="snipcart-add-item btn-primary mt-3"
            data-item-id={props.product.id}
            data-item-price={props.product.price}
            data-item-url="/dishes"
            data-item-image={props.product.image}
            data-item-name={props.product.title}
            data-item-custom1-name="Nombre de personnes"
            data-item-custom1-options={options}
            data-item-custom1-required="true"
    >
      Ajouter au pannier
    </button>
  )
};

function getOptions(product) {
  let price_2 = [( 2 * product.price * 95 ) / 100] - product.price; // reduction 5 %
  let price_4 = [( 4 * product.price * 90 ) / 100] - product.price; // reduction 10 %
  let price_6 = [( 6 * product.price * 85 ) / 100] - product.price; // reduction 15 %

  return `1|2[${price_2}]|4[${price_4}]|6[${price_6}]`;
}

SpecialDishes.propTypes = {};
export default SpecialDishes
