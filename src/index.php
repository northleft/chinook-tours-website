<?php

$title = 'Chinook Tours Alaska';
$body_id = 'home';
$body_class = '';
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
      <?php if ($lang=='en'){ ?>
        <h2><a href="index.php?de">
          <span>Sprechen Sie</span>
          <span>Deutsch</span>
          <strong>?</strong>
        </a></h2>
      <?php } else { ?>
        <h2><a href="index.php">
          <span>Choose</span>
          <span>English</span>
          <strong>?</strong>
        </a></h2>
      <?php } ?>
    </div>
  </div>
</header>

<article id="about">
  <div class="content">
    <div data-lax="y:-100" class="copy copy-fullwidth">

      <?php if ($lang=='en'){ ?>

        <h2 class="text-center">Why Chinook Tours LLC</h2>
        <p>My name is Felix Schneider and I founded &amp; own Chinook Tours since 1994. Anchorage Alaska is my home since May 1994 and before that I organized trips from Switzerland to America (North- Central &amp; South) from 1983 to 1993. My first trip to North America was in 1980 and my first visit to Alaska in 1986, so I know a lot of places first hand. I traveled by car, canoe, boat, train, plane and hiked, slept in fine lodges, on the deck of the ferry, B&B&rsquo;s, hotel&rsquo;s and also in tents, so I think I have a pretty good knowledge what&rsquo;s available were and how to get there.</p>
        <p>I&rsquo;m not interested in mass tourism and try to find places that still have a &lsquo;Last Frontier&rsquo; flair. Of course places like Denali or Kenai Fjords National Park attract a lot of visitors in the summer month, but even there, you can find places more secluded. I will try and find the adventure of your dreams and would be happy to plan &amp; book your trip for you.</p>
      <?php } else { ?>

        <h2 class="text-center">Warum Sie bei Chinook Toors LLC genau richtig&nbsp;sind</h2>
        <p>Ich heisse Felix Schneider und bin der Gr&uuml;nder und Besitzer von Chinook Tours. Anchorage in Alaska ist seit 1994 meine zweite Heimat, doch Reisen von der Schweiz nach Amerika (Nord-, Mittel- und S&uuml;damerika) organisiere ich bereits seit 1983. Alaska beeindruckt und fesselt mich seit meiner ersten Reise im Jahre 1986. Mit dem Auto, Kanu, Schiff, Flugzeug und zu Fuss erkundete ich unz&auml;hlige Pl&auml;tze dieser weltbekannten und sagenumworbenen Region und schlief dabei sowohl in Luxus-Lodges, in B&Bs, in Hotels wie auch auf dem Deck der F&auml;hren und im Zelt. Deshalb kenne ich viele Orte hier in Alaska wie meine Westentasche und ich weiss oft aus eigener Erfahrung, wie man diese aussergew&ouml;hnlichen Orte am besten erreichen kann.</p>
        <p>Ich interessiere mich nicht f&uuml;r Massentourismus und bin stets auf der Suche nach unber&uuml;hrten Orten und Landschaften, die sich abseits der grossen Touristenstr&ouml;me befinden. Auch in Nationalparks wie Danali oder Kenai Fjord lassen sich noch entlegene, unversehrte Flecken finden. Gerne helfe ich Ihnen, Ihren pers&ouml;nlichen Alaska-Reisetraum zu verwirklichen&rdquo;</p>
      <?php } ?>

      <div class="gallery">
        <figure>
          <a data-fancybox="wcta" href="assets/images/why-0.jpg">
            <img src="assets/images/why-0-thumb@2x.jpg" width="150">
          </a>
        </figure>
        <figure>
          <a data-fancybox="wcta" href="assets/images/why-1.jpg">
            <img src="assets/images/why-1-thumb@2x.jpg" width="150">
          </a>
        </figure>
        <figure>
          <a data-fancybox="wcta" href="assets/images/why-2.jpg">
            <img src="assets/images/why-2-thumb@2x.jpg" width="150">
          </a>
        </figure>
        <figure>
          <a data-fancybox="wcta" href="assets/images/why-3.jpg">
            <img src="assets/images/why-3-thumb@2x.jpg" width="150">
          </a>
        </figure>
        <figure>
          <a data-fancybox="wcta" href="assets/images/why-4.jpg">
            <img src="assets/images/why-4-thumb@2x.jpg" width="150">
          </a>
        </figure>
        <figure>
          <a data-fancybox="wcta" href="assets/images/why-5.jpg">
            <img src="assets/images/why-5-thumb@2x.jpg" width="150">
          </a>
        </figure>
        <figure>
          <a data-fancybox="wcta" href="assets/images/why-6.jpg">
            <img src="assets/images/why-6-thumb@2x.jpg" width="150">
          </a>
        </figure>
        <figure>
          <a data-fancybox="wcta" href="assets/images/why-7.jpg">
            <img src="assets/images/why-7-thumb@2x.jpg" width="150">
          </a>
        </figure>
      </div>

      <p>&nbsp;</p>
    </div>
  </div>
