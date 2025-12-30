import React from 'react';
import logo from '../Frame-389-1024x229.png';

interface WithdrawModalProps {
    isOpen: boolean;
    onClose: () => void;
    balance: number;
    onContinue?: () => void;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose, balance, onContinue }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform animate-in zoom-in-95 duration-300 border border-gray-100 dark:border-gray-800">
                <div className="p-6">
                    <div className="flex items-center gap-1 mb-8">
                        <img src={logo} alt="YouTube" className="h-6 w-auto" />
                    </div>

                    <h2 className="text-4xl font-normal text-gray-800 dark:text-gray-100 mb-4 tracking-tight">
                        ¡Felicitaciones!
                    </h2>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 leading-tight mb-8">
                        Para registrar su cuenta bancaria y retirar fondos, vea un vídeo de 4 minutos.
                    </p>

                    <div className="mb-8">
                        <span className="text-6xl font-bold text-blue-600 dark:text-blue-500 tracking-tight">
                            $ {balance.toFixed(2)}
                        </span>
                    </div>

                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
                        onClick={onContinue}
                    >
                        <span className="material-icons-round">play_arrow</span>
                        <span>VER EL VÍDEO</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WithdrawModal;
