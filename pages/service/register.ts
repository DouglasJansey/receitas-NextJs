type FormDataRegister = {
    formData: {
        name: string,
        email: string,
        password: string
    }
}
export default async function RegisterAccount({formData}:FormDataRegister){
   const {email, name, password} = formData
   try{

       const resp = await fetch("/api/cadastrar/users", {
           method: "POST",
           headers:{
               "Content-Type":"application/json"
            },
            body: JSON.stringify({email, name, password})
            
        }).then(async (res) => await res);
        if(resp.status === 200){
            alert("Castrado com sucesso!")
        }
        return resp;
    }catch(err){
        error: "Não foi possível fazer o cadastro"
    }
}