<!DOCTYPE html>
<html lang="fa-IR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emofid.com Backend Service</title>
    <link rel="shortcut icon" href="<?php bloginfo("template_url"); ?>/assets/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?php bloginfo("template_url"); ?>/style.css">
</head>
<body>
    <div class="wrapper">
        <h1>Emofid.com Website Backend Service</h1>
        <span class="version">Version: <?php echo get_current_version(); ?></span>
        <ul>
            <li>
                <a href="<?php bloginfo("url"); ?>/wp-json/wp/v2/">API Endpoints</a>
            </li>
            <li>
                <a href="<?php bloginfo("url"); ?>/wp-admin/">Admin Panel</a>
            </li>
        </ul>
    </div>
</body>
</html>
