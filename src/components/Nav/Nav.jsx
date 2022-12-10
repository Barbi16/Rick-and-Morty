import React from "react";
import styles from "./Nav.module.css"
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({onSearch}) {
    return (
        <div className={styles.containerNav}>
        <Link to='/About' className={styles.links}>About</Link>
        <Link to='/Home' className={styles.links}>Home</Link>
        <Link to='/Favorites' className={styles.links}>Favorites</Link>
        <SearchBar className={styles.searchBar} onSearch={onSearch} />
        </div>
    )
}