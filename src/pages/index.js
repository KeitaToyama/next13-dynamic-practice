import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const getStaticProps = async () => {
//   const todos1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const todos1Json = await todos1.text();

//   return {
//     props: {
//       SSG: todos1Json,
//     },
//   };
// };

export const getServerSideProps = async () => {
  const alltodo = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0293fe204f0979566d94563de5d585af"
  );
  const alltodoJson = await alltodo.text();
  return {
    props: {
      SSR: alltodoJson,
    },
  };
};

export default function Home({ SSG, SSR }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-start justify-between font-mono text-sm lg:flex flex-col">
        <h1>"SSG"</h1>
        {SSG}
      </div>

      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1>"SSR"</h1>
        <span>{SSR}</span>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
