SETUP FOR WINDOWS
-----------------
-1. download the project: https://github.com/AlinPaulM/themill/archive/master.zip
-2. download and install git with the default settings: https://git-scm.com/download/win
-3. download and install symfony.exe with the default settings: https://symfony.com/download
-4. extract the project archive. open Git Bash and navigate to the extracted folder
-5. run "symfony.exe server:ca:install". A prompt will ask you if you want to accept the certificate, select Yes.
-6. run "symfony server:start" - this should display "[OK] Web server listening on https://127.0.0.1:8000" (ignore any warnings)
-7. the project requires you to login with the instagram credentials for the https://www.instagram.com/millchannel/ user i set to be a test user in the app. Before you do that, you have to log into the https://www.instagram.com/millchannel/, go to (Profile Icon) > Edit Profile > Apps and Websites, and under TESTER INVITES accept to be a test user for the app, so the app can access your data.
-8. go to https://127.0.0.1:8000, and log in with the https://www.instagram.com/millchannel/ credentials.