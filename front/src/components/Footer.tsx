const Footer = () => {
    const footerStyle = {
        backgroundColor: '#1a1a1a',
        color: '#00ced1',
        padding: '20px',
        textAlign: 'center' as const,
        fontSize: '14px',
        marginTop: 'auto'
    };

    return (
        <footer style={footerStyle}>
            <p>© 2026 Rachelle Arts Visuels</p>
            <p style={{ fontSize: '12px' }}>rachelle.artsvisuels@gmail.com</p>
        </footer>
    );
};

export default Footer;