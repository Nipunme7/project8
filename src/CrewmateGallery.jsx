import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabaseClient';

function CrewmateGallery() {
    const [crewmates, setCrewmates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch crewmates when component mounts
        fetchCrewmates();
    }, []);

    async function fetchCrewmates() {
        try {
            setLoading(true);

            const { data, error } = await supabase
                .from('Crewmates')
                .select('*')
                .order('Created_at', { ascending: false });

            if (error) throw error;

            setCrewmates(data);
        } catch (error) {
            console.error('Error fetching crewmates:', error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function deleteCrewmate(id) {
        try {
            const { error } = await supabase
                .from('Crewmates')
                .delete()
                .eq('id', id);

            if (error) throw error;

            // Refresh the list after deletion
            setCrewmates(crewmates.filter(crewmate => crewmate.id !== id));
        } catch (error) {
            console.error('Error deleting crewmate:', error.message);
            alert('Error deleting crewmate: ' + error.message);
        }
    }

    if (loading) return <div className="loading">Loading crewmates...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Your Crewmate Gallery!</h1>

            {crewmates.length === 0 ? (
                <p className="no-crewmates">No crewmates found. Create one!</p>
            ) : (
                <div className="gallery">
                    {crewmates.map((crewmate) => (
                        <div
                            key={crewmate.id}
                            className="crewmate-card"
                            style={{ borderColor: getColorHex(crewmate.Color), boxShadow: `0 8px 16px ${getColorHex(crewmate.Color)}33` }}
                        >
                            <div className="crewmate-avatar">
                                <svg width="100" height="120" viewBox="0 0 50 60">
                                    <path d="M20,15 Q25,5 30,15 L35,40 Q30,50 20,50 L15,40 Z"
                                        fill={getColorHex(crewmate.Color)}
                                        stroke="#000"
                                        strokeWidth="2" />
                                    <rect x="20" y="35" width="10" height="15" rx="2"
                                        fill={getColorHex(crewmate.Color)}
                                        stroke="#000"
                                        strokeWidth="2" />
                                    <circle cx="25" cy="20" r="8" fill="#7FB3D5" stroke="#000" strokeWidth="2" />
                                </svg>
                            </div>

                            <div className="crewmate-info">
                                <h3 className="crewmate-name">Name of Crewmate: <span>{crewmate.Name}</span></h3>
                                <p className="crewmate-speed">Speed of Crewmate: <span>{crewmate.Speed} mph</span></p>
                                <p className="crewmate-color">Color of Crewmate: <span>{crewmate.Color}</span></p>

                                <div className="card-actions">
                                    <Link to={`/edit/${crewmate.id}`} className="edit-button">
                                        Edit Crewmate
                                    </Link>
                                </div>
                                <button
                                    onClick={() => deleteCrewmate(crewmate.id)}
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
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

export default CrewmateGallery; 