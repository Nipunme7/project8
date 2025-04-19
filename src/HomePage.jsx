import React from 'react';

function HomePage() {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Welcome to the Crewmate Creator!</h1>
            <p className="welcome-description">
                Here is where you can create your very own set of crewmates before sending them off into space!
            </p>

            {/* Better crewmate SVG illustrations */}
            <div className="crewmate-group">
                {/* Red crewmate */}
                <div className="crewmate red">
                    <svg width="50" height="60" viewBox="0 0 50 60">
                        <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z" fill="#E74C3C" stroke="#000" strokeWidth="2" />
                        <rect x="20" y="35" width="10" height="15" rx="2" fill="#E74C3C" stroke="#000" strokeWidth="2" />
                        <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                    </svg>
                </div>
                {/* Blue crewmate */}
                <div className="crewmate blue">
                    <svg width="50" height="60" viewBox="0 0 50 60">
                        <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z" fill="#3498DB" stroke="#000" strokeWidth="2" />
                        <rect x="20" y="35" width="10" height="15" rx="2" fill="#3498DB" stroke="#000" strokeWidth="2" />
                        <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                    </svg>
                </div>
                {/* Green crewmate */}
                <div className="crewmate green">
                    <svg width="50" height="60" viewBox="0 0 50 60">
                        <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z" fill="#2ECC71" stroke="#000" strokeWidth="2" />
                        <rect x="20" y="35" width="10" height="15" rx="2" fill="#2ECC71" stroke="#000" strokeWidth="2" />
                        <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                    </svg>
                </div>
                {/* Yellow crewmate */}
                <div className="crewmate yellow">
                    <svg width="50" height="60" viewBox="0 0 50 60">
                        <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z" fill="#F1C40F" stroke="#000" strokeWidth="2" />
                        <rect x="20" y="35" width="10" height="15" rx="2" fill="#F1C40F" stroke="#000" strokeWidth="2" />
                        <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                    </svg>
                </div>
                {/* Purple crewmate */}
                <div className="crewmate purple">
                    <svg width="50" height="60" viewBox="0 0 50 60">
                        <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z" fill="#9B59B6" stroke="#000" strokeWidth="2" />
                        <rect x="20" y="35" width="10" height="15" rx="2" fill="#9B59B6" stroke="#000" strokeWidth="2" />
                        <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                    </svg>
                </div>
                {/* Orange crewmate */}
                <div className="crewmate orange">
                    <svg width="50" height="60" viewBox="0 0 50 60">
                        <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z" fill="#E67E22" stroke="#000" strokeWidth="2" />
                        <rect x="20" y="35" width="10" height="15" rx="2" fill="#E67E22" stroke="#000" strokeWidth="2" />
                        <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                    </svg>
                </div>
                {/* Pink crewmate */}
                <div className="crewmate pink">
                    <svg width="50" height="60" viewBox="0 0 50 60">
                        <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z" fill="#FF79C6" stroke="#000" strokeWidth="2" />
                        <rect x="20" y="35" width="10" height="15" rx="2" fill="#FF79C6" stroke="#000" strokeWidth="2" />
                        <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                    </svg>
                </div>
            </div>

            {/* Better UFO SVG illustration */}
            <div className="ufo-container">
                <svg width="200" height="120" viewBox="0 0 200 120">
                    {/* UFO Body */}
                    <ellipse cx="100" cy="50" rx="70" ry="25" fill="#95A5A6" stroke="#000" strokeWidth="2" />

                    {/* UFO Top */}
                    <ellipse cx="100" cy="35" rx="40" ry="20" fill="#B3E5FC" stroke="#000" strokeWidth="2" />
                    <ellipse cx="100" cy="35" rx="30" ry="15" fill="#81D4FA" stroke="#000" strokeWidth="1" />

                    {/* UFO Lights */}
                    <circle cx="60" cy="50" r="5" fill="#FF5252" />
                    <circle cx="80" cy="55" r="5" fill="#4CAF50" />
                    <circle cx="100" cy="58" r="5" fill="#448AFF" />
                    <circle cx="120" cy="55" r="5" fill="#9C27B0" />
                    <circle cx="140" cy="50" r="5" fill="#FFEB3B" />

                    {/* UFO Beams */}
                    <path d="M70,70 L50,110 L90,110 Z" fill="rgba(255, 255, 255, 0.3)" />
                    <path d="M130,70 L110,110 L150,110 Z" fill="rgba(255, 255, 255, 0.3)" />
                </svg>
            </div>
        </div>
    );
}

export default HomePage; 