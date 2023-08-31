class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 0
    }

    agregarCantidad(cantidadDeseada){
        this.cantidad = this.cantidad + cantidadDeseada
    }

    descripcion(){
        return "codigo: "+this.codigo+ " nombre: "+this.nombre+ " precio: $"+this.precio+"\n"
    }

    descripcionCarrito(){
        return "codigo: "+this.codigo+ " nombre: "+this.nombre+ " precio: $"+this.precio+ " cantidad: "+this.cantidad+"\n"
    }
}

class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    agregar(productoNuevo){
        let existe = this.listaCarrito.some(producto => producto.codigo == productoNuevo.codigo)
        if(!existe){
            this.listaCarrito.push(productoNuevo)
        }
    }

    mostrar(){
        let descripcionListaCompra = "Carrito: \n\n"
        this.listaCarrito.forEach( producto => {
            descripcionListaCompra = descripcionListaCompra + producto.descripcionCarrito()
        })
        return descripcionListaCompra
    }

    calcularTotal(){
        return this.listaCarrito.reduce( (total,producto) => total + producto.precio * producto.cantidad ,0)
    }
}

class ProductoController{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    mostrar(){
        let descripcionListaProductos = "Recuerde el codigo del producto que desea comprar\n\n"
        this.listaProductos.forEach( producto => {
            descripcionListaProductos = descripcionListaProductos + producto.descripcion()
        })
        return descripcionListaProductos
    }

    buscarcodigo(codigo){
        return this.listaProductos.find(producto => producto.codigo == codigo)
    }
}

const p1 = new Producto(1,"Iphone 13 pro max",1050)
const p2 = new Producto(2,"Samsung S23 ultra",1200)
const p3 = new Producto(3,"Cable USB lightning Apple",150)
const p4 = new Producto(4,"Airbuds Samsung",500)
const p5 = new Producto(5,"Applewatch 8 45mm",650)


const carrito = new Carrito()
const controladorP = new ProductoController()

controladorP.agregar(p1)
controladorP.agregar(p2)
controladorP.agregar(p3)
controladorP.agregar(p4)
controladorP.agregar(p5)

let rta

do{
    alert( controladorP.mostrar() )

    let codigo = Number(prompt("Ingrese el codigo del producto que desea comprar!"))

    const producto = controladorP.buscarcodigo(codigo)

    let cantidadDeseada = Number(prompt("Ingrese la cantidad que desea"))

    producto.agregarCantidad(cantidadDeseada)

    carrito.agregar(producto)

    alert( carrito.mostrar() )

    rta = prompt("¿Desea finalizar la compra? (escriba 'SI' para finalizar)").toLowerCase()
}while(rta != "si")

alert( "El total es de: $"+carrito.calcularTotal() )