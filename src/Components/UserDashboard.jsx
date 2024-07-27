import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Link, Navigate, useNavigate } from "react-router-dom";
import icon1 from "../assets/DroneImages/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const navitem = [
    { id: 1, name: "Home", icon: faHome, link: "/" },
    { id: 2, name: "Profile", icon: faUser, link: "#" },
    { id: 3, name: "Settings", icon: faCog, link: "#" },
];
const cardinfo = [
    {
        title: "Total Profit",
        digit: "52,329",
    },
    {
        title: "Total Revenue",
        digit: "78,200",
    },
    {
        title: "Total Visitors",
        digit: "22,500",
    },
];
const historydata = [
    {
        img: "/src/assets/Drones/About-img.png",
        country: "China",
        place: "Peking Duck",
        night: "5",
        departuredate: "10 Jan, 2023",
        arrivaldate: "16Jan, 2023",
        people: "2",
        price: "$124",
    },
    {
        img: "src/assets/Drones/Hero_Drone.png",
        country: "India",
        place: "Butter Chicken",
        night: "5",
        departuredate: "8 Dec, 2023",
        arrivaldate: "21 Dec, 2023",
        people: "2",
        price: "$140",
    },
    {
        img: "src/assets/Icons/DroneIcon.png",
        country: "Canada",
        place: "Poutine",
        night: "12",
        departuredate: "11 Dec, 2023",
        arrivaldate: "11 Dec, 2023",
        people: "5",
        price: "$560",
    },
    {
        img: "src/assets/Products/p4.png",
        country: "Italy",
        place: "Pasta Carbonara",
        night: "3",
        departuredate: "22 Dec, 2023",
        arrivaldate: "25 Dec, 2023",
        people: "2",
        price: "$200",
    },
    {
        img: "src/assets/Products/p10.png",
        country: "Greece",
        place: "Moussaka",
        night: "4",
        departuredate: "24 Dec, 2023",
        arrivaldate: "28 Dec, 2023",
        people: "3",
        price: "$900",
    },
];
const tophotel = [
    {
        img: "src/assets/Products/p14.png",
        hotelname: "Chicago Style",
        type: "Pizza",
        beds: "2",
        adult: "3",
        perdayprice: "62",
        rating: "4.8",
    },
    {
        img: "src/assets/HandHeldImages/Handheld2.jpg",
        hotelname: "Brick Oven Pizza.",
        type: "Pizza",
        beds: "2",
        adult: "2",
        perdayprice: "78",
        rating: "4.6",
    },
    {
        img: "src/assets/HandHeldImages/Handheld3.jpg",
        hotelname: "Italian Pizza.",
        type: "Pizza",
        beds: "3",
        adult: "6",
        perdayprice: "102",
        rating: "4.2",
    },
    {
        img: "src/assets/HandHeldImages/Handheld5.jpg",
        hotelname: "New York Style Pizza.",
        type: "Pizza",
        beds: "1",
        adult: "2",
        perdayprice: "92",
        rating: "4.1",
    },
    {
        img: "src/assets/HandHeldImages/masaaki-komori-Q8e3rQ5hiek-unsplash.jpg",
        hotelname: "Greek Pizza.",
        type: "Pizza",
        beds: "1",
        adult: "2",
        perdayprice: "92",
        rating: "4.1",
    },
];
const options2 = {
    chart: {
        type: "areaspline",
        height: 250,
        // width: 500,
        backgroundColor: "transparent",
        spacingBottom: 0,
        spacingLeft: 0,
    },
    tooltip: {
        formatter: function () {
            return this.y;
        },
    },
    plotOptions: {
        areaspline: {
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, "rgba(17, 232, 162, 1)"], // Start color
                    [1, "rgba(17, 232, 162, 0)"], // End color (transparent)
                ],
            },
            marker: {
                enabled: false,
            },
        },
    },
    xAxis: {
        lineColor: "transparent",
        lineWidth: 0,
        tickWidth: 0,
        categories: null,
        title: { text: null },
        labels: {
            enabled: false,
        },
        gridLineWidth: 0,
    },
    yAxis: {
        lineColor: "transparent",
        lineWidth: 0,
        categories: null,
        title: {
            text: null,
        },
        labels: {
            enabled: false,
        },
        gridLineWidth: 0,
    },
    title: false,
    series: [
        {
            data: [20, 12, 16, 7, 9, 3, 2],
        },
    ],
    exporting: {
        enabled: false,
    },
    credits: {
        enabled: false,
    },
    legend: {
        enabled: false,
    },
};
const UserDashboard = () => {
    const [NavOpen, IsNavOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [ChangeOption, SetOptions] = useState(options2);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        SetOptions(options2);
    }, [ChangeOption]);
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    // Items per page
    const itemsPerPage = 5;
    // const pageCount = Math.ceil(historydata.length / itemsPerPage);
    // Slice data for current page
    const paginatedData = historydata.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Function to handle logout
    const navigate = useNavigate();

    const handleLogout = () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            sessionStorage.removeItem("token");
            alert("Logout successful");

            navigate("/loginForm");
        } else {
            alert("No token found");
        }
    };

    return (
        <div className="flex">
            {/* <div
                className={`bg-white transition-all duration-500 ease-in-out h-screen md:h-[600px] gap-12 pl-4 rounded-br-lg shadow-md flex-col fixed z-10 sm:flex ${
                    NavOpen ? "w-[200px] top-0 left-0" : "w-[78px] -left-52 sm:left-0"
                } `}
            >
                <div className="flex pl-2.5 pt-8 px-5 justify-between items-center">
                    <a href="#_">
                        <img src={icon1} alt="logo" />
                    </a>
                </div>
                <nav className="p-4 h-full">
                    <ul className="space-y-6">
                        {navitem.map((item) => () => (
                            <li
                                key={item.id}
                                href={item.link}
                                className={`flex items-center gap-3 p-2 rounded-md transition-colors duration-300
                              ${NavOpen ? "hover:bg-teal-50" : "justify-center"}
                              ${NavOpen ? "w-full" : "w-12 h-12"}`}
                            >
                                <FontAwesomeIcon icon={item.icon} className={`text-gray-600 ${NavOpen ? "text-xl" : "text-2xl"}`} />
                                {NavOpen && <span className="text-gray-700 font-medium transition-opacity duration-300">{item.name}</span>}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div> */}
            <div className="w-full flex flex-col md:ml-20">
                <div className="px-5 md:px-10 py-5 bg-white flex items-center justify-between w-full fixed z-20">
                    <div className="flex items-center gap-2 sm:hidden">
                        <img src={icon1} alt="logo" />
                        <h1 className="font-semibold text-lg">Salefynno</h1>
                    </div>
                    <div className="hidden sm:block z-50 mr-40">
                        <a href="#_" onClick={() => IsNavOpen(!NavOpen)}>
                            <img src="/assets/tedrones-admin/hamburger.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="transition-all duration-1000 ease-in-out">
                    <div
                        className={`flex flex-col w-full justify-between gap-5 p-5 ${
                            NavOpen
                                ? "md:max-w-[calc(100vw_-_100px)] sm:max-w-[calc(100vw_-_160px)] md:pl-36 transition-all duration-500"
                                : "md:max-w-[calc(100vw_-_100px)] transition-all duration-500"
                        } `}
                    >
                        <div className="flex flex-col md:flex-col xl:flex-row w-full gap-5">
                            <div className="w-full bg-[#FDFDFD] rounded-md shadow-md pt-5 pb-2 flex flex-col gap-5">
                                <div className="flex flex-col gap-7 mb-6 px-5 ">
                                    <div className="flex justify-between">
                                        <h1 className="font-bold text-2xl">Order History</h1>
                                        {/* <img
                                            src="/assets/tedrones-admin/searchicon.svg"
                                            alt="searchicon"
                                            className="hidden md:block cursor-pointer"
                                        /> */}
                                    </div>

                                    <div className="container mx-auto px-4 py-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {cardinfo.map((data, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                                                >
                                                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
                                                        <h3 className="text-white text-xl font-semibold">{data.title}</h3>
                                                    </div>
                                                    <div className="p-6">
                                                        <div className="flex justify-between items-center mb-4">
                                                            <span className="text-3xl font-bold text-gray-800">{data.digit}</span>
                                                            <svg
                                                                className="w-8 h-8 text-indigo-500"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                                                            View Details
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Item Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Units
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Order Date
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Price
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {paginatedData.map((data, index) => (
                                                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <img className="h-10 w-10 rounded-full" src={data.img} alt="" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{data.place}</div>
                                                                    <div className="text-sm text-gray-500">{data.country}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">{data.night} Units</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="mr-2 h-5 w-5" src="/assets/tedrones-admin/plane.svg" alt="" />
                                                                <div className="text-sm text-gray-900">{data.departuredate}</div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.price}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-6 w-full">
                                {/* Analytics Card */}
                                <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-bold text-gray-800">Analytics</h2>
                                        <p className="text-sm font-medium">
                                            Total: <span className="text-emerald-500 text-lg">250</span>
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { label: "Confirm", value: 70, color: "bg-blue-500" },
                                            { label: "Pending", value: 18, color: "bg-yellow-500" },
                                            { label: "Cancelled", value: 12, color: "bg-red-500" },
                                        ].map((item) => (
                                            <div key={item.label}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600 font-medium">{item.label}</span>
                                                    <span className={`font-semibold text-${item.color.replace("bg-", "")}`}>{item.value}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full">
                                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-center text-gray-500 text-sm mt-6">Order analytics calculated based on travels count</p>
                                </div>

                                {/* Expense Card */}
                                <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Expense</h2>
                                        <p className="text-3xl font-extrabold text-gray-900">$29.2k</p>
                                    </div>

                                    <div className="h-64">
                                        <HighchartsReact highcharts={Highcharts} options={options2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-xl p-8 max-w-[100vw]">
                            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Featured Dishes</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {tophotel.map((dish, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img src={dish.img} alt={dish.hotelname} className="w-full h-full object-cover" />
                                            <div className="absolute top-0 right-0 m-2">
                                                <span
                                                    className={`
              px-2 py-1 text-xs font-semibold rounded-full
              ${dish.type === "Plus" ? "bg-emerald-500 text-white" : dish.type === "Lux" ? "bg-amber-500 text-white" : "bg-indigo-500 text-white"}
            `}
                                                >
                                                    {dish.type}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{dish.hotelname}</h3>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-2xl font-bold text-purple-600">${dish.perdayprice}</span>
                                                <div className="flex items-center">
                                                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="text-gray-600 font-semibold">{dish.rating}</span>
                                                </div>
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors duration-300">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserDashboard;
const LeftArrow = () => {
    return <img src="/assets/tedrones-admin/leftarrow.svg" />;
};
const RightArrow = () => {
    return <img src="/assets/tedrones-admin/rightarrow.svg" />;
};
