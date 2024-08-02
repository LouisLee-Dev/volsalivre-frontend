'use client';

import React, { useState, useEffect } from 'react';
import { getUserId, getUserRole } from '@/utils/localstorage';

interface MinhasofertasProps {
    isDel: boolean;
    setDel: any;
}

const Minhasofertas: React.FC<MinhasofertasProps> = ({isDel, setDel}) => {
    const [schools, setSchools] = useState<any>([]);
    const [selectedSchools, setSelectedSchools] = useState<any[]>([]);

    const handleCheckboxChange = (event: any) => {
        if (event.target.checked) {
            // If checked, select all schools  
            setSelectedSchools(schools.map((school: any) => school._id));
        } else {
            // If unchecked, clear selected schools  
            setSelectedSchools([]);
        }
    };

    useEffect(() => {
        const fetchSchool = async () => {
            let url = "";
            const user_id = getUserId();
            const user_role = getUserRole();
            url = user_role === 'admin' ?
                `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools` :
                `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools?user=${user_id}`;
            try {
                const result = await fetch(url);
                if (!result.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await result.json();  // Await the JSON parsing  
                console.log(data);
                setSchools(data);
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };
        fetchSchool();

    }, []);

    useEffect(() => {
        try {
            const delSchools = async () => {
                await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools/del`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({schools:selectedSchools})
                });
            }

            isDel && delSchools();
            setDel(false);
        } catch (e) {
            console.error(e)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDel, selectedSchools])

    return (
        <div className="flex flex-col gap-1">
            <table className='border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th key={1}>
                            <input checked={schools.length > 0 && selectedSchools.length === schools.length} onChange={handleCheckboxChange} type="checkbox" />
                        </th>
                        <th key={2}><span>Etapa</span></th>
                        <th key={3}><span>Série</span></th>
                        <th key={4}><span>Turno</span></th>
                        <th key={5}><span>Mens.s/desconto</span></th>
                        <th key={6}><span>Desconto na Mens.</span></th>
                        <th key={7}><span>Valor da matrícula</span></th>
                        <th key={8}><span>Vagas</span></th>
                        <th key={9}><span>Info. adicional</span></th>
                        <th key={10}><span>Opções</span></th>
                    </tr>
                </thead>
                <tbody>
                    {schools.length > 0 ? (
                        schools.map((school: any, index: number) => (
                            <tr key={school.id || index}>
                                <td><input type="checkbox" checked={selectedSchools.includes(school._id)} onChange={() => {
                                    // Logic to handle individual checkbox selection  
                                    if (selectedSchools.includes(school._id)) {
                                        // If already selected, remove from selectedSchools  
                                        setSelectedSchools(selectedSchools.filter(id => id !== school._id));
                                    } else {
                                        // If not selected, add to selectedSchools  
                                        setSelectedSchools([...selectedSchools, school._id]);
                                    }
                                }} /></td>
                                <td><span>{school.level.level}</span></td>
                                <td>{school.series.series}</td>
                                <td>{school.turno}</td>
                                <td>{school.amount}</td>
                                <td>{school.monthlyState}</td>
                                <td>{school.regFee}</td>
                                <td>{school.vagas}</td>
                                <td>{school.comments}</td>
                                <td>
                                    <div className="flex gap-5">
                                        <span className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                                                <path fill="#a00ec8" d="M103 464H48v-55L358.14 98.09l55.77 55.78zm322.72-322L370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.9 25.9 0 0 1 18.42 7.62l17 17A25.87 25.87 0 0 1 464 91c0 7-2.71 14.45-7.62 19.36Zm-7.52-70.83" />
                                            </svg>
                                        </span>
                                        <span className='cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                                                <path fill="#a00ec8" d="M456 480H136a24 24 0 0 1-24-24V128a16 16 0 0 1 16-16h328a24 24 0 0 1 24 24v320a24 24 0 0 1-24 24" />
                                                <path fill="#a00ec8" d="M112 80h288V56a24 24 0 0 0-24-24H60a28 28 0 0 0-28 28v316a24 24 0 0 0 24 24h24V112a32 32 0 0 1 32-32" />
                                            </svg>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={10}>Nenhuma escola encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Minhasofertas;