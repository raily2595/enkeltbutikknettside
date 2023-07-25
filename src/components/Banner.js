import strings from '../strings.json';
const Banner = () => {
    return (
        <banner>
            <div className="banner-content">
                <p style={{ fontFamily: 'Courier New', fontSize: '50px' }}>{strings.bannertekst1}</p>
                <p style={{ fontFamily: 'Courier New', fontSize: '50px' }}>{strings.bannertekst2}</p>
                <p style={{ fontFamily: 'Courier New', fontSize: '25px' }}>{strings.bannertekst3}</p>
            </div>
        </banner>
    );
};

export default Banner;
