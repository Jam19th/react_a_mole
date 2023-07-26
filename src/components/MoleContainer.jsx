// Import Dependencies
import Mole from './Mole';
import EmptySlot from './EmptySlot';
import { useState, useEffect } from 'react';

//MoleContainer Component and Export
export default function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false);

    useEffect(() => {
        let appearanceTimer;
        let moleTimer;

        if (!props.pause && !displayMole) {
            appearanceTimer = Math.floor(Math.random() * 5000) + 1000;
            moleTimer = setTimeout(() => {
                setDisplayMole(true);

                setTimeout(() => {
                    setDisplayMole(false);
                }, 1000);
            }, appearanceTimer);
        }

        return () => {
            clearTimeout(appearanceTimer);
            clearTimeout(moleTimer);
        };
    }, [props.pause, displayMole]);

    const bopMole = () => {
        props.setScore(props.score + 1);
        setDisplayMole(false);
    };

    const createMole = displayMole ? (
        <Mole
            setScore={props.setScore}
            toggle={setDisplayMole}
            bopMole={bopMole}
        />
    ) : (
        <EmptySlot
            toggle={setDisplayMole}
        />
    );

    return (
        <div
            className="mole-container"
            style={{
                width: '30vw',
                height: '30vh',
                display: 'inline-block',
            }}
        >
            {createMole}
        </div>
    )
}