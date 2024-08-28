import { Button } from '@mui/material';
import React from 'react'

interface ButtonComponentProps {
    onClick?: () => void;
    children: string;
}

const ButtonComponent = ({ onClick, children }: ButtonComponentProps) => {
    return (
        <Button variant="outlined" onClick={onClick}>
            {children}
        </Button>
    )
}

export default ButtonComponent;