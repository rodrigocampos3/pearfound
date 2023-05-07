import AdminWrapper from '@/components/adminWrapper'
import Head from 'next/head'
//import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Title from '@/components/title'
import Notification from '@/components/updates'
import { NoNotification } from '@/components/updates/style'
import Status from '@/components/status'
import axios from '../../../../axios'
import React, { useEffect, useState } from 'react'
import { useUser } from '@/contexts/user'

// const groups = [
//     {
//         id: 0,
//         message: 'Novo pedido de indenização!',
//         page: '/admin/indemnity/'
//     },
//     {
//         id: 1,
//         message: 'Transferência de indenização concluída',
//         page: '/admin/indemnity/'
//     },
//     {
//         id: 2,
//         message: 'Erro na indenização: IMEI não correspondente',
//         page: '/admin/indemnity/'
//     },
//     {
//         id: 3,
//         message: 'Erro na indenização: IMEI não correspondente',
//         page: '/admin/indemnity/'
//     },
// ]

// const status = [
//     {
//         _id: 0,
//         id: 0,
//         message: 'Número mínimo atingido!',
//         group: 'FVCIACOA',
//         min: 40,
//         max: 80,
//         total: 40,
//         page: '/admin/dashboard/'
//     },
//     {
//         _id: 1,
//         id: 1,
//         message: 'Número máximo atingido!',
//         group: 'FVCIACOB',
//         min: 40,
//         max: 80,
//         total: 80,
//         page: '/admin/dashboard/'
//     },
//     {
//         _id: 2,
//         id: 2,
//         message: 'Ainda sem participantes',
//         group: 'FVCIACOA',
//         min: 40,
//         max: 80,
//         total: 0,
//         page: '/admin/dashboard/'
//     },
//     {
//         _id: 3,
//         id: 3,
//         message: 'Ainda sem participantes',
//         group: 'FVCIACOA',
//         min: 40,
//         max: 80,
//         total: 0,
//         page: '/admin/dashboard/'
//     },{
//         _id: 4,
//         id: 4,
//         message: 'Ainda sem participantes',
//         group: 'FVCIACOA',
//         min: 40,
//         max: 80,
//         total: 0,
//         page: '/admin/dashboard/'
//     }
// ]

interface Props { }


const AdminDashboard: React.FC<Props> = props => {
    //const [showComponent, setShowComponent] = useState(false);
    const [groups, setGroups] = useState<any>([])
    const {user} = useUser()
    const router = useRouter()

    const getGroups = async () => {
        try {
            const res = await axios.get('/insurance/dashboard')
            setGroups(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getGroups()
    }, [])

    return (
        <>
            <Head>
                <title>Admin - Dashboard</title>
            </Head>
            <AdminWrapper title='Grupos aguardando ativação'>
                <>
                    
                    {groups.length > 0 ? (
                        groups.map((groups: any) => (
                            <Status key={groups.id} {...groups} />
                        ))
                    ) : (
                        <NoNotification>
                            Nosso sistema já está a procura de um grupo para
                            você entrar. Em breve você receberá um convite.
                        </NoNotification>
                    )}
                    
                </>
            </AdminWrapper>
        </>
    )
}

export default AdminDashboard
/*
return (
    <>
        <Head>
            <title>Admin - Dashboard</title>
        </Head>
        <AdminWrapper title='Dashboard'
            subtitle='Ainda não há nenhum grupo ativo!'>

            <Button onClick={() => router.push('/admin/contract/new')}>Criar grupo!</Button>

        </AdminWrapper>
    </>
)
*/