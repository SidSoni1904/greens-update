import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div style={{
            backgroundColor: 'white',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <ThreeCircles
                height="100"
                width="100"
                color= "#91C13A"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
            />
        </div>
    )
}
