import React from 'react'
import '../../style/pages/Status.css'
import StatusTab from '../paner-form/StatusTab'
import Navbar from "../paner-form/Navbar";

function StatusContent() {
    return (
        <div className="App">
            <Navbar/>
            <StatusTab/>
        </div>
    )
}
export default StatusContent;
