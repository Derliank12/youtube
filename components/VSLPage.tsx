import React, { useState } from 'react';
import logo from '../Frame-389-1024x229.png';

const COMMENTS = [
    {
        id: 1,
        name: 'Carlos Mendez',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        text: '¡Increíble! Pensé que no funcionaría, pero acabo de recibir mi pago. ¡Gracias YouTube!',
        time: 'hace 2 min',
        likes: 142
    },
    {
        id: 2,
        name: 'Ana García',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Al principio tenía dudas, pero después de ver el video entendí todo. Es muy fácil.',
        time: 'hace 5 min',
        likes: 89
    },
    {
        id: 3,
        name: 'Roberto Silva',
        avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
        text: 'Ya he retirado dos veces esta semana. El secreto es ser constante con las reseñas.',
        time: 'hace 12 min',
        likes: 256
    },
    {
        id: 4,
        name: 'Lucía Torres',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: 'Me encanta que paguen por dar nuestra opinión real. ¡Sigan así!',
        time: 'hace 24 min',
        likes: 67
    },
    {
        id: 5,
        name: 'Miguel Ángel',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        text: 'El tutorial explica todo perfectamente. No se salten ningún paso.',
        time: 'hace 1 hora',
        likes: 312
    }
];

const VSLPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 px-4 py-3 flex items-center justify-center">
                <div className="flex items-center gap-1">
                    <img src={logo} alt="YouTube" className="h-8 w-auto" />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-4 py-6">
                {/* Headline */}
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6 leading-tight">
                    Mira este video completo para liberar tu saldo inmediatamente
                </h1>

                {/* Video Player Placeholder */}
                <div className="relative aspect-video bg-black rounded-xl shadow-xl overflow-hidden mb-8 group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <span className="material-icons-round text-white text-4xl ml-1">play_arrow</span>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white text-sm">
                            <span className="font-bold text-red-500">ATENCIÓN:</span> El video puede tardar unos segundos en cargar.
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="mb-12 text-center">
                    <button className="bg-[#00B900] hover:bg-[#009900] text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg shadow-green-600/30 transform hover:scale-105 transition-all animate-pulse">
                        QUIERO MI ACCESO AHORA
                    </button>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="material-icons-outlined text-xs align-middle mr-1">lock</span>
                        Acceso seguro y verificado
                    </p>
                </div>

                {/* Comments Section */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <span className="text-blue-600">5 comentarios</span>
                        <span className="text-gray-400 text-sm font-normal">• Ordenar por más relevantes</span>
                    </h3>

                    <div className="space-y-6">
                        {COMMENTS.map((comment) => (
                            <div key={comment.id} className="flex gap-3">
                                <img
                                    src={comment.avatar}
                                    alt={comment.name}
                                    className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                                />
                                <div className="flex-1">
                                    <div className="bg-gray-100 dark:bg-gray-700/50 rounded-2xl p-3 inline-block min-w-[200px]">
                                        <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                                            {comment.name}
                                        </h4>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            {comment.text}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-1 ml-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        <button className="hover:text-blue-600 hover:underline">Me gusta</button>
                                        <button className="hover:text-blue-600 hover:underline">Responder</button>
                                        <span>{comment.time}</span>
                                        {comment.likes > 0 && (
                                            <div className="flex items-center gap-1 ml-auto">
                                                <span className="bg-blue-500 text-white rounded-full p-[2px]">
                                                    <span className="material-icons-round text-[8px] block">thumb_up</span>
                                                </span>
                                                <span className="text-gray-600 dark:text-gray-400">{comment.likes}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-8 py-2 text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                        Ver 12 comentarios más
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VSLPage;
