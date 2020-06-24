import React from 'react'
import classes from './TopScreen.module.scss'

export const TopScreen = () => {

    return (
        <article className={classes.wrapper}>
            <div className="container-fluid">
                {/* <Navbar /> */}
                <button className="btn btn-outline-danger m-5">Button</button>
            </div>
        </article>
    )
}