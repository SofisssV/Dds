import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function RegistrarObras() {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id && id !== '0') {
            getObraById(id);
        } else {
            reset();
        }
    }, [id, reset]);

    const getObraById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/obras-teatrales/${id}`);
            const obras = response.data;
            Object.keys(obras).forEach(key => {
                setValue(key, obras[key]);
            });
        } catch (error) {
            console.error("Error al obtener obras:", error);
        }
    };

    const onSubmit = async (data) => {
        try {
            if (id && id !== '0') {
                await axios.put(`http://localhost:3001/api/obras-teatrales/${id}`, data);
            } else {
                await axios.post('http://localhost:3001/api/obras-teatrales/', data);
            }
            navigate('/consultarobras');
        } catch (error) {
            console.error("Error al guardar la obra:", error);
        }
    };

    return (
        <div>
            <h1 className="text-center">{id && id !== '0' ? "Editar Obra" : "Nueva Obra"}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Input fields and form validation omitted for brevity */}
            </form>
        </div>
    );
}

export default RegistrarObras;
