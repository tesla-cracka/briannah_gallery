$root = "./public/assets"
$images = Get-ChildItem "$root/images" -File
$videos = Get-ChildItem "$root/videos" -File

$manifest = @()

foreach ($img in $images) {
    $manifest += @{
        name = $img.Name
        type = "image"
        src  = "/assets/images/$($img.Name)"
    }
}

foreach ($vid in $videos) {
    $manifest += @{
        name = $vid.Name
        type = "video"
        src  = "/assets/videos/$($vid.Name)"
    }
}

$manifest | ConvertTo-Json -Depth 5 | Out-File "$root/manifest.json" -Encoding utf8

Write-Host "Manifest built successfully!"
