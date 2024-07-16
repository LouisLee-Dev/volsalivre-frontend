'use client';

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-3 md:px-36 shadow-xl bg-gray-50">
            <div className="flex gap-2 mb-3 md:mb-0">
                <a className="bg-[#262626] rounded-full">
                    <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path className="text-white" fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                    </svg>
                </a>
                <a className="bg-[#cd201f] rounded-full">
                    <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path className="text-white" fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
                    </svg>
                </a>
                <a className="bg-[#3b5998] rounded-full">
                    <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path  className="text-white" fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                    </svg>
                </a>
                <a className="bg-[#0077b5] rounded-full">
                    <svg className="w-[36px] h-[36px] p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path className="text-white" fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                        <path className="text-white" d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                    </svg>
                </a>
            </div>
            <p className="text-gray-600 text-center md:text-left">
                © Copyright 2021 Melhor Escola • CNPJ: 17.669.221/0001-50
            </p>
            <div><svg width="260" height="40" aria-label="Made with love by Quero Educação" color="var(--color-font-minor)" data-island-uid="19e477f2-ecad-4dbf-b856-0dde8dfb20a4"><g id="all"><text fill="currentColor"><tspan x="0" y="24">Feito com</tspan></text><text fill="currentColor"><tspan x="100" y="24">pela Quero Educação</tspan></text><line id="underline" x1="135" y1="30.5" x2="253" y2="30.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" opacity="0"></line><g transform="translate(85, 20)"><g id="heart-position"><path id="heart" d="M14.2958428,2 C12.3952724,2 10.7408308,3.162878 10.0008145,4.84629823 C9.26079826,3.1645464 7.60635662,2 5.70578622,2 C3.11083934,2 1,4.16225235 1,6.81835245 C1,12.8079249 9.44172735,17.7397289 9.80195553,17.9466111 C9.86389522,17.9816475 9.93072488,18 9.99918453,18 C10.0676442,18 10.1361038,17.9816475 10.1964135,17.9466111 C10.5550117,17.7397289 19,12.8079249 19,6.81835245 C19.001629,4.16225235 16.8907897,2 14.2958428,2 Z" stroke="currentColor" strokeWidth="1.5" fillOpacity="0" fill="#DA1E28" fillRule="nonzero" strokeLinejoin="round" transform="translate(-10, -10)"></path></g></g><rect x="0" y="0" width="260" height="36" opacity="0"></rect></g><animate xlinkHref="#underline" attributeName="opacity" to="1" begin="all.mouseover" dur="80ms" repeatCount="1" fill="freeze"></animate><animate xlinkHref="#underline" attributeName="opacity" to="0" begin="all.mouseout" dur="80ms" repeatCount="1" fill="freeze"></animate><animate xlinkHref="#heart" attributeName="stroke" to="#DA1E28" begin="all.mouseover" dur="80ms" repeatCount="1" fill="freeze"></animate><animate xlinkHref="#heart" attributeName="stroke" to="#697077" begin="all.mouseout" dur="80ms" repeatCount="1" fill="freeze"></animate><animate id="heart-start" xlinkHref="#heart" attributeName="fill-opacity" to="1" begin="all.mouseover" dur="80ms" repeatCount="1" fill="freeze"></animate><animate id="heart-end" xlinkHref="#heart" attributeName="fill-opacity" to="0" begin="all.mouseout" dur="80ms" repeatCount="1" fill="freeze"></animate><animateTransform xlinkHref="#heart-position" attributeName="transform" type="scale" values="0.6; 1.1; 0.8; 1.1; 1.1; 0.6;" begin="all.mouseover" dur="1s" repeatCount="indefinite"></animateTransform><animateTransform xlinkHref="#heart-position" attributeName="transform" type="scale" values="1" begin="all.mouseout" dur="1s" repeatCount="1" fill="freeze"></animateTransform></svg></div>
        </div>
    )
}

export default Footer;