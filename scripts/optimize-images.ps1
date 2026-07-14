# PowerShell helper to optimize images using imagemin (requires Node + imagemin-cli)
# Usage: Open PowerShell, run `npm install -g imagemin-cli` or run `npm install` in repo, then execute this script.
$npx = Get-Command npx -ErrorAction SilentlyContinue
if(-not $npx){ Write-Host "npx not found. Please install Node.js and npm."; exit }
Write-Host "Running imagemin to optimize images into images/optimized..."
npx imagemin images/* --out-dir=images/optimized
Write-Host "Done. Check images/optimized for results."