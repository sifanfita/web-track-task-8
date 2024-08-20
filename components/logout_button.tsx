import React from 'react';

const Logout_button: React.FC = () => {
    const handleLogout = () => {
        document.cookie = ""; // Clear all cookies
    };

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout_button;