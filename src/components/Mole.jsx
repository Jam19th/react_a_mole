// Import Dependencies
import { useEffect } from "react"
import moleImg from '../mole.png'

// Mole Component and Export
export default function Mole(props) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="mole">
            <img
                src={moleImg}
                alt="Mole"
                onClick={props.bopMole}
                style={{
                    width: '30vw'
                }}
            />
        </div>
    )
}