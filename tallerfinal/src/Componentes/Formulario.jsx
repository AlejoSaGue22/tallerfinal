import React from 'react'
import {nanoid} from 'nanoid'

const Formulario = () => {
    const [nombrePoke, setnombrePoke] = React.useState('')
    const [nombreClien, setnombreClien] = React.useState('')
    const [edad, setEdad] = React.useState('')
    const [ListasDatos, setListasDatos] = React.useState([])
    const [tituloAlternado, settituloAlternado] = React.useState(false)
    const [Id, setId] = React.useState('')
    const [error, setError] = React.useState(null)


    //Guardar -----
    const guardarDatos = (e) =>{
        e.preventDefault()
        if(!nombreClien.trim()){
          setError('Digite su Nombre')
          return
  
        }
        if(!nombrePoke.trim()){
          setError('Digite el Pokemon')
          return
  
        }
        if(!edad.trim()){
          setError('Digite su Edad')
          return
  
        }
       
        setListasDatos([
            ...ListasDatos,
            {Id: nanoid(), nombreUsu: nombreClien, edadNom: edad, PokemonNom: nombrePoke}
        ])
    
        e.target.reset()
        setnombreClien('')
        setnombrePoke('')
        setEdad('')
        setError(null)
    
    }

    //Editar -------------

    const editar = item =>{
        setnombreClien(item.nombreUsu)
        setEdad(item.edadNom)
        setnombrePoke(item.PokemonNom)
        settituloAlternado(true)
        setId(item.Id)
    }

    //ModoEdicion

    const edicionDatos = e =>{
        e.preventDefault()
        if(!nombreClien.trim()){
          setError('Digite su Nombre')
          return
  
        }
        if(!nombrePoke.trim()){
          setError('Digite el Pokemon')
          return
  
        }
        if(!edad.trim()){
          setError('Digite su Edad')
          return
  
        }
        const arrayEditado = ListasDatos.map(
            item => item.Id === Id ? {Id:Id,  nombreUsu: nombreClien, edadNom: edad, PokemonNom: nombrePoke}:item
              )
              setListasDatos(arrayEditado)
              setnombreClien('')
              setEdad('')  
              setnombrePoke('')
              setId('')
              settituloAlternado(false)            
              setError(null)
        }
    

    //Eliminar

    const eliminar = Id =>{
            const aux = ListasDatos.filter(item => item.Id !== Id)
            setListasDatos(aux)

    }

    //Cancelar
    const cancelar = () =>{
        setnombreClien('')
        setEdad('')  
        setnombrePoke('')
        setId('')
        settituloAlternado(false)
        setError(null)
    }


  return (
    <div className='container mt-5'>
        <h2 className= 'text-center'>POKEMONES FAVORITOS</h2>
        <hr/>
        <div  className='row'>
            <div  className='col-8'>
                <h4 className='text-center'>Informacion Ingresada</h4>
                <table className="table table-white">
                            <thead>
                                <tr>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Nombre Usuario</th>
                                    <th scope="col">Edad</th>
                                    <th scope="col">Pokemon</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ListasDatos.map((item) => (
                                        <tr key={item.Id}>
                                            <td><img  src={item.imagen} alt='imagen' /></td>
                                            <td>{item.nombreUsu}</td>
                                            <td>{item.edadNom}</td>                                               
                                            <td>{item.PokemonNom}</td>
                                            <td>
                                                <button className='btn btn-danger btn-sm float-end mx-2'
                                                    onClick={() => eliminar(item.Id)}>Eliminar
                                                </button>
                                                <button className='btn btn-warning btn-sm float-end'
                                                    onClick={() => editar(item)}>Editar
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
            </div>
            
            <div className='col-4'>
            <h4 className='text-center'> 
            {
                tituloAlternado ? 'Editar Informacion' : 'Agregar Informacion'
            }
            </h4>
            <form onSubmit = {tituloAlternado ? edicionDatos : guardarDatos}>
                {
                    error ? <spa className= 'text-danger'>{error} </spa> 
                    : null
                }
            <input
             className='form-control mb-2'
             type = 'text'
             placeholder = 'Ingrese su nombre'
             onChange={(e)=> setnombreClien(e.target.value)}
             value={nombreClien}
            />

            <input
             className='form-control mb-2'
             type = 'text'
             placeholder = 'Ingrese su Edad'
             onChange={(e)=> setEdad(e.target.value)}
             value={edad}
            />
            
          
            <input
             className='form-control mb-2'
             type = 'text'
             placeholder = 'Ingrese el Pokemon'
             onChange={(e)=> setnombrePoke(e.target.value)}
             value={nombrePoke}
            />
             {
            tituloAlternado ?
            (
              <>
              <button className = 'btn btn-warning btnblock' type='submit' 
              >Editar</button>
              <button className = 'btn btn-danger btn-block mx-2' onClick={() => cancelar()}
              >Cancelar </button>
              </>
            ) 
            :
            <button  className = 'btn btn-warning btn-block' type='submit'> 
            Agregar</button>

          }

           
        </form>

        </div>
        
        </div>
        
    </div>
  )
}

export default Formulario