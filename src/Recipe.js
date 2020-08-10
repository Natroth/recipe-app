import React, {useEffect, useState} from 'react';
import { useSpring, animated as a } from 'react-spring';


const Recipe = (props) => {
    
    const [flipped, set] = useState(false)
    const { transform, opacity, display } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
      display: flipped ? 'block' : 'none'
    })
    return(
        <div className="recipeTile">
       <a.div class="c back"> 
            <img src={props.image} alt="" onClick={()=> window.open(props.url, "_blank")} />             
            <h1 onClick={()=> window.open(props.url, "_blank")}>{props.title}</h1>
            <p onClick={()=> window.open(props.url, "_blank")} className="recipe-src">{props.source}</p>
            <p className="see_ingredients" onClick={() => set(state => !state)}>See Ingredients</p>
       </a.div>   

        <a.div class="c front" style={{ opacity, display}}>
        <ol>
            {props.ingredients.map(ingredient => (
                <ul>{ingredient}</ul>
            ))}
        </ol>
        </a.div>
        </div>
        )
}


export default Recipe;