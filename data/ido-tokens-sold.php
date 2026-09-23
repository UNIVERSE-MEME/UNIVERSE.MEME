<?php
header('Content-Type: text/plain');

$token = '0xaf3f58C4f9baAf2f10A5e39dA75b9F894F63087A';
$pool  = '0x4D3D53000C3524A07276664a1686b8B9AaF13022';

$initialAllocation = 2500000000;

// balanceOf(address)
$selector = '70a08231';
$paddedPool = str_pad(substr($pool, 2), 64, '0', STR_PAD_LEFT);
$data = '0x' . $selector . $paddedPool;

$payload = json_encode([
    'jsonrpc' => '2.0',
    'method'  => 'eth_call',
    'params'  => [
        [
            'to'   => $token,
            'data' => $data
        ],
        'latest'
    ],
    'id' => 1
]);

$ch = curl_init('YOUR_ETHEREUM_RPC_URL');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$response = json_decode(curl_exec($ch), true);
curl_close($ch);

$rawBalance = $response['result'];

// UNIVERSE has 18 decimals
$poolBalance = hexdec($rawBalance) / 1e18;

$distributed = $initialAllocation - $poolBalance;

echo number_format($distributed, 0, '.', '');
?>
