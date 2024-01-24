import React from 'react';
import LoginForm from "@/components/User/LoginForm";
import MainLayout from '@/components/layouts/MainLayout';

const Page = () => {
    return (
        <MainLayout>
            <LoginForm/>
        </MainLayout>
    );
};

export default Page;