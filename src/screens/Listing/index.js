import React, { Component } from 'react';
import { Container } from '../../components/Container';
import { JobCard } from '../../components/JobCard';
import { ResultsTitle, SearchResult } from './styles';
import { RefreshControl } from 'react-native';

import { API_SUBSCRIPTION_KEY } from 'react-native-dotenv';
import API from './../../utils/api';

export const results = [
  {
    Link: '1339',
    CompanyName: 'Encore',
    Title: '1 Quality Assurance Lead y 2 Quality Assurance',
    JobType: 'Tiempo Completo',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-06T15:30:18.223',
    IsRemote: false,
    ViewCount: 32,
    Likes: 0,
    CompanyLogoUrl: null,
    Description:
      "<p>\r\n\r\n</p><p>Bachelor's degree Systems Engineer, Software Development or Software Technologist. Minimum of one year of work-related experience, knowledge of software development languages (like Java, C#.Net, others). Knowledge of Selenium web driver. Knowledge of complete Software Development Life Cycle (SDLC). Database knowledge to work and create testing scenarios (Like MySQL, SQL, Server, others).</p><p>Maine functions are: create detailed comprehensive and well-structured test plans and test cases based on specifications and organization needs, test the program codes, working closely with analysts, designers and developers to understand every possible scenario and support with improvement suggestions. Reviewing current system functionality for possible missed scenarios. Testing the product in a controlled environment, real situations before moving to production.</p>\r\n\r\n<br><p></p>",
    HowToApply:
      '<p>\r\n\r\nSend your updated resume by email. Write "Quality Assurance" as a title.\r\n\r\n<br></p>',
  },
  {
    Link: '1338',
    CompanyName: 'Soluciones GBH',
    Title: 'Software QA, Mid',
    JobType: 'Tiempo Completo',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-06T14:36:34.687',
    IsRemote: false,
    ViewCount: 28,
    Likes: 0,
    CompanyLogoUrl:
      'https://gbh.com.do/wp-content/uploads/2015/04/gbh-icon.png',
    Description:
      '<p>\r\n\r\n</p><p><b>Description</b>&nbsp;<br></p><p>GBH is looking for an experienced Software Quality Assurance – Mid to plan, design, execute and automate tests. We have Agile and waterfall teams so previous experience working in a QA Team in these framework(s) is a must. The Individual chosen for this position should be a hands-on Software QA Analyst with proven technical and analytical skills. If you enjoy a highly collaborative environment, then this position might be for you!<br></p><p><b>Responsibilities</b><b>&nbsp;</b>&nbsp;<br></p><ol><li>Participate in the whole software development life cycle by reviewing documentation and making sure they meet good quality standards. <br></li><li>Conduct analysis of documentation and technical specifications for any application under deployment or consideration to determine its intended functionality <br></li><li>Plan tests based on formal and informal documentation by creating well-structured Test Plans. <br></li><li>Design tests by creating well detailed Test Cases and Test Scripts. <br></li><li>Create more efficient regression testing efforts by automating manual tests. <br></li><li>Execute manual tests for front-end and back-end working environments. <br></li><li>Report defects, bugs and errors on any application under test. <br></li><li>Follow up on reported issues during the bugs life cycle.</li></ol><div><b>Requirements</b></div><ul><li>Bachelor’s Degree in Computer Science or related <br></li><li>Ability to work as a team<br></li><li>Experience using a variety of software development methodologies (Waterfall, Phase Gate, SCRUM, Kanban, etc.) <br></li><li>Experience in modern test automation <br></li><li>2+ years of overall experience delivering enterprise-class software solutions <br></li><li>Familiarity with bug and feature tracking systems such as JIRA a plus. <br></li><li>Experience using a variety of software development methodologies (Waterfall, Phase Gate, SCRUM, Kanban, etc.) <br></li><li>Testing environment include a variety of web and mobile solutions that include: React.js, Angular 1 and 2, Java, .NET, PHP, Elixir, Node.js, React Native, Android and IOS.</li></ul><p><b>Equal opportunities</b>&nbsp;<br></p><p>The selection process for this position ensures compliance with the principle of non-discrimination by sex, origin (including racial or ethnic), age, marital status, disability, religion or belief, political opinion, sexual orientation, union affiliation, social status and language. <br></p><p><b>Terms of recruitment</b>&nbsp;<br></p><ul><li>Indefinite employment contract <br></li><li>Working day from Monday to Friday (40 hours a week) <br></li><li>Monthly Salary less than RD$ 50,000 <br></li><li>Great environment <br></li><li>Complementary health insurance &nbsp;<br></li><li>Place of work: Santo Domingo – Sector Naco</li></ul><p></p>',
    HowToApply:
      '<p>\r\n\r\nInterested candidates must send their CV clicking on the button (“<b>Aplicar al puesto</b>“) in our official site:&nbsp;<a target="_blank" rel="nofollow" href="https://gbh.com.do/empleos/#1-software-quality-assurance-mid">https://gbh.com.do/empleos/#1-software-quality-assurance-mid</a>\r\n\r\n<br></p>',
  },
  {
    Link: '1337',
    CompanyName: 'Smile',
    Title: 'Full stack developers (Python  y Django)',
    JobType: 'Voluntario',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-05T21:13:49.95',
    IsRemote: true,
    ViewCount: 42,
    Likes: 0,
    CompanyLogoUrl: 'http://www.getsmilehelps.com/static/images/logo.png',
    Description:
      '<p>\r\n\r\n</p><p><b>We need several developers with the following skills:</b></p><p></p><ul><li><b>Python</b></li><li><b>Django</b></li><li><b>HTML5</b></li><li><b>CSS3</b></li><li><b>Stylus or sass or less</b></li><li><b>Materializecss</b></li><li><b>Angular or Reactjs</b></li><li><b>Git, bitbucket<br></b></li></ul><b>\r\n\r\n<b><p>pay by <b>equity</b>&nbsp;and <b>vesting</b>, investigate these concepts before applying...<br></p></b>\r\n\r\n<br></b><b><br>\r\n\r\n</b><p></p><p></p>',
    HowToApply:
      '<p>\r\n\r\nSend your Curriculum vitae and WhatsApp number to</p><p>juniormontillaacosta@gmail.com<br>\r\n\r\n<br></p>',
  },
  {
    Link: '1336',
    CompanyName: 'Scopic Software',
    Title: 'Remote Financial Operations Analyst',
    JobType: 'Independiente',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-05T21:08:36.997',
    IsRemote: true,
    ViewCount: 11,
    Likes: 0,
    CompanyLogoUrl:
      'https://scopicsoftware.com/wp-content/uploads/2014/07/scopic-logo-v2-min2.png',
    Description:
      '<p><i>Join the\r\nworld’s largest virtual company!</i>\r\n\r\n</p><p>Work\r\nfrom anywhere – Flexible hours – Training &amp; travel opportunities</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Scopic Software\r\nis seeking a skilled <b>Remote Financial\r\nOperations Analyst</b> to join our team of 250+ professionals in over 40 countries.\r\nThis is an\r\nideal position for motivated individuals looking for a diverse, fast-paced,\r\nfully remote environment.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><b>Responsibilities: </b></p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nAssist the team in maintaining\r\nand monitoring the KPIs dashboard, ensuring the protection of data integrity</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nGather and analyze data to\r\nprepare ad hoc financial and operational reports to assess business performance</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nMonitor the company-wide budgeting\r\nprocess and assist in preparing monthly revenue forecasts</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nProvide support services in the\r\nmonthly reports related to cost and profitability monitoring and advise on\r\noptimizing performance and profitability</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>At Scopic, we\r\nbelieve talent can be found in every corner of the globe, and you shouldn’t be\r\nlimited by location. Our employees work in nearly every time zone, from\r\nwhenever they feel most comfortable, and our software benefits from this\r\ndiversity of perspectives and expertise.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><b><i>Grow Your\r\nSkills and Your Career, Fast</i></b></p>\r\n\r\n<p>We offer\r\ntraining opportunities to keep your skills sharp and encourage you to stay\r\nup-to-date with ever-evolving technologies. As your skills grow and you take on\r\nadditional responsibility, you will have opportunities to move up in the\r\ncompany. If you work hard and deliver quality results, you will do very well\r\nhere. Pay raises and promotions are completely merit-based, so your success is\r\nin your hands.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><b><i>Become a\r\nValuable Part of a Small, Dynamic International Team</i></b></p>\r\n\r\n<p>Unlike huge\r\ntech corporations like Google and Microsoft, Scopic employees don’t get lost in\r\nbureaucracy or sidelined doing the same boring tasks day after day. Most\r\nprojects last six months to one year, so all team members have the opportunity\r\nto try their skills on a diverse range of applications. Scopic employees work\r\nindependently and are entrusted with considerable responsibility.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><b><i>Contribute to\r\nMeaningful Applications for Clients Invested in Your Success</i></b></p>\r\n\r\n<p>All Scopic\r\nprojects involve working with challenging, innovative applications. The\r\napplications Scopic works on are the cornerstone of our clients’ businesses.\r\nClients and users will rely on you to ensure the delivery of quality software\r\nproducts.</p>\r\n\r\n<p><b>&nbsp;</b></p>\r\n\r\n<p><b>Why Work With\r\nScopic Software?</b></p>\r\n\r\n<ul>\r\n <li>Flexible working hours, set your own\r\n     schedule</li>\r\n <li>Freedom to travel and work from anywhere\r\n     in the world</li>\r\n <li>Ability to work wherever you are most\r\n     comfortable (home, office, park, café, etc.)</li>\r\n <li>Reliable, consistent workload</li>\r\n <li>Flexible payment options in $US –\r\n     salaried and hourly positions available</li>\r\n <li>Annual pay increases for good performance</li>\r\n <li>Paid training and other professional\r\n     growth opportunities</li>\r\n <li>International travel opportunities (not\r\n     required)</li>\r\n <li>Interesting, challenging projects using\r\n     the latest technologies</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><b>Requirements:</b></p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\n1+ year of full-time professional experience in Finance, Accounting or\r\nData Analytics</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nStrong communication skills, both written and verbal</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nAbility to be proactive, identify issues, and resolve tasks in a timely\r\nmanner</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nExcellent attention to detail</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nIndependent and disciplined</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nKnowledge of the IT/software industry, preferred</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nAdvanced written and spoken English</p>\r\n\r\n<p>· &nbsp; &nbsp; &nbsp; &nbsp;\r\nBachelor\'s degree in Accounting, Business Administration, Finance,\r\nEconomics or a related field </p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><u>Salary</u>: Negotiable <strong>depending on skills and\r\nexperience.</strong></p>\r\n\r\n<p><b>&nbsp;</b></p>\r\n\r\n<p>Please apply\r\nonline:&nbsp; \r\n<a target="_blank" rel="nofollow" href="https://scopicsoftware.recruiterbox.com/jobs/fk03cg5?source=Emplea%20DO">https://scopicsoftware.recruiterbox.com/jobs/fk03cg5?source=Emplea%20DO</a>\r\n\r\n<br></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><b>Have questions about this position? </b>Contact us at <a target="_blank" rel="nofollow">jobs@scopicsoftware.com</a>.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><b>About Scopic\r\nSoftware</b></p>\r\n\r\n<p>Scopic\r\nSoftware is the world’s largest virtual company. Founded in 2006, we have grown\r\nconsistently by delivering innovative, cutting-edge software and marketing\r\nservices to our clients and creating an empowering environment for our\r\nemployees. </p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>We build and\r\nmarket advanced software for clients and users around the globe. With 10+ years\r\nin the industry and 1000+ projects under our belt, we’ve brought to life\r\nsoftware for Manufacturing, Media and Entertainment, Fintech, Healthcare, Food\r\nand Fitness, and Gaming. Check out our work on our portfolio: <a target="_blank" rel="nofollow" href="https://scopicsoftware.com/portfolio/">scopicsoftware.com/portfolio/</a>.</p>\r\n\r\n<p><b>&nbsp;Learn more\r\nabout career opportunities at Scopic: </b><a target="_blank" rel="nofollow" href="http://www.scopicsoftware.com/careers"><b>scopicsoftware.com/careers</b></a><b>.</b> <br></p><p></p>',
    HowToApply:
      '<p>Please apply\r\nonline:  \r\n<a target="_blank" rel="nofollow" href="https://scopicsoftware.recruiterbox.com/jobs/fk03cg5?source=Emplea%20DO">https://scopicsoftware.recruiterbox.com/jobs/fk03cg5?source=Emplea%20DO</a>\r\n\r\n<br>\r\n\r\n</p><p>&nbsp;<br></p><p></p>',
  },
  {
    Link: '1335',
    CompanyName: 'INgenio Consulting',
    Title: 'Desarrollador Web .Net',
    JobType: 'Tiempo Completo',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-05T19:58:29.877',
    IsRemote: false,
    ViewCount: 38,
    Likes: 0,
    CompanyLogoUrl: null,
    Description:
      '<p>\r\n\r\n</p><div>Descripción de la posición que se esta buscando es la siguiente:</div><div>&nbsp;</div><div><div><strong>Programador Web</strong><br>Su función es la de desarrollar y crear interfaces web con alto rendimiento y una buena experiencia de usuarios.</div><div>&nbsp;</div><div><strong>habilidades técnicas</strong><br>&nbsp; &nbsp; &nbsp;1- Visual Studio .Net experiencia e ADO.net y .Net clasic<br>&nbsp;  &nbsp; &nbsp; &nbsp; C# (<a target="_blank" rel="nofollow" href="http://asp.net/">asp.net</a>&nbsp;, css, html)<br>&nbsp;  &nbsp; &nbsp; &nbsp; Dominio de Linq<br>&nbsp; &nbsp; &nbsp;2- JavaScript<br>&nbsp; &nbsp; &nbsp;3- MS Transact-SQL<br>&nbsp; &nbsp; &nbsp;4- Conocimientos en algún manejador de versiones (Preferiblemente SVN o Git).</div><div>&nbsp;</div><div>Nota:</div><div>Si puede tener habilidades para el Diseño Web Mucho mejor:<br>&nbsp; &nbsp; &nbsp;bootstrap<br>&nbsp; &nbsp; &nbsp;html5<br>&nbsp; &nbsp; &nbsp;css3</div></div>\r\n\r\n<br><p></p>',
    HowToApply:
      '<p>Interesados enviar su CV a&nbsp;ingenio.vacantes@gmail.com con el nombre de la vacante en el asunto.</p>',
  },
  {
    Link: '1334',
    CompanyName: 'Soluciones GBH',
    Title: 'Ingeniero de Software Senior',
    JobType: 'Tiempo Completo',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-05T18:37:19.96',
    IsRemote: true,
    ViewCount: 60,
    Likes: 0,
    CompanyLogoUrl:
      'https://gbh.com.do/wp-content/uploads/2015/04/gbh-icon.png',
    Description:
      '<p>\r\n\r\n</p><p><strong>Requisitos </strong></p><ul><li>Egresado de grado universitario en ingeniería de sistemas y computación o carrera relacionada.</li><li>Debe poder construir soluciones haciendo uso de estructuras de datos complejas. Por ejemplo: graphs y trees.</li><li>Conocimiento y capacidad de aplicación de object oriented design; esta persona debe, dado un problema, poder estructurar su solución en clases, métodos y propiedades.</li><li>Dominio de estrategias de testing top down y bottom up así como su implementación a través de unit testing y/o integration testing.</li><li>Debe tener experiencia utilizando herramientas de control de versiones (GIT) y conocimiento del flujo de trabajo de la compañía.</li><li>Capacidad avanzada del inglés (8/10 o superior): debe poder comunicarse oralmente de manera efectiva y poder explicar conceptos y decisiones técnicas a clientes extranjeros. Esta persona debe poder leer libros, papeles técnicos o posts de blog y comprenderlos. Adicionalmente, debe poder generar un resumen de dicha lectura.&nbsp;</li><li>3 años de experiencia en diseño y desarrollo de proyectos web.</li><li>Conocimiento y capacidad de aplicar los principios SOLID y patrones de diseño.</li><li>Capacidad de cumplir requerimientos dados por los atributos de calidad a través de decisiones de diseño.</li></ul><p><strong>Tecnologías más comunes con las que trabajamos </strong></p><p>En Soluciones GBH seguimos la filosofía P.L.A. – “Programming Language Agnostic”: nos encanta encontrar ingenieros especializados en ciertos lenguajes de programación, pero consideramos que lo más importante es el dominio de conceptos de arquitectura y algoritmos que sean eficaces para los productos que nuestros clientes requieren.</p><p>Entre las tecnologías más comunes que utilizamos en nuestros proyectos, podemos mencionar:</p><ul><li>Javascript</li><li>AngularJs</li><li>NodeJs</li><li>React Native</li><li>Java</li><li>Elixir</li><li>Python</li><li>Ruby</li><li>PHP</li><li>HTML</li><li>CSS</li><li>Git</li><li>WordPress</li><li>Mysql</li><li>Postgres</li><li>JIRA</li><li>Cloud: AWS, Azure, Google Cloud</li></ul><p></p>',
    HowToApply:
      '<p>\r\n\r\nLas personas interesadas en la presente convocatoria deberán llenar el formulario de aplicación haciendo click en el botón\r\n\r\n\r\n“Aplicar al puesto“ en nuestro portal de empleos:&nbsp;\r\n\r\n<a target="_blank" rel="nofollow" href="https://gbh.com.do/empleos/#1-ing-de-software-senior-us">https://gbh.com.do/empleos/#1-ing-de-software-senior-us</a>\r\n\r\n<br></p><p>(Aunque&nbsp;el texto&nbsp;siguiente&nbsp;indica&nbsp;por&nbsp;default&nbsp;que&nbsp;envíes&nbsp;tu&nbsp;CV&nbsp;a&nbsp;nuestro&nbsp;correo, solo las&nbsp;candidaturas&nbsp;enviadas&nbsp;por&nbsp;nuestro&nbsp;portal&nbsp;de&nbsp;empleo&nbsp;serán&nbsp;tomadas&nbsp;en&nbsp;cuenta).</p>',
  },
  {
    Link: '1333',
    CompanyName: 'INgenio Consulting',
    Title: 'Desarrollador Junior PHP',
    JobType: 'Tiempo Completo',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-05T17:51:16.727',
    IsRemote: false,
    ViewCount: 31,
    Likes: 0,
    CompanyLogoUrl: null,
    Description:
      '<p>\r\n\r\n</p><p>Profesional del área de tecnología, habilidades para manejos proyectos web.<u></u><u></u></p><p>Conocimientos de:</p><p>PHP, JavaScript, HTML5, CCS, ORACLE y JAVA Android.</p><p><u></u></p><p>Residente en Santo Domingo<u></u><u></u></p><p>Disponibilidad inmediata</p>\r\n\r\n<br><p></p>',
    HowToApply:
      '<p>Interesados enviar su CV a&nbsp;ingenio.vacantes@gmail.com con el nombre de la posición en el asunto</p>',
  },
  {
    Link: '1332',
    CompanyName: 'Turinter, S.A.',
    Title: 'programador web',
    JobType: 'Independiente',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-05T17:08:47.507',
    IsRemote: true,
    ViewCount: 63,
    Likes: 2,
    CompanyLogoUrl: null,
    Description: '<p>Aplicación para celular REACT NATIVE o JAVA.</p>',
    HowToApply: '<p>envie su perfil a c.alonso@turinter.com</p>',
  },
  {
    Link: '1331',
    CompanyName: 'Turinter S.A.',
    Title: 'programador',
    JobType: 'Independiente',
    Location: 'Santo Domingo, RD',
    PublishedDate: '2019-12-05T17:04:04.27',
    IsRemote: true,
    ViewCount: 62,
    Likes: 0,
    CompanyLogoUrl: null,
    Description:
      '<p>Experiencia en Conexión XML a través de un protocolo SOAP para integración en\r\nuna base de datos MYSQL. &nbsp; &nbsp; &nbsp;<br></p>',
    HowToApply:
      '<p></p><p>Enviar fille detallando trabajos de integraciones con carta de referencia&nbsp; a:&nbsp; c.alonso@turinter.com</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n\r\n\r\n\r\n\r\n<br><p></p>',
  },
];

class ListingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      pageNo: 1,
      loadingMore: false,
      isFetching: false,
    };
  }

  componentDidMount() {
    this.loadInitData();
  }

  loadInitData = () => {
    const { pageNo } = this.state;

    return fetch(`${API}jobs?page=${pageNo}&pageSize=10`, {
      method: 'GET',
      headers: { 'Ocp-Apim-Subscription-Key': API_SUBSCRIPTION_KEY },
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState((prevState, nextProps) => ({
          data:
            pageNo === 1
              ? response.Jobs
              : this.state.data.concat(response.Jobs),
          loading: false,
        }));

        console.log('consulta Ejecutada exitosamente');
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        console.log('consulta Finalizada exitosamente');
      });
  };

  loadNextData = () => {
    this.setState(
      (prevState, nextProps) => ({
        pageNo: prevState.pageNo + 1,
        loadingMore: true,
      }),
      () => {
        this.loadInitData();
      },
    );
  };

  resetData = () => {
    fetch(`${API}jobs?page=1&pageSize=10`, {
      method: 'GET',
      headers: { 'Ocp-Apim-Subscription-Key': API_SUBSCRIPTION_KEY },
    })
      .then(response => response.json())
      .then(response => {
        // console.log(response)
        this.setState({ data: response.Jobs });
      })
      .catch(error => {
        console.error(error);
      }),
      () => {
        this.loadInitData();
      };

    this.setState({ isFetching: false }, () => {
      this.state.pageNo = 1;
    });
  };

  render() {
    const { data, isLoading, loadingMore, isFetching } = this.state;
    return (
      <Container behavior="position">
        <SearchResult
          onScrollEndDrag={this.loadNextData}
          onEndReachedThreshold={10}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={() => this.resetData()}
            />
          }>
          <ResultsTitle>
            {data.length ? data.length : 0} empleos disponibles
          </ResultsTitle>
          {/*<ResultsTitle>{results.length || 0} empleos disponibles</ResultsTitle>*/}
          {data.map(job => {
            return <JobCard key={job.Link} {...job} />;
          })}
        </SearchResult>
      </Container>
    );
  }
}

ListingScreen.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('query'),
});

export default ListingScreen;
