<?php

$title = 'Chinook Tours Alaska';
$body_id = 'home';
$path = '';

include('includes/head.php');

?>

<header id="top" data-lax-container>
  <div class="bgs" data-lax="scale:1.1,y:300">
    <div data-bg="0"></div>
    <div data-bg="1"></div>
    <div data-bg="2"></div>
    <div data-bg="3"></div>
    <div data-bg="4"></div>
    <div data-bg="5"></div>
  </div>
  <div class="content" data-lax="y:100">
    <img src="assets/images/ct-logo.svg" width="480" alt="Chinook Tours Alaska">
    <div>
      <h1>Find your <br><em>Alaskan</em> adventure</h1>
      <p><span>Come and see why Chinook Tours offers a unique Alaskan experience.</span></p>
    </div>
    <div>
    </div>
  </div>
</header>

<?php if ($lang=='en'){ ?>
<?php } else { ?>
<?php } ?>

<article id="accommodations" class="article-right">
  <div class="content">
    <div data-lax-class=".90" class="copy lax-fadein">

      <?php if ($lang=='en'){ ?>
        <h2>Accommodations</h2>
        <p>Let us know your preference what you looking for, budget or nice and unique accommodations, B&B’s were possible or lodge away from it all. In general, the more remote the more expensive, as it cost a lot to build, maintain, bring supplies out there and also the journey to get there will cost you more.</p>
        <a class="btn" href="accommodations.php"><strong>Learn More</strong></a>
      <?php } else { ?>
        <h2>Unterkünfte</h2>
        <p>Erfahren Sie mehr:<br>
        Entsprechend Ihren Vorlieben suchen wir für Sie die passenden Unterkünfte: Wollen Sie eine gute und günstige Bleibe oder eine aussergewöhnliche Unterkunft im höheren Preissegment? Eine Bed & Breakfast (B&B)-Option oder eine Lodge inmitten der Wildnis? Allgemein lässt sich sagen, dass eine Unterkunft mit zunehmender Distanz von der Zivilisation aufgrund der höheren Bau- und Unterhaltskosten teurer wird. Hinzu kommen die höheren Transportkosten, um an diese abgelegenen Orte zu kommen.</p>
        <a class="btn" href="accommodations.php?de"><strong>Erfahre mehr</strong></a>
        <p>Unterkünfte in der Stadt – Je nach Reiseroute bietet sich eine Unterkunft in der Stadt (im Stadtzentrum) oder in Flughafennähe an.</p>
      <?php } ?>

      <p>&nbsp;</p>
    </div>
    <div class="thumbs">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-accommodations-0.jpg" width="300">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-accommodations-1.jpg" width="300">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-accommodations-2.jpg" width="300">
    </div>
    <br>
  </div>
</article>

