# create src and sass directory
mkdir src && mkdir src/sass

# copy to src directory
mv index.html images design src

# create main.scss file
touch src/sass/main.scss

# create directories in sass
cd src/sass && mkdir abstracts base pages components

# create files in abstracts directory
cd abstracts && touch _colors.scss _typography.scss

# create files in base directory
cd .. && cd base && touch _reset.scss _global.scss




