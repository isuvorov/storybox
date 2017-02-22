echo "Start update your project!"
echo "=========================="
echo " "
mkdir -p ./.storybook
wget https://raw.githubusercontent.com/isuvorov/storybox/master/docs/example/addons.js -O ./.storybook/addons.js
wget https://raw.githubusercontent.com/isuvorov/storybox/master/docs/example/config.js -O ./.storybook/config.js
wget https://raw.githubusercontent.com/isuvorov/storybox/master/docs/example/glob.txt -O ./.storybook/glob.txt
wget https://raw.githubusercontent.com/isuvorov/storybox/master/docs/example/webpack.config.js -O ./.storybook/webpack.config.js
yarn add --dev storybox
echo " "
echo "================================="
echo "Your project successfuly updated!"
