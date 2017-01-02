<?php

$username = $_GET['username'];

$arr = ['崔杰','cuijie'];

if (in_array($username,$arr)) {
	echo 0;
} else {
	echo 1;
};