setlocal EnableDelayedExpansion
SET COMMIT=%time:~0,8%-%COMPUTERNAME%-%USERNAME%
for /L %%i in (1,0,2) do (
git add .
git commit -am "%COMMIT%"
git push
timeout /T 1200 > nul
)