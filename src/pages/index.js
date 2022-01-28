import * as React from "react"
import { Helmet } from "react-helmet"

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Web Developer Blog" />
        <title>Eric Marsh Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="p-2 bg-gradient-to-r from-sky-500 to-indigo-500 h-full min-h-screen relative flex">
        <div className="bg-backgroundColor">
          <div className="w-7/10 my-14 mx-auto">
            {/* nav */}
            <header className="flex flex-row bg-slate-300 h-12">
              <div
                className="logoAnimation select-none w-12 h-12 flex items-center justify-center mr-3 bg-titleTextColor text-backgroundColor font-bold text-2xl leading-snug tracking-wide">
                EM
              </div>
            </header>
            <main>
              {/* intro */}
              <section className="mt-4 md:mt-10 bg-slate-300">
                <h1 className="mb-2 md:mb-4 text-4xl md:text-5xl text-titleTextColor font-bold leading-tight text-left">
                  <span className="whitespace-nowrap">Hi!👋🏼I'm </span>
                  <span className="whitespace-nowrap"><span className="text-sky-500">Eric Marsh</span>, </span>
                  a front-end web developer.
                </h1>
                <p className="text-lg md:text-xl text-slate-900 leading-normal tracking-normal text-left">
                  I've been making websites for about 7 years now. Most of them have
                  been for fun, but I have also made websites and web applciations
                  for clients. Lately, I have been making web apps using React and
                  Gatsby, styling with TailwindCSS, and hosting on Netlify.
                </p>
              </section>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
                {/* experience  */}
                <section className="mt-4 md:mt-10 bg-slate-300">
                  <h2 className="mb-2 md:mb-4 text-2xl md:text-3xl text-titleTextColor font-bold leading-tight text-left">
                    Experience
                  </h2>
                  <p className="text-lg md:text-xl text-slate-900 leading-normal tracking-normal text-left">
                    I've been making websites for about 7 years now. Most of them
                    have been for fun, but I have also made websites and web
                    applciations for clients. Lately, I have been making web apps
                    using React and Gatsby, designing with TailwindCSS, and hosting
                    on Netlify.
                  </p>
                </section>
                {/* projects  */}
                <section className="mt-4 md:mt-10 bg-slate-300">
                  <h2 className="mb-2 md:mb-4 text-2xl md:text-3xl text-titleTextColor font-bold leading-tight text-left">
                    Projects
                  </h2>
                  <ul className="list-disc list-inside text-lg md:text-xl text-slate-900 leading-normal whitespace-nowrap">
                    <li><a className="w-fit underline-animation text-linkTextColor hover:text-linkTextColorHover active:text-linkTextColorActive" href="https://www.idahospudsman.com/"
                      target="_blank">
                      Idaho Spudsman</a></li>
                    <li><a className="w-fit underline-animation text-linkTextColor hover:text-linkTextColorHover active:text-linkTextColorActive" href="#" target="_blank">
                      AC Music Generator</a></li>
                    <li><a className="w-fit underline-animation text-linkTextColor hover:text-linkTextColorHover active:text-linkTextColorActive" href="https://codepen.io/drspaceman0/"
                      target="_blank">
                      Codepen Profile</a></li>
                  </ul>
                </section>
              </div>
              <section className="mt-4 md:mt-10 bg-slate-300 h-full">
                <h2 className="mb-2 md:mb-4 text-2xl md:text-3xl text-titleTextColor font-bold leading-tight text-left">
                  Contact
                </h2>
                <div className="flex flex-col">
                  <a className="flex items-center flex-nowrap mb-2" href="mailto:ericmrsh9@gmail.com" target="_blank">
                    {/* github icon  */}
                    <svg className=" mr-3 text-linkIconColor hover:text-linkIconColorHover active:text-linkIconColorActive" fill="currentColor" width="30"
                      height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414L.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </g>
                    </svg>
                    <span
                      className="block text-lg md:text-xl text-linkTextColor hover:text-linkTextColorHover active:text-linkTextColorActive  leading-normal tracking-normal text-left underline-animation">ericmrsh9@gmail.com</span>
                  </a>
                  <a className="flex flex-nowrap mb-2" href="https://github.com/drspaceman0" target="_blank">
                    {/* github icon  */}
                    <svg className="mr-3 text-linkIconColor hover:text-linkIconColorHover active:text-linkIconColorActive" fill="currentColor" width="32"
                      height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </g>
                    </svg>
                    <span
                      className="block text-lg md:text-xl text-linkTextColor hover:text-linkTextColorHover active:text-linkTextColorActive leading-normal tracking-normal text-left underline-animation">drspaceman0</span>
                  </a>
                  <a className="flex flex-nowrap mb-2" href="https://www.linkedin.com/in/eric-marsh-415b1b112" target="_blank">
                    {/* github icon  */}
                    <svg className="mr-3 text-linkIconColor hover:text-linkIconColorHover active:linkIconColorActive" fill="currentColor" width="32"
                      height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </g>
                    </svg>
                    <span
                      className="block text-lg md:text-xl text-linkTextColor hover:text-linkTextColorHover active:text-linkTextColorActive leading-normal tracking-normal text-left underline-animation">eric-marsh-415b1b112</span>
                  </a>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}