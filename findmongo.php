//php抓取mongo資料-無法呈現到網頁上
<?php
$m = new MongoClient();
$db = $m->test;
$collection = $db->animals;

$cursor = $collection->find();

foreach ($cursor as $document) {
    echo $document["animal_id"] . "\n";
}
?>
