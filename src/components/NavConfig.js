import { AiOutlineHome, AiOutlineQuestionCircle, AiOutlineBook } from 'react-icons/ai';
import {RiNewspaperFill} from 'react-icons/ri';
const NavConfig = [
    {
        subheader: 'Giới thiệu',
        items: [
            {
                title: 'Trang chủ',
                icon: <AiOutlineHome />
            },
            {
                title: 'Điều nên biết',
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
                        title: 'Giới thiệu về lập trình C++',
                    },
                    {
                        title: 'Câu lệnh điều khiển C++',
                    },
                    {
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
                icon: <RiNewspaperFill />
            }
        ]
    }
];
export default NavConfig;