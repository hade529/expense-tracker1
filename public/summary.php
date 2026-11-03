<?php
require_once __DIR__ . '/../includes/db.php';

$rows = $pdo->query(
    'SELECT c.name, COALESCE(SUM(e.amount), 0) AS total
     FROM categories c
     LEFT JOIN expenses e ON e.category_id = c.id
     GROUP BY c.id, c.name
     ORDER BY total DESC, c.name'
)->fetchAll();

$grandTotal = 0;
foreach ($rows as $r) {
    $grandTotal += $r['total'];
}

$pageTitle = 'Summary';
include __DIR__ . '/../includes/header.php';
?>
<h1 class="mb-4">Summary</h1>
<h2 class="h5 mb-3">Spending by category</h2>

<?php foreach ($rows as $r):
    $percent = $grandTotal > 0 ? $r['total'] / $grandTotal * 100 : 0;
?>
    <div class="mb-3">
        <div class="d-flex justify-content-between">
            <span><?= htmlspecialchars($r['name']) ?></span>
            <span><?= number_format($r['total'], 2) ?> (<?= round($percent) ?>%)</span>
        </div>
        <div class="progress" role="progressbar" aria-valuenow="<?= round($percent) ?>" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: <?= round($percent, 2) ?>%"></div>
        </div>
    </div>
<?php endforeach; ?>

<p class="fs-5 fw-bold text-end mt-4">Total: <?= number_format($grandTotal, 2) ?></p>
<?php include __DIR__ . '/../includes/footer.php'; ?>
