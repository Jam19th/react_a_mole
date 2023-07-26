// Import Dependencies
import { useEffect } from "react"
import MoleHill from '../molehill.png'

// EmptySlot Component and Export
export default function EmptySlot(props) {

    useEffect(() => {
        //defining a random number of seconds. We want each mole to exist on its own random timer
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="EmptySlot">
            <img
                src={MoleHill}
                alt="Mole Hill"
                style={{
                    width: '30vw'
                }} />
        </div>
    )
}