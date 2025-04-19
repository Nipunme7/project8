import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

function EditCrewmate() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch crewmate data when component mounts
        fetchCrewmate();
    }, [id]);

    async function fetchCrewmate() {
        try {
            setIsLoading(true);

            const { data, error } = await supabase
                .from('Crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;

            // Set the form values with the fetched data
            setName(data.Name);
            setSpeed(data.Speed);
            setColor(data.Color);
        } catch (error) {
            console.error('Error fetching crewmate:', error.message);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSaving(true);

        try {
            const { error } = await supabase
                .from('Crewmates')
                .update({ Name: name, Speed: speed, Color: color })
                .eq('id', id);

            if (error) throw error;

            navigate('/gallery'); // Redirect back to gallery after successful update
        } catch (error) {
            console.error('Error updating crewmate:', error.message);
            setError(error.message);
        } finally {
            setIsSaving(false);
        }
    }

    async function handleDelete() {
        if (!confirm('Are you sure you want to delete this crewmate?')) return;

        try {
            const { error } = await supabase
                .from('Crewmates')
                .delete()
                .eq('id', id);

            if (error) throw error;

            navigate('/gallery'); // Redirect back to gallery after successful deletion
        } catch (error) {
            console.error('Error deleting crewmate:', error.message);
            setError(error.message);
        }
    }

    if (isLoading) return <div className="loading">Loading crewmate details...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="create-container">
            <h1 className="create-title">Edit Crewmate</h1>

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

            <form onSubmit={handleSubmit} className="create-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

                <div className="button-group">
                    <button
                        type="submit"
                        className="update-button"
                        disabled={isSaving}
                    >
                        {isSaving ? 'Saving...' : 'Update Crewmate'}
                    </button>

                    <button
                        type="button"
                        className="delete-button"
                        onClick={handleDelete}
                    >
                        Delete Crewmate
                    </button>
                </div>
            </form>
        </div>
    );
}

// Helper function to get hex color codes - same as in other components
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

export default EditCrewmate; 