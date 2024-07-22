/* eslint-disable arrow-body-style */

import MoreVertIcon from '@mui/icons-material/MoreVert';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Box, Chip, Stack, Typography } from "@mui/material";
import { AccountPhotoProfile } from "../../components/account/AccountPhotoProfile";
import { ProfileStats } from './ProfileStats';

export const AccountCardProfile = () => {

return (
        <>
            <Box sx={{backgroundColor: '#0D4937', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', py: '20px', px: '10px'}}>
                        <MoreVertIcon  sx={{ color: '#FBFCFF', alignSelf: 'flex-end'}}/>
                        <Stack spacing={2} alignItems="center" sx={{mb: '2rem'}}>
                            <Box>
                                <AccountPhotoProfile />
                            </Box>
                            <Box>
                                <Typography component='p' sx={{color: '#FFF', fontSize: '2rem'}}>
                                    Santiago Martinez
                                </Typography>
                            </Box>
                            <Box>
                                <Chip label="Profesional" variant="outlined" sx={{border: '2px solid #A2D95A', color: '#FEF7FF', width: '105px', fontSize: '14px' , fontWeight: 600}}/>
                            </Box>
                        </Stack>
                        <Stack spacing={2} alignItems="center">
                            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <ProfileStats />
                            </Box>
                            <Box>
                                <Typography sx={{color: '#FFF', textAlign: 'center'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Iste tempora eaque, unde quae quam magnam molestias voluptate aliquid aperiam a.
                                Dolor, atque. 
                                Sit, qui in reiciendis velit autem nam asperiores!
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', gap: '1.5rem', color: '#fff'}}>
                                <FacebookIcon sx={{fontSize: '2rem'}}/>
                                <InstagramIcon sx={{fontSize: '2rem'}}/>
                            </Box>
                        </Stack>
                        <Box sx={{display: 'flex', gap: '10px', mt: '3rem'}}>
                                <Typography sx={{color: '#FFF'}}>
                                Editar datos personales
                                </Typography>
                                <DriveFileRenameOutlineIcon className="text-[#FFF]" />
                        </Box>
            </Box>
        </>
     );
};