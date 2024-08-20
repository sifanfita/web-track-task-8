"use client"
import { Job } from '@/types/job';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';



const API_ENDPOINT = "https://akil-backend.onrender.com/opportunities/search";


const JobList = () =>{

    const [allJobs, setAllJobs] = useState<Job[] | undefined>(undefined);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_ENDPOINT);
                const jobs = response.data;
                console.log(jobs.data);
                setAllJobs(jobs.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                return undefined;
            }
        };
        
        fetchData();
    }, []);
    
    return (
        <div className="w-[60%] pl-20 mt-16">
    {/* <Signup /> */}
    <h1 className="font-bold text-xl">Opportunities</h1>
    <p>Total job posts: {allJobs?.length}</p>
    <div>
      {allJobs?.map((it) => (
          <Card
          key={it.id}
          title={it.title}
          company={it.orgName}
          logoUrl={it.logoUrl}
          orgName={it.orgName}
          id={it.id}
          description={it.description}
          location={it.location}
          />
        ))}
    </div>
  </div>
);

} 

export default JobList