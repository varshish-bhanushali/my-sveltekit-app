
export async function load ({ params }){

    try{

        const id = params.id;

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        const json = await response.json();

        return {
            post : json
        };
        
    }
    catch(err){
        return{
            error: 'erro while fetch'
        };
    }
    
    
}