import React from 'react' 
import Dog from '../assets/dogGif.gif'
import Bone from '../assets/dogBone.png'
import Eating from '../assets/dogEating.gif'





export const DogMove = () => {




    timeout = () => {
        setTimeout(() => {
// render dog eating and change classNames of other images to display none
        }, 5000)
    }
    renderDogEating = () => {
        
        <div>
            <img src={Eating}/>
        </div>
    }


    return (
        // setTimeout(() => {
        //     // render inital dog and bone and then set class of both images to display none and render image of dog eating
        // }, 5000)
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