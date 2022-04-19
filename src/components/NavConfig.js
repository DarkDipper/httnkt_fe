import { AiOutlineHome, AiOutlineQuestionCircle, AiOutlineBook } from 'react-icons/ai';
import {RiNewspaperFill} from 'react-icons/ri';
const navConfig = [
    {
        subheader: 'Giới thiệu',
        items: [
            {
                title: 'Trang chủ',
                icon: <AiOutlineHome />,
                link: '/homepage'
            },
            {
                title: 'Thông tin nhóm',
                icon: <AiOutlineQuestionCircle />
            }
        ]
    },
    {
        subheader: 'Lý thuyết',
        items: [
            {
                title: 'Thư viện',
                icon: <AiOutlineBook />,
                children: [
                    {
                        id:0,
                        title: 'Giới thiệu về lập trình C++',
                        listLesson: [
                            {
                                title:'Ký tự đặc biệt trong C++'
                            },
                            {
                                title:'Modifier trong C++'
                            },
                            {
                                title:'Template trong C++'
                            },
                        ]
                    },
                    {
                        id:1,
                        title: 'Câu lệnh điều khiển C++',
                    },
                    {
                        id:2,
                        title: 'C++ Function'
                    }
                ]
            },
        ]
    },
    {
        subheader: 'Thực hành',
        items: [
            {
                title: 'Kiểm tra',
                icon: <RiNewspaperFill />,
                link: '/test'
            }
        ]
    }
];
export default navConfig;