const TutoresCard = ({tutor}) => {
    return (
        <li className="tutorCard">
            <img width={230} height={345} className="tutorImage" src={tutor.imagen} alt={tutor.nombre} />
            <div className="datosTutor">
                <div>
                    <b>
                        {tutor.nombre}
                    </b>
                </div>
                <div style={{fontSize: 'large'}}>{tutor.profesion}</div>
                <div style={{fontSize: 'large'}}>{tutor.edad} años</div>
                <p style={{fontSize: 'small'}}>{tutor.descripcion}</p>
            </div>
        </li>
    )
}

export default TutoresCard
