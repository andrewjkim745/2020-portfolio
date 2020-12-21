import React from 'react' 
import Dog from '../assets/dogGif.gif'
import Bone from '../assets/dogBone.png'





export const DogMove = () => {
    return (
        <section>
        <div class='w100 is-flex is-justify-content-space-between'>
            <div class='w90 is-flex is-justify-content-flex-start'>
                <img class='dog' style={{ width: 60, height: 60, position: 'absolute' }} src={Dog}/>
            </div>
            <div class='w10 is-flex is-justify-content-flex-end'>
            <img style={{width: 60, height: 60 }} src={Bone}/>
            </div>
           
        </div>
        </section>
    )
}