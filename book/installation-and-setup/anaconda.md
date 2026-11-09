````{margin}
```{admonition} User types
:class: tip
This page is useful for user type 5.
```
````

# Managing code-related software: Anaconda

Before you can start using python in your book, you need Anaconda. 'Anaconda's conda tool simplifies package and environment management across operating systems' (Anaconda.com), such as windows or MacOS. It makes getting started with python a lot easier because it already has a lot of useful python packages pre-installed. Unfortunately, each of these packages are themselves require a number of different packages to function properly. Do you like installing all of them? You shouldn't---but where do you get them come from? Many of those packages are packages required by only a few specific packages. These packages are called _dependencies_, and are necessary to make your Python packages function as expected. When you run install a specific package, `conda` (part of Anaconda) checks all of the dependent packages that are needed and makes sure they are also provided in the `environment` (collection of software with a specific version) that is being created. In reality, this is simply a folder on your computer with all of the `*.py` files stored in it. This _package management_ is what `conda` and `pip` are really doing when you use them to install a package. It also checks that it has a suitable _version_ of each dependency; this is why it sometime takes a long time to install a package Unfortunately, this means that as you add more packages to a particular environment, it gets more and more difficult to make sure everything works well together. Luckily, there is a practical solution: create new environments for specific projects to make sure the proper packages can function properly!

## Installing anaconda

