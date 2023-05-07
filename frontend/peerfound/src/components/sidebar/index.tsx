import Image from 'next/image'
import React from 'react'
import { Container, Item } from './style'
import Logo from '../../assets/images/icon.png'
import { MdDashboard, MdOutlineGroups2 } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaMoneyBill, FaWallet } from 'react-icons/fa'
import { IoMdExit } from 'react-icons/io'
import Link from 'next/link'
import { useRouter } from 'next/router'

const items = [
    {
        icon: MdOutlineGroups2,
        link: '/admin/groups'
    },
    {
        icon: AiOutlinePlus,
        link: '/admin/contract/new'
    },
    {
        icon: FaMoneyBill,
        link: '/admin/indemnity'
    },
    {
        icon: IoMdExit,
        link: '/admin/auth'
    }
]

interface Props { }

const Sidebar: React.FC<Props> = props => {
    const router = useRouter()

    return (
        <Container>
            <Image src={Logo} width={50} alt=" logo" />
            {items.map(item => (
                <Item key={item.link} isActive={router.asPath == item.link}>
                    {item.link &&
                        (
                            <Link href={item.link}>
                                <item.icon />
                            </Link>
                        )}
                </Item>
            ))}
        </Container>
    )
}

export default Sidebar