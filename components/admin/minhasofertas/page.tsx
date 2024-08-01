'use client';

import React, {useState, useEffect} from 'react';
import { getUserId, getUserRole } from '@/utils/localstorage';

const Minhasofertas:React.FC = () => {
    const [schools, setSchools] = useState<any>([]);

    useEffect(() => {        
        const fetchSchool = async () => {
            let url = "";
            const user_id = getUserId();
            const user_role = getUserRole();
            url =  user_role === 'admin' ?
                `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools`
                : `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools?user=${user_id}`
            const result = await fetch(url);
            const data = result.json();
            setSchools(data);
        }

        fetchSchool();
    }, [])

    return (
        <div className="flex flex-col gap-1">
            <table>
                <thead>                    
                <tr>
                    <th>
                        <input type="checked" />
                    </th>
                    <th>
                        <span>Etapa</span>
                    </th>
                    <th><span>Serie</span></th>
                    <th><span>Turno</span></th>
                    <th><span>Mens.s/desconto</span></th>
                    <th><span>Desconto na Mens.</span></th>
                    <th><span>Valor da matricula</span></th>
                    <th><span>Vagas</span></th>
                    <th><span>Info. adicional</span></th>
                    <th><span>Opcoes</span></th>
                </tr>
                </thead>
                <tbody>
                    {
                        schools && 
                        <tr>
                            <td><input type="checked" /></td>
                            <td><span></span></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Minhasofertas;