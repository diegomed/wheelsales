import React from 'react';

const Header = (props: any) => {
    return (
        <header className="flex z-2 relative items-center justify-center b bb b--light-gray">
            <h2 className="ma0 pv2" style={{ color: '#4FAFD8' }}>{props.title}</h2>
        </header>
    );
};

export default Header;