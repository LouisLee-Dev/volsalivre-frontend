'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { removeFromLocalStorage } from "@/utils/localstorage";
import Link from 'next/link';
import SchoolImage from './schoolImage';

const stars = [0, 0, 0, 0, 0];

interface StarProps {
  flag: boolean;
}

const Star: React.FC<StarProps> = ({ flag }) => {
  return (
    <span>
      <svg
        className="text-orange-400"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          fill={`${flag ? "currentColor" : "none"}`}
          d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
        />
      </svg>
    </span>
  );
};

interface TransformingCardProps {
  star: number;
  text: string;
  name: string;
}

const TransformingCard: React.FC<TransformingCardProps> = ({
  star,
  text,
  name,
}) => {
  return (
    <div className="flex flex-col justify-between w-full h-auto gap-5 p-5 bg-white border border-slate-300 rounded-lg">
      <div className="flex gap-2">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
      </div>
      <p className="text-slate-400">{text}</p>
      <p className="font-semibold text-gray-700">{name}</p>
    </div>
  );
};

interface OtherSchoolsCardProps {
  mark: any;
  title: string;
  star: number;
  position: string;
  at: string;
  secure: any;
}

const OtherSchoolsCard: React.FC<OtherSchoolsCardProps> = ({
  mark,
  title,
  star,
  position,
  at,
  secure,
}) => {
  return (
    <Link href={`/artigos/${title}`} className="flex flex-col p-5 bg-white rounded-lg justify-between gap-5">
      <div className="flex gap-2 items-center">
        <Image
          src={mark}
          alt=""
          width={70}
          height={70}
          className="w-12 h-12 rounded-full"
        />
        <p className="text-based font-semibold">{title}</p>
      </div>
      <div className="flex gap-2">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
        <span>{star}</span>
      </div>
      <div className="flex flex-col gap-2">
        <p>{position}</p>
        <p>{at}</p>
      </div>
      <p>{secure}</p>
    </Link>
  );
};

interface LatestArticleCardProps {
  img: any;
  title: string;
  text: string;
}

const LatestArticleCard: React.FC<LatestArticleCardProps> = ({
  img,
  title,
  text,
}) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-white p-5">
      <Image src={img} className="w-full" alt="" />
      <p className="text-lg font-semibold">{title}</p>
      <p>{text}</p>
    </div>
  );
};

interface PrivateSchoolCardProps {
  mark: any;
  title: string;
  star: number;
  at: string;
  position: string;
  scholarUnit: string;
  amount: number;
}

const PrivateSchoolCard: React.FC<PrivateSchoolCardProps> = ({
  mark,
  title,
  star,
  at,
  position,
  scholarUnit,
  amount,
}) => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-lg justify-between w-60 gap-2 border border-slate-400">
      <div className="flex md:flex-row items-center gap-1 md:gap-0">
        <Image
          src={mark}
          alt=""
          width={70}
          height={70}
          className="w-12 h-auto rounded-full"
        />
        <p className="text-[16px] font-semibold text-gray-700 md:ml-3 md:text-xs text-center md:text-left">{title}</p>
      </div>
      <div className="flex gap-2 justify-center md:justify-start">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
        <span>{star}</span>
      </div>
      <div className="flex flex-col gap-2 text-gray-400 text-center md:text-left">
        <p>{position}</p>
        <p>{at}</p>
      </div><hr className="p-2" />
      <div className="flex flex-col space-y-0 text-center md:text-left">
        <p className="pb-0 text-gray-400">sholarships form:</p>
        <p className="pt-0 font-semibold text-gray-700">{scholarUnit} {amount}</p>
      </div>
    </div>
  )
}

