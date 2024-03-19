"use client" 

import { useToggleState } from '@/state/toggle_menu';
import { news } from '@/utils/types';
import React, { useEffect } from 'react';

export const Add_Data_To_Global_Context = ({ data }: { data: news[] }) => {
    const { newsData,setNewsData } = useToggleState();

    useEffect(() => {
        if (data.length > 0) {
            setNewsData(data);
        }
    }, [data]);

    return <></>;
};

