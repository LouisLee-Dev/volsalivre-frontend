'use client';

import axios from "axios";
import React, { useState, useEffect } from "react";
import { getUserRole } from "@/utils/localstorage";

interface ModalProps {
    newData?: any;
    setShowModal?: any;
}

const Modal: React.FC<ModalProps> = ({ newData, setShowModal }) => {
    const [data, setData] = useState<any>();
    const [users, setUsers] = useState<any>([]);
    const [schools, setSchools] = useState<any>([]);
    const [years, setYears] = useState<any>([]);
    const [tipos, setTipos] = useState<any>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/users`);
                if (result) {
                    setUsers(result.data);
                }
            }
            catch (e) {
                throw new Error("Error");
            }
        }

        const fetchSchools = async () => {
            try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools`);
                if (result) {
                    setSchools(result.data);
                    console.log(result.data);
                }
            } catch (e) {
                throw new Error("Error school");
            }
        }

        const fetchTipos = async () => {
            try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/tipo`);
                if (result) {
                    setTipos(result.data);
                }
            }
            catch (e) {
                throw new Error("Error Tipos");
            }
        }

        const fetchYears = async () => {
            try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/periodo`);
                if (result) {
                    setYears(result.data);
                }
            } catch (e) {
                throw new Error("Error years");
            }
        }

        fetchUsers();
        fetchSchools();
        fetchTipos();
        fetchYears();
    }, [])

    useEffect(() => {
        setData(newData);
    }, [newData]);

    const registStudent = () => {
        const registerStudentAsync = async () => {
            try {
                console.log('1234567')
                const result = await axios({ method: "post", url: `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/students/add`, data: data });
                if (result) {
                    console.log(result);
                }
            }
            catch (e) {
                throw new Error("Error register");
            }
        }

        data && registerStudentAsync();
    }

    return (
        <div className="top-0 left-0 fixed w-screen h-screen flex justify-center items-center z-30">
            <div className="bg-black w-full h-full opacity-50" onClick={() => setShowModal(false)}></div>
            <div className="absolute flex flex-col gap-5 border border-slate-300 rounded-lg p-5 bg-white">
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Name</label>
                    <input type="text" className="rounded-full px-5 py-1 border border-slate-300 focus:outline-none focus:ring focus:ring-purple-300" value={data && data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">School</label>
                    <select
                        className="border border-slate-400 focus:outline-none focus:ring focus:ring-purple-400 px-5 py-1 rounded-full"
                        name="" id="" defaultValue={schools && schools.length > 0 && schools[0]._id} value={data && data.school && data.school} 
                        onChange={(e) => {setData({...data, school: e.target.value})}}>
                        <option value="">Select School</option>
                        {
                            schools && schools.map((school: any, index: number) => (
                                <option key={index} value={school._id}>
                                    <p>
                                        {`${school.level.level}-${school.series.series}`}
                                    </p>
                                    <p>
                                        {`(${school.title})`}
                                    </p>
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Parent</label>
                    <select
                        className="border border-slate-400 focus:outline-none focus:ring focus:ring-purple-400 px-5 py-1 rounded-full"
                        name="" id="" defaultValue={users && users.length > 0 && users[0]._id} value={data && data.parent && data.parent}
                        onChange={(e) => {setData({...data, parent: e.target.value})}}>
                        <option value="">Select Parent</option>
                        {
                            users && users.map((user: any, index: number) => (
                                <option key={index} value={user._id}>{user.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Year</label>
                    <select
                        className="border border-slate-400 focus:outline-none focus:ring focus:ring-purple-400 px-5 py-1 rounded-full"
                        name="" id="" defaultValue={years && years.length > 0 && years[0].year} value={data && data.year && data.year}
                        onChange={(e) => {setData({...data, year: e.target.value})}}>
                        <option value="">Select Year</option>
                        {
                            years && years.length > 0 &&
                            years.map((year: any, index: number) => (
                                <option key={index} value={year.year}>{year.year}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Tipo</label>
                    <select
                        className="border border-slate-400 focus:outline-none focus:ring focus:ring-purple-400 px-5 py-1 rounded-full"
                        name="" id="" defaultValue={tipos && tipos.length > 0 && tipos[0].
                            _id} value={data && data.tipo && data.tipo}
                            onChange={(e) => {setData({...data, tipo: e.target.value})}}>
                        <option value="">Select Tipo</option>
                        {
                            tipos && tipos.length > 0 &&
                            tipos.map((tipo: any, index: number) => (
                                <option key={index} value={tipo._id}>{tipo.tipo}</option>
                            ))
                        }
                    </select>
                </div>

                <button className="bg-purple-500 py-2 text-white text-xl font-semibold rounded-full" onClick={() => registStudent()}>
                    Register
                </button>
            </div>
        </div>
    )
}

export default Modal;