interface SearchResultCardProps {
  mark: any;
  title: string;
  star: number;
  at: string;
  period: string;
  position: string;
  schoolYear: any;
  shift: any;
  level: any;
  originUnit: string;
  originPrice: number;
  presentUnit: string;
  presentPrice: number;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  mark,
  title,
  star,
  at,
  period,
  position,
  schoolYear,
  level,
  shift,
  originUnit,
  originPrice,
  presentUnit,
  presentPrice,
}) => {  
  const shiftArray: any = [];
  const schoolYearArray: any = [];
  const shiftlength = shift.length;
  const yearlength = schoolYear.length;
  for (let i = 0; i < shiftlength; i++) {
    const element = shift[i];
    shiftArray.push(
      <button key={i} type="button" className="text-purple-700 border rounded-full border-purple-700 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-sm px-4 py-1 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
        {element}
      </button>
    )
  }
  for (let i = 0; i < yearlength; i++) {
    const element = schoolYear[i];
    schoolYearArray.push(
      <button key={i} type="button" className="text-purple-700 border rounded-full border-purple-700 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-sm px-3 py-1 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
        {element}
      </button>
    )
  }
  return (
    <div className="flex flex-col bg-white rounded-lg justify-between items-between ">
      <div className="flex gap-5 items-center">
        {/* <Image
          src={`data:${mark && mark.contentType};base64,${mark && mark.data.toString('base64')}`}
          alt=""
          width={70}
          height={70}
          className="w-10 h-10 rounded-full ring-2 "
        /> */}
        <SchoolImage title={title} />
        <p className="text-based font-semibold text-sm text-gray-700">{title}</p>
      </div>
      <div className="flex gap-1">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
        <span>{star}</span>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <p className="text-gray-700 text-sm">{period}</p>
        <p className="text-sm">{position}</p>
        <p className="text-sm">{at}</p>
      </div><hr className="p-2" />
      <div className="flex flex-col text-sm">
        <p>School year</p>
        <span className="flex justify-start">
          {schoolYearArray}
        </span>
        <p>Shift</p>
        <span className="flex flex-wrap justify-start">
          {shiftArray}
        </span>
        {/* <span className="flex justify-start">
          {shiftArray}
        </span> */}
      </div>
      <div className="flex justify-between items-center">
        <p className="pb-0 text-gray-400 line-through decoration-gray-500">{originUnit} {originPrice}</p>
        <p className="pt-0 font-semibold text-gray-700">
          {presentUnit} {presentPrice}
          {/* <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
          </span> */}
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <span>Levels</span>
        {
          level && level.map((l: any, index: any) => (
            <div key={index} className="flex gap-5 pt-0 font-semibold text-gray-700">
              <span>{l.level}</span>
              <span>{l.grade}</span>
            </div>
          ))
        }
      </div>

      <div className="flex flex-col">
        <a
          // type="button" 
          href={`/escola/${encodeURIComponent(title)}`}
          className="text-white py-2 bg-orange-500 hover:bg-orange-600 focus:outline-double focus:ring-4 focus:ring-purple-500 font-medium rounded-full text-sm px-5 text-center me-2"
        >
          See Scholarship
        </a>
      </div>
    </div>
  )
}

interface PopularSchoolCardProps {
  mark: any;
}

const PopularSchoolCard: React.FC<PopularSchoolCardProps> = ({ mark }) => {
  return (
    <div className="flex ">
      <Image
        src={mark}
        alt="#"
        width={70}
        height={70}
        className="w-36 h-36 rounded-md"
      />
    </div>
  )
};

interface BlogCardProps {
  img: any;
  title: string;
  date: string;
  env: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ img, title, date, env, category }) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-semibold text-gray-900">{title}</p>
        <div className="flex text-xs text-gray-500 gap-3">
          <a href="#" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32" /></svg>
            <span>{date}</span>
          </a>
          <a href="#" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M408 96H252.11a23.9 23.9 0 0 1-13.31-4L211 73.41A55.77 55.77 0 0 0 179.89 64H104a56.06 56.06 0 0 0-56 56v24h416c0-30.88-25.12-48-56-48m15.75 352H88.25a56 56 0 0 1-55.93-55.15L16.18 228.11v-.28A48 48 0 0 1 64 176h384.1a48 48 0 0 1 47.8 51.83v.28l-16.22 164.74A56 56 0 0 1 423.75 448m56.15-221.45" /></svg>
            <span>{category}</span>
          </a>
        </div>
      </div>
      <div className="flex w-full  overflow-hidden">
        <Image className="rounded-3xl object-contain w-full" src={img} width={100} height={100} alt="img" />
      </div>
      <div className="flex flex-col w-full  items-start space-y-5">
        <p className="text-gray-500">{env}</p>
        <button className="text-orange-500 font-bold border-[2px] rounded-full p-3 px-5 hover:bg-orange-500 hover:text-white border-orange-500">LEIA MAIS {"->"} </button>
      </div>
    </div>
  )
};

