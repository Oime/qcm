export const getFelicitation = () => {
    const felicitations = [
        "Bravo !", "Tu es trop fort !", "C'est très bien pour une canaille !",
        "C'est ça !", "Bonne réponse", "Super !"
    ];
    const num = Math.floor(Math.random() * felicitations.length);

    return felicitations[num];
};