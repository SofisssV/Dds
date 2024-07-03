const Titulo = ({children}) => {
    return(
        <>
            <i className="bi bi-card-checklist text-info" style={{fontSize: '6rem'}}></i>
            <h1 className="fw-bold" style={{fontSize:'4rem'}}>{children}</h1>
        </>
    )
}
export default Titulo;