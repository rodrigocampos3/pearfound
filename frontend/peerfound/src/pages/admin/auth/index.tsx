import AdminLoginForm from '@/components/adminLoginForm'
import {
    AuthBox,
    LeftContainer,
    PageContainer,
    RightContainer
} from '@/styles/pages/admin/auth'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../assets/images/icon.png'

interface Props {}

const Auth: React.FC<Props> = props => {
    return (
        <>
            <Head>
                <title>Admin - Login</title>
            </Head>
            <PageContainer>
                <LeftContainer>
                    <Image src={Logo} alt="logo" />
                    <AuthBox>
                        <h1>Bem vindo de volta</h1>
                        <h3>Por favor, realize seu login</h3>
                       <AdminLoginForm />
                    </AuthBox>
                </LeftContainer>
                <RightContainer></RightContainer>
            </PageContainer>
        </>
    )
}

export default Auth
