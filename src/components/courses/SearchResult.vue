<template>
  <div class="search-bar">
    <div class="search-header">
      <div class="header-title">
        <div class="links">
          <h2>Free Online Courses</h2>
          <a class="icons" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Falison.com%252Ftag%252Fquality-control%253Futm_campaign%253Dsocial_share%2526utm_source%253DFacebook%2526utm_medium%253Dsocial&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU" target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fiFSbJ82evUsho5inxkrml_P2-Ft5PEgb4IBKBcwvw&s" width="25px">
          </a>
          <a class="icons" href="https://twitter.com/intent/tweet?url=https://alison.com/tag/quality-control%3Futm_campaign=social_share%26utm_source=Twitter%26utm_medium=social" target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqSlbRtjTDdx0MpgoVwtpF3WBQkACSh9HmA&usqp=CAU" width="25px">
          </a>
          <a  id="linkedin-share" class="btn-linkedin share-link icons" href="https://www.linkedin.com/shareArticle?url=https://alison.com/tag/quality-control%3futm_campaign=social_share%26utm_source=LinkedIn%26utm_medium=social&amp;mini=true" target="_blank" rel="nofollow">
            <img src="data:image/png;base64,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" width="25px">
          </a>
          <a  id="whatsapp-share" class="btn-whatsapp share-link icons" href="https://api.whatsapp.com/send?text=Look at what I've found on Alison: https://alison.com/tag/quality-control%3Futm_campaign=social_share%26utm_source=WhatsApp%26utm_medium=social" data-action="share/whatsapp/share" target="_blank" rel="nofollow">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEUNnxb////8/Pz9/f0AmAAAmgAAoQAAngAAlAAAlwAAogAAnAAApAD//f8KoBT+//7y+vPm9Of5/fn1+/Xe8uDl8+a+4sDs9+1zwnfZ8NsAog+y3LQnqi9ct2DM6s6f1KKO0JK64byZ1p2o16rK68zR69IYnxwupDFKsE6Fyog+qUFnvWt6xn5RsVSo26uN0ZBjwmhIt083sD42szwYrCAqpzCY0Jtpu2xLuFKOy5F6zH2i26ZXu1w1rzopsjFvvnMjvtPTAAAVXUlEQVR4nOWdaXuyvBKAzSMBFAyKCgru+1br1t3a//+vTrCLYWcCtr7XmY9dIDeZZGaSySSHripa1azUx8b6/nWz3bUmuU+ZtN63m9f5ut+p182yft0m5K73aLNpDF+W25MlSZJYFC1Cct9CiGUVRVGS1NNuM+/2x5XrNeNKhNpo0JjtD0VJomAXMq/Q31H+4uG0feoZ1es0JXvCamV8v1UltWiFk/lRRVWU9q+dSjnz9mRMqI/txt7RyORwF0pLlE7LYSdjyEwJK2/tvSpx4X1BEql4mg2aWTYqM8Jqfb0X1RR0P6Ko0mHQzKwnMyI0jcaJTzcDxRIPGzuj+TUTwnLv+SBlhncWIh22q0wY0xPq4yXVzkzxviBV8WikV9a0hFXjVRWz7T6GURQ3tvm3hKPj4Wp8Z0bp8Gxrf0aoG7urqKdbLLU1TKOrKQg7r7/Ad2YUN33+fuQmLL+erqqfLqHGo/bLhJWBqP4a35lRXXEychFqo+3v8uWceXXf54o+eAjLq4P0y3yOWHyqCifU+6r6B3yOFMU3eDeCCWur4u/MoEFC1E3n2oSd9+Jvj0CXFE/2VQnN+a/PMF6h3QgbjSDC2vHPAamI+/G1CEe7v5hC/SKdhlch1Oe/5KTFCxE3yefUxITmKuMYN5VIyQdjUkLzWPxrKpcUd0kHY0LCpnpbgE7AkTDeSEZotG5lCF6EHNaJEBMRDm8Q0PFTexkRam/KDc0xjBBxlWDfKp5Qe8tuHTRrURMgxhP2DjcLSF2419SE2uD31ip4pPga14sxhFr3hnvwLOo8BjGGcH27Y/BLiLpKQ2jfkqcWJmIv0i5GEhqn/wBgnOmPIqztb9HQ+4UcDD7C8s1ES3FCxIhd43BCc3Nrzna4WNs6nFC7/+8AUrMYHhKHEj6Kf91qkEhLKOH4FtacAELEsFXGEMLKNtNZhhBFEQoF+VsKBUFRInKleF5xCgn6gwmrywxX1RRFmUxn7ca892b3jZHRt9e9eaM9m07ob7KjlHbBs00w4SCrnQlBUFp3L0OjaXq9R91sGvZL+0EScEbvEp+SE9YyGYQEy0Jr1ambjsdRKv1zS6lEf6qVK+P7nSILmXSl2k9KaGYxCBU8XQ6chJhS/l+EOJz6urFQlPSvJK2goRhAqPXS66gg3XXHeYQi6b7F0Zrhx6QgpH1rcRlgFQMIx2lDQlLAx7FJey8J3jdktT635LRDUl0nIdQO6XQU42mvAsL7htTsWS6dshLRn1/kJxykc2YKD4/UDYbinaWETLudbmpVl76I30c4ThUTCsLSzPPxfTKWhxM5TQP8gZSXMJWtx/iJt/8ujPrbQ4pu9Nt9L6GdwhQKi6EWxpd3vyZilJbQ+CPFaBS9C+FeQv71eywva4Et/4TTa53++o3K2qYeTiQn0vtKgbcZvsnGQ8hvCvHUDlDQvOOe1ez59iBd/G5ZxmLrOO/Xzpn5gYzmE+bVJXUZRdh8531ugXZggMIhSjezsIC9Q0ugP7MWH12jFgiJqkOFdzQeRuGE2gunpSByo+prpzOqn6g7Ft5STKOORcOuBuhrCY0mnD6O6PZsXIRNTm8GT2xvG/NIbzpOStwDCRFkfOxX/A4eqiz5BiMRjVDCBl8X4lzH2z6EOnOS2HgLePo49ikrKjf4FNXahRGafJsw+KHjaRx1ThoPoKmCunp+U4qq8wJXi4pGCGGDayLFd545Jo8qPQXcNFIoHMcec1pCa67I0TpWAwnHe56n4UXF0yyts+CbI7D04vtYj1zGn/XdGMJHngVSvGi6G4W0+YTbJcGLN7eqUkSeryW+VgMIazwuN565v3pJqxGZo0nfQuRj0zVr5VGXY0Yl6jiA8I1jIsWk6QEcpnGbHREe1i7Lk0dzjicWlwGEJ7hHShTDBYjQPJd65QwLPZ19aqn8BFdUIpV9hH2OLiS2G7C8TBXbfYs8c2kGMtvwz6b2fIRL+DxT6OnskKFOSOq1pE/BUzdijYAfbD2bHsLxHt6Od5f5Qvoiq7Vd7wyN+vAn/xiMb0L4VhN+qLtaUV9wx3QBD5+4/CT0CEaUvpOJvgjNZ+g8Q3J26sESIXjC9mKpDH46OdVdhE2wS1pYspM6QseMxuC3uC0tqoEVRBy6CMHzDCbslI60ZRo7H/yGGTsK4Hpq7V2EFlRJsUtHtZdMVfRThCXj3VA9BfqCRKowhB3oPIOXVVZH7Wx3O79EXrOd2M8B36G+MYQrYNxEpmP25c3MVfTzLbk++5Y5cChKbe2H0JwBP09hzr66MruCjjqizMzLe5AJVdN984ewcwK+GjNv/qcFuMakIBcUSUm7mSTM03Siav8QdoHDUBiwLx767ATBi5XdLOumsYQ92CcyY/hL5hT2wT6NvkNYBu5V4GmdVZ4Ap7H3fd6jukzXi7hdvsxoUIth7SpfhBVg7ItfLoB5tPLpjtzTUP5T0DjlJKQwVgk1p6CGkmLzi9CAZZES1i1Gtu+7Yhq45L8FbVN24rTCdGIPNhKl3hfhHDYMCytmbPgNMf7QL4B5nrDAJcIj8znrMNfQ2n4R7mAOjTyO6kIyrTGAeVRJGVMJFuP/omfQw0jxk1CHKSneMV2oid6vKvdZQIrYTZlHIjMTN+rAHiaNz4Qd4Ew6ZN649k4klN9DOIZNDz5R7syfTiyZMxCi47hRwjeQy0YmtcsLy3dercGeLszTuCVtXMUsdwFdfCePnxI2QJETnuvMKPRNM9TPynsQOykNBn6qXt44mkA0QrorU8LyHWiiYcOm8pOvC1+0kpcQtdLNNSR3iYWp1kDUlOyalLC2g3wVwiyDoZovaKL8ea9wrVqzInSZkQ9zTg8GJTQOkH/BT5ew1P82Mu0EEEL9Sd87W+xsCtJ56nznkA2aaJi5O4+Izxguan7CkvaS0mAUGDVFIPdEeqSEsMCCMfeo6VMYOrP7CfPIAE0PAS9lTSLI6EsNPaevQOaQ8TDQvU9hFDp3BRBqKSMMpa1d3tqFGB/r2cyVNxBC/HzRF92/NhRMmEdv6QyGa3prQtpL9pUcLCFY6DGv8jsrit8cngl9rg9ULgs2pQpk/44c6rk6KDhULjF3QNx0/th+wBL6SBlgKC8aY4QB8xYRm7k6KFWPXGa1oIibTEZB43D8kHKxUWmXfwhBjhtROjnQej5eXOLRalAGoRJg8UvVtF2YIw+X96IhxPZI/dwIcqhDWf58y1Jg4Ee9Vq/XVoJG5oENZYxUH/KP4iDXh0xNysXtLtWDjFyQ521ksGfDeMOoMwX8o3ifW0MMvvL4M+LROPDTSN6phg7CDNaLmYVTVFsAtK74muuBCIeMsgQ23NlOcQP6XDseEY4XcwGKgq1NDrQMRfrMVBqsfJLuQkTHTHaG8XukpxEu1nNuBYh/CRNuh6W5yGuWsIQOmexpkIu3mEcQH9Da5iB7o465+yEMWZwgi4prrY0ra8sv0k9WRB5BkjLJQw50npnJs0TtkKbjR40lBK4dhTVUKV/evAJ8NNLKHQFuKbttiI4hXxI/uDvRzqQTcYUZH4ChfQ1CZ95jrD5C8yz2T4XaDRHmZMPVieVMDCIv4SQFYaj2KTO3nnYyOO37S33ommkiFnrdmzP5oDgLKsyuM3SmWQIsvstaRL0Hu4wi0nuph6JS5bQWLaA9ZCx+ZJimuPVUn6X1bEROi0/ec68Qe8h6bZGq54kx0u92H3i9th3ML1XYICYy7MJz1/I+MtupepHZ0gN63s/A2KLLBDGRUxRR1m4PvBqSnInlghzfYmHDGT3R2AIUHzIbT6XKLlrxZPcCP9JXQX+P2+Pm2wLHMQovnBEwjQ9hMf7TZUUoLpUO72qeXuxi3/SL207GeWXY9h3f87y4z7uKcQ9bp6ETyM+KkB53SgB7locRsr2pN/hhjM6/Kfd3kefcJMbgg1aixAFsrY3k6sxkGvemwk73BPyVD3dfCd+LjyWEOu1J6Cdj1/hg+zySnauD6nMrjNs2msT9dWHlWeRHWnfKdCMeMIk3SB/NpRAvQvlgRscSsiIsdYBr3sxmJarEz2l0ZvIgolrjp5KJsHI7d0hvLnHgjKtckmpiZziXOGvesH0LfFkR+oca8f6h3NC8a29o/PF5NlFYVj2/o7pqNgJ01eVLwXZmDnXg3pNgMVvAwwTeZmHu241CWmc1EXChVQnaAUCGf8OHzJj4twvxjpy9J+D+IbMdi8wk78Ir3YeI9NrLeztoE+ccMfsUVWgwmrOBEDr7h9A94Dfodqy89SrjWR0RCgQM3GyUGWuIQBlc0kqH7uO7MhWGiT5noR2wuR8uAdscIrMFDMtUOO/jw3IxnFyEn2mt1kr0P3jRCeuwIEJfwqqwZPQGFmqeczFg+TSujKGkW3lYXvsGY5iUkC8Nidl4AmYM5U4jeE6UwmZ9JU6ywKt6QkRkehkUJhMamPX1mRMFzWvbXRyoku7L3Av9t6SaijoP3n9lkyFhqd7SXRWem+hSU9RPPCpwgXZjAkaf5rPefvC2bLh85SZC80u3bB47ICtP2BnxoxHVvAZfZrPaDNgWwVd+KTBHOFdgSgyA1uxxbjlGyLsL7gb0LVIKksZkQQPPAH7lCEPzvN2Z7KCFL0FuNPUIXUXawJd0zA6KGmxV8jvPG5qrz5pEwHT6KYXJqqOFujNa1/v37iMlwHNBP7n6wPMW7F73v7wGTHIm+OGpj4KU1TlD5z2B5zq+BluDoiINeM/MPLhOBUH3BwmWW73zbbgMZclZyWj5jvO7D8kBz3FezsxAzz25TnlQ1YFvEGLBeuqOvssenP3wmn3nr7eECXs8rw5MrbqcewKfXctZzCHgkLSTOFGUyd3q7eti44rdWASttgl2mk95ObuGOtCyJnKPHR2cJd6I4hxSFEXLknBwjVbMJOxxHOdmzh+aM2Aj2UPIUCvsFRJ6vhffMTqa1xMsmrgfzJwhBZ8DFj7Y7PmMT+J/CxZcx9Xjl/Y8IjLngMFnuZlT1vmMMmZ8QnIjBrBUAed0uM5yQ8/jM1+Xo9pBQlkzgzA0QSlc3OfxEWgX0dnNuwzD1BnOwSL3NPbEfxOsKJ6aCrC6GMKKUdKUe5/BQvCKLReFTPgpRsl2EZpH0BYUs0AL9aQSCXE2WBkdDToQH/cIT20T1IWoaat+WVZIe1okUOS5q1QUsuG1Pr31aVATUI6O3UXkqI0TKzg3cJX74prMfDWG0FPyTmT2umP3STnEqaTprj/FUZXCXycKUOvLtU9Sh9rhWClInhpwOk+qf0Ctr+QVhDG7T5JBupNblA93rdcS4iljGlSvLXmA4don8ce/MTvy0YLJ0AOoP/LYWzGo5l7iuonM5kwJuXbmnWhBabWCdzkTCJFnY08xW9hm2s+DAusmJq59KTBJdEztHYyV6d28T7Wj8hS+Ix8l/nLSJfTI9bWCa18mLQSNW4zL9r00RoP22crufFavRshYwsvjFyYvNU+x3pLOeYQ4pH5pwhq0zDDMoydMCJZl69itOfeslL5/XrVb8VWSGSEF3K57C7pzH6+VjnowYbI6wuwBveYUTxZPg7PSe8YPMtqTpIyKMr2v+Ssl621Op15lK3qDa0GTB8ZlGz99lhwPKB+fR/ro5cGfBeUTLCjtYcCFA6jOWe06ohZ0onrezPG1f/90Z+CF3bRSQlrd3ihyIfRmp7OGt+bjckBZdjTmLYoSVc87yXTKLgfHSgkhvX9/t3BudnK3l2DnGqjF8qzh/n9E+pC7ihY7kfoI4/eD2UToREKfWm0aw/nTokUkBWMsCNSuSLnFcj4MKarv+Norfnf31EHhhPF3IxBvcetkPYn0cqVeGxt2t9t7eRwazXqlrIdpOEKjFFUYou9GiPdOWZcNyFlyvSj0Do8SqjUK/IBx91vE3lHiqmUY+P15v8D3A6r2Q5rlydg7SuLumSlEKOn5nrGaloaRKmhcMm20SLtKDCFqRjrgbJkRL51eaXa3kmy9+I13MimhaueYshBh/F1BMRaDWWVzfXlUHg3nO8n5/ERoOVc5JLqPzP0QffRkpVw/Vxvx9z1F39nlKVH+2XnIXK/uHpQf7SLK9CPYzEXxoXWbvyD/95sT3dkVde8ae/L/8xKgcr2zamHHb3H9nSC/P1aCblcJEietdLxKf+sa7cKhHwd2dx6zyub0Xc3otltKcKCEhdbH0ElLiO5K5yuZxmM7LP8ZJEX/nWTQ+w+/VtnOlm08eHK8sYgX0pC43eucr3sKuATxKwXT0fDoxyQW0gq6+Bh0h6XjspXONzh1j5ZMA8BYH0+RZWk37zcrZtX9ebWqWakZj8cD1XDuq508kvwOy9B7SJ0CO+WxPZ+RBFHRj2ABSw93H9RZs/t9wzD6fXvYfflo7yzFfw9UChEbgSxhd8kGRop4Zs/vpgpHs2goQYMJ2lmTyeQcV+Coe6C4RAq5uTr0PuBA18Y3aYKFXKUudg58H/D/wZ3OnPfq/J3A7+WmVvG/hFjcBFjCGEJU3vx3ble3QmaZaEJUVjO9ffyKYolBpj6eENX3/w1E4g+ZEhKiUeu/MKGSQ4C/nZAQ9TO83f1qIvY0fkK0tm4dkajzaIQYQu3t1hHVeWQPxhJSRGCK9C9L8TXUECYkpHHGDfciUV9j2x9PqHVvF1Gdx/VgEkKkrW90RiXiKmYMJiREyOa/y/qKYh28y9v8hMi4QURyWCfowaSEqKneWqRhFfuJAJMSIvN4W4jFbUhIz02IzNUtGUZpEx4u8RIivXcz0RTxXC6eESENNXZcp2MyF+kUGUykIES14y2sT4n7pEMQTojM+Z9rKlGXtfiGchMi1Hn/224UT2GrhlkRotoKfBtkdkLUDUhDuQiR3v8z618sviWfQ/kJESqvDn8xqVqHDWwE8hMibbT99dFIxH0f3oG8hHRSHRR/l7Gorng6kJ+QqurrCVQlLJVIfAqajpAajtdfMo6WuEkYR2RMiHRj9wuMltoacg3ADAipjI4H8H3XECHS4Rlq4rMlRFXjVb0aIxHFje3PAfpdQqqr46V4FWUlqng0yvENuDohlXLv+ZBxfEzVc7vyphlySSaETlpT4yRmt65qiYeNnQlfZoR0QNbXe6qtGUBKqnQY1NKr55dkRuhI5a29V6UUlIRIxdNxELGjC5dMCZ1px27sVT59JZYonZbDTma99ykZE1KpVsb326KoFiGYhP69tH/tVDLGQ9cgPIs2GjRm+0NRojobkQVFf2dJknrYzz56fJFDvFyJ0BGzaQxfltsTZZDEItVcwpBZVlEUKdxpt5l3++OM5s0guSKhI06SZX1srO9fN9td6+dUdOt9u3mdr/udet0sx2+QpZL/AdU4wYkOJn5cAAAAAElFTkSuQmCC" width="25px">
          </a>
        </div>
      </div>
      <p>
        From Art to Zoology, Alison has thousands of free online courses and is adding more all the time. We seek out experts in their field to design learning material that is comprehensive, broken down into manageable chunks and gives you a series of achievable learning outcomes. Our online courses strive to provide interactive and rich studying experiences - for anyone in the world, wherever they are.
        <br>
        <br>
        Since 2007, we have partnered with universities, foundations and individuals across the globe to bring you courses that are free, flexible and fun. You can opt for a longer diploma version or choose to do a series of shorter certificate courses, each designed to fit in with your schedule. All it takes is to register your complimentary Alison account and thousands of free courses will be at your fingertips.
      </p>
      <button>Enroll Today</button>
    </div>
    <div class="search-body">
      <div v-for="name in names">{{name}}</div>
      <div v-if="courses.length>0" class="search-body-course">
        <h3 style="position: absolute; top: 5px">There are {{courses.length}} courses</h3>

        <div v-for="course in courses" :key="course.id" style="width: 20%; margin: 25px;">
          <course :course="course"></course>
        </div>
      </div>

      <span v-else> {{error}} </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Course from "./Course.vue";

