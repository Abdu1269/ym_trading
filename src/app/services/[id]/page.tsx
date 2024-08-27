'use client';
import { CollectionQuery } from '@/model/collection.model';
import { Service } from '@/model/service.model';
import fetcher from '@/shared/utils/fetcher';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const Page = () => {
    const perPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const collection: CollectionQuery = {
        top: perPage,
        skip: (currentPage - 1) * perPage,
        orderBy: [{
            direction: 'desc',
            field: 'createdAt'
        }],
    };

    const { data: services, isLoading, error } = useSWR({
        url: `https://saas_web.yenechinet.com/api/portal-product-and-services/get-services`,
        params: collection
    }, fetcher);

    useEffect(() => {
        if (services && services.count) {
            const calculatedTotalPage = Math.ceil(services.count / perPage);
            setTotalPage(calculatedTotalPage);
        }
    }, [services, perPage]);

    const handlePageChange = (index: number) => {
        setCurrentPage(index);
    };

    if (error) return <div>Error occurred</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="container bg-white mt-24">
            <div className='grid grid-cols-4'>
                <div className='col-span-1 bg-emerald-900 h-screen w-[30rem]'>
                    <ul className="menu bg-slate rounded-box w-56 p-4">
                        {services?.data?.map((service: Service, index: number) => (
                            <li key={index} className='text-black p-5 hover:bg-metal'>{service.name.en}</li>
                        ))}
                    </ul>
                    
                    <div className='join'>
                        {Array.from({ length: totalPage }, (_, index) => (
                            <button 
                                className={`join-item btn ${currentPage === (index + 1) ? 'btn-active' : ''}`} 
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='col-span-3 bg-slate-500 h-screen'>
                    {/* Content for the right column */}
                </div>
            </div>
        </div>
    );
}

export default Page;
