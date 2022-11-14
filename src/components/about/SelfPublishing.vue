<template>
  <div class="publish">
    <div class="block">
      <h2>Become an Alison Self-Publisher</h2>
      <p>If you are a subject matter expert or a skilled professional who wants to create and publish online courses, then you’ve come to the right place. Share your knowledge with a global audience and earn an income through our shared revenue offering. Join our community of self-publishers today!</p>
      <div class="publish-block">
        <div class="img-block">
          <img src="https://cdn01.alison-static.net/public/html/site/img/generic/self_publishing_01.jpg" width="60%">
        </div>
        <div class="img-block links">
          <button class="publish-btn">SIGN UP NOW</button>
          <a class="icons" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Falison.com%252Ftag%252Fquality-control%253Futm_campaign%253Dsocial_share%2526utm_source%253DFacebook%2526utm_medium%253Dsocial&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU" target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fiFSbJ82evUsho5inxkrml_P2-Ft5PEgb4IBKBcwvw&s" width="30px">
          </a>
          <a class="icons" href="https://twitter.com/intent/tweet?url=https://alison.com/tag/quality-control%3Futm_campaign=social_share%26utm_source=Twitter%26utm_medium=social" target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqSlbRtjTDdx0MpgoVwtpF3WBQkACSh9HmA&usqp=CAU" width="30px">
          </a>
          <a  id="linkedin-share" class="btn-linkedin share-link icons" href="https://www.linkedin.com/shareArticle?url=https://alison.com/tag/quality-control%3futm_campaign=social_share%26utm_source=LinkedIn%26utm_medium=social&amp;mini=true" target="_blank" rel="nofollow">
            <img src="data:image/png;base64,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" width="30px">
          </a>
          <a  id="whatsapp-share" class="btn-whatsapp share-link icons" href="https://api.whatsapp.com/send?text=Look at what I've found on Alison: https://alison.com/tag/quality-control%3Futm_campaign=social_share%26utm_source=WhatsApp%26utm_medium=social" data-action="share/whatsapp/share" target="_blank" rel="nofollow">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEUNnxb////8/Pz9/f0AmAAAmgAAoQAAngAAlAAAlwAAogAAnAAApAD//f8KoBT+//7y+vPm9Of5/fn1+/Xe8uDl8+a+4sDs9+1zwnfZ8NsAog+y3LQnqi9ct2DM6s6f1KKO0JK64byZ1p2o16rK68zR69IYnxwupDFKsE6Fyog+qUFnvWt6xn5RsVSo26uN0ZBjwmhIt083sD42szwYrCAqpzCY0Jtpu2xLuFKOy5F6zH2i26ZXu1w1rzopsjFvvnMjvtPTAAAVXUlEQVR4nOWdaXuyvBKAzSMBFAyKCgru+1br1t3a//+vTrCLYWcCtr7XmY9dIDeZZGaSySSHripa1azUx8b6/nWz3bUmuU+ZtN63m9f5ut+p182yft0m5K73aLNpDF+W25MlSZJYFC1Cct9CiGUVRVGS1NNuM+/2x5XrNeNKhNpo0JjtD0VJomAXMq/Q31H+4uG0feoZ1es0JXvCamV8v1UltWiFk/lRRVWU9q+dSjnz9mRMqI/txt7RyORwF0pLlE7LYSdjyEwJK2/tvSpx4X1BEql4mg2aWTYqM8Jqfb0X1RR0P6Ko0mHQzKwnMyI0jcaJTzcDxRIPGzuj+TUTwnLv+SBlhncWIh22q0wY0xPq4yXVzkzxviBV8WikV9a0hFXjVRWz7T6GURQ3tvm3hKPj4Wp8Z0bp8Gxrf0aoG7urqKdbLLU1TKOrKQg7r7/Ad2YUN33+fuQmLL+erqqfLqHGo/bLhJWBqP4a35lRXXEychFqo+3v8uWceXXf54o+eAjLq4P0y3yOWHyqCifU+6r6B3yOFMU3eDeCCWur4u/MoEFC1E3n2oSd9+Jvj0CXFE/2VQnN+a/PMF6h3QgbjSDC2vHPAamI+/G1CEe7v5hC/SKdhlch1Oe/5KTFCxE3yefUxITmKuMYN5VIyQdjUkLzWPxrKpcUd0kHY0LCpnpbgE7AkTDeSEZotG5lCF6EHNaJEBMRDm8Q0PFTexkRam/KDc0xjBBxlWDfKp5Qe8tuHTRrURMgxhP2DjcLSF2419SE2uD31ip4pPga14sxhFr3hnvwLOo8BjGGcH27Y/BLiLpKQ2jfkqcWJmIv0i5GEhqn/wBgnOmPIqztb9HQ+4UcDD7C8s1ES3FCxIhd43BCc3Nrzna4WNs6nFC7/+8AUrMYHhKHEj6Kf91qkEhLKOH4FtacAELEsFXGEMLKNtNZhhBFEQoF+VsKBUFRInKleF5xCgn6gwmrywxX1RRFmUxn7ca892b3jZHRt9e9eaM9m07ob7KjlHbBs00w4SCrnQlBUFp3L0OjaXq9R91sGvZL+0EScEbvEp+SE9YyGYQEy0Jr1ambjsdRKv1zS6lEf6qVK+P7nSILmXSl2k9KaGYxCBU8XQ6chJhS/l+EOJz6urFQlPSvJK2goRhAqPXS66gg3XXHeYQi6b7F0Zrhx6QgpH1rcRlgFQMIx2lDQlLAx7FJey8J3jdktT635LRDUl0nIdQO6XQU42mvAsL7htTsWS6dshLRn1/kJxykc2YKD4/UDYbinaWETLudbmpVl76I30c4ThUTCsLSzPPxfTKWhxM5TQP8gZSXMJWtx/iJt/8ujPrbQ4pu9Nt9L6GdwhQKi6EWxpd3vyZilJbQ+CPFaBS9C+FeQv71eywva4Et/4TTa53++o3K2qYeTiQn0vtKgbcZvsnGQ8hvCvHUDlDQvOOe1ez59iBd/G5ZxmLrOO/Xzpn5gYzmE+bVJXUZRdh8531ugXZggMIhSjezsIC9Q0ugP7MWH12jFgiJqkOFdzQeRuGE2gunpSByo+prpzOqn6g7Ft5STKOORcOuBuhrCY0mnD6O6PZsXIRNTm8GT2xvG/NIbzpOStwDCRFkfOxX/A4eqiz5BiMRjVDCBl8X4lzH2z6EOnOS2HgLePo49ikrKjf4FNXahRGafJsw+KHjaRx1ThoPoKmCunp+U4qq8wJXi4pGCGGDayLFd545Jo8qPQXcNFIoHMcec1pCa67I0TpWAwnHe56n4UXF0yyts+CbI7D04vtYj1zGn/XdGMJHngVSvGi6G4W0+YTbJcGLN7eqUkSeryW+VgMIazwuN565v3pJqxGZo0nfQuRj0zVr5VGXY0Yl6jiA8I1jIsWk6QEcpnGbHREe1i7Lk0dzjicWlwGEJ7hHShTDBYjQPJd65QwLPZ19aqn8BFdUIpV9hH2OLiS2G7C8TBXbfYs8c2kGMtvwz6b2fIRL+DxT6OnskKFOSOq1pE/BUzdijYAfbD2bHsLxHt6Od5f5Qvoiq7Vd7wyN+vAn/xiMb0L4VhN+qLtaUV9wx3QBD5+4/CT0CEaUvpOJvgjNZ+g8Q3J26sESIXjC9mKpDH46OdVdhE2wS1pYspM6QseMxuC3uC0tqoEVRBy6CMHzDCbslI60ZRo7H/yGGTsK4Hpq7V2EFlRJsUtHtZdMVfRThCXj3VA9BfqCRKowhB3oPIOXVVZH7Wx3O79EXrOd2M8B36G+MYQrYNxEpmP25c3MVfTzLbk++5Y5cChKbe2H0JwBP09hzr66MruCjjqizMzLe5AJVdN984ewcwK+GjNv/qcFuMakIBcUSUm7mSTM03Siav8QdoHDUBiwLx767ATBi5XdLOumsYQ92CcyY/hL5hT2wT6NvkNYBu5V4GmdVZ4Ap7H3fd6jukzXi7hdvsxoUIth7SpfhBVg7ItfLoB5tPLpjtzTUP5T0DjlJKQwVgk1p6CGkmLzi9CAZZES1i1Gtu+7Yhq45L8FbVN24rTCdGIPNhKl3hfhHDYMCytmbPgNMf7QL4B5nrDAJcIj8znrMNfQ2n4R7mAOjTyO6kIyrTGAeVRJGVMJFuP/omfQw0jxk1CHKSneMV2oid6vKvdZQIrYTZlHIjMTN+rAHiaNz4Qd4Ew6ZN649k4klN9DOIZNDz5R7syfTiyZMxCi47hRwjeQy0YmtcsLy3dercGeLszTuCVtXMUsdwFdfCePnxI2QJETnuvMKPRNM9TPynsQOykNBn6qXt44mkA0QrorU8LyHWiiYcOm8pOvC1+0kpcQtdLNNSR3iYWp1kDUlOyalLC2g3wVwiyDoZovaKL8ea9wrVqzInSZkQ9zTg8GJTQOkH/BT5ew1P82Mu0EEEL9Sd87W+xsCtJ56nznkA2aaJi5O4+Izxguan7CkvaS0mAUGDVFIPdEeqSEsMCCMfeo6VMYOrP7CfPIAE0PAS9lTSLI6EsNPaevQOaQ8TDQvU9hFDp3BRBqKSMMpa1d3tqFGB/r2cyVNxBC/HzRF92/NhRMmEdv6QyGa3prQtpL9pUcLCFY6DGv8jsrit8cngl9rg9ULgs2pQpk/44c6rk6KDhULjF3QNx0/th+wBL6SBlgKC8aY4QB8xYRm7k6KFWPXGa1oIibTEZB43D8kHKxUWmXfwhBjhtROjnQej5eXOLRalAGoRJg8UvVtF2YIw+X96IhxPZI/dwIcqhDWf58y1Jg4Ee9Vq/XVoJG5oENZYxUH/KP4iDXh0xNysXtLtWDjFyQ521ksGfDeMOoMwX8o3ifW0MMvvL4M+LROPDTSN6phg7CDNaLmYVTVFsAtK74muuBCIeMsgQ23NlOcQP6XDseEY4XcwGKgq1NDrQMRfrMVBqsfJLuQkTHTHaG8XukpxEu1nNuBYh/CRNuh6W5yGuWsIQOmexpkIu3mEcQH9Da5iB7o465+yEMWZwgi4prrY0ra8sv0k9WRB5BkjLJQw50npnJs0TtkKbjR40lBK4dhTVUKV/evAJ8NNLKHQFuKbttiI4hXxI/uDvRzqQTcYUZH4ChfQ1CZ95jrD5C8yz2T4XaDRHmZMPVieVMDCIv4SQFYaj2KTO3nnYyOO37S33ommkiFnrdmzP5oDgLKsyuM3SmWQIsvstaRL0Hu4wi0nuph6JS5bQWLaA9ZCx+ZJimuPVUn6X1bEROi0/ec68Qe8h6bZGq54kx0u92H3i9th3ML1XYICYy7MJz1/I+MtupepHZ0gN63s/A2KLLBDGRUxRR1m4PvBqSnInlghzfYmHDGT3R2AIUHzIbT6XKLlrxZPcCP9JXQX+P2+Pm2wLHMQovnBEwjQ9hMf7TZUUoLpUO72qeXuxi3/SL207GeWXY9h3f87y4z7uKcQ9bp6ETyM+KkB53SgB7locRsr2pN/hhjM6/Kfd3kefcJMbgg1aixAFsrY3k6sxkGvemwk73BPyVD3dfCd+LjyWEOu1J6Cdj1/hg+zySnauD6nMrjNs2msT9dWHlWeRHWnfKdCMeMIk3SB/NpRAvQvlgRscSsiIsdYBr3sxmJarEz2l0ZvIgolrjp5KJsHI7d0hvLnHgjKtckmpiZziXOGvesH0LfFkR+oca8f6h3NC8a29o/PF5NlFYVj2/o7pqNgJ01eVLwXZmDnXg3pNgMVvAwwTeZmHu241CWmc1EXChVQnaAUCGf8OHzJj4twvxjpy9J+D+IbMdi8wk78Ir3YeI9NrLeztoE+ccMfsUVWgwmrOBEDr7h9A94Dfodqy89SrjWR0RCgQM3GyUGWuIQBlc0kqH7uO7MhWGiT5noR2wuR8uAdscIrMFDMtUOO/jw3IxnFyEn2mt1kr0P3jRCeuwIEJfwqqwZPQGFmqeczFg+TSujKGkW3lYXvsGY5iUkC8Nidl4AmYM5U4jeE6UwmZ9JU6ywKt6QkRkehkUJhMamPX1mRMFzWvbXRyoku7L3Av9t6SaijoP3n9lkyFhqd7SXRWem+hSU9RPPCpwgXZjAkaf5rPefvC2bLh85SZC80u3bB47ICtP2BnxoxHVvAZfZrPaDNgWwVd+KTBHOFdgSgyA1uxxbjlGyLsL7gb0LVIKksZkQQPPAH7lCEPzvN2Z7KCFL0FuNPUIXUXawJd0zA6KGmxV8jvPG5qrz5pEwHT6KYXJqqOFujNa1/v37iMlwHNBP7n6wPMW7F73v7wGTHIm+OGpj4KU1TlD5z2B5zq+BluDoiINeM/MPLhOBUH3BwmWW73zbbgMZclZyWj5jvO7D8kBz3FezsxAzz25TnlQ1YFvEGLBeuqOvssenP3wmn3nr7eECXs8rw5MrbqcewKfXctZzCHgkLSTOFGUyd3q7eti44rdWASttgl2mk95ObuGOtCyJnKPHR2cJd6I4hxSFEXLknBwjVbMJOxxHOdmzh+aM2Aj2UPIUCvsFRJ6vhffMTqa1xMsmrgfzJwhBZ8DFj7Y7PmMT+J/CxZcx9Xjl/Y8IjLngMFnuZlT1vmMMmZ8QnIjBrBUAed0uM5yQ8/jM1+Xo9pBQlkzgzA0QSlc3OfxEWgX0dnNuwzD1BnOwSL3NPbEfxOsKJ6aCrC6GMKKUdKUe5/BQvCKLReFTPgpRsl2EZpH0BYUs0AL9aQSCXE2WBkdDToQH/cIT20T1IWoaat+WVZIe1okUOS5q1QUsuG1Pr31aVATUI6O3UXkqI0TKzg3cJX74prMfDWG0FPyTmT2umP3STnEqaTprj/FUZXCXycKUOvLtU9Sh9rhWClInhpwOk+qf0Ctr+QVhDG7T5JBupNblA93rdcS4iljGlSvLXmA4don8ce/MTvy0YLJ0AOoP/LYWzGo5l7iuonM5kwJuXbmnWhBabWCdzkTCJFnY08xW9hm2s+DAusmJq59KTBJdEztHYyV6d28T7Wj8hS+Ix8l/nLSJfTI9bWCa18mLQSNW4zL9r00RoP22crufFavRshYwsvjFyYvNU+x3pLOeYQ4pH5pwhq0zDDMoydMCJZl69itOfeslL5/XrVb8VWSGSEF3K57C7pzH6+VjnowYbI6wuwBveYUTxZPg7PSe8YPMtqTpIyKMr2v+Ssl621Op15lK3qDa0GTB8ZlGz99lhwPKB+fR/ro5cGfBeUTLCjtYcCFA6jOWe06ohZ0onrezPG1f/90Z+CF3bRSQlrd3ihyIfRmp7OGt+bjckBZdjTmLYoSVc87yXTKLgfHSgkhvX9/t3BudnK3l2DnGqjF8qzh/n9E+pC7ihY7kfoI4/eD2UToREKfWm0aw/nTokUkBWMsCNSuSLnFcj4MKarv+Norfnf31EHhhPF3IxBvcetkPYn0cqVeGxt2t9t7eRwazXqlrIdpOEKjFFUYou9GiPdOWZcNyFlyvSj0Do8SqjUK/IBx91vE3lHiqmUY+P15v8D3A6r2Q5rlydg7SuLumSlEKOn5nrGaloaRKmhcMm20SLtKDCFqRjrgbJkRL51eaXa3kmy9+I13MimhaueYshBh/F1BMRaDWWVzfXlUHg3nO8n5/ERoOVc5JLqPzP0QffRkpVw/Vxvx9z1F39nlKVH+2XnIXK/uHpQf7SLK9CPYzEXxoXWbvyD/95sT3dkVde8ae/L/8xKgcr2zamHHb3H9nSC/P1aCblcJEietdLxKf+sa7cKhHwd2dx6zyub0Xc3otltKcKCEhdbH0ElLiO5K5yuZxmM7LP8ZJEX/nWTQ+w+/VtnOlm08eHK8sYgX0pC43eucr3sKuATxKwXT0fDoxyQW0gq6+Bh0h6XjspXONzh1j5ZMA8BYH0+RZWk37zcrZtX9ebWqWakZj8cD1XDuq508kvwOy9B7SJ0CO+WxPZ+RBFHRj2ABSw93H9RZs/t9wzD6fXvYfflo7yzFfw9UChEbgSxhd8kGRop4Zs/vpgpHs2goQYMJ2lmTyeQcV+Coe6C4RAq5uTr0PuBA18Y3aYKFXKUudg58H/D/wZ3OnPfq/J3A7+WmVvG/hFjcBFjCGEJU3vx3ble3QmaZaEJUVjO9ffyKYolBpj6eENX3/w1E4g+ZEhKiUeu/MKGSQ4C/nZAQ9TO83f1qIvY0fkK0tm4dkajzaIQYQu3t1hHVeWQPxhJSRGCK9C9L8TXUECYkpHHGDfciUV9j2x9PqHVvF1Gdx/VgEkKkrW90RiXiKmYMJiREyOa/y/qKYh28y9v8hMi4QURyWCfowaSEqKneWqRhFfuJAJMSIvN4W4jFbUhIz02IzNUtGUZpEx4u8RIivXcz0RTxXC6eESENNXZcp2MyF+kUGUykIES14y2sT4n7pEMQTojM+Z9rKlGXtfiGchMi1Hn/224UT2GrhlkRotoKfBtkdkLUDUhDuQiR3v8z618sviWfQ/kJESqvDn8xqVqHDWwE8hMibbT99dFIxH0f3oG8hHRSHRR/l7Gorng6kJ+QqurrCVQlLJVIfAqajpAajtdfMo6WuEkYR2RMiHRj9wuMltoacg3ADAipjI4H8H3XECHS4Rlq4rMlRFXjVb0aIxHFje3PAfpdQqqr46V4FWUlqng0yvENuDohlXLv+ZBxfEzVc7vyphlySSaETlpT4yRmt65qiYeNnQlfZoR0QNbXe6qtGUBKqnQY1NKr55dkRuhI5a29V6UUlIRIxdNxELGjC5dMCZ1px27sVT59JZYonZbDTma99ykZE1KpVsb326KoFiGYhP69tH/tVDLGQ9cgPIs2GjRm+0NRojobkQVFf2dJknrYzz56fJFDvFyJ0BGzaQxfltsTZZDEItVcwpBZVlEUKdxpt5l3++OM5s0guSKhI06SZX1srO9fN9td6+dUdOt9u3mdr/udet0sx2+QpZL/AdU4wYkOJn5cAAAAAElFTkSuQmCC" width="30px">
          </a>
          <p>Know other experts? Tell them about Alison self-publishing!</p>
        </div>

      </div>
    </div>
    <div class="difference">
      <h2>Why become an Alison Self-Publisher?</h2>
      <ul>
        <li>
          You can make a difference in the world by sharing your knowledge and expertise with a global audience who are keen to learn.
        </li>
        <li>
          Earn an income by monetizing your skills and experience through our shared revenue offering.
        </li>
        <li>
          Showcase your skills and build your personal brand as an expert in your field.
        </li>
        <li>
          Expand your reach across emerging markets. Over 85% of Alison learners live outside developed economies
        </li>
        <li>
          Use your knowledge and expertise to create and publish courses that will help you earn a passive income for your future.
        </li>
      </ul>
      <img src="https://cdn01.alison-static.net/public/html/site/img/generic/self_publishing_02.jpg" width="350px">

    </div>
    <div class="successful">
      <img src="https://cdn01.alison-static.net/public/html/site/img/generic/sp-extra-01.png" width="350px">
      <h2>How do I become a self-publisher on Alison?</h2>
      <p> It’s easier than you may think! If you have expertise in your field, excellent training material that you have developed and you know how to lead online learners through a fulfilling course, we want to hear from you. Complete the application form and let’s start the self-publishing journey together.</p>
      <h2>What makes a successful self-publisher?</h2>
      <ul>
        <li>Excellent English language writing skills.</li>
        <li>Expert knowledge in a sought-after field.</li>
        <li>The ability to accurately and quickly distill lots of information into a series of modules using text, images and videos.</li>
      </ul>
      <h2>Who does self-publishing suit best?
      </h2>
      <p>Anyone who meets our strict criteria for quality and expertise can be a self-publisher. Many members of our self-publishing education family are:</p>
      <ul>
        <li>Retired, part-time or even full-time lecturers, teachers or researchers.</li>
        <li>Senior professionals with a passion for training, mentoring or teaching.</li>
        <li>Experts who want to find another channel or platform to extend their business.</li>
      </ul>
    </div>
    <div class="difference">
      <img src="https://cdn01.alison-static.net/public/html/site/img/generic/self_publishing_03.jpg" width="350px">
      <h2>Why become an Alison Self-Publisher?</h2>
      <ul>
        <li>
          The more in demand your topic, the more learners you will attract to your course.
        </li>
        <li>
          The higher learners rank your course, the more income you are likely to generate. Learners want courses that are high quality, relevant, interesting, useful, accurate and up-to-date.
        </li>
        <li>
          he more teaching collateral you include – such as well-produced videos, webinars, imagery, downloadable PDFs – the more engagement you will have.
        </li>
        <li>
          Our most profitable self-publishers use their other online accounts to promote their courses. This is something you could do too!
        </li>
      </ul>

    </div>
    <div class="successful">
      <img src="https://cdn01.alison-static.net/public/html/site/img/generic/sp-extra-02.png" width="350px">
      <h2>What support do you we offer Self-Publishers?</h2>
      <p>We are committed to partnering with you every step of the way. We run regular webinars for self-publishers, where you can connect with an Alison Trainer and ask all your questions. Once you have submitted a test course, you will be assigned a publishing account manager who will guide you through the process of publishing your first course.</p>
      <p>Once your course is published, then the marketing magic will kick in. We will promote your course with paid advertising on social media and search. We have an extensive global community of over 19 million learners, and we will use email marketing to reach them.</p>
      <p>Your personalised digital dashboard will help you track how your course enrolments are progressing and give you insights on your learners’ location and their devices</p>
      <h2>What self-publishing courses are most in-demand by online learners?</h2>
      <ul>
        <li>Full-Stack Development, Mobile App Development, Cloud Computing</li>
        <li>UX Design, Game Design, Distributed Computing</li>
        <li>Data Science, Artificial Intelligence, Blockchain Technology</li>
        <li>Business analysis, Crop Produce Analysis, Infrastructure Development</li>
        <li>Video Production, Creative Writing, Email Marketing, Affiliate Marketing</li>
        <li>Sport Therapy, Personal Care</li>
      </ul>
      <h2>What does the Qualified Alison Publishing training programme offer?</h2>
      <p>Alison developed a training programme to create entrepreneurial opportunity for those who would like to build and publish online courses. Your journey to becoming a fully Qualified Alison Publisher happens in three stages.</p>
      <ul>
        <li>Level 1 is achieved once your application is submitted and you have successfully completed the required training courses.</li>
        <li>Level 2 is when your work meets strict quality standards and you create and publish your first course on the Alison website.</li>
        <li>Level 3 is when you publish four or more high-quality courses on the Alison website.</li>
      </ul>
      <div class="successful-footer">
        <button class="btn-apply"> Apply Now</button>
        <button class="btn-free"> Free Webinar</button>
        <div class="links">
          <a class="icons" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Falison.com%252Ftag%252Fquality-control%253Futm_campaign%253Dsocial_share%2526utm_source%253DFacebook%2526utm_medium%253Dsocial&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU" target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fiFSbJ82evUsho5inxkrml_P2-Ft5PEgb4IBKBcwvw&s" width="30px">
          </a>
          <a class="icons" href="https://twitter.com/intent/tweet?url=https://alison.com/tag/quality-control%3Futm_campaign=social_share%26utm_source=Twitter%26utm_medium=social" target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqSlbRtjTDdx0MpgoVwtpF3WBQkACSh9HmA&usqp=CAU" width="30px">
          </a>
          <a  id="linkedin-share" class="btn-linkedin share-link icons" href="https://www.linkedin.com/shareArticle?url=https://alison.com/tag/quality-control%3futm_campaign=social_share%26utm_source=LinkedIn%26utm_medium=social&amp;mini=true" target="_blank" rel="nofollow">
            <img src="data:image/png;base64,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" width="30px">
          </a>
          <a  id="whatsapp-share" class="btn-whatsapp share-link icons" href="https://api.whatsapp.com/send?text=Look at what I've found on Alison: https://alison.com/tag/quality-control%3Futm_campaign=social_share%26utm_source=WhatsApp%26utm_medium=social" data-action="share/whatsapp/share" target="_blank" rel="nofollow">
            <img src="data:image/png;base64,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" width="30px">
          </a>
        </div>
      </div>
    </div>
    <div class="difference-question">
      <h2>Steps to start earning as a Self-Publisher</h2>
      <div v-for="(publisher, index) in publishers" :key="index" class="question-block" @click="show(index)">
        <div class="question-block-title">
          <h5>{{publisher.title}}</h5>
          <b-icon icon="chevron-down" v-if="index !==id" variant="success" class="font-18"></b-icon>
          <b-icon icon="chevron-up" v-else></b-icon>
        </div>
        <div class="question-block-answer" :class="{ 'active': (index === id)}">
          <p>{{publisher.description}}</p>
        </div>
      </div>
      <div class="difference-question-links">
        <button class="btn-apply"> Apply Now</button>
        <button class="btn-free"> Free Webinar</button> <br>
        <a class="icons" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Falison.com%252Ftag%252Fquality-control%253Futm_campaign%253Dsocial_share%2526utm_source%253DFacebook%2526utm_medium%253Dsocial&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fiFSbJ82evUsho5inxkrml_P2-Ft5PEgb4IBKBcwvw&s" width="30px">
        </a>
        <a class="icons" href="https://twitter.com/intent/tweet?url=https://alison.com/tag/quality-control%3Futm_campaign=social_share%26utm_source=Twitter%26utm_medium=social" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqSlbRtjTDdx0MpgoVwtpF3WBQkACSh9HmA&usqp=CAU" width="30px">
        </a>
        <a  id="linkedin-share" class="btn-linkedin share-link icons" href="https://www.linkedin.com/shareArticle?url=https://alison.com/tag/quality-control%3futm_campaign=social_share%26utm_source=LinkedIn%26utm_medium=social&amp;mini=true" target="_blank" rel="nofollow">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAfrv///8AebkAc7YAfLoAd7ju9fmGtdYmiMCCstUAcbWuy+Lz+PsAdbcAeLj7/f50qtGlxt9Wm8lkoczn8Pfe6vPS4u/Q4e5Fk8XA1+nH3OuRu9lOl8cMgbx8rtO50uY2jcKnyOCawNxtps/hjYWTAAALNElEQVR4nN2da4OqIBCGlcvmYprp2t1q2///Hw92tdSBMQg876fzoU4+KzADzCUIrWtabuLTJCt2q6iqgiCoqmi1K7LJKd6UU/s/H9j8z8vDtogoTTgnhDEWsOAi+S/GCOE8oTQqtofS5kPYIizj/VHQRIIFsCQqp+K4j21h2iAs5wWhnKjYnjgJT9JiboPSNOFsnTGaKt9c99tMKcvWM8NPZJRwGucC9+463qXYxUbXH4OEh53g79DdKSXkwdybNEW4yGhiAu8KmdBsaejJjBDO5lVCjOFdRJJqbuRFGiD82VNuGO8iTvc/HhAucmH69T1ERL5wTLhcCXOzr0tMrN6ckG8RLlbULt+Zka7eeo9vEP7klt/fnVHkbzg7gwmn2Yf4LozZYC9gKOHcuHmARejpo4SLyo59gJRUw6bjEMLZJwfoQ4z+DXEBBhCuyWcH6EOErD9AOCs+YCH6xGiBfo1Ywo2zF3gRIRu7hN9OZmBTTHxbJPw6fn4JbYtHX7YIN0Y2uO+LJZiRiiDcOh+hNzGxtUGYJ67BGkpy44TTyO0a+ioS6TqqmoRl6ssIvYmlmvsNPcKNcA3UFhN6640WYewhoJSITRGe/ASUiDo7Kg3Cra+AElHDaqgJJ9Q1ByA6eZ/Qa0BpGJWIKsKt34DyLaoGqoLQ20XmIdVyAxN6aiaepTAaIKGPhr5DsOmHCMtxAEpEyIEDCKep6n+uAyrUsQgfUAq44QBhBD864zTIs+99EQnuet/BoiGEOfjYTKzi22HCbJNRx4ykf7/YS7iFNryMvtyVzCYOzxhrJb1msY8QXEYZb5/Muj6l6l1Qewi/oEOnnv31t9NjDsZ7TuB6CKFVhhx7/lrgwLYu1vNY3YTfwIgD1q2904HKu4+KOwnBSUiB89ij0+Wmeyp2Ec6gwC3+2w8Yfjn1ghjRJSwA4wbZVqmt0g+yKVLoEa6hLSE/gIQzt9tJ2nG/2CYEx2j3QGgoc+rcMNK+XmwT/kHPSFRXW0u3Z/8kUxMuwHHW4cy8yPGph2iFM7QIK3DBh0zFRSu3/imrVIRz2GgnKkDHE1GOsjlMOIWnUfsv1NLW9V4xeXGaXwhVbwC2hmdC1xfhr4vNM+GPyicZwTsMxHPY7TNhrlomuJLQ9TyUU+l5v/9EuFC6ld6vpbWeLUaAezquvJX04LafrfoIl2prTVQXIQsPCAPaDJxuEmoMMMYUhN/Op2Hw8hIbhOpZKKUK1nFtKy5qzsQGoXIhrdV3GnLVyen+8K7mcvogVNrCixJogzj15baxYRMfhHu9GcRevaKmdu5NxUVk3ybU3p0D49S5x/YQvW+F74SKTUVDZNcD+OvRbdxji3EnrPS/na46Q5H9ikqpXglRlpoE7cSAqVexi3JFXLwQgqczbYm/Fwf10xkmSt03UVdC9CkgEcUjJ7mcEE/Chxuiz4QH/BBjnB6zyXa733H6VnazJd0M95VwmCFjhKTER7pabNcknHq1DBqSmDYIY39MtTnxuEGo5XSPTVf3+0w4+x8HqRymszvh+n8cpLcriDOh+/MxK7oY/TOhD4FbD52r85iIJrscudSEpS/71nOZGsFWRSZV7KKEJsMKwVxFyyvh3JOjB0LJX7xo7lu+lvM/MtzjTedXwgL1Z2IcUMev9H/4+Wc5/+5OZS631cCQMlZcCVEZPyyP+3VojYZ03v/phhVmvIIifZfDihswfiHETUP4TLhlWClwqjO5D7+UwQEQ8iHzITa7nogB1mXDEgIXHffTY6HOmgjDTYVfLmrHLdA+ZLNGSCrNLLQMvebXR24BNlTLOCEiWfKAnY31uWDQ8VQfJdQaoTeh731ETYi094YJxWtgAawSeVoil5ogPODcbrOE4hcFiM6QSA6SEHnxbpSwPzq7V2sUItlKQpxHY5Qw+UMDSiuKGXPSqwlUaRU2CdWRHV3CPDCLJCHSyBgkzIZVf0JNRRoG2Cs/g4RDy1thXBQ6DUqkiTFIOFQzxCMnZbBBntF4QIiJteabAHtU6gMhYmbxODghd9A+ECJuysgpmIyRUCO26f64QYZ0170g1D8dZFmAdGk8IdQOvWJFgL1X84Nwo2sw2C5Y4QA9IdS/s14FSLfUE0LtMFYWBYgoE6uEP5v4tD39rjUrB2tPxMoPwsU+oJynaco5DSY6kNr7diyfFcLlsRnqwIjI1MURse60U8J2rVDClNsOi1GQpglnxy43mioR9d1p1/Owpw4cV5Vji7T5HBMWPRuh53j7Dul6KpVje9ifr5oo8gA1vU1pD936NP0etCLhWDv2YOXWL/0F1vwErjavG7S9c7u3gJaLjoTXpjSdGrm3cLk/BK9MWGqEMHO6x4cvFBLQJmoSyj2+y3MaeIPAwRpemoT85PSsDfa84Mx4XcLY5XmpwntmfVkPKMKNyzNvVcAgeHGjSZiULu8tfhWEYGq8JiGdurx7UiW6CROETu8PVYaKQhthPcLz/aG7O2AlIbSD0iQsHN/jWyc83+Mjk0nGRXiOxXAbT2OZ8BxP4zgmyjKhD3FtNgmvcW2uYxMtEl5jE93Hl1ojvMaX2o0Rdkp4jRHGxXmPifAW543zakZFeIvVR+VbjInwnm+BmohjIrznzKDynkZE+Mh7QuWujYiwkbuGyT8cEWEj/xCTQzoiwkYOKSYPeDyEzTxgjOM2HsKnXG5EPv54CJ/y8RE1FUZD+FxTAXGUMRrCl7oY+nFioyF8qW2iH3U7FsLX+jT6WWFjIWzVGNKuEzUWwladKO1aXyMh7Kj1pbvWjISwo16b7pHbOAi7au7p1k0cB2Fn3URN93sUhN21L/Xql46DsKd+qV50+BgI+2rQ6uXajIGQNkuIIGtBj4Kwvxa01kwcASFQz1tnOfWfEKrJrmMT/ScE6+prnJx6Twj3RlD1txgDoaK/RXhSIfpOqOpRouoz4z1hOwC+3StIsdh4TqjRK0i12PhNSNq1RJA9uzwn1OvZBfdd85tQr+8a3DvPa0Ld3nnwOPWYkLGugNTOHpZLYD3FEgJRsMr4UuiXOr4sOvOI0H1IWRUBan8e+LDK9ELf7fgypg8pGM3HACE/rwDE/RaulyzcD9hLsQTXDxhuJ+ujsD2dXbcvRgvfl1vVW90zDemtjquL5lhQSi1AOPWjgLKOUsA3AAixVRjdSUC5mBDhWBbU3mVUTRjGY0AUYK6pgjA8+Y8oTjCCgjDcelORvkdUVQJVRRhO/EakyjLESkK/EdWAGoSedRt7ktCo0qtB6O9yo1pktAl9NRoKM4Eh9NP0w4YeSRiWqMyhT4ilmkV6NQnDaU89J1cikaqQFJZQ7hd92hIj2g3oE0qr4ctIZTpWYgBhuPHkeIqp2i4PJgy/jj409+JHVD1NFGEYfjsfqUyAZWveJgyXzO2aSghmhA4hDGfFwOZLJsRooS6L+S5hGK6Jq9dIiKIQnyHCcPbnZDYy+od+gQMJw3ARfX5R5VV30zI7hJ/vcEwSXMud9wnDabt0rD0xkem6oeYIw/BnWLu3IXy5ZoVow4RyOq4+YDkYXQ2bgCYIa0bL75GJ9/jeJpSMubC35hCRv8lngFDOx31ix3Zwun9j/hkklC7AvDJuPEhSzYcY+JaMEEotMpqYm5Esodnbw/MqU4RSh1wY2SIzLnaqpp0IGSSUXkCcUw6HNqroCBd5PNi6d8koodRsnTE6rE0xYyll2drI5GvINGGtcl4Q5LuU746mxXxonzJINghrlfH+KGii7q7Najh63Mc26GrZIjyrPGyLiNKE85TUkWg3WnbpLs55QmlUbA+24M6ySnjRtNzEp0lW7FZRVWeMV1W02hXZ5BRvSqNrSrf+AUpnuH2y+6WEAAAAAElFTkSuQmCC" width="30px">
        </a>
        <a  id="whatsapp-share" class="btn-whatsapp share-link icons" href="https://api.whatsapp.com/send?text=Look at what I've found on Alison: https://alison.com/tag/quality-control%3Futm_campaign=social_share%26utm_source=WhatsApp%26utm_medium=social" data-action="share/whatsapp/share" target="_blank" rel="nofollow">
          <img src="data:image/png;base64,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" width="30px">
        </a>
      </div>
    </div>
    <div class="articles">
      <h3>Related Courses and Articles</h3>
      <div class="article-cicle">
        <div v-for="article in articles">
          <img :src="article.img" width="100%">
          <p>{{article.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelfPublishing",
  data(){
    return{
      id: Number,
      publishers:[
        {title:'1. Sign up', description:'Sign up for an Alison account'},
        {title:'2. Complete the Application Form', description:'Tell us about yourself by completing the Self-Publishers application form. Once we have your details we will take you through each step of the publishing journey.'},
        {title:'3. Gain Access to the Publishing Tool', description:'Once you have submitted the publishing application form, you will receive an email with a link to access the Publishing Tool.'},
        {title:'4. Complete the Training Courses', description:'Before you start creating your course, you first need to complete two free training courses. The first training module is E-Learning Theory and Practice and outlines how to create an online course from a pedagogic point of view. You will learn how to structure your course and how to keep the learner engaged through content. The second training module is the Alison Publisher Tool Training Course, and it explains how to use the publishing tool. Each course will take you about 90 minutes to complete.'},
        {title:'5. Build Your Sample Course', description:'When you have completed the steps above, you will receive some content to create a sample course. This will give you a flavour of what publishing is all about. Download this simple step-by-step guide on how to use the publishing tool.'},
        {title:'6. Submit Your Sample Course', description:'You will not receive feedback for this sample course build, but you will be notified by email if your sample course passed our quality standard checklist to progress your application.'},
        {title:'7. Create Your Own Course', description:'If your sample course is approved, you may now begin to create your own course using the skills you have learnt from the self-publisher training process. You will be assigned a Publishing Account Manager (PAM) who will review your course and provide you with feedback to ensure that your course is ready for publishing. Once your course meets the Alison standard, it will be published.'},
        {title:'8. Course Advertising and Marketing', description:'Once your course is published, we will advertise your course to a global audience and to our learner database. There are many activities and tactics available to us to make sure your course gets the attention of as many learners as possible.'},
        {title:'9. Monitor Course Performance', description:'Once your course is published, you will be able to track its performance. We will give you access to a link through which you can review your course’s daily, weekly, monthly, quarterly or annual performance(s). Our standard format of reporting covers the following: number of visitors, active learners, enrols, completes and certificate purchases. We will also give you a record of your advertising and certification revenue which you are entitled to.'},
        {title:'10. Receive Payment', description:'With your initial publishing and marketing work done, you can sit back and earn 24/7 from interested learners who are accessing your course(s) online. It is important to note that it does take up to 24 months before you can earn a regular income. Of course, you can augment your earnings even more by constantly marketing your course to your personal network and by publishing new courses.'},
      ],
      articles:[
        {img:'https://cdn01.alison-static.net/courses/1541/alison_courseware_intro_1541.jpg', title:'First Training Module'},
        {img:'https://cdn01.alison-static.net/public/html/site/img/generic/SP-Image-6.png', title:'Publishing Tool Training Guide'},
        {img:'https://cdn01.alison-static.net/public/html/site/img/generic/course_creator_01.jpg', title:'Become A Course Creator'}
      ]
    }
  },
  methods:{
    show(id){
      if(this.id===id){
        this.id = ''
      } else {
        this.id=id
      }
    }
  }
}
</script>

<style scoped>
.articles{
  width: 93%;
  margin: 0 auto;
  padding: 50px 35px;
  background: white;
}
.articles .article-cicle{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.article-cicle div p{
  background: #f3f6f7;
  padding: 15px;
}
.article-cicle div{
  width: 25%;
  /*display: flex;*/
}
.articles img{
  width: 100%;
  display: block;
}
.difference-question-links a{
  margin: 5px;
}
.difference-question-links button{
  margin: 25px;
}
.difference-question-links{
  background: #dcdcdc;
  padding: 15px;
  width: calc(100% + 30px);
  transform: translateX(-15px);
}
.question-block-answer.active {
  display: block;
  height: fit-content;
}
.question-block-title{
  border: 1px solid #dcdcdc;;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.question-block-answer{
  border: 1px solid #dcdcdc;
  padding: 10px 20px;
  display: none;
  height: 0;
  transition: all 1s ease;

}
.question-block{
  width: 90%;
  background: #f3f6f7 0 0 no-repeat padding-box;
  /*border: 1px solid #dcdcdc;*/
  margin: 15px auto;
  text-align: left;
  /*padding:  0 15px;*/
}
.difference-question{
  background: white;
  padding: 15px 15px 0 15px;
  margin: 25px 50px;
  box-shadow: 0 3px 6px #d0d0d8
}
.btn-apply{
  background: #0091c7;
  color: #fff;
  border: 1px solid #0091c7;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background .3s ease;
}
.btn-apply:hover{
  background: white;
  color: #0091c7;
  border: 1px solid #0091c7;
}
.btn-free{
  border: 1px solid #83c11f;
  color: #83c11f;
  background: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background .3s ease;

}
.links {
  padding: 50px;
}
.btn-free:hover{
  border: 1px solid #83c11f;
  color: white;
  background: #83c11f;
}
.successful p{
  text-align: left;
}
.successful ul{
  text-align: left;
  list-style: none;

}
.successful ul li {
  line-height: 3em;
  list-style-image: url(https://cdn01.alison-static.net/public/html/site/img/generic/generic-thick.png);
  margin-left: 25px!important;
  text-align: left ;
}
.successful h2{
  text-align: left;
  color: #1c232e;
  font-size: 1.25em;
  font-weight: 500;
  margin-bottom: 10px
}
.successful{
  background: white;
  margin: 25px 50px;
  padding: 25px 25px 0 25px;
  box-shadow: 0 3px 6px #d0d0d8
}
.successful img{
  float: left;
  padding-bottom: 25px;
  padding-right: 50px;
  /*margin: 15px 25px 5px 25px;*/
}
.difference ul li {
  line-height: 3rem;
  list-style-image: url(https://cdn01.alison-static.net/public/html/site/img/generic/generic-thick.png);
  margin-left: 25px!important;
  text-align: left ;
}
.difference ul{
  display: inline-block;
  list-style: none;
  text-align: left;

}
.difference h2{
  color: #1c232e;
  font-size: 22px;
  font-weight: 600;
  margin: 25px;
  text-align: left;
}
.difference img{
  float: right;
  padding-bottom: 25px;
  padding-left: 50px;
  /*margin: 25px;*/
}
.difference{
  background: white;
  margin: 25px 50px;
  box-shadow: 0 3px 6px #d0d0d8
}
.block{
  background: white;
  width: calc(100% + 50px);
  margin: 0 !important;
  padding: 20px;
}
.publish{
  /*padding: 50px;*/
  background: #f3f6f7;
  padding: 0 0  25px 0;
}
.successful-footer{
  background: #f3f6f7;
  width: calc(100% + 50px);
  transform: translateX(-25px);
  padding: 50px;
}
.publish-block{
  width: 100%;
  display: flex;
}
.publish-btn{
  display: block;
  border: 1px solid #83c11f;
  text-shadow: none;
  background-color: #83c11f;
  color: #fff;
  font-weight: 700;
  max-width: 190px;
  padding: 5px 10px;
  margin: 20px 0;
  border-radius: 5px;
}
.img-block{
  width: 50%;
}
.icons{
  margin: 15px 0;
}
.links p{
  margin-top: 70px;
}
.links{
  text-align: left;
}

</style>