export default {
  name: "SearchResult",
  components: {Course},
  data(){
    return{
      courses:[],
      error: '',
      state:this.valueSearch,
      categories: {
        "IT": "#0094c9",
        "Health": "#e42330",
        "Language": "#10a650",
        "Business" : "#f49b29",
        "Managements": "#c81a7f",
        "Personal  Development": "#2a0040",
        "Sales & Marketing": "lightgrey",
        "Engineering & Construction" : "black",
        "Teaching & Academics":"#bfd131"
      },
      names:[],
      filterCourses:[]
    }
  },
  watch: {
    valueSearch(newValue, old){
      this.searchCourse()
    }
  },
  computed: {
    valueSearch() {
      return this.$route.query.search;
    }
  },
  mounted() {
    this.searchCourse()
  },
  methods:{
    searchCourse(){
        axios.post('/find-search-course', {search:this.valueSearch}).then(resp=>{
          if(resp.data.message){
            this.courses=[]
            this.error = resp.data.message
          }
          resp.data.forEach((course) => {
            course.category.color = this.categories[course.category.name]
          })
          this.courses=resp.data
          this.names = resp.data.name

          this.$route.query.search=''
        }).catch( e =>{
          this.courses = []
          this.error = e.data.message
        })
    },
  }
}
</script>


<style scoped>
.links{
  display: flex;
  align-items: center;
}
.links a{
  margin: 0 5px;
}
.search-body{
  background: white;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 25px auto;
  box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);
  padding: 20px 18px;
  position: relative;
}
.search-body-course{
  /*background: white;*/
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  /*margin: 25px auto;*/
  /*box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);*/
  padding: 20px 18px;
  position: relative;
}
.search-header{
  background: white;
  padding: 20px;
  width: 90%;
  margin: 40px auto 10px;
  text-align: left;
  box-shadow: 0 2px 6px 0 rgb(50 50 50 / 40%);
  height: auto;
}
.search-header button{
  background: #0091c7;
  color:white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  max-width: 145px;
  padding: 10px 20px;
  transition: background .3s ease;
}
.header-title{
  display: flex;

}
.ic{
  border-radius: 50%;
  font-size: 16px;
  margin-right: 8px;
}
.search-bar{
  background-color: #f3f6f7;
  min-height: 200px;
  padding-top: 20px;
}
</style>
