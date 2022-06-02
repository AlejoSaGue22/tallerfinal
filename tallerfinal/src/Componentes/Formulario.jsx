import React from 'react'

const Formulario = () => {
    const [nombrePoke, setnombrePoke] = React.useState('')
    const [nombreClien, setnombreClien] = React.useState('')
    const [edad, setEdad] = React.useState('')
    const [sexo, setSexo] = React.useState('')
    const [ListasDatos, setListasDatos] = React.useState([])


    const guardarDatos = (e) =>{
        e.preventDefault()
        setListasDatos([
            ...ListasDatos,
            {nombreUsu: nombreClien, edadNom: edad, Sexo: sexo, PokemonNom: nombrePoke}
        ])


    }

  return (
    <div className='container mt-5'>
        <h2 className= 'text-center'>POKEMONES FAVORITOS</h2>
        <form onSubmit = {guardarDatos}>
            <input
             className='form-control mb-2'
             type = 'text'
             placeholder = 'Ingrese su nombre'
             onChange={(e)=> setnombreClien(e.target.value)}
            />

            <input
             className='form-control mb-2'
             type = 'text'
             placeholder = 'Ingrese su Edad'
             onChange={(e)=> setEdad(e.target.value)}
            />
            
            <select class="form-select mb-2" aria-label="Default select example">
                <option selected>Elegir Sexo</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                onChange={(e)=> setSexo(e.target.value)}
            </select>
            <input
             className='form-control mb-2'
             type = 'text'
             placeholder = 'Ingrese el Pokemon'
             onChange={(e)=> setnombrePoke(e.target.value)}
            />

            <button  className = 'btn btn-warning btnblock' type='submit'> Agregar</button>

        </form>
        {
            ListasDatos.map((item, index) => (
                <div key={index}>
                    <h4>{item.nombreUsu}-{item.edadNom}-{item.Sexo}-{item.PokemonNom}</h4>
                </div>
            )
            )
        }
    </div>
  )
}

export default Formulario