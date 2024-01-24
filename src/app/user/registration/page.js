import React from 'react';

import SignUpForm from "@/components/User/SignUpForm";
import MainLayout from '@/components/layouts/MainLayout';

const Page = () => {
    return (
        <MainLayout>
            <SignUpForm/>
        </MainLayout>
    );
};

export default Page;