<article id="transportation" data-lax-container>
  <div data-bg="0" data-lax="y:-150"></div>
  <div class="content">
    <div data-lax-class=".90" class="copy copy-wide lax-fadein">
      <?php if ($lang=='en'){ ?>
        <h2>Wildlife viewing</h2>
        <p>Wildlife viewing & photography is growing in popularity. We can recommend you great places and season to view the wild animals in the Northwest. Many Lodges and Cruises offer fantastic viewing opportunities, but also along the road there are places that offer good chances to see animals.</p>
        <a class="btn" href="transportation.php"><strong>Learn More</strong></a>
        <p>Bird migration in the spring: Cordova & Homer are just two places that birds will stop in May on the way to there northern nesting grounds.</p>
        <p>In November more than 3500 bald eagles gather in the Chilkat Valley near Haines, AK. Brown Bears & Black Bears are easiest to photograph along the coast, while grazing, clamming and fishing from June till September. Polar Bears are seen along the North Slope around September / October. Of course there are much more like Moose, Caribou if you are lucky Wolf & Lynx and if you don’t mind travel quite remote even Walrus.</p>
      <?php } else { ?>
        <h2>Tierbeobachtung</h2>
        <p>Tierbeobachtung und Tierphotographie erfreuen sich zunehmender Beliebtheit. Wir können Ihnen besonders gute Tierbeobachtungsorte empfehlen, insbesondere im Nordwesten Alaskas. Viele abgelegenere Unterkünfte (Lodges) und auch die Kreuzfahrten eignen sich besonders für die Tierbeobachtung. Aber auch entlang Alaskas` Strassen sind die Chancen, Tiere in freier Wildbahn anzutreffen, sehr gut.</p>
        <a class="btn" href="transportation.php?de"><strong>Erfahre mehr</strong></a>
        <p>Wanderungen der Zugvögel im Frühling: Cordova und Homer sind zwei ausgezeichnete Orte, um Zugvögel auf ihrer Reise in den hohen Norden zu beobachten.</p>
        <p>Im November versammeln sich mehr als 3500 Weisskopfseeadler im Chilkat Tal in der Nähe von Haines, Alaska.</p>
        <p>Weidende und fischende Braun- und Schwarzbären kann man am besten von Juni bis September entlang der Küste beobachten. Im September und Oktober stehen die Chancen nicht schlecht, um an der Nordküste Alaskas Eisbären beobachten zu können.</p>
        <p>Elche und Karibus sind keine Seltenheit, im Gegensatz dazu braucht es für die Beobachtung von Wölfen und Luchsen mehr Glück. Wenn Sie eine Reise an ganz abgelegene Orte nicht scheuen, können Sie auch Walrosse beobachten.</p>
      <?php } ?>
    </div>
      <br>
  </div>
</article>

<article id="cruises" data-lax-class=".75">
  <div class="content">
    <div data-lax-class=".90" class="copy lax-fadein">

      <?php if ($lang=='en'){ ?>
        <h2>Cruises</h2>
        <p>Many Cruise Companies travel along the Inside Passage. Most of them with big ships with 2000 or more pax capacities. I only work with small ship Cruise Companies, from 10 to not even 90 persons on board. It ensures you, that you can visit places that the big guys just can’t get to. Small fjords and the option to get on land and explore the shoreline on foot or with a kayak sounds more exciting to me, than ships with a casino, gym etc. The smaller Cruise Companies have a slower pace, so you will have more time to explore and enjoy nature.</p>
        <a class="btn" href="cruises.php"><strong>Learn More</strong></a>
      <?php } else { ?>
        <h2>Kreuzfahrten</h2>
        <p>Viele Kreuzfahrtunternehmen reisen entlang der Inside Passage. Diese Kreuzfahrtschiffe sind riesig und bieten Platz für mehr als 2000 Passagiere. Wir arbeiten nur mit kleinen Schiffunternehmen zusammen, wessen Schiffe maximal 90 Personen befördern können.</p>
        <p>Das erlaubt Ihnen, an Orte zu gelangen, an welche die grossen Schiffe gar nicht hinkommen. Der Besuch kleiner Fjorde und die Möglichkeit, an Land gehen zu können, zu Fuss oder mit einem Kajak, finden wir spannender als Boardcasinos oder Fitnessstudios. Die kleineren Schiffunternehmen schlagen ein langsameres Tempo an, was Ihnen mehr Zeit bietet, die Landschaft zu erkunden und die Natur zu geniessen.</p>
        <a class="btn" href="cruises.php?de"><strong>Erfahre mehr</strong></a>
      <?php } ?>
      <p>&nbsp;</p>
    </div>
      
    <div class="thumbs">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-cruises-0.jpg" width="300">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-cruises-1.jpg" width="300">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-cruises-2.jpg" width="300">
    </div>
    <br>
  </div>
</article>

<article id="fishing" class="article-right" data-lax-class=".75">
  <div class="content">
    <div data-lax-class=".90" class="copy lax-fadein">
      <h2>Fishing</h2>
      <p>Alaska offers world class fishing.<br>
      From ocean charters to wild salmon fishing within Alaska&rsquo;s rivers and streams - we can tailor your trip to your fishing desires.<br>
      <strong>Hook on!</strong></p>
      <a class="btn" href="fishing.php"><strong>Learn More</strong></a>
      <p>&nbsp;</p>
    </div>
    <div class="thumbs">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-fishing-0.jpg" width="300">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-fishing-1.jpg" width="300">
      <img data-lax-class=".80" class="lax-fadein" src="assets/images/home-fishing-2.jpg" width="300">
    </div>
    <br>
  </div>
</article>

<?php include('includes/foot.php'); ?>