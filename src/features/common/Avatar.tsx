import Avatar from '@mui/material/Avatar';

export const Avatars = ({alt,src} : {alt:string,src:string}) => {
return (
        <Avatar
        sx={{ width: 56, height: 56 }}
        alt={alt}
        src={src}
        />   
)
}