You can download the installation files [here](https://www.anaconda.com/download).

When installing Anaconda, keep in mind the following:

- In general you should use the default file location (don’t put it on a separate disk drive, or in a disk partition that is different than your primary OS); however, an exception to this is if you have a space in your Windows username (e.g., `C:/Users/First Last/Program Files`). In this case, install directly ìn a folder on `C:/`

- install it only for your User on the computer (this is especially important on Windows; do not install for all users)

Once installed, we will check to make sure you are ready to use Python. Anaconda provides environments, like small virtual mini-computers inside your real computer, and inside each of those environments you have Python (as well as a lot of Python packages)!

1. Open a command line interface on your computer:
<br>Windows users: this will be the anaconda or conda prompt (search for it in the Start menu at the bottom left of your screen)
<br>Mac users: use the “terminal” application
2. Once the command line interface is open, type and execute (hit enter) the following: `python --version`
3. You should be running at least Python 3.11. If not, don’t worry, we will try to fix it below (but first make sure you have updated Anaconda as described above)
4. Which environment are you in? The name is between parenthesis at the bottom of your Anaconda Prompt: by default, this should be `(base)`.
5. How many other environments do you have? Execute `conda env list` to see a complete list.
6. Do you see the `*` in the list of environments? That is indicating your current active environment. Unless you have changed something, it should be `base`. And if you just installed Anaconda for the first time, this will be your only environment!

## Software version control: environments

A python virtual environment is, like the name might suggest, a reserved space within the computer that contains downloaded python packages. Each environment is like a clean slate and the packages and dependencies of one environment have no influence on other environments. In that sense, it makes sense to create a new (working) environment every time you start a new project. You'll redo the next steps on this page therefor many times in the future!

### Set-up environments

Now we will set up your first environment. The following steps will create an Anaconda environment and install Python 3.11. Even if you already have Python 3.11, it is still good practice to create a dedicated Anaconda environment for each of your major projects such as creating a TeachBook.

For simplicity we will call this environment `my_new_book_env`, but you can give it any name you like.

1. Open the commmand line interface (see above) or continue in the same session if it is still active
2. Execute: `conda create --name my_new_book_env pip` (this may take several minutes)
3. Activate: `conda activate my_new_book_env`
<br> Check: you should now see your new environment displayed somewhere in the prompt between parenthesis, like this: `(my_new_book_env)`

4. Additional 4th step: `pip install -r requirements.txt` (explanation in the following section)

Now everytime you want to work on your TeachBook, you need to activate the environment! (step 3) If you don't activate your environment, you will work in a 'wrong' working environment that might not contain all the packages you need.

As mentioned before, python packages can be downloaded in the environments you create. Both NumPy and pandas are popular Python packages used for data manipulation and analysis. For the creation of Jupyter Books, we will use the package `teachbooks` which is a wrapper around JupyterBooks. More information about this package [here](jupyter-book-setup.md).

### Import environments

Working on larger projects (with many cool interactive features) may require you to install a lot of python packages. It can be useful to specify the required packages in a text-based file (for example `environment.yml`) and then telling `conda` to create the environment based on the contents of the file! 

Moreover, if you are joining a team that is working on complex projects, it can be useful for you to create a new environment based on use such a text-based file in order to create an up-to-date environment that will give you a flying start. The team might also provide a `requirements.txt` file which specifies all the packages you need to download in order to work on the project. Now it should also become clear why its preferable to create new environment for each project/book that you work on because they might require you to use different packages!

Here's an example of what a `requirements.txt` file might look like.

```
# first list the packages you wish to download from PyPI
sympy
teachbooks
jupyterbook_patches

# now list the packages (and the respective url) you wish to download from the GitLab package registry
--extra-index-url https://gitlab.tudelft.nl/api/v4/projects/11239/packages/pypi/simple
sphinx-thebe ~= 0.9.9
```

This file needs to be manually updated by the team everytime a new package is required. It will be useful to routinely update the packages in your environment by downloading the required packages again. The packages used by sphinx-thebe or JupyterLite-Sphinx are not influenced by `requirements.txt`.

You can do this by navigating your command line interface to the folder with `requirements.txt`:
````{tab} Windows
1. Open the folder you wish to use as your working directory in the File Explorer
2. Right-click the folder and click `Git bash here`
3. Confirm you are in the right place by inspecting the path listed in your prompt (it should typically start with be `C:\ ...` and end wit `>`)
4. You can also inspect the contents of the directory by executing `dir`

````
````{tab} Mac

1. Find the folder you wish to use as your working directory
2. Right-click and select Get Info
3. Hold down the Alt (Option) key; the menu items will change\
4. Select Copy … As Pathname
5. You can now paste this path into the Terminal after the `cd` command
6. Confirm you are in the right place by executing the command `pwd`
7. You can also inspect the contents of the directory by executing ls (that’s a lower case “L”)
````

Now you can install the required packages with: `pip install -r requirements.txt`. The TeachBooks team works with these `requirements.txt` files which makes this an essential step in the set-up of your environment!

### Export environment

If you want to create a file listing the required packages yourself, you can do it by creating a file with the following file extension: the `*.yml` file (pronounced "yah-mul"). It is a text-readable file, that stands for "Yet another Markup Language." This is one of _many_ types of files that use a particular type of text formatting to give a computer specific instructions. It is very similar to the way Markdown formatting works.

The `environment.yml` file will look something like this:

```
name:  MUDE
dependencies:
  - python=3.11
  - numpy
  - scipy
  - matplotlib
  - statsmodels
  - pip
  - conda-forge::jupyterlab

```     
You should see that it uses a colon `:` to list the information, like name and dependencies. This will be processed by `conda` when creating the new environment.

If you want to create an environment based on an existing `*.yml` file, you can follow these steps:

1. You need to have the file locally on your computer (for example by cloning the git repositery that it is in)
2. Open Anaconda Prompt
3. Navigate to your working directory (where this file and `environment.yml` is located)
4. Finally, execute this command: `conda env create -f environment.yml`

This may take several minutes because you are installing many packages at once! Keep an eye on the terminal window as this process is completed. First `conda` is collecting information about the dependencies, then it will _solve_ the environment; in other words, figure out which version of each package it should use. Once it is ready, it will present the list of packages and proceed with the "installation" (really just downloading `*.py` files and putting them in a folder on your computer)
Note that the prompt may ask you to confirm that the installation should proceed, depending on your system settings. 

Once the environment is created, we can activate it, and also check that everything was installed properly. Try `conda env export -n my_new_book_env` to see what was installed by "default." The list is very long, even though we only asked for a few packages!

It is also interesting to try `conda env export --from-history` (make sure you activated it already), which shows the specific packages requested. 

### Deleting Environments

Although the environments do not interfere with each other, you might want to delete environment you don't use. Try running the following in a Terminal or Anaconda prompt, which will list the file locations of your environment. 

`conda info --envs`

If you have many projects, the amount of environments can take up a lot of space on your computer as one environment can get very large. It is a good idea to remove environments once you know they are no longer useful.

To remove an environment, in your Anaconda Prompt, run:

`conda remove --name my_new_book_env --all`

You will be asked to confirm the deletion, then it may take a while to remove all of the files. To verify that the environment was removed, in your terminal window or an Anaconda Prompt, run:

`conda info --envs`

The environments list that displays should not show the removed environment.

This information has been taken from the [Anaconda documentation](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#removing-an-environment).

Now you can delete any other useless environments you have lying around on your computer!
