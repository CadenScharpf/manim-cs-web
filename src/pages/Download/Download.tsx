import { Button } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useDownloader from 'react-use-downloader';

interface IDownloadProps {
    filename: string;
}

export const Download: React.FC = () => {
    let { filename } = useParams();
    let f = filename? filename : '';
    
    const fileurl = 'http://ec2-13-57-239-150.us-west-1.compute.amazonaws.com:80/getfile/'+filename;
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();

    return (
        <div style={{position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column'}} >
            <h2 style={{}}>Animation Ready</h2>
            <div>
            <Button variant="outlined" color="success" onClick={() => download(fileurl, filename ? filename : "video.mp4")} disabled={filename && filename.length > 0 ? false : true}>
                Download
            </Button>
            <p>{filename}</p>
            </div>
        </div>
    )
}