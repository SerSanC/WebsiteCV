<template>
  <div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none"> </span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../img/profile.jpeg" alt="">
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#about">Sobre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#education">Educación</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#experience">Experiencia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#interests">Voluntariado</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#certifications">Certificaciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#awards">Cursos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#projects">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid p-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <v-about></v-about>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div class="w-100">
        <h2 class="mb-5">Educación</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Universidad Politécnica de Valencia</h3>
            <div class="subheading mb-3">Grado en Ingeniería Informática</div>
            <p>Disciplina: Ingeniería del software</p>
            <p>TFG: Diseño de interacciones IoT geolocalizadas en el ámbito de una ciudad inteligente</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">2014 - 2019</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div class="resume-content">
            <h3 class="mb-0">Universidad Politécnica de Valencia</h3>
            <div class="subheading mb-3">Máster Universitario en Ingeniería y Tecnología de Sistemas Software</div>
            <p>El Máster Universitario en Ingeniería y Tecnología de Sistemas Software tiene el sello de excelencia internacional EURO-INF, que reconoce que estos estudios cumplen ampliamente con las exigencias profesionales en el ámbito de la informática.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">2019 - Actualidad</span>
          </div>
        </div>

      </div>
    </section>
   <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div class="w-100">
        <h2 class="mb-5">Experiencia</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Software Developer</h3>
            <div class="subheading mb-3">Facultat d'Economia, Universitat de València</div>
            <p align="justify">Desarrollo de una plataformo de apoyo a la gestión empresarial.Para la realización del proyecto, se ha optado por la utilización del lenguajes de programación Java. </p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">Mayo 2018 - Agosto 2018</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Técnico</h3>
            <div class="subheading mb-3">Mipesa Grupo Empresarial</div>
            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">Junio 2015 - Agosto 2015 </span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Técnico</h3>
            <div class="subheading mb-3">Mipesa Grupo Empresarial</div>
            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">Junio 2013 - Agosto 2013 </span>
          </div>
        </div>
      </div>

    </section>
    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div class="w-100">
        <h2 class="mb-5">Skills</h2>

        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-html5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-angular"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-react"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node-js"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-sass"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-less"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-wordpress"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-gulp"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-grunt"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-npm"></i>
          </li>
        </ul>

        <div class="subheading mb-3">Workflow</div>
        <ul class="fa-ul mb-0">
          <li>
            <i class="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design</li>
          <li>
            <i class="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging</li>
          <li>
            <i class="fa-li fa fa-check"></i>
            Cross Functional Teams</li>
          <li>
            <i class="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum</li>
        </ul>
      </div>
    </section>

    <hr class="m-0">

<!-- Voluntariado -->
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div class="w-100">
        <h2 class="mb-5">Voluntariado</h2>
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Desarrolló de software para la gestión interna de la Cruz Roja en la Comunidad Valenciana</h3>
            <div class="subheading mb-3">Cruz Roja Española</div>
            <p align="justify">Trabaje de forma conjunta con mis compañeros en renovar el software que se ha estado utilizando hasta la fecha en el Centro de Coordinación de la Cruz Roja, adaptándonos a las emergencias requeridas, que van desde la simple activación de una ambulancia, dispositivos especiales en calles o gestionar los recursos entre las distintas delegaciones, permitiendo recopilar la información y mostrándola mediante un informe.</p>
            <p align="justify">Para la realización del proyecto, hemos optado por la utilización del lenguaje de programación Java, utilizando JavaFX para la parte relacionada con la interfaz grafica ya que JavaFX,mientras que, para la utilización de la base de datos, se ha optado por la utilización de SQL Lite.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">Febrero 2018 - Junio 2018</span>
          </div>
        </div>
      </div>
    </section>
<!-- Linea de separación -->
    <hr class="m-0">

