"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import NavBar from "@/Components/NavBar";
import { MyContext } from "@/Helper/Context";
import { useContext } from "react";

export default function Home() {
  const user = useContext(MyContext);
  return (
    <>
      <div className="text-4xl text-blue-500">This is page.js --- {user}</div>
      <Header />
      <Footer />
      <NavBar />
    </>
  );
}
