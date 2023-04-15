@echo off
git add *
set /P id=Enter Commit Comments:
git commit -m %id% 
git push