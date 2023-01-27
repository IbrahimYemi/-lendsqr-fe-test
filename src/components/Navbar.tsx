import React, { useState } from 'react'
import logo from '../images/navbar/Group.png'
import briefcase from '../images/navbar/briefcase 1.png'
import vector from '../images/navbar/Vector.png'
import home from '../images/navbar/home 1.png'
import user from '../images/navbar/user-friends 1.png'
import karma from '../images/navbar/user-times 1.png'
import whitelists from '../images/navbar/user-check 1.png'
import loanRequest from '../images/navbar/Group 104.png'
import loans from '../images/navbar/sack 1.png'
import savings from '../images/navbar/piggy-bank 1.png'
import guarantor from '../images/navbar/users 1.png'
import models from '../images/navbar/handshake-regular 1.png'
import loanProducts from '../images/navbar/Group 104.png'
import savingsProduct from '../images/navbar/GrpV.png'
import feeCharges from '../images/navbar/coins-solid 1.png'
import transactions from '../images/navbar/icon.png'
import services from '../images/navbar/galaxy 1.png'
import serviceAccount from '../images/navbar/user-cog 1.png'
import settlements from '../images/navbar/scroll 1.png'
import reports from '../images/navbar/chart-bar 2.png'
import preference from '../images/navbar/sliders-h 1.png'
import feesPricing from '../images/navbar/badge-percent 1.png'
import auditLog from '../images/navbar/clipboard-list 1.png'
import { useNavigate } from 'react-router-dom'




const Navbar = () => {
    const navigate = useNavigate()
    const [active, setActiveIndex] = useState<number>(1);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    }

    const handleClickUser = (index: number) => {
        setActiveIndex(index);
        navigate('/')
    }


    return (
        <div className='navbar' >
            <span className='root-logo' >
                <img src={logo} alt="logo" />
            </span>
            <div className='nav' >
                <div className="switch">
                    <span>
                        <img src={briefcase} alt="briefcase" />
                    </span>

                    <select className='paragraph' name="switchOrg">
                        <option value="Lendsqr">Switch Organization</option>
                        <option value="Lendsqr">Lendsqr</option>
                        <option value="Lendsqr">Lendsqr</option>
                        <option value="Lendsqr">Lendsqr</option>
                        <option value="Lendsqr">Lendsqr</option>
                    </select>

                </div>

                <div className={active === 0 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(0)}>
                    <img src={home} alt="dashboard" />
                    <span>Dashboard</span>
                </div>

                <p style={{ paddingLeft: "2rem", color: "#545F7D", fontSize: "12px" }} >CUSTOMERS</p>
                <div className={active === 1 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClickUser(1)}>
                    <img src={user} alt="dashboard" />
                    <span>Users</span>
                </div>
                <div className={active === 2 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(2)}>
                    <img src={guarantor} alt="dashboard" />
                    <span>Guarantors</span>
                </div>
                <div className={active === 3 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(3)}>
                    <img src={loans} alt="dashboard" />
                    <span>Loans</span>
                </div>
                <div className={active === 4 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(4)}>
                    <img src={models} alt="dashboard" />
                    <span>Decision Models</span>
                </div>
                <div className={active === 5 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(5)}>
                    <img src={savings} alt="dashboard" />
                    <span>Savings</span>
                </div>
                <div className={active === 6 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(6)}>
                    <img src={loanRequest} alt="dashboard" />
                    <span>Loan Request</span>
                </div>
                <div className={active === 7 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(7)}>
                    <img src={whitelists} alt="dashboard" />
                    <span>Whitelists</span>
                </div>
                <div className={active === 8 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(8)}>
                    <img src={karma} alt="dashboard" />
                    <span>Karma</span>
                </div>
                <br />


                <p style={{ paddingLeft: "2rem", color: "#545F7D", fontSize: "12px" }} >BUSINESSES</p>
                <div className={active === 9 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(9)}>
                    <img src={briefcase} alt="dashboard" />
                    <span>Organization</span>
                </div>
                <div className={active === 10 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(10)}>
                    <img src={loanProducts} alt="dashboard" />
                    <span>Loan Products</span>
                </div>
                <div className={active === 11 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(11)}>
                    <img src={savingsProduct} alt="dashboard" />
                    <span>Savings Product</span>
                </div>
                <div className={active === 12 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(12)}>
                    <img src={feeCharges} alt="dashboard" />
                    <span>Fee and Charges</span>
                </div>
                <div className={active === 13 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(13)}>
                    <img src={transactions} alt="dashboard" />
                    <span>Transactions</span>
                </div>
                <div className={active === 14 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(14)}>
                    <img src={services} alt="dashboard" />
                    <span>Services</span>
                </div>
                <div className={active === 15 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(15)}>
                    <img src={serviceAccount} alt="dashboard" />
                    <span>Service Account</span>
                </div>
                <div className={active === 16 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(16)}>
                    <img src={settlements} alt="dashboard" />
                    <span>Settlements</span>
                </div>
                <div className={active === 17 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(17)}>
                    <img src={reports} alt="dashboard" />
                    <span>Reports</span>
                </div>
                <br />


                <p style={{ paddingLeft: "2rem", color: "#545F7D", fontSize: "12px" }} >SETTINGS</p>
                <div className={active === 18 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(18)}>
                    <img src={preference} alt="dashboard" />
                    <span>Preference</span>
                </div>
                <div className={active === 19 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(19)}>
                    <img src={feesPricing} alt="dashboard" />
                    <span>Fees and Pricing</span>
                </div>
                <div className={active === 20 ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleClick(20)}>
                    <img src={auditLog} alt="dashboard" />
                    <span>Audit Log</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar