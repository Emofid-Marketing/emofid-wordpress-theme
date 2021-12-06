# Emofid.com Website Wordpress Theme Source

This is the repository of emofid.com website wordpress theme.
This project belongs to Mofid Securities Company.

## Documentation topics

- [Emofid.com Website Wordpress Theme Source](#emofidcom-website-wordpress-theme-source)
  - [Documentation topics](#documentation-topics)
  - [How to run theme on wordpress?](#how-to-run-theme-on-wordpress)
  - [Development mode](#development-mode)
  - [GIT version control guidline](#git-version-control-guidline)


---

## How to run theme on wordpress?

1) Clone this repository in **`wp-content/themes`** folder in wordpress directory.
2) Open command line in cloned directory and run this command:

```
composer install
```
3) You also need to run this command to install node dependencies:

```
npm install
```

4) Open **wordpress Admin Panel** and active **Emofid Theme** as default theme.

---

## Development mode
To active development mode:

1) add this code to **wp-config.php** file:

```
define('WP_ENVIRONMENT_TYPE', 'development');
```

2) open command line in theme directory and run this command:

```
npm run watch
```

This command watches theme directory and build new assets based on changes.
In watch mode assets are not optimized. to optimize assets like js and css files you should use build command.

---

## GIT version control guidline
We define a new branch for every new page template.
They will be merged after code review.
Therefore, at the begining of the every page development you should:

1) Get latest updates of theme repository by pulling it.

```
git pull origin master
```

2) Create new branch based on **master/main** branch and name it like: `add_page_about`.
3) At the end of page development you should push it to git:

```
git add .

git commit -m "<Commit comment>"

git push origin <branch name>
```

4) Open github in browser and make a **merge/push** request to master branch.
5) Project Admin will review your code and merge it later.


