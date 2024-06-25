import { useForm } from 'react-hook-form'
import '../Pages/Pages.css'


const SobreNosotros = () => {

  const { register, handleSubmit } = useForm ()

  const enviar = (data) =>{
    console.log(data)
  }

  return (

    <div>
      <h1>Sobre Nosotros</h1>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus minima voluptates, voluptatum dignissimos aut iusto recusandae autem blanditiis velit cum temporibus, expedita quibusdam nisi ipsum quod. Excepturi eos libero nihil.
    Facere magni obcaecati temporibus, sapiente quam explicabo nostrum quidem dolores cumque eos consectetur, sequi impedit animi delectus debitis! Porro, at natus. Saepe repellat recusandae tempore, facilis voluptate officia rem ullam?
    Quasi amet mollitia, neque dolore at, unde esse optio, rem ut quam laudantium in placeat officiis. Totam quia, dolorem dignissimos unde, odio blanditiis cupiditate quae mollitia, veritatis labore eaque quis?
    Sequi iste temporibus distinctio maiores asperiores earum nam, eveniet eligendi sunt? Quis vel aut sed cumque reiciendis nulla et harum voluptatem dicta voluptates, ut, possimus esse aliquid error ea illo.
    Aperiam perferendis beatae, assumenda odio, inventore reprehenderit mollitia error, dolorem facere placeat explicabo vero ad fugit suscipit aliquid magni ipsum ipsam accusantium corporis veritatis esse exercitationem velit autem. Accusamus, aliquid.
    Maxime impedit iure explicabo eos et eligendi magni sequi repellendus illum mollitia beatae obcaecati nesciunt, ut rerum blanditiis, sed officiis! Quia eum doloribus, vero eligendi ratione quod labore. Architecto, dignissimos?
    Recusandae, quis quam sed vero, expedita aliquid ea quo reiciendis dignissimos rerum numquam? Quo magni consectetur facere quidem natus aliquam! Unde labore est beatae accusantium expedita architecto alias dicta voluptatem!
    Provident sequi eos blanditiis eaque ipsam vel doloremque! Natus aliquam error repudiandae ex doloribus atque ducimus odit ut vitae voluptatum, omnis porro maiores debitis corporis illum, sint quisquam quas ratione.
    Doloremque blanditiis consectetur ab. Obcaecati fugit dignissimos deleniti ex ipsum tempora, repellat qui distinctio aut nisi totam velit dicta sit sint labore esse nulla corporis, optio, reiciendis soluta vitae error.
    Recusandae dolorum ut tempora earum vel cumque distinctio dolorem, officiis sint culpa perferendis error deserunt. Deserunt porro facere sint officiis ipsum ducimus delectus corrupti cupiditate, consequatur et, reiciendis tempora dignissimos.
    Quia asperiores, nobis inventore placeat illum fuga voluptas atque. Sint molestias architecto eaque! Autem vero id iusto totam nihil sequi quasi quis debitis ducimus, sapiente culpa sunt facilis. In, ab?
    Nisi sunt odit, amet reprehenderit beatae voluptatem obcaecati, vero voluptates reiciendis alias sed sequi expedita dolorum tempore mollitia? Cum quam consectetur consequuntur a molestias iusto deleniti mollitia nesciunt provident aliquam.
    Quaerat laboriosam, quibusdam cumque quisquam laudantium blanditiis quae ducimus cum consectetur modi officiis necessitatibus. Porro, itaque. Dolorem tempora quo culpa distinctio incidunt iusto repudiandae commodi? Natus molestias quia veritatis ratione.
    Repellat delectus alias ducimus vel pariatur voluptate dolor illo accusantium repellendus adipisci esse blanditiis quidem ipsam necessitatibus ipsum culpa recusandae veniam, modi incidunt veritatis cumque magnam error ipsa assumenda? Nam.</p>

    <h2>CONTACTANOS</h2>
    <form onSubmit={handleSubmit(enviar)}>

      <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")}/>
      <input type="email" placeholder='Ingresá tu e-mail' {...register("email")}/>
      <input type="phone" placeholder='Ingresá tu número de celular' {...register("celular")}/>


      <button type="submit">Enviar</button>


    </form>




  


    
    </div>
  )
}

export default SobreNosotros