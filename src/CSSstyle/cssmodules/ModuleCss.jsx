import React from 'react'
import styles from "./Headtag.module.css"

function ModuleCss() {
    return (
        <>
        <h1 className={styles.box}>module css</h1>
        <h1 className={`${styles.box} ${styles.title}`}>module multiple css</h1>

        <h1 className="box">global</h1>

        {/* <h1 class = "box innerbox "></h1> */}
        </>
    )
}

export default ModuleCss

