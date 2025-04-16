import Head from "next/head";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps){
    return (
        <>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
