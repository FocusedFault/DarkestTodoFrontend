import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24 ">
      <div className="fixed h-1/2 w-full flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-90"></div>
        <img src="torch.png" alt="torch" />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 text-6xl">
          Darkest Todo
        </h1>
      </div>
      <div className="z-10 grid text-center lg:mb-0 lg:text-left p-6">
        <div className="group rounded-lg border border-transparent px-5 py-4 border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
          <p className={`m-0 max-w-[30ch] text-2xl opacity-50`}>
            A Darkest Dungeon themed todo list, gain trinkets and level up while
            facing your tasks. Take care to not meltdown in the face of
            adversity.
          </p>
        </div>
      </div>
      <div className="z-10 grid text-center lg:mb-0 lg:text-left p-6">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-4xl font-semibold`}>
            Login/Signup{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-2xl opacity-50`}>
            Fix your gaze on the horizon, and face the fearsome truth.
          </p>
        </a>
      </div>
      <div className="fixed bottom-0 left-0 flex h-12 p-6 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
        <a
          className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://github.com/FocusedFault"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conjured from the abyss by Nux
          <Image
            src="/github.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={25}
            height={6}
            priority
          />
        </a>
      </div>
    </main>
  );
}
