import React from 'react'
import { Commet } from 'react-loading-indicators'

const Loader = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Commet color="#060dff" size="large" text="rahulbhati" textColor="#693333" />

        </div>
    )
}

export default Loader
