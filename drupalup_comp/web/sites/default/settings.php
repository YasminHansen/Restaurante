<?php
$settings['hash_salt'] = '_UzIAFwbXeKS48KtIXf7w3YbJIjCOPbsKy3pNfUB7hjOhvFWcEuTxF6bk4Px96hakCRQpWzwfg';
$config_directories['sync'] = 'sites/default/files/config_txJp1pMqpgbl4LCHAc6JbG8F88nguIBjamd1eH5-WHYj_buVovJjYctWY_7wxlkWatOzqKlEZw/sync';
$config_directories[CONFIG_SYNC_DIRECTORY] = '../config/sync';

ini_set('display_errors', 1);
error_reporting(E_ALL);



if (file_exists(__DIR__ . '/settings.local.php')) {
 require_once(__DIR__ . '/settings.local.php');
}


