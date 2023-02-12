import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { inputElements } from "./components/sidemenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="w-full p-12">
        <h1 className="text-4xl font-bold font-sans">All web UI elements</h1>

        <div className="grid gap-4 grid-cols-4 mt-12">
          {inputElements.map((data) => {
            return (
              <div key={data.href} className="card w-full bg-base-100 shadow-xl">
                <a href={data.href}>
                  <div className="card-body">
                    <h2 className="card-title">{data.link}</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-sm btn-primary">Go</button>
                    </div>
                  </div>
                </a>
              </div>
        )
          })}
      </div>
    </main>
    </>
  );
}
