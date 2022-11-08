import Courses from "./Courses";
import DiplomaCourse from "./DiplomaCourse.vue";
import CertificateCourse from "./CertificateCourse.vue";
import SearchResult from "./SearchResult.vue";

export default [
  {path:'/:name/:id', name: 'Courses', component: Courses },
  {path:'/diploma-course', name: 'DiplomaCourse', component: DiplomaCourse },
  {path:'/certificate-course', name: 'CertificateCourse', component: CertificateCourse },
  {path:'/search-result', name: 'SearchResult', component: SearchResult },
]
