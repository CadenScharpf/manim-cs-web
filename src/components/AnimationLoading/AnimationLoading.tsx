import { Box, LinearProgress, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {

}

export function AnimationLoading({ children }: PropsWithChildren<Props>) {
    const theme = useTheme();
    return (
        <Box sx={{ width: '70%', textAlign: 'center', display: 'flex', flexDirection: 'column', margin: "0px" }}>
            <h2 style={{margin: '0px', padding: '0px'}}>Generating Animation</h2>
            <h6 style={{marginTop: '0px', paddingTop: '0px'}}>(This may take a few minutes)</h6>
            <LinearProgress sx={{ color: '#1a90ff' }} color="inherit" />
        </Box>
    );
}