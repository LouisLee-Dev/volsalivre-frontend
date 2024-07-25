import React from 'react';
import RegisterStudent from '@/components/escola/registerStudent';
interface ConfirmDaBolsaProps {
    params: { title: string, page: string };
    searchParams: { [key: string]: string };
}

const ConfirmDaBolsa: React.FC<ConfirmDaBolsaProps> = ({ params, searchParams }) => {    
    const { title, page } = params;

    return (
        <div className="grid">
            <RegisterStudent title={title} page={page} />
        </div>        
    )
}

export default ConfirmDaBolsa