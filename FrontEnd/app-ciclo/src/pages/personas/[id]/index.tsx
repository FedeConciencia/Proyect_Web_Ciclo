import axios from "axios"

export default function Persona(props:any){

    const {persona} = props

    return(
        <>
        
            Nombre: {persona.nombre}
            Apellido: {persona.apellido}
        
        </>


    )


}

export async function getServerSideProps(context:any){

    try{

    console.log(context)

    const response = await axios.get(`http://localhost:8080/api/v1/persona/${context.params.id}`)

    const persona = await response.data


    return {

        props:{persona}


    }

    }catch(error){


            console.log(error)

            return{
    
                redirect:{
    
                    destination: "/nosotros"
    
                }
    
            }
    
        


    }   


}