<template>
  <div class="header-inner clearfix">
    <div class="header-left">
      <div class="top-bar-wrap">
        <div class="logo-container">
          <a href="/" id="alison_logo" class="logo"><img src="/wp-content/themes/Divi-child/img/blog-header-logo.png" alt="Free Online Courses, Classes and Tutorials" width="" height=""></a>
        </div>
        <div class="right-menu side-menu">
          <div class="login-links">
            <a href="https://alison.com/login" class="link login-button login-mobile">
              <span class="login-msg">Hello, Log in </span><span class="icon-nb-dashboard"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="off-canvas-nav">
        <div class="inner-canvas">
          <ul>
            <a href="https://alison.com/courses/categories" title="Course Categories"><li><span class="icon-nb-categories"></span> Course Categories</li></a>
            <a href="https://alison.com/career-guide" title="Career guide"><li><span class="icon-nb-career"></span> Career guide</li></a>
            <a href="https://alison.com/faqs/search" title="Help"><li><span class="icon-nb-help"></span> Help</li></a>
          </ul>
        </div>
      </div>
    </div>

    <div class="quick-menu-container">
      <ul class="clearfix slide-on-scroll">
        <li>
          <a class="open-menu" data-open="categories-container" href="https://alison.com/courses/categories" title="Course Categories">
            <span>Course Categories</span>
            <span class="icon-chevron-down"></span>
          </a>
        </li>
        <li>
          <a class="open-menu" data-open="course-menu-container" href="https://alison.com/courses" title="Course Types">
            <span>Course Types</span>
            <span class="icon-chevron-down"></span>
          </a>
        </li>
        <li>
          <a class="open-menu" data-open="careers-menu-container" id="career_guide" href="https://alison.com/career-guide" title="Career Guide">
            <span>Career Guide</span>
            <span class="icon-chevron-down"></span>
          </a>
        </li>
        <li>
          <a class="open-menu" data-open="hubs-container" href="javascript:void(0);" title="Hubs">
            <span>Hubs</span>
            <span class="icon-chevron-down"></span>
          </a>
        </li>
      </ul>
      <div class="wide-dd-container categories-container dd-menu hovered" style="display: none;">
        <div class="wide-dd-container-inner">
          <ul>
            <li class="it">
              <a id="categories_tile_1" href="https://alison.com/courses/it" title="IT">
                <span class="icon-category-it"></span><br>
                <span class="check-label">IT</span>
              </a>
            </li>
            <li class="language">
              <a id="categories_tile_2" href="https://alison.com/courses/language" title="Language">
                <span class="icon-category-language"></span><br>
                <span class="check-label">Language</span>
              </a>
            </li>
            <li class="science">
              <a id="categories_tile_3" href="https://alison.com/courses/science" title="Science">
                <span class="icon-category-science"></span><br>
                <span class="check-label">Science</span>
              </a>
            </li>
            <li class="health">
              <a id="categories_tile_4" href="https://alison.com/courses/health" title="Health">
                <span class="icon-category-health"></span><br>
                <span class="check-label">Health</span>
              </a>
            </li>
            <li class="humanities">
              <a id="categories_tile_5" href="https://alison.com/courses/humanities" title="Humanities">
                <span class="icon-category-humanities"></span><br>
                <span class="check-label">Humanities</span>
              </a>
            </li>
            <li class="business">
              <a id="categories_tile_6" href="https://alison.com/courses/business" title="Business">
                <span class="icon-category-business"></span><br>
                <span class="check-label">Business</span>
              </a>
            </li>
            <li class="math">
              <a id="categories_tile_7" href="https://alison.com/courses/math" title="Math">
                <span class="icon-category-math"></span><br>
                <span class="check-label">Math</span>
              </a>
            </li>
            <li class="marketing">
              <a id="categories_tile_8" href="https://alison.com/courses/marketing" title="Marketing">
                <span class="icon-category-marketing"></span><br>
                <span class="check-label">Marketing</span>
              </a>
            </li>
            <li class="lifestyle">
              <a id="categories_tile_9" href="https://alison.com/courses/lifestyle" title="Lifestyle">
                <span class="icon-category-lifestyle"></span><br>
                <span class="check-label">Lifestyle</span>
              </a>
            </li>
            <li class="All Categories">
              <a id="categories_tile_10" href="https://alison.com/courses/categories" title="All Categories">
                <span class="icon-search-bar-categories"></span><br>
                <span class="check-label">All Categories</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="wide-dd-container careers-menu-container dd-menu">
        <div class="wide-dd-container-inner">
          <ul>
            <li class="get_career">
              <a class="wide" href="https://alison.com/life-stages" title="Get Career Skills and Guidance">
                <span class="icon-skills-and-guidance"></span><br>
                <span>Get Career Skills<br> and Guidance</span>
              </a>
            </li>
            <li class="find_courses">
              <a class="wide" href="https://alison.com/career-guide" title="Find Courses for Specific Jobs">
                <span class="icon-specific-jobs"></span><br>
                <span>Find Courses<br> for Specific Jobs</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="wide-dd-container hubs-container dd-menu">
        <div class="wide-dd-container-inner">
          <ul>
            <li class="english-hub">
              <a id="hub_tile_1" class="wide" href="https://alison.com/learn-english" title="English Hub">
                <span class="icon-hp-english-hub"></span><br>
                <span>English Hub</span>
              </a>
            </li>
            <li class="healthcare-hub">
              <a id="hub_tile_2" class="wide" href="https://alison.com/learn-healthcare" title="Healthcare Hub">
                <span class="icon-hp-healthcare-hub"></span><br>
                <span>Healthcare Hub</span>
              </a>
            </li>
            <li class="project-management-hub">
              <a id="hub_tile_3" class="wide" href="https://alison.com/learn-project-management" title="Project Management Hub">
                <span class="icon-hp-project-man-hub"></span><br>
                <span>Project Management Hub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div class="wide-dd-container shop-menu-container dd-menu">
        <div class="wide-dd-container-inner">
          <ul>
            <li class="active" data-tab="shop-certificates">
              <a id="shop_tile_1" href="https://alison.com/shop" title="Certification">
                <span class="icon-certificate"></span><br>
                <span>Certification</span>
              </a>
            </li>
            <li data-tab="shop-tshirts">
              <a id="shop_tile_2" href="https://alison.com/shop?shop-tshirts" title="T-Shirts">
                <span class="icon-tshirt"></span><br>
                <span>T-Shirts</span>
              </a>
            </li>
            <li data-tab="shop-attestation">
              <a id="shop_tile_3" href="https://alison.com/shop?shop-attestation" title="Attestations">
                <span class="icon-flashTesting"></span><br>
                <span>Attestations</span>
              </a>
            </li>
            <li data-tab="shop-adsfree">
              <a id="shop_tile_4" href="https://alison.com/shop?shop-premium" title="Premium">
                <span class="icon-upgrade"></span><br>
                <span>Premium</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="wide-dd-container course-menu-container dd-menu">
        <div class="wide-dd-container-inner">
          <ul>
            <li>
              <a id="courses_tile_3" href="https://alison.com/certificate-courses" title="Certificate Courses">
                <span class="icon-certificate"></span><br>
                <span>Certificate Courses</span>
              </a>
            </li>
            <li>
              <a id="courses_tile_4" href="https://alison.com/diploma-courses" title="Diploma Courses">
                <span class="icon-diploma-label"></span><br>
                <span>Diploma Courses</span>
              </a>
            </li>
            <li>
              <a id="courses_tile_5" href="https://alison.com/learning-paths" title="Learning Paths">
                <span class="icon-hp-learning-path"></span><br>
                <span>Learning Paths</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="header-right not-logged-in">
      <div class="login-links">
        <a href="https://alison.com/register" class="link btn btn-large btn-blue">
          Sign Up </a>
        <a href="https://alison.com/login" class="link login-button">
          <span class="text">Log In</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogNavbar"
}
</script>

<style scoped>

</style>