</article>

<article id="accommodations">
  <div class="content content-right">
    <?php if ($lang=='en'){ ?>
      <h2>Accommodations</h2>
    <?php } else { ?>
      <h2>Unterk&uuml;nfte</h2>
    <?php } ?>

    <div data-lax-class=".90" class="copy lax-fadein">
      <?php if ($lang=='en'){ ?>
        <p>Let us know your preference what you looking for, budget or nice and unique accommodations, B&B&rsquo;s were possible or lodge away from it all. In general, the more remote the more expensive, as it cost a lot to build, maintain, bring supplies out there and also the journey to get there will cost you more.</p>
        <a class="btn" href="accommodations.php"><strong>Learn More</strong></a>
      <?php } else { ?>
        <p>Erfahren Sie mehr:<br>
        Entsprechend Ihren Vorlieben suchen wir f&uuml;r Sie die passenden Unterk&uuml;nfte: Wollen Sie eine gute und g&uuml;nstige Bleibe oder eine aussergew&ouml;hnliche Unterkunft im h&ouml;heren Preissegment? Eine Bed &amp; Breakfast (B&B)-Option oder eine Lodge inmitten der Wildnis? Allgemein l&auml;sst sich sagen, dass eine Unterkunft mit zunehmender Distanz von der Zivilisation aufgrund der h&ouml;heren Bau- und Unterhaltskosten teurer wird. Hinzu kommen die h&ouml;heren Transportkosten, um an diese abgelegenen Orte zu kommen.</p>
        <a class="btn" href="accommodations.php?de"><strong>Erfahre mehr</strong></a>
        <p>Unterk&uuml;nfte in der Stadt – Je nach Reiseroute bietet sich eine Unterkunft in der Stadt (im Stadtzentrum) oder in Flughafenn&auml;he an.</p>
      <?php } ?>

      <p>&nbsp;</p>
    </div>
    <div class="thumbs">
      <div class="thumbs-col">
        <figure><a data-fancybox="home-acc" class="thumbs-34" href="assets/images/home-accommodations-0.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-accommodations-0.jpg" width="300"></a></figure>
        <figure><a data-fancybox="home-acc" class="thumbs-34" href="assets/images/home-accommodations-2.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-accommodations-2.jpg" width="300"></a></figure>
      </div>
      <div class="thumbs-col">
        <figure><a data-fancybox="home-acc" class="thumbs-34" href="assets/images/home-accommodations-1.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-accommodations-1.jpg" width="300"></a></figure>
      </div>
    </div>
    <br>
  </div>
</article>

