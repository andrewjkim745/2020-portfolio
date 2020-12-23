import React, { useState } from 'react' 
import Dog from '../assets/dogGif.gif'
import Bone from '../assets/dogBone.png'
import Eating from '../assets/dogEating.gif'





export default function DogMove() {





    const [eating, setEating ] = useState(false)




    useEffect = () => {
        window.addEventListener('scroll', handleScroll())
    },[]}

    // handleScroll = (e) => {
    //     if (window.pageYoffset)
    // }
    timeout = () => {
        setTimeout(() => {
            setEating(true)
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