interface CategoriesCardProps {
  name: any;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ name }) => {
  const cateLi: any = [];
  const length = name.length;
  for (let i = 0; i < length; i++) {
    cateLi.push(
      <li key={i} className="border-b">
        <a className="hover:text-gray-500" href="">{name[i]}</a>
      </li>
    )
  }
  return (
    <>
      <p className="uppercase text-gray-900 font-bold">CATEGORIAS</p>
      <ul className="flex flex-col text-orange-500 space-y-6">
        {cateLi}
      </ul>
    </>
  )
}

interface EscolaDetailCardProps {
  school: any | null;
}

const EscolaDetailCard: React.FC<EscolaDetailCardProps> = ({ school }) => {
  const [selectedYear, setSelectedYear] = useState<any>();
  const [selectedSerie, setSelectedSerie] = useState<any>("");
  const [selectedShift, setSelectedShift] = useState<any>("");
  const [serieShow, setSerieShow] = useState<boolean>(false);
  const [shiftShow, setShiftShow] = useState<boolean>(false);

  useEffect(() => {
    school && setSelectedSerie(school.series[0]);
    school && setSelectedShift(school.shift[0]);
  }, [school])

  if (school) {
    return (
      <div className="flex flex-col gap-3 p-5 border border-slate-300 rounded-lg shadow-inner">

        <span className="text-xl font-semibold">
          {
            school.title
          }
        </span>
        <div className="flex gap-5">
          {
            school.years.map((year: any, index: number) => (
              <div className="flex gap-1" key={index}>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value={year}
                    checked={year === selectedYear}
                    onChange={() => setSelectedYear(year)}
                    className="form-radio text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">{year}</span>
                </label>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold">Serie</span>
          <div className="flex justify-between gap-5">
            <span>
              {
                selectedSerie
              }
            </span>
            <button className="rounded-full bg-purple-100 text-purple-500 border border-purple-300 focus:ring-purple-300 px-5 py-2" onClick={() => setSerieShow(true)}>
              Alterar
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold">Turno</span>
          <div className="flex justify-between gap-5">
            <span>
              {
                selectedShift
              }
            </span>
            <button className="rounded-full bg-purple-100 text-purple-500 border border-purple-300 focus:ring-purple-300 px-5 py-2" onClick={() => setShiftShow(true)}>
              Alterar
            </button>
          </div>
        </div>
        <br />
        <div className="flex gap-1">
          <span className="text-slate-400 line-through">{school.scholarUnit} {school.amount}</span>
          <span className="text-slate-700">{school.scholarUnit} {school.monthlyState}</span>
        </div>
        <p><svg className='float-start mx-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path className="" fill="currentColor" d="M277.1 48c23 0 42.5 14.7 49.8 35.2c4.4 12.5 18.1 19 30.6 14.6s19-18.1 14.6-30.6C358.3 28.1 321 0 277.1 0S195.8 28.1 182 67.2c-4.4 12.5 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6C234.5 62.7 254.1 48 277.1 48zM66.7 197.5c11.9-5.9 16.7-20.3 10.7-32.2s-20.3-16.7-32.2-10.7l-4.7 2.3C15.7 169.3 0 194.7 0 222.6c0 37.4 28 68.3 64.2 72.9C66.4 344.7 91 388.2 128 416v48c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V448h48v16c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V426.6c18.7-10.8 35.1-25.4 48-42.6h32c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H530.7c-8.2-18.8-19.9-35.7-34.2-49.8l11.3-36.8-22.9-7 22.9 7c6.3-20.6-9.1-41.4-30.6-41.4H456c-31.5 0-60.2 12.2-81.6 32H224c-74.4 0-137 50.8-154.9 119.6c-12-2-21.1-12.5-21.1-25.1c0-9.6 5.4-18.4 14.1-22.8l4.7-2.3zM424 288a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM402.3 168c13.1-14.7 32.1-23.9 53.2-24L446 174.8c-2.9 9.4 .2 19.6 7.9 25.8c17.4 13.9 30.4 32.8 37.1 54.5c3.1 10.1 12.4 17 22.9 17h14v64H499.4c-8.3 0-16 4.3-20.3 11.3c-11.7 18.7-28.7 33.7-48.9 42.8C421.5 394 416 402.5 416 412v52H368V424c0-13.3-10.7-24-24-24H248c-13.3 0-24 10.7-24 24v40H176V403.4c0-8.3-4.3-16-11.3-20.3c-31.7-19.8-52.7-55-52.7-95c0-61.9 50.1-112 112-112H384h0l.4 0c6.8 0 13.4-2.9 17.9-8z"></path></svg>Desconto de 40% nas mensalidades</p>
        <p><svg className='float-start mx-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path className="" fill="currentColor" d="M160 25.4C143 9.6 120.2 0 95.2 0C42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1L160 25.4zM256 112a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 400c53.2 0 102.1-18.6 140.5-49.5L439 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-42.5-42.5c31-38.4 49.5-87.3 49.5-140.5C480 164.3 379.7 64 256 64S32 164.3 32 288c0 53.2 18.6 102.1 49.5 140.5L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l42.5-42.5c38.4 31 87.3 49.5 140.5 49.5zM497.1 146.4C506.5 131.6 512 114 512 95.2C512 42.6 469.4 0 416.8 0C391.8 0 369 9.6 352 25.4L497.1 146.4zM280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24V288c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V184z"></path></svg> Só restam 1 bolsas! </p>
        <button className="bg-orange-500 rounded-full p-3 text-white text-xl font-semibold">Quero esta bolsa</button>
        <EscolaRegisterCard
          option={selectedSerie}
          options={school.series}
          setOption={setSelectedSerie}
          show={serieShow}
          setShow={setSerieShow}
        />
        <EscolaRegisterCard
          option={selectedShift}
          options={school.shift}
          setOption={setSelectedShift}
          show={shiftShow}
          setShow={setShiftShow}
        />
      </div>
    )
  }

  return <div></div>
}

interface EscolaRegisterCardProps {
  options?: any[];
  option?: any;
  setOption?: any;
  show: boolean;
  setShow?: any;
}

const EscolaRegisterCard: React.FC<EscolaRegisterCardProps> = ({ options, option, setOption, show, setShow }) => {

  return (
    <div className={`${show ? 'fixed' : 'hidden'} top-0 left-0 flex w-[100vw] h-[100vh] justify-center items-center z-50`}>
      <div className="w-full h-full bg-slate-900 opacity-75" onClick={() => setShow(false)}>
      </div>
      <div className="absolute flex flex-col gap-5 w-96 h-[550px] bg-white px-5 py-10 rounded-lg" >
        <span className="text-2xl font-semibold border-b border-slate-200 p-2">
          Selecione o turno desejado
        </span>
        <div className="flex flex-col gap-5 h-[400px] overflow-y-scrol overflow-hidden px-5">
          {
            options?.map((op:any, index:any) => (
              <div className="flex gap-1" key={index}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={op}
                    checked={option === op}
                    onChange={() => setOption(op)}
                    className="form-radio text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2">{op}</span>
                </label>
              </div>
            ))
          }
        </div>
        <div className='bg-purple-600 text-white py-2 rounded-full text-center cursor-pointer' onClick={()=>setShow(false)}>
          Selecionar bolsa
        </div>
      </div>
    </div>
  )
}

const MenuTipCard: React.FC = () => {
  return (
    <div className="origin-top-right absolute right-0 mt-48 text-center w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
      <a
        href={`/meus-dados/${encodeURIComponent('Meu perfil')}`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Meu perfil
      </a>
      <a
        href={`/meus-dados/${encodeURIComponent('Meus dados')}`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Meus dados
      </a>
      <a
        href={`/meus-dados/${encodeURIComponent('Minhas bolsas')}`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b"
      >
        Minhas bolsas
      </a>
      <a
        onClick={() => {
          removeFromLocalStorage('token');
          window.location.href = '/';
          toast.success("Successfully logged out....")
        }}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Sair
      </a>
    </div>
  )
}

export { BlogCard, MenuTipCard, EscolaDetailCard, CategoriesCard, TransformingCard, OtherSchoolsCard, LatestArticleCard, PrivateSchoolCard, SearchResultCard, PopularSchoolCard };
