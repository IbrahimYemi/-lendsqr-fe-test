import axios from 'axios';
import moment from "moment";
import React, { useEffect, useState } from 'react';
import HeadTab from './HeadTab'
import icon1 from '../images/dashboard/icon (1).png'
import icon2 from '../images/dashboard/icon (2).png'
import icoN3 from '../images/dashboard/icon (3).png'
import icon4 from '../images/dashboard/icon (4).png'
import filter from '../images/dashboard/Group (2).png'
import { setAllUser } from '../store/allUser';
import { useAppDispatch, useAppSelector } from '../store/store';
import Pagination from './Pagination';
import UserStatus from './Status';
import FilterUser from './FilterUser';

const HomeBody = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const { users } = useAppSelector(state => state.users)
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = users.slice(start, end);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const http = axios.create({
        baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr'
      });
      try {
        await http.get('/api/v1/users')
          .then((res) => {
            dispatch(setAllUser(res.data))
          }
          )
      } catch (e) {
        if (e instanceof Error) console.error(e.message);
      }
    }

    fetchData();
  }, [dispatch])

  type objects = {
    name: string,
    image: string,
    count: string
  }

  const details: objects[] = [
    {
      name: 'USERS',
      image: icon1,
      count: '2453'
    },
    {
      name: 'ACTIVE USERS',
      image: icon2,
      count: '2453'
    },
    {
      name: 'USERS WITH LOANS',
      image: icoN3,
      count: '12,453'
    },
    {
      name: 'USERS WITH SAVINGS',
      image: icon4,
      count: '102,453'
    }
  ]

  const handleClick = () => {
    setShowFilter(!showFilter)
  }

  return (
    <div className='home-body' >
      <div className="tab">
        {
          details.map((data: object, i: number) => {
            return <HeadTab data={data} key={i} />
          })
        }
      </div>
      {
        users.length > 0 ?
      <div className="table">
        <div className="table-head">
          <span>ORGANIZATION  <img onClick={handleClick} src={filter} alt="filter" /> </span>
          <span>USERNAME <img onClick={handleClick} src={filter} alt="filter" /> </span>
          <span>EMAIL <img onClick={handleClick} src={filter} alt="filter" /> </span>
          <span>PHONE NUMBER <img onClick={handleClick} src={filter} alt="filter" /> </span>
          <span>DATE JOINED <img onClick={handleClick} src={filter} alt="filter" /> </span>
          <span>STATUS <img onClick={handleClick} src={filter} alt="filter" /> </span>
        </div>
        {
          currentData.map((data, i) => {
            return (
              <div key={i} className="table-row">
                <span>{data.orgName}</span>
                <span> {data.userName} </span>
                <span> {data.email} </span>
                <span> {`+ ${data.profile?.phoneNumber}`} </span>
                <span>{moment(data.createdAt).format("lll")}</span>
                <span>
                  <UserStatus createdAt={data.lastActiveDate} userId={data.id} />
                </span>
              </div>
            )
          })
        }
        <br />
        {showFilter && <FilterUser users={users} />}
        <Pagination data={users} start={start} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
      </div>:
      <div className="table"> <h3 style={{color:"red", margin: "auto", padding:"2rem"}} >NO DATA AVAILABLE</h3>  </div>
      }
    </div>
  )
}

export default HomeBody