import React, { FC, useEffect, useState } from "react";
import Gist from "../gist/Gist";
import Grid from '@mui/material/Grid';
import http from "../../../services/api";
import { useSelector } from "react-redux";
import { setGistList } from './gistListSlice'
import { useAppDispatch } from "../../store";
import data from './data'




const GistList = ({ }) => {
    const dispatch = useAppDispatch();

    const gistList = useSelector((state: any) => state.gistList);


    const getGistList = () => {
        const path = "gists/public";

        http
            .get<any>(path)
            .then((res: any) => {
                console.log(res)
                dispatch(setGistList(res));
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // setLoading(false);
            });


        // dispatch(setGistList(data))

    }
    useEffect(() => {
        getGistList()
    }, [])
    return (

        <Grid
            container
            xs={12}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
        >
            {gistList?.length > 0 ?
                (<Grid
                    container
                    xs={8}
                >
                    {gistList?.map((item: any) => (<Gist gist={item} />
                    ))}
                </Grid>)
                : (<h1>No record Found</h1>)};



        </Grid>

    )

};

export default GistList;
