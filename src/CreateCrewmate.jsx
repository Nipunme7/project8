import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

function CreateCrewmate() {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('Red');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase
                .from('Crewmates')
                .insert([
                    { Name: name, Speed: speed, Color: color }
                ])
                .select();

            if (error) throw error;

            console.log('Crewmate created:', data);
            navigate('/gallery'); // Redirect to gallery after successful creation
        } catch (error) {
            console.error('Error creating crewmate:', error.message);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="create-container">
            <h1 className="create-title">Create a New Crewmate</h1>

            {/* Live preview of crewmate */}
            <div className="crewmate-preview">
                <svg width="120" height="150" viewBox="0 0 50 60">
                    <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z"
                        fill={getColorHex(color)}
                        stroke="#000"
                        strokeWidth="2" />
                    <rect x="20" y="35" width="10" height="15" rx="2"
                        fill={getColorHex(color)}
                        stroke="#000"
                        strokeWidth="2" />
                    <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                </svg>
                {name && <div className="preview-name">{name}</div>}
                {speed && <div className="preview-speed">{speed} mph</div>}
            </div>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="create-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter crewmate's name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="speed">Speed (mph):</label>
                    <input
                        id="speed"
                        type="number"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        placeholder="Enter speed in mph"
                        required
                        min="1"
                        max="100"
                    />
                </div>

                <div className="form-group">
                    <label>Color:</label>
                    <div className="color-options">
                        {['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'].map((colorOption) => (
                            <div
                                key={colorOption}
                                className={`color-option ${color === colorOption ? 'selected' : ''}`}
                                style={{ backgroundColor: getColorHex(colorOption) }}
                                onClick={() => setColor(colorOption)}
                            >
                                {color === colorOption && <span className="checkmark">✓</span>}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="create-button"
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating...' : 'Create Crewmate'}
                </button>
            </form>
        </div>
    );
}

// Helper function to get hex color codes
function getColorHex(color) {
    switch (color) {
        case 'Red': return '#E74C3C';
        case 'Green': return '#2ECC71';
        case 'Blue': return '#3498DB';
        case 'Purple': return '#9B59B6';
        case 'Yellow': return '#F1C40F';
        case 'Orange': return '#E67E22';
        case 'Pink': return '#FF79C6';
        case 'Rainbow': return 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
        default: return '#E74C3C';
    }
}

export default CreateCrewmate; 