<!-- Certificaciones -->
   <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="certifications">
      <div class="w-100">
        <h2 class="mb-4">Certificaciones</h2>
         <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
            <div class="resume-content">
            <h4 class type="disc">Applied Data Science </h4>
                <ul class="fa-ul mb-0">
                  <h5 class type="disc"> Institución Emisora: IBM </h5>
                  <h5 class type="disc"> Expedición: mar. de 2019 </h5>
                  <h5 class type="disc"> ID de la credencial: KW336QT8PSKW </h5>
                  <ul class="fa-ul mb-0">
                    <li type="disc"> Python for Data Science and AI</li>
                    <li type="disc"> Data Analysis with Python</li>
                    <li type="disc"> Data Visualization with Python</li>
                    <li type="disc"> Applied Data Science Capstone</li>
                </ul>
                </ul>
             </div>             
         <div class="resume-date text-md-right">
            <span class="text-primary">
              <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/KW336QT8PSKW" target= "_blank">Ver credencial</a><br />
            </span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
            <div class="resume-content">
            <h4 class type="disc"> Data Structures and Performance</h4>
                <ul class="fa-ul mb-0">
                  <h5 class type="disc"> Institución Emisora: University of California San Diego </h5>
                  <h5 class type="disc"> Expedición: nov. de 2018 </h5>
                  <h5 class type="disc"> ID de la credencial: LP3SMXXMV5LC </h5>
                </ul>
             </div>             
         <div class="resume-date text-md-right">
            <span class="text-primary">
              <a href="https://www.coursera.org/account/accomplishments/certificate/LP3SMXXMV5LC" target= "_blank">Ver credencial</a><br />
            </span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
            <div class="resume-content">
            <h4 class type="disc"> Lean Startup: desarrolla tu modelo de negocio </h4>
                <ul class="fa-ul mb-0">
                  <h5 class type="disc"> Institución Emisora: UA - Universidad de Alicante / Universitat d'Alacant </h5>
                  <h5 class type="disc"> Expedición: nov. de 2018 </h5>
                  <h5 class type="disc"> ID de la credencial: sFRi9fbIMDRdYSBPqOxD </h5>
                </ul>
             </div>             
         <div class="resume-date text-md-right">
            <span class="text-primary">
              <a href="https://www.unimooc.com/verificar-diploma" target= "_blank">Ver credencial</a><br />
            </span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
            <div class="resume-content">
            <h4 class type="disc"> Monetización Web </h4>
                <ul class="fa-ul mb-0">
                  <h5 class type="disc"> Institución Emisora: UA - Universidad de Alicante / Universitat d'Alacant </h5>
                  <h5 class type="disc"> Expedición: jul. de 2018 </h5>
                  <h5 class type="disc"> ID de la credencial: gqwJVMdmYR4yLKmS10MW </h5>
                </ul>
             </div>             
         <div class="resume-date text-md-right">
            <span class="text-primary">
              <a href="https://www.unimooc.com/verificar-diploma" target= "_blank">Ver credencial</a><br />
            </span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
            <div class="resume-content">
            <h4 class type="disc"> MACHINE LEARNING FOR BIG DATA ANALYTICS</h4>
                <ul class="fa-ul mb-0">
                  <h5 class type="disc"> Institución Emisora: Universitat Politècnica de València (UPV)</h5>
                  <h5 class type="disc"> Expedición: jun. de 2018 </h5>
                  <h5 class type="disc"> ID de la credencial: FCPJQG4HSRN </h5>
                </ul>
             </div>             
         <div class="resume-date text-md-right">
            <span class="text-primary">
              <a href="https://sede.upv.es/oficina_tactica/#/rex/eVerificador" target= "_blank">Ver credencial</a><br />
            </span>
          </div>
        </div>

         <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
            <div class="resume-content">
            <h4 class type="disc"> Curso Maestro de Python 3: Aprende Desde Cero </h4>
                <ul class="fa-ul mb-0">
                  <h5 class type="disc"> Institución Emisora: Udemy</h5>
                  <h5 class type="disc"> Expedición: ago. de 2018</h5>
                  <h5 class type="disc"> ID de la credencial: UC-EC6A6X3A </h5>
                </ul>
             </div>             
         <div class="resume-date text-md-right">
            <span class="text-primary">
              <a href="https://www.udemy.com/certificate/UC-EC6A6X3A/" target= "_blank">Ver credencial</a><br />
            </span>
          </div>
        </div>       
<!-- B2 -->
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
            <div class="resume-content">
            <h4 class type="disc"> Integrated Skills in English (ISE): ISE II  </h4>
                <ul class="fa-ul mb-0">
                  <h5 class type="disc"> Institución Emisora: Trinity College London </h5>
                  <h5 class type="disc"> Expedición: oct. de 2018 </h5>
                  <h5 class type="disc"> ID de la credencial: 1-1149189725 </h5>
                </ul>
             </div>             
        </div>
    </div>
  </section>

<!-- Linea de separación -->

    <hr class="m-0">

<!-- Cursos -->

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div class="w-100">
        <h2 class="mb-5">Cursos</h2>
        <ul class="fa-ul mb-0">
          <li type="disc"> Cloud Computing - Google Activate (40 horas)
          </li>
          <li type="disc"> Marketing Digital - Google Activate (40 horas)
          </li>
          <li type="disc"> Desarrollo de Apps Móviles - Google Activate (40 horas)
          </li>
           <li type="disc"> Itinerario Emprendimiento - Google Actívate (40 horas)
          </li>
           <li type="disc"> Refactorizar para mejorar la calidad del código Java  (4:30 horas)
          </li>
          <li type="disc"> MySQL: Aprende todo lo básico sobre base de datos  (3:30 horas)
          </li>
           <li type="disc"> Crea tu Propia StartUp  (2:30 horas)
          </li>
          <li type="disc"> Herramientas para la gestión de Equipos de Alto Rendimiento (1 hora)
          </li>
        </ul>
         
      </div>
    </section>

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
      <div class="w-100">
        <h2 class="mb-5">Contacto</h2>
            <div class="panel-body">
              <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
            </div>
            <div>
              <b-form-textarea id="textarea" v-model="text" placeholder=" " rows="6" max-rows="10"></b-form-textarea>
              <pre class="mt-3 mb-0">{{ text }}</pre>
            </div>
            <div>
            <b-button>Enviar</b-button>
          </div>
      </div>
    </section>
  </div>

  </div>


</template>

<script>
  import Vue from 'vue'
  import VueFormGenerator from 'vue-form-generator'
  import 'vue-form-generator/dist/vfg.css'
  Vue.use(VueFormGenerator)

  import About from './About.vue'

  export default {
    components: {
      'v-about': About
    },

    data () {
      return {
        schema: {
            fields: [{
                type: "input",
                inputType: "text",
                label: "Nombre",
                model: "Nombre",
                placeholder: "Introduce tu nombre",
                featured: true,
                required: true
            },
            {
                type: "input",
                inputType: "text",
                label: "Apellidos",
                model: "Apellidos",
                placeholder: "Introduce tus apellidos",
                featured: true,
                required: true
            },
            {
                type: "input",
                inputType: "text",
                label: "Correo electrónico",
                model: "Correo electrónico",
                placeholder: "Introduce tu correo electrónico",
                featured: true,
                required: true
            },
            {
                type: "text",
                label: "Mensaje",
                model: "Mensaje",
                featured: true,
                required: true
            }]
          
        },
        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
          validateAsync: true
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