<article id="transportation" data-lax-container>
  <div data-bg="0" data-lax="y:-150"></div>
  <div class="content">
    <div data-lax-class=".90" class="copy copy-fullwidth lax-fadein">

      <?php if ($lang=='en'){ ?>

        <h2>Wildlife viewing</h2>
        <p>Wildlife viewing &amp; photography is growing in popularity. We can recommend you great places and season to view the wild animals in the Northwest. Many Lodges and Cruises offer fantastic viewing opportunities, but also along the road there are places that offer good chances to see animals.</p>
        <p>Bird migration in the spring: Cordova &amp; Homer are just two places that birds will stop in May on the way to there northern nesting grounds.</p>
        <p>In November more than 3500 bald eagles gather in the Chilkat Valley near Haines, AK. Brown Bears &amp; Black Bears are easiest to photograph along the coast, while grazing, clamming and fishing from June till September. Polar Bears are seen along the North Slope around September / October. Of course there are much more like Moose, Caribou if you are lucky Wolf &amp; Lynx and if you don&rsquo;t mind travel quite remote even Walrus.</p>
        <a class="btn btn-light" href="wildlife.php"><strong>Learn More</strong></a>

      <?php } else { ?>

        <h2>Tierbeobachtung</h2>
        <p>Tierbeobachtung und Tierphotographie erfreuen sich zunehmender Beliebtheit. Wir k&ouml;nnen Ihnen besonders gute Tierbeobachtungsorte empfehlen, insbesondere im Nordwesten Alaskas. Viele abgelegenere Unterk&uuml;nfte (Lodges) und auch die Kreuzfahrten eignen sich besonders f&uuml;r die Tierbeobachtung. Aber auch entlang Alaskas` Strassen sind die Chancen, Tiere in freier Wildbahn anzutreffen, sehr gut.</p>
        <p>Wanderungen der Zugv&ouml;gel im Fr&uuml;hling: Cordova und Homer sind zwei ausgezeichnete Orte, um Zugv&ouml;gel auf ihrer Reise in den hohen Norden zu beobachten.</p>
        <p>Im November versammeln sich mehr als 3500 Weisskopfseeadler im Chilkat Tal in der N&auml;he von Haines, Alaska.</p>
        <p>Weidende und fischende Braun- und Schwarzb&auml;ren kann man am besten von Juni bis September entlang der K&uuml;ste beobachten. Im September und Oktober stehen die Chancen nicht schlecht, um an der Nordk&uuml;ste Alaskas Eisb&auml;ren beobachten zu k&ouml;nnen.</p>
        <p>Elche und Karibus sind keine Seltenheit, im Gegensatz dazu braucht es f&uuml;r die Beobachtung von W&ouml;lfen und Luchsen mehr Gl&uuml;ck. Wenn Sie eine Reise an ganz abgelegene Orte nicht scheuen, k&ouml;nnen Sie auch Walrosse beobachten.</p>
        <a class="btn btn-light" href="wildlife.php?de"><strong>Erfahre mehr</strong></a>

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
        <p>Many Cruise Companies travel along the Inside Passage. Most of them with big ships with 2000 or more pax capacities. I only work with small ship Cruise Companies, from 10 to not even 90 persons on board. It ensures you, that you can visit places that the big guys just can&rsquo;t get to. Small fjords and the option to get on land and explore the shoreline on foot or with a kayak sounds more exciting to me, than ships with a casino, gym etc. The smaller Cruise Companies have a slower pace, so you will have more time to explore and enjoy nature.</p>
        <a class="btn" href="cruises.php"><strong>Learn More</strong></a>

      <?php } else { ?>

        <h2>Kreuzfahrten</h2>
        <p>Viele Kreuzfahrtunternehmen reisen entlang der Inside Passage. Diese Kreuzfahrtschiffe sind riesig und bieten Platz f&uuml;r mehr als 2000 Passagiere. Wir arbeiten nur mit kleinen Schiffunternehmen zusammen, wessen Schiffe maximal 90 Personen bef&ouml;rdern k&ouml;nnen.</p>
        <p>Das erlaubt Ihnen, an Orte zu gelangen, an welche die grossen Schiffe gar nicht hinkommen. Der Besuch kleiner Fjorde und die M&ouml;glichkeit, an Land gehen zu k&ouml;nnen, zu Fuss oder mit einem Kajak, finden wir spannender als Boardcasinos oder Fitnessstudios. Die kleineren Schiffunternehmen schlagen ein langsameres Tempo an, was Ihnen mehr Zeit bietet, die Landschaft zu erkunden und die Natur zu geniessen.</p>
        <a class="btn" href="cruises.php?de"><strong>Erfahre mehr</strong></a>
        
      <?php } ?>
      <p>&nbsp;</p>
    </div>

    <div class="thumbs">
      <h2>&nbsp;</h2>
      <div class="thumbs-col">
        <figure><a data-fancybox="home-crs" class="thumbs-34" href="assets/images/home-cruises-0.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-cruises-0.jpg" width="300"></a></figure>
        <figure><a data-fancybox="home-crs" class="thumbs-34" href="assets/images/home-cruises-2.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-cruises-2.jpg" width="300"></a></figure>
      </div>
      <div class="thumbs-col">
        <figure><a data-fancybox="home-crs" class="thumbs-34" href="assets/images/home-cruises-1.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-cruises-1.jpg" width="300"></a></figure>
      </div>
    </div>
    <br>
  </div>
</article>

<article id="fishing" data-lax-class=".75">
  <div class="content">
    <h2>Fishing</h2>
    <div data-lax-class=".90" class="copy lax-fadein">
      <p>Alaska offers world class fishing.<br>
      From ocean charters to wild salmon fishing within Alaska&rsquo;s rivers and streams - we can tailor your trip to your fishing desires.<br>
      <strong>Hook on!</strong></p>
      <a class="btn" href="fishing.php"><strong>Learn More</strong></a>
      <p>&nbsp;</p>
    </div>

    <div class="thumbs">
      <div class="thumbs-col">
        <figure><a data-fancybox="home-fsh" class="thumbs-34" href="assets/images/home-fishing-0.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-fishing-0.jpg" width="300"></a></figure>
        <figure><a data-fancybox="home-fsh" class="thumbs-34" href="assets/images/home-fishing-2.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-fishing-2.jpg" width="300"></a></figure>
      </div>
      <div class="thumbs-col">
        <figure><a data-fancybox="home-fsh" class="thumbs-34" href="assets/images/home-fishing-1.jpg"><img data-lax-class=".80" class="lax-fadein" src="assets/images/home-fishing-1.jpg" width="300"></a></figure>
      </div>
    </div>
    <br>
    
  </div>
</article>

<?php include('includes/foot.php'); ?>