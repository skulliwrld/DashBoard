import { 
    MdAnalytics, 
    MdAttachMoney,
    MdDashboard, 
    MdHelpCenter, 
    MdOutlineSettings,
    MdPeople,
    MdShoppingBag,
    MdSupervisedUserCircle, 
    MdWork 
} from "react-icons/md"

import { FaUserAlt, FaUser,FaRegUserCircle } from "react-icons/fa";

export const  MenuData = [
    {
        title:'Pages',
        list:[
            {
                title:"Dashboard",
                path:"/dashboard",
                icons: <MdDashboard />
            },
            {
                title:"Users",
                path:"/dashboard/users",
                icons:<MdSupervisedUserCircle />
            },
            {
                title:"Products",
                path:"/dashboard/products",
                icons:<MdShoppingBag />
            },
            {
                title:"Transactions",
                path:"/dashboard/transactions",
                icons:<MdAttachMoney />
            },
        ]
    },

    {
        title: "Analytics",
        list:[{
            title:"Teams",
            path:'/dashboard/team',
            icons:< MdPeople />
        },

        {
            title:"Reports",
            path:'/dashboard/report',
            icons:< MdAnalytics />
        },
        {
            title:"Revenue",
            path:'/dashboard/revenue',
            icons:< MdWork />
        },
    ]
    },
    {
        title:'User',
        list:[
            {
                title:"Settings",
                path:"/dashboard/setting",
                icons:<MdOutlineSettings />
            },

            {
                title:"Help",
                path:"/dashboard/help",
                icons:<MdHelpCenter />
            },



        ]
    },

    
];


export const CardDetails = [
    {
        title : "Total Users",
        User_Amount : 45.576,
        prev_count: "12%",
        icons: <FaUser />
    },

    {
        title : "Active Users",
        User_Amount : 23.34,
        prev_count: "16%",
        icons: <FaUserAlt />
    },

    {
        title : "Current Users",
        User_Amount : 36.56,
        prev_count: "85%",
        icons: <FaRegUserCircle />
    }
]

export const UserProfile = [
    {
        image:"/images/avater.png",
        name:"ikechi jonathan",
        email:"jonabobo@gmail.com",
        created_at:" Oct 30 2023",
        role:"client",
        status:"active",
        action:[{view:"View", delete:"Delete"}]
    },
    {
        image:"/images/avater.png",
        name:"joseph",
        email:"codeskulli@gmail.com",
        created_at:" Dec 23 2023",
        role:"passive",
        status:"active",
        action:[{view:"View", delete:"Delete"}]
    },

    {
        image:"/images/avater.png",
        name:"joshua",
        email:"joshbobo@gmail.com",
        created_at:" Feb 30 2023",
        role:"client",
        status:"active",
        action:[{view:"View", delete:"Delete"}]
    },

    {
        image:"/images/avater.png",
        name:"chinedu",
        email:"ikechison02@gmail.com",
        created_at:" Feb 30 2023",
        role:"client",
        status:"passive",
        action:[{view:"View", delete:"Delete"}]
    }
]


export const ProductItems = [
    {
        image:"/images/noproduct.png",
        title:"Iphone",
        desc:"loroofjfjfjfjjjjdjdjfjffjjjjfjfjfj",
        price:180000,
        created_at:"Feb 30 2023",
        stock:45,
        action:[{
            view:"View",
            delete:"Delter"
        }]
    },

    {
        image:"/images/noproduct.png",
        title:"LG Television",
        desc:"loroofjfjfjfjjjjdjdjfjffjjjjfjfjfj",
        price:180000,
        created_at:"Feb 30 2023",
        stock:45,
        action:[{
            view:"View",
            delete:"Delter"
        }]
    },

    {
        image:"/images/noproduct.png",
        title:"Computer System",
        desc:"loroofjfjfjfjjjjdjdjfjffjjjjfjfjfj",
        price:260000,
        created_at:"Mar 31 2023",
        stock:70,
        action: [{
            view:"View",
            delete:"Delete"
        }]
    }


]