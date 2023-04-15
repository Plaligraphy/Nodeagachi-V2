@echo off
echo Posting file...
git add *
set /P id=Enter Commit Comments: 
git commit -m %id% 
git push
echo Commit Completed! Exitting...