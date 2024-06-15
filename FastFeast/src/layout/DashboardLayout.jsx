import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MdOutlineSpaceDashboard, MdDashboardCustomize } from "react-icons/md";
import { FaUserAlt, FaRegUser } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import logo from "/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

const sharedLinks = (
    <>
        <li className="mt-3">
            <Link to="/">
                <MdDashboard /> Home
            </Link>
        </li>
        <li>
            <Link to="/menu">
                <FaCartShopping /> Menu
            </Link>
        </li>
        <li>
            <Link to="/menu">
                <FaLocationArrow /> Orders Tracking
            </Link>
        </li>
        <li>
            <Link to="/menu">
                <FaQuestionCircle /> Customer Support
            </Link>
        </li>
    </>
);
const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            <MdDashboardCustomize />
                        </label>
                        <button className="btn rounded-full px-6 bg-green flex items-center gap-2 text-white sm:hidden">
                            <FaRegUser /> Logout
                        </button>
                    </div>
                    <div className="mt-5 md:mt-2 mx-4">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="/dashboard" className="flex justify-start mb-3">
                                <img src={logo} alt="" className="w-20" />
                                <div className="badge badge-primary">Admin</div>
                            </Link>
                            <hr />
                        </li>
                        <li><Link> <MdOutlineSpaceDashboard />Dashboard</Link></li>
                        <li><Link to="/dashboard/user"><FaUserAlt />All users</Link></li>
                        <li><Link to="/dashboard/user"><MdManageAccounts />Manage booking</Link></li>
                        <li><Link to="/dashboard/user"><HiTemplate />Add Menu</Link></li>
                        <li><Link to="/dashboard/user"><TiThMenu />Manage items</Link></li>
                        {/* Share link */}
                        <hr />

                        {sharedLinks}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout