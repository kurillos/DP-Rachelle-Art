import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: null, msg: 'Envoi en cours...' });

        try {
            const response = await fetch('http://localhost:8000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', msg: data.message || 'Message envoyé avec succès !' });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                // Récupère l'erreur de validation Laravel si elle existe
                const errorMsg = data.errors ? Object.values(data.errors).flat()[0] : data.message;
                setStatus({ type: 'error', msg: (errorMsg as string) || 'Erreur lors de l\'envoi.' });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: 'Serveur injoignable. Vérifiez votre connexion.' });
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-12 px-6">
            <div className="max-w-4xl w-full bg-white/5 backdrop-blur-lg rounded-[30px] border border-white/10 p-8 md:p-12 shadow-2xl">

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-serif italic text-white mb-2">Contact</h2>
                    <div className="w-20 h-1 bg-art-purple mx-auto rounded-full"></div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">Nom complet</label>
                        <input
                            name="name" value={formData.name} onChange={handleChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white outline-none focus:border-art-purple transition-all"
                            placeholder="Votre nom"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">Email</label>
                        <input
                            type="email" name="email" value={formData.email} onChange={handleChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white outline-none focus:border-art-purple transition-all"
                            placeholder="hello@exemple.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">Téléphone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="^[0-9+\s.\-]*$"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white outline-none focus:border-art-purple transition-all"
                            placeholder="06 12 34 56 78"
                        />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">Message</label>
                        <textarea
                            name="message" value={formData.message} onChange={handleChange} required rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white outline-none focus:border-art-purple transition-all resize-none"
                            placeholder="Votre projet..."
                        />
                    </div>

                    <div className="md:col-span-2 pt-4">
                        <button type="submit" className="w-full bg-art-purple hover:bg-white hover:text-art-purple text-white py-4 rounded-2xl font-bold uppercase tracking-widest transition-all duration-300 shadow-lg">
                            Envoyer
                        </button>
                    </div>

                    {status.msg && (
                        <div className={`md:col-span-2 text-center text-sm p-3 rounded-xl ${status.type === 'success' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                            {status.msg}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;