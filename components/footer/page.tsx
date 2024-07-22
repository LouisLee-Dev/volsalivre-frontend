const Footer: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="md:flex bg-purple-600 lg:px-40 px-5 py-5 lg:gap-20 text-white">
        <div className="flex gap-5 items-center">
          <span className="bg-purple-700 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">(21) 2143-9986</span>
            <span>Mon to Fri - 8am to 6pm</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span className="rounded-full bg-purple-700 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              ></path>
            </svg>
          </span>
          <span>Ask questions in the Helop Center</span>
        </div>
      </div>
      <div className="lg:flex lg:justify-around lg:gap-5 lg:px-40 px-10 bg-white py-5">
        <div className="flex flex-col gap-10">
            <p className="text-lg font-semibold">Parceiros</p>
            <div className="flex flex-col gap-3">
                <a href="/mais-alunos"><span>Quero ser parceiro</span></a>
                <a href="/blog"><span>Blog Gestores</span></a>
                <a href=""><span>Área do Gestor</span></a>                
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <p className="text-lg font-semibold">
              Encontre bolsas
            </p>
            <div className="flex flex-col gap-3">
            <a href=""><span>Melhores escolas de São Paulo</span></a>
            <a href=""><span>Escolas por cidade e bairro</span></a>
            <a href=""><span>Bolsas de estudo em escolas</span></a>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <p className="text-lg font-semibold">Institucional</p>
            <div className="flex flex-col gap-3">
            <a href=""><span>Sobre o Melhor Escola</span></a>
            <a href=""><span>Revista Melhor Escola</span></a>
            <a href=""><span>Trabalhe </span></a>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <p className="text-lg font-semibold">
              Outras bolsas
            </p>
            <div className="flex flex-col gap-3">
            <a href=""><span>Faculdades e universidades</span></a>
            <a href=""><span>Escolas de inglês</span></a>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <p className="text-lg font-semibold">
              Transparência
            </p>
            <div className="flex flex-col gap-3">
            <a href=""><span>Termos de uso</span></a>
            <a href=""><span>Política de privacidade</span></a>
            <a href=""><span>Política de cookies</span></a>
            <a href=""><span>Imprensa</span></a>
            </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between items-center lg:px-40 px-10 py-10 bg-slate-200 text-slate-500">
        <div className="flex justify-start gap-10 text-slate-500">
            <a href="" className="rounded-full hover:ring-4 hover:ring-slate-50"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" fillRule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31"/></svg></a>
            <a href="" className="rounded-full hover:ring-4 hover:ring-slate-50"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"/><path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"/></svg></a>
            <a href="" className="rounded-full hover:ring-4 hover:ring-slate-50"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"/></svg></a>
            <a href="" className="rounded-full hover:ring-4 hover:ring-slate-50"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M412.19 118.66a109 109 0 0 1-9.45-5.5a133 133 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69c0 .52-.05 1-.08 1.56c0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56a68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52a161.8 161.8 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24c-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.5 167.5 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34c7.66-.31 33.32 0 62.46-13.81c32.32-15.31 50.72-38.12 50.72-38.12a158.5 158.5 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61"/></svg></a>
        </div>
        <p>
            © Copyright 2024 - Best School • CNPJ 17.669.221/0001-50
        </p>
        <div><svg width="260" height="40" aria-label="Made with love by Quero Educação" color="var(--color-font-minor)" data-island-uid="19e477f2-ecad-4dbf-b856-0dde8dfb20a4"><g id="all"><text fill="currentColor"><tspan x="0" y="24">Feito com</tspan></text><text fill="currentColor"><tspan x="100" y="24">pela Quero Educação</tspan></text><line id="underline" x1="135" y1="30.5" x2="253" y2="30.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" opacity="0"></line><g transform="translate(85, 20)"><g id="heart-position"><path id="heart" d="M14.2958428,2 C12.3952724,2 10.7408308,3.162878 10.0008145,4.84629823 C9.26079826,3.1645464 7.60635662,2 5.70578622,2 C3.11083934,2 1,4.16225235 1,6.81835245 C1,12.8079249 9.44172735,17.7397289 9.80195553,17.9466111 C9.86389522,17.9816475 9.93072488,18 9.99918453,18 C10.0676442,18 10.1361038,17.9816475 10.1964135,17.9466111 C10.5550117,17.7397289 19,12.8079249 19,6.81835245 C19.001629,4.16225235 16.8907897,2 14.2958428,2 Z" stroke="currentColor" strokeWidth="1.5" fillOpacity="0" fill="#DA1E28" fillRule="nonzero" strokeLinejoin="round" transform="translate(-10, -10)"></path></g></g><rect x="0" y="0" width="260" height="36" opacity="0"></rect></g><animate xlinkHref="#underline" attributeName="opacity" to="1" begin="all.mouseover" dur="80ms" repeatCount="1" fill="freeze"></animate><animate xlinkHref="#underline" attributeName="opacity" to="0" begin="all.mouseout" dur="80ms" repeatCount="1" fill="freeze"></animate><animate xlinkHref="#heart" attributeName="stroke" to="#DA1E28" begin="all.mouseover" dur="80ms" repeatCount="1" fill="freeze"></animate><animate xlinkHref="#heart" attributeName="stroke" to="#697077" begin="all.mouseout" dur="80ms" repeatCount="1" fill="freeze"></animate><animate id="heart-start" xlinkHref="#heart" attributeName="fill-opacity" to="1" begin="all.mouseover" dur="80ms" repeatCount="1" fill="freeze"></animate><animate id="heart-end" xlinkHref="#heart" attributeName="fill-opacity" to="0" begin="all.mouseout" dur="80ms" repeatCount="1" fill="freeze"></animate><animateTransform xlinkHref="#heart-position" attributeName="transform" type="scale" values="0.6; 1.1; 0.8; 1.1; 1.1; 0.6;" begin="all.mouseover" dur="1s" repeatCount="indefinite"></animateTransform><animateTransform xlinkHref="#heart-position" attributeName="transform" type="scale" values="1" begin="all.mouseout" dur="1s" repeatCount="1" fill="freeze"></animateTransform></svg></div>
      </div>
    </div>
  );
};

export default Footer;
