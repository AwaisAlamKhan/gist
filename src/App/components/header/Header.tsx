import { Github } from "../../assets/icons/svg.icons";
import React, { FC, useState, useEffect, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { debounce } from "../../../utility/utility";
import http from "../../../services/api";
import {
    CircularProgress,
} from "@mui/material";

import { useSelector } from "react-redux";
import { setGistList } from '../gistList/gistListSlice'
import { useAppDispatch } from "../../store";


const Header: FC = ({ }) => {
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);
    const [firsttime, setFirsttime] = useState(false);

    const [user, setUser] = useState()
    const handleChange = (e: any) => {
        e.preventDefault();
        setFirsttime(true)

        setUser(e.target.value);

        e.preventDefault();
    };
    const search = useRef(
        debounce((name: any) => {
            setLoading(true);
            const path = 'users/' + name + '/gists'
            http
                .get<any>(path)
                .then((res: any) => {
                    dispatch(setGistList(res));
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });

        }, 3000)).current



    useEffect(() => {
        if (firsttime) {
            search(user);
        }

    }, [user]);

    return <>
        <div className="">
            <nav className="header">
                <div className=" logo_container">
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <GitHubIcon fontSize="large" />
                    <div className='input_parant'>
                        <div className="inputBox"> </div>
                        {loading && <CircularProgress size={20} color="primary" />
                        }
                        <input placeholder='Search Gists for the username' className="input" onChange={handleChange} />

                    </div>

                </div>

            </nav>
        </div>
    </>
}

export default Header
