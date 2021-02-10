import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  // isSushiGone = (eachSushi) => {
  //   return props.eatenSushi.includes(eachSushi)
  // }

  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi =>
          <Sushi
            key={sushi.id}
            sushi={sushi}
            handleSushiClick={props.handleSushiClick} 
            // eaten={props.eaten}
            
            />)}
        

        <MoreButton handleNextPage={props.handleNextPage} />
      </div>
    </Fragment>
  )
}

export default SushiContainer