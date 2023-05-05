
import { Avatar, Box, Card, CardHeader, CardMedia, Divider, IconButton, useTheme } from '@mui/material';
import React from 'react';
import "./Home.css";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { red } from '@mui/material/colors';
import DataArrayIcon from '@mui/icons-material/DataArray';


export const Home: React.FC = () => {
    const theme = useTheme();
    return (
        <Box sx={{ position: 'relative', textAlign: 'center', width: "100%", height: '100%', maxWidth: 800 }} >
            <div>
                <h1 style={{ paddingBottom: 0 }}>ManimCS</h1>
                <p style={{ paddingTop: 0, fontSize: 15, marginTop: 0 }}>An animation library for explanatory Computer Science videos</p>
                <div style={{ justifyContent: 'center' }}>
                    <a className='shield' href="https://pypi.org/project/manimcs/">
                        <img src="https://img.shields.io/pypi/v/manimcs.svg?style=flat&logo=pypi" alt="PyPI Latest Release" />
                    </a>
                    <a className='shield' href="https://us-west-1.console.aws.amazon.com/ecr/repositories/public/621085823392/manim-cs-server">
                        <img src="https://img.shields.io/badge/Amazon%20ECS-latest-%23099cec?logo=amazonaws&logoColor=white" alt="Amazon ECS" />
                    </a>
                    <a className='shield' href="https://github.com/CadenScharpf/manim-cs">
                        <img src="https://github.com/ManimCommunity/manim/workflows/CI/badge.svg" alt="CI" />
                    </a>
                    <a className='shield' href="https://github.com/CadenScharpf/manim-cs">
                        <img src="https://img.shields.io/github/stars/CadenScharpf/manim-cs.svg?style=social" />
                    </a>
                </div>
            </div >
            <br />
            <Divider sx={{ backgroundColor: '#fff' }}></Divider>

            <div style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex' }}>
                <LaptopMacIcon sx={{ fontSize: 50, marginBottom: 0, marginTop: 3, padding: 0, alignSelf: 'center' }}></LaptopMacIcon>
                <h2 style={{ marginBottom: 0, marginTop: 0, padding: 0 }}>Web Demo</h2>
                <p style={{ marginTop: 0, fontSize: 15, maxWidth: '70%', alignSelf: 'center', paddingBottom: 5  }}>Use this site to try out ManimCS and render animations without installing anything! For installation instructions head over to the <a href="https://github.com/CadenScharpf/manim-cs">repository</a> </p>
            </div>

            <Divider sx={{ backgroundColor: '#fff' }}></Divider>
            <div style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', display: 'flex' }}>
                <DataArrayIcon sx={{ fontSize: 50, marginBottom: 0, marginTop: 3, padding: 0, alignSelf: 'center' }}></DataArrayIcon>
                <h2 style={{ marginBottom: 0, marginTop: 0 }}>Array Sort</h2>
                <p style={{ marginTop: 0, fontSize: 15, maxWidth: '70%', alignSelf: 'center' }}>The ArraySort package offers several tools for animating graphical visualizations of common sorting algorithms. Try it out in the web demo:</p>
                <Box className="array-sort-demo-cards" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                    <Card className='array-sort-demo-card'>
                        <CardHeader title="Create" titleTypographyProps={{ fontSize: 15, }} />
                        <CardMedia
                            className='array-sort-demo-card-media'
                            component="img"
                            src={require('./1.gif')}
                        />
                    </Card>
                    <Card className='array-sort-demo-card'>
                        <CardHeader title="Rearrage" titleTypographyProps={{ fontSize: 15, }} />
                        <CardMedia
                            className='array-sort-demo-card-media'
                            component="img"
                            src={require('./2.gif')}
                        />
                    </Card>
                    <Card className='array-sort-demo-card'>
                        <CardHeader title="Animate" titleTypographyProps={{ fontSize: 15, }} />
                        <CardMedia
                            className='array-sort-demo-card-media'
                            component="img"
                            src={require('./3.gif')}
                        />
                    </Card>
                </Box>
            </div>
            <br />
            <Divider sx={{ backgroundColor: '#fff' }}></Divider>

            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <VideoLibraryIcon sx={{ fontSize: 50, marginBottom: 0, marginTop: 3, padding: 0 }}></VideoLibraryIcon>
                <h2 style={{ marginBottom: 0, marginTop: 0, padding: 0, paddingBottom: 10 }}>Examples</h2>
                <Card sx={{}} className="example-video-card" title="Array Sort" >
                    <CardHeader
                        title="Array Sort"
                        subheader="Bubble Sort Algorithm"
                    />
                    <CardMedia
                        className='array-sort-demo-card-media'
                        component="video"
                        src={require('./bubble-sort-example.mp4')}
                        controls
                        style={{ height: 'auto', margin: 0 }}
                    />
                </Card>
            </div>
        </Box>
    )
}