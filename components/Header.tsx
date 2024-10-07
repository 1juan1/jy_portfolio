"use client";

import React from 'react'
import Link from 'next/link';

const Header = () => {
    return (
        <div className=" md:flex gap-x-4 items-center bg-orange-700 flex justify-left ">

            <ul >
                <li>
                    <Link href={"/"}>
                        <h2>Home</h2>
                    </Link>
                </li>
                <li>Graphic Design</li>
                <li>
                    <Link href={"/About"}>
                        <h2>About</h2 >
                    </Link >
                </li>
                <li>
                    <Link href={"/Contact"}>
                        <h2>Contact</h2 >
                    </Link >
                </li>
            </ul>
        </div >
    )
}

export default Header