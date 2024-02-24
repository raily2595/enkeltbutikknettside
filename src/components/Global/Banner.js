import strings from 'strings.json';
const Banner = () => {
    return (
        <banner>
            <div className="banner-content">
                <h2>{strings.bannertekst1}</h2>
                <p>{strings.bannertekst2}</p>
                <p style={{ fontFamily: 'Courier New', fontSize: '25px', fontWeight: 600 }}>{strings.bannertekst3}</p>
            </div>
        </banner>
    );
};

export default Banner;
