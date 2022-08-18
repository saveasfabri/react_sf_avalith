# SKIL FACTORY - AVALITH
## :book:Clase 11 - 03-08
[youtube.com/watch?v=Qx5Ofj1QMNc&list=PLJPvCr6dK-cmOZSKyBMiQwptaQb30wqHl&index=9](https://www.youtube.com/watch?v=Qx5Ofj1QMNc&list=PLJPvCr6dK-cmOZSKyBMiQwptaQb30wqHl&index=9)

#####Temas:
* setTimeOut()
* Asincronismo
* Event Loop y Call Stack
* Callback

---

<section>
      <h3>Antes de empezar: setTimeOut</h3>
      <ul>
        <li>
          <span>El método <a href="https://www.w3schools.com/jsref/met_win_settimeout.asp" target="_blank">setTimeOut( )</a> es un temporizador. Este método permite ejecutar un <a href="https://www.w3schools.com/js/js_callback.asp" target="_blank">callback</a> luego de que haya transcurrido un determinado tiempo. Los dos parámetros más importantes a tener en cuenta son: la function a ejecutar y el time (en ms) que debe esperar para ejecutarse.</span>
          <p> * Ver código funcional en archivo ./js/asinchronism.js</p>
          <img width="70%" src="../clase11_asinchronism__js/img/codeSetTimeOut_700.png">         
          <img width="70%" src="../clase11_asinchronism__js/img/codeSetTimeOut2_700.png ">         
          <img width="70%" src="../clase11_asinchronism__js/img/codeSetTimeOut3_700.png ">         
        </li>     
      </ul>  
      <h3>Asincronismo</h3>
      <ul>
        <li>
          <span>Aprender a trabajar con <a href="https://www.w3schools.com/Js/js_asynchronous.asp" target="_blank">asincronismo</a> en JavaScript nos permitirá ejecutar tareas tengan un tiempo diferido respecto al tiempo de ejecución hasta que se consideren finalizadas.</span>
          <ul >
            <li><span>JavaScript => Lenguaje Monohilo (Single-thread).</span></li>
            <li><span>Significa que solo puede hacer una tarea a la vez (secuencial).</span></li>
            <li><span>Aunque no sea multitarea (mejor llamado multi-thread), puede delegar la ejecución a otros procesos.</span></li>
          </ul>
          <div>
            <h4>Modelo de concurrencia</h4>
            <p>(Dos o más tareas progresan simultáneamente)</p>
            <pc>VS</pc>
            <h4>Modelo de Paralelismo</h4>
            <p>(Dos o más tareas ocurren simultáneamente)</p>
            <img src="../clase11_asinchronism__js/img/ex1.jpg">
            <img src="../clase11_asinchronism__js/img/ex1-2.jpg">
          </div>
        </li>  
        <li>
          <span>JavaScript es un lenguaje concurrente, asíncrono, no
            bloqueante, interpretado, de alto nivel, monohilo.</span>
        </li>      
      </ul>      
      <h3>Event Loop y Call Stack</h3>
      <ul>
        <li>
          <span>¿Cómo maneja el asincronismo, la concurrencia y el no-bloqueo si es single-thread?</span>
          <h3><a href="https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd" target="_blank">Mecanismo Event Loop</a></h3>          
          <p>JavaScript posee una pila de ejecución llamada Call Stack donde coloca las llamadas a funciones según el orden en que deban ejecutarse.</p>
          <p>Cada línea de ejecución se lee de forma secuencial pero, cuando una función llama a otra,entonces esa tarea se agrega a la pila hasta que termina de ejecutarla y luego la elimina de la pila</p>
        </li>
      </ul>
      <h3>Event Loop</h3>
      <img src="../clase11_asinchronism__js/img/ex2.jpg">
      <img src="../clase11_asinchronism__js/img/ex2-2.jpg">
      <h3>Callback</h3>
      <ul>
        <li>
          <span>Un <a href="https://www.w3schools.com/js/js_callback.asp" target="_blank">callback</a> es una función que recibe como parámetro a otra función.</span>
          <p>Cuando una función llama a otra función y esta última se resuelve, será agregada al Callback Queue. Esto indica que JS sigue ejecutando todas las demás tareas sincrónicas y, cuando se quede sin funciones a ejecutar en la pila de ejecución, allí
            agregará la información obtenida desde la cola de tareas</p>
        </li>
        <p> * Ver código funcional en archivo ./js/asinchronism.js</p>
        <img src="../clase11_asinchronism__js/img/codeCallStack.png">
      </ul>
    </section>

__Repositorio :__
[github.com/saveasfabri/react_sf_avalith/tree/main/clase11_asinchronism__js](https://github.com/saveasfabri/react_sf_avalith/tree/main/clase11_asinchronism__js)
