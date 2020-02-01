    
    <footer>
      <div class="content">
        <?php if ($lang=='en'){ ?>
          <div id="felix">
            <img src="assets/images/footer-felix.jpg" alt="Felix Schneider" width="50" height="50">
            <p>Hello! My name is Felix Schneider and I love Alaska. I also love creating personalized adventures for others to get to know Alaska on their own terms.</p>
          </div>
          <p id="addy">Chinook Tours LLC.<br>
          P.O. Box 111853, Anchorage, Alaska 99511<br>
          7376 Clairborne Circle, Anchorage, Alaska 99502</p>
        <?php } else { ?>
          <div id="felix">
            <img src="assets/images/footer-felix.jpg" alt="Felix Schneider" width="50" height="50">
            <p>Hello! My name is Felix Schneider and I love Alaska. I also love creating personalized adventures for others to get to know Alaska on their own terms.</p>
          </div>
          <p id="addy">Chinook Tours LLC.<br>
          P.O. Box 111853, Anchorage, Alaska 99511<br>
          7376 Clairborne Circle, Anchorage, Alaska 99502</p>
        <?php } ?>
      </div>
    </footer>

  </div></main>

  <nav><div><div>
    <?php if ($lang=='en'){ ?>
      <a href="index.php"><img src="assets/images/nav-ct.svg" width="320" alt="Chinook Tours Alaska"></a>
      <ul>
        <li id="nav-home"><a href="index.php"><span>Home</span></a></li>
        <li id="nav-accommodations"><a href="accommodations.php"><span>Accommodations</span></a></li>
        <li id="nav-fishing"><a href="fishing.php"><span>Fishing</span></a></li>
        <li id="nav-cruises"><a href="cruises.php"><span>Alaska Cruises</span></a></li>
        <li id="nav-wildlife"><a href="wildlife.php"><span>Wildlife Cruises</span></a></li>
        <li id="nav-transportation"><a href="transportation.php"><span>Transportation</span></a></li>
        <li><a href="<?php echo basename($_SERVER['REQUEST_URI']).'?de'; ?>"><span>DE</span></a></li>
      </ul>
    <?php } else { 
      $file = basename($_SERVER['REQUEST_URI']);
      $file = substr($file, 0, strpos($file, '?'));
    ?>
      <a href="index.php?de"><img src="assets/images/nav-ct.svg" width="320" alt="Chinook Tours Alaska"></a>
      <ul>
        <li><a href="index.php?de"><span>Home</span></a></li>
        <li><a href="accommodations.php?de"><span>Accommodations</span></a></li>
        <li><a href="fishing.php?de"><span>Fishing</span></a></li>
        <li><a href="cruises.php?de"><span>Alaska Cruises</span></a></li>
        <li><a href="wildlife.php?de"><span>Wildlife Cruises</span></a></li>
        <li><a href="transportation.php?de"><span>Transportation</span></a></li>
        <li><a href="<?php echo $file; ?>"><span>EN</span></a></li>
      </ul>
    <?php } ?>
  </div></div></nav>
</body>
</html>
