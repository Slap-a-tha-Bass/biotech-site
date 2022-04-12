import Image from "next/image";
import styles from "./homepage.module.css";

const HeroImg =
  "https://res.cloudinary.com/slapathabass/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1649780542/biotech/DNA_copy_njksjk.png";
export default function Homepage() {
  return (
    <>
      <div className="relative pt-80">
        <div>
          <Image
            src={HeroImg}
            layout="fill"
            placeholder="blur"
            blurDataURL={HeroImg}
            priority
            className="opacity-50 rounded-lg"
          />
        </div>
      </div>
      <h1 className="text-center text-8xl text-emerald-500 p-4">BiON</h1>
      <div className="flex justify-center">
        <button className="btn p-8 rounded-2xl text-3xl bg-sky-800 shadow-xl shadow-sky-500/50 transition ease-in-out delay-100 hover:bg-sky-600 hover:shadow-sky-500">Welcome</button>
      </div>
    </>
  );
}
// transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300