"use client";
import React, { useState, useEffect } from "react";
import TeachStage from "./teachState";
import Transforming from "./transforming/page";
import OtherSchools from "./otherschools/page";
import PrivateSchools from "./privateschools/page";
import { useGetByPrivateMutation } from "@/lib/features/schools/schoolsApi";

const Dashboard: React.FC = () => {
  const [privateSchoolsData, setPrivateSchoolsData] = useState<any>(); // State to hold fetched data
  const [getByPrivate, { isLoading, isError, error }] = useGetByPrivateMutation();
  
  useEffect(() => {
    // Fetch private school data when component mounts
    getByPrivate()
    .unwrap()
    .then((fetchedData) => {
      setPrivateSchoolsData(fetchedData); // Update state with fetched data      
    })
    .catch((err) => {
      console.error('Error fetching private school data:', err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures useEffect runs only on mount
  
  return (
    <div className="flex flex-col gap-10 items-center sm:gap-8 md:gap-6">
      <TeachStage />
      <PrivateSchools privateSchoolsData = {privateSchoolsData} />
      <Transforming />
      <OtherSchools />
      {/* <Works /> */}
    </div>
  );
};

export default Dashboard;
