class Permiso{

     estado = false;
    constructor (){
        this.estado = false;
    }
    get Estado()
    {
        return this.estado;
    }
    set Estado(cambio){
        this.estado = cambio;
    }
}
export default Permiso;