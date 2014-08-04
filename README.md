## justPlay - play more, plan less

justPlay is a web application that enables students to play more and plan less. We believe that there are often too many obstacles to simply play a game that requires multiple human beings to participate (Badminton, Basketball, Table Tennis, Tennis etc...). justPlay attempts to take the pain out of organizing and finding others to play with by providing an intelligent match making system that groups people together based on their availability and preferences.

More to come :)

<h3> Frontend build guide </h3>
<p> Make sure you have bower installed, go to public and type bower install</p>

<h3> Backend Update Guide </h3>
<p> first time install -> php artisan migrate --package=cartalyst/sentry </p>
<p> Every time an update has been made in the backend, run these commands </p>
<ol>
  <li> php artisan migrate --package=cartalyst/sentry </li>
  <li> Install Laravel: "composer install" </li>
  <li> Install Laravel: "composer update" </li>
  <li> Migrate your database: "php artisan migrate" </li>
  <li> Seed your database: "php artisan db:seed" </li>
  <li> dump-autload -o </li>
</ol>

<h3> API </h3>
<ul>
  <li> php artisan serve </li>
  <li> localhost:8000/api-docs </li>
</ul>
