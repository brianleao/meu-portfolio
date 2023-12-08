import styles from "../css/Home.module.css"
import { Link } from "react-router-dom"
import {IoSearch} from "react-icons/io5";
import { useState } from "react";

export default function Home() {

    const[dataSearch, setDataSearch] = useState('');
    console.log(dataSearch);

    return(
        <div className={styles.container_main}>
            <aside className={styles.container_aside}>
                <div className={styles.infosBrian}>
                    <div className={styles.background_image}></div>
                    <span className={styles.nameBrian}>Brian</span>
                    <span className={styles.profission}>Web Developer</span>
                </div>
                
                <div className={styles.buttons}>
                    <Link to="/about">
                        <button className={styles.about_button}>About</button>
                    </Link>

                    <Link to="/skills">
                        <button className={styles.skills_button}>My Skills</button>
                    </Link>
                    
                    <Link to="/work">
                        <button className={styles.work_button}>Work</button>
                    </Link>
                    
                    <Link to="/contact">
                        <button className={styles.contact_button}>Contact</button>
                    </Link>
                </div>
            </aside>
            <div className={styles.container_principal}>
                <div className={styles.tittles}>
                    <h1 className={styles.tittlehome}>Olá, eu sou o Brian,<br/> Desenvolvedor Web.</h1>
                    <span className={styles.tittleFrontEnd}>Front-End Developer</span>
                </div>
                
                <div className={styles.search_button}>
                    <IoSearch className={styles.icon_search}/>
                    <input 
                        type="search" 
                        className={styles.input_button} 
                        onChange={
                            (e) => setDataSearch(e.target.value)
                        }
                    />
                </div>
            </div>
        </div>
 )
}