/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "@/styles/components/header.module.scss";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("/");

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const router = useRouter();

    useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.logo_wrapper}>
                <img
                    src="/assets/logos/indiscon-new-logo-withoutbg.png"
                    alt="indiscon 2024"
                />
                {/* <img src="/assets/logos/ieee-banner.png" alt="indiscon 2024" /> */}
                <img
                    src="/assets/logos/pec_centenary_logo.jpg"
                    alt="indiscon 2024"
                />
            </div>
            <nav className={styles.navbar}>
                <div className={styles.list_items_wrapper}>
                    {!menuOpen ? (
                        <Hamburger
                            menuOpen={menuOpen}
                            toggleMenu={toggleMenu}
                        />
                    ) : null}
                    <div
                        className={`${menuOpen ? styles.active : ""} ${
                            styles.menu_modal
                        }`}
                    >
                        {menuOpen ? (
                            <Hamburger
                                menuOpen={menuOpen}
                                toggleMenu={toggleMenu}
                            />
                        ) : null}

                        <ul
                            className={`${styles.nav_items} ${
                                menuOpen ? styles.active : ""
                            }`}
                            role="presentation"
                        >
                            {headerItems.map((headerItem, i) => {
                                const isActive = active === headerItem.href;
                                return (
                                    <li onClick={toggleMenu} key={i}>
                                        <Link
                                            href={headerItem.href}
                                            aria-label={headerItem.name}
                                            className={`${styles.nav_link} ${
                                                isActive
                                                    ? styles.active_nav_link
                                                    : ""
                                            }`}
                                        >
                                            {headerItem.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

const headerItems = [
    {
        href: "/",
        name: "Home",
    },
    {
        href: "/important-dates",
        name: "Important Dates",
    },
    {
        href: "/about",
        name: "About us",
    },
    {
        href: "/committees",
        name: "Committees",
    },
    {
        href: "/call-for-papers",
        name: "Call for papers",
    },
    {
        href: "/registration",
        name: "Registration",
    },
    {
        href: "/venue",
        name: "Venue",
    },
    {
        href: "/contact",
        name: "Contact",
    },
];

export default Header;