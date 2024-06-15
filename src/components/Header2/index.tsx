import React from 'react';
import { Grid } from '@mui/material';

export default function Header2() {
    return (
        <Grid container position={'fixed'} top={0} zIndex={1} style={{ background: '#ffff' }} borderBottom={'1px solid #FFFFFF3D'} boxShadow={'0 0 5px 0 rgba(0, 0, 0, 0.2)'}>
            <Grid item display={'flex'} justifyContent={'space-between'} pl={'60px'} pr={'60px'} width={'100%'}>
                <Grid item padding={'20px 0px'}>
                    <img
                        alt="Logo"
                        className="logo1 logo-white"
                        style={{ height: '38px' }}
                        src="https://neuveu.com/wp-content/uploads/2023/06/neuveu_logo_color.png"
                    />
                </Grid>
                <Grid item style={{ color: '#12C2E9', fontSize: '12px', padding: '25px 0px 25px 0px' }}>
                    CONTACT
                </Grid>
            </Grid>
        </Grid>

    );
}
