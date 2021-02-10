import React, { Fragment } from 'react'

const Sushi = (props) => {



    return (
      <Fragment>
        <div className="sushi">
          
          <div className="plate"
            onClick={() => props.handleSushiClick(props.sushi)}>
            
            {props.eaten ? null : <img src={props.sushi.img_url} width="100%" alt="Sushi Plate" />}
          </div>
          
          <h4 className="sushi-details">
            {props.sushi.name} - ${props.sushi.price}
          </h4>
        </div>

      </Fragment>
    )
  }


export default Sushi