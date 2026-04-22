# Script to restore project to its original state
$assetsDir = "client/src/assets"

Write-Host "Restoring files to root directory..."

# Move images back to root
if (Test-Path "$assetsDir/images") {
    Get-ChildItem "$assetsDir/images" -File | ForEach-Object {
        Move-Item $_.FullName "." -Force
    }
}

# Move videos back to root
if (Test-Path "$assetsDir/videos") {
    Get-ChildItem "$assetsDir/videos" -File | ForEach-Object {
        Move-Item $_.FullName "." -Force
    }
}

# Move documents back to root
if (Test-Path "$assetsDir/docs") {
    Get-ChildItem "$assetsDir/docs" -File | ForEach-Object {
        Move-Item $_.FullName "." -Force
    }
}

# Restore posters folder name and move back to root
if (Test-Path "$assetsDir/posters/posters_2021") {
    $oldName = "NHẬT KÝ ĐỐI NGOẠI VIỆT NAM 2021 - ĐẦY ĐỦ 365 NGÀY (Poster (Dọc))"
    Move-Item "$assetsDir/posters/posters_2021" "./$oldName" -Force
}

# Cleanup
if (Test-Path $assetsDir) {
    Remove-Item $assetsDir -Recurse -Force
}

Write-Host "Restoration complete! Root directory is back to original state."
