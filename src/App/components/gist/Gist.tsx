import React, { FC, useState } from "react";
import Grid from '@mui/material/Grid';
import GradeIcon from '@mui/icons-material/Grade';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import CommentIcon from '@mui/icons-material/Comment';
import { IconButton } from "@mui/material";
import VideoFileOutlinedIcon from '@mui/icons-material/VideoFileOutlined';
import { DateFormat } from "../../../utility/utility";

const Gist: FC<{ gist: any }> = ({ gist }) => {
    return (

        <Grid
            className='mb-5 mt-2'
            container
            direction="row"
            spacing={1}
        // alignItems="baseline"
        >
            <Grid
                container
                item
                xs={6}
                direction="column"
            >
                <Stack direction="row" spacing={2}>
                    <Avatar
                        alt="Remy Sharp"
                        src={gist?.owner.avatar_url}
                        sx={{ width: 56, height: 56 }}
                    />
                    <div className="align-middle ">
                        <h4 >{gist?.owner?.login}</h4>
                    </div>

                </Stack>
                <Stack direction="row"
                    //  justifyContent="space-between"
                    spacing={2}>
                    <span>Created at :{DateFormat(gist?.created_at)}</span>
                    <span>Last Update at :{DateFormat(gist?.updated_at)}</span>


                </Stack>

            </Grid>
            <Grid
                container
                xs={6}
                item
            >
                <div className="align-middle ">

                    <Grid direction="row" spacing={2} justifyContent='space-between' alignItems={'center'}>
                        <IconButton size="small"><FileOpenIcon color="primary" />{Object.keys(gist?.files).length} {" Files"}</IconButton>

                        <IconButton size="small"><WorkspacesIcon color="primary" /> {"Forks"}</IconButton>
                        <IconButton size="small"><CommentIcon color="primary" />{"Comments"}</IconButton>
                        <IconButton size="small"><GradeIcon color="primary" />{"Stars"}</IconButton>



                    </Grid>
                </div>
            </Grid >
            <Grid
                container
                item
                xs={12}
            >
                <h4>{gist?.description}</h4>
            </Grid>
            <Grid
                container
                item
                xs={12}
                direction="row"
                className="pb-5"
            >
                {Object.keys(gist?.files).map((name) => (
                    <>
                        <VideoFileOutlinedIcon color="primary" />
                        <span className="mx-3">{name}</span>
                    </>

                ))}
            </Grid>
            <div className="pb-5"></div>
        </Grid >

    )

};

export default Gist;
