import React, { useState } from 'react'
import Dog from '../assets/dogGif.gif'
import Bone from '../assets/dogBone.png'
import Eating from '../assets/dogEating.gif'





export default function DogMove() {





    const [eating, setEating] = useState(false)

    const timeout = () => {
        setTimeout(() => {
            setEating(true)
        }, 4500)
    }

    const renderDog = () => {
        return (
            <section>
                <div class='w100 is-flex is-justify-content-space-between'>
                    <div class='w90 is-flex is-justify-content-flex-start'>
                        <img class='dog' style={{ width: 60, height: 60, position: 'absolute' }} src={Dog} />
                    </div>
                    <div class='w10 is-flex is-justify-content-flex-end'>
                        <img style={{ width: 60, height: 60 }} src={Bone} />
                    </div>
                </div>
            </section>
        )
    }

    const renderDogEating = () => {
        return (
            <section>
                <div class='is-flex is-justify-content-flex-end'>
                    <img src={Eating} style={{width: 100, height: 60}}/>
                </div>
            </section>

        )
    }

    const renderDogAnimation = () => {
        return (
            <>
                {eating ? renderDogEating() : renderDog()}
            </>
        )

    }

    return (
        <>
        {timeout()}
        {renderDogAnimation()}
        </>